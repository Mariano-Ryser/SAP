import jwt from 'jsonwebtoken';

export const verifyKey = (req, res) => {
  const { key } = req.body;
  
  if (key === process.env.ADMIN_ACCESS_KEY) {
    const token = jwt.sign(
      { role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    return res.status(200).json({ 
      success: true, 
      message: 'Clave correcta', 
      token 
    });
  }
  
  return res.status(403).json({ 
    success: false, 
    message: 'Clave incorrecta' 
  });
};

export const getDashboard = (req, res) => {
  res.status(200).json({ 
    message: 'Bienvenido a la administración' 
  });
};

