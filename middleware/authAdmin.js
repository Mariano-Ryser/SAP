



const jwt = require('jsonwebtoken');

const authAdmin = (req, res, next) => {
  if (!req.cookies || !req.cookies.adminToken) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
  }

  const token = req.cookies.adminToken; // ✅ Obtener el token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // ✅ Guardar los datos decodificados en `req.admin`
    next(); // ✅ Continuar con la siguiente función en la ruta protegida
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token expirado. Inicia sesión de nuevo.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Token inválido.' });
    } else {
      return res.status(403).json({ message: 'Error de autenticación.' });
    }
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