import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
  // Obtener token de múltiples fuentes
  const token = req.header('x-auth-token') || 
                req.query.token || 
                req.body.token;
  
  // Validar existencia del token
  if (!token) {
    return res.status(401).json({ 
      ok: false,
      message: 'Token de autenticación requerido',
      code: 'MISSING_AUTH_TOKEN'
    });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Verificar rol de administrador
    if (decoded.role !== 'admin') {
      return res.status(403).json({ 
        ok: false,
        message: 'Se requieren privilegios de administrador',
        code: 'INSUFFICIENT_PRIVILEGES'
      });
    }

    // Adjuntar usuario decodificado a la solicitud
    req.user = decoded;
    next();
  } catch (err) {
    // Manejar errores de token
    const message = err.name === 'TokenExpiredError' 
      ? 'Token expirado' 
      : 'Token inválido';
    
    res.status(401).json({ 
      ok: false,
      message,
      code: 'INVALID_TOKEN'
    });
  }
};

export default authAdmin;