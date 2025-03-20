const authAdmin = (req, res, next) => {
    const adminKey = req.headers['admin-access-key']; // Obtener la clave de los headers
  
    // Verificar si la clave coincide con la del entorno
    if (adminKey && adminKey === process.env.ADMIN_ACCESS_KEY) {
      next(); // Clave correcta, continuar
    } else {
      res.status(403).json({ error: 'Acceso no autorizado. Clave de administrador incorrecta o faltante.' }); // Clave incorrecta, denegar acceso
    }
  };
  
  module.exports = authAdmin;