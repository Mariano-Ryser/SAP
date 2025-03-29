const fs = require("fs");
const path = require("path");

// 📌 Clase Trie optimizada para generar TODAS las palabras posibles
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  // 📌 Busca todas las palabras que se pueden formar con las letras dadas
  searchAllPossibleWords(letters, path = "", node = this.root, used = {}) {
    let results = new Set();
    if (node.isWord) results.add(path);

    for (let i = 0; i < letters.length; i++) {
      if (!used[i] && node.children[letters[i]]) {
        used[i] = true;
        results = new Set([
          ...results,
          ...this.searchAllPossibleWords(letters, path + letters[i], node.children[letters[i]], used),
        ]);
        used[i] = false;
      }
    }
    return results;
  }
}

// 📌 Cargar palabras desde palabras.json
const palabrasPath = path.join(__dirname, "../../palabras.json");

let wordDictionary = [];

try {
  if (fs.existsSync(palabrasPath)) {
    wordDictionary = JSON.parse(fs.readFileSync(palabrasPath, "utf-8"));
  } else {
    console.warn("⚠️ Archivo palabras.json no encontrado. Se usará una lista vacía.");
  }
} catch (error) {
  console.error("❌ Error al cargar palabras.json:", error.message);
}

const trie = new Trie();
wordDictionary.forEach(word => trie.insert(word));

// 📌 Controlador para buscar todas las palabras posibles con las letras dadas
const buscarPalabras = (req, res) => {
  const letras = req.query.letras;
  if (!letras) {
    return res.status(400).json({ error: "Debes proporcionar letras" });
  }

  const letrasArray = letras.toUpperCase().split("");
  const foundWords = Array.from(trie.searchAllPossibleWords(letrasArray));

  // 📌 Ordenar por longitud (más largas primero) y luego alfabéticamente
  foundWords.sort((a, b) => b.length - a.length || a.localeCompare(b));

  res.json({ palabras: foundWords });
};

module.exports = { buscarPalabras };