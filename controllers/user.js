const User = require('../models/user')


const createUser = (req, res) => {
        const newUser = new User(req.body)
         newUser
             .save()
             .then( (user) => {
             res.status(201).json({ok: true, user})
             console.log(user)
              })
             .catch((err) => console.log(err))
     }

     module.exports = {
        createUser
     }