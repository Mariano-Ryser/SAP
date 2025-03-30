// const jwt = require('jsonwebtoken');

// const verifyKey = (req, res) => {
//   const { key } = req.body;
//   // Verificar si la clave es correcta
//   if (key === process.env.ADMIN_ACCESS_KEY) {
//     // Generar un token JWT
//     const token = jwt.sign(
//       { role: 'admin' }, // Datos que quieres incluir en el token
//       process.env.JWT_SECRET, // Clave secreta para firmar el token
//       { expiresIn: '1h' } // Tiempo de expiración del token
//     );
//     res.status(200).json({ success: true, message: 'Clave correcta', token });
//   } else {
//     res.status(403).json({ success: false, message: 'Clave incorrecta' });
//   }
// };


const jwt = require('jsonwebtoken');

const verifyKey = (req, res) => {
  const { key } = req.body;

  if (key === process.env.ADMIN_ACCESS_KEY) {
    const token = jwt.sign(
      { role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ Enviar el token en una cookie segura
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Solo seguro en producción
      sameSite: 'Strict',
      maxAge: 60 * 60 * 1000 // 1 hora
    }); 

    return res.status(200).json({ success: true, message: 'Clave correcta' });
  } else {
    return res.status(403).json({ success: false, message: 'Clave incorrecta' });
  }
};

const checkSession = (req, res) => {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(200).json({ authenticated: false }); //siempre pasa por aqui, para que mande a logear
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ authenticated: true, user: decoded });
  } catch (error) {
    return res.status(200).json({ authenticated: false });
  }
};

const logout = (req, res) => {
              //BORRA LA QOOKIE!  //Proteccion contra ataques Cross-Site
  res.cookie('adminToken', '', { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 0 });
  return res.status(200).json({ message: 'Sesión cerrada' });
};


const getDashboard = (req, res) => {
  res.status(200).json({ message: 'Bienvenido a la administración' });
}
module.exports = {
  verifyKey,
  getDashboard,
  checkSession,
  logout
};