const jwt = require('jsonwebtoken');

const verifyKey = (req, res) => {
  const { key } = req.body;
  // Verificar si la clave es correcta
  if (key === process.env.ADMIN_ACCESS_KEY) {
    // Generar un token JWT
    const token = jwt.sign(
      { role: 'admin' }, // Datos que quieres incluir en el token
      process.env.JWT_SECRET, // Clave secreta para firmar el token
      { expiresIn: '1h' } // Tiempo de expiración del token
    );
    res.status(200).json({ success: true, message: 'Clave correcta', token });
  } else {
    res.status(403).json({ success: false, message: 'Clave incorrecta' });
  }
};

const getDashboard = (req, res) => {
  res.status(200).json({ message: 'Bienvenido a la administración' });
}

module.exports = {
  verifyKey,
  getDashboard
};