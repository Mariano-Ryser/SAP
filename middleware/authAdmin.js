




const jwt = require('jsonwebtoken');

const authAdmin = (req, res, next) => {
  const token = req.cookies?.adminToken; // ✅ Leer el token desde las cookies

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ✅ Guardar datos decodificados en `req.user`
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado.' });
  }
};

module.exports = authAdmin;





























// // middleware/authAdmin.js
// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   // Obtener token del header
//   const token = req.header('x-auth-token') || 
//   req.query.token || 
//   req.body.token;
  
//   if (!token) {
//     return res.status(401).json({ 
//       ok: false,
//       message: 'Token de autenticación requerido' 
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     if (decoded.role !== 'admin') {
//       return res.status(403).json({ 
//         ok: false,
//         message: 'Se requieren privilegios de administrador' 
//       });
//     }

//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ 
//       ok: false,
//       message: 'Token inválido o expirado' 
//     });
//   }
// };