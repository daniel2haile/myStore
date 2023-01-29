const AuthModel = require('../models/authModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res, next )=> {

    try{
     console.log('req.body.firstname', req.body.firstname);
     console.log("Our data for register -> ", req.body);
    const hashPassword = bcrypt.hashSync(req.body.password, 6);

     const payload = {
       firstname: req.body.firstname,
       middlename: req.body.middlename,
       lastname: req.body.lastname,
       phone: req.body.phone,
       email: req.body.email,
       password: hashPassword,
       current_city: req.body.current_city,
     };

     const user = new AuthModel(payload);

     const checkEmail = await AuthModel.findOne({ email: req.body.email });

     if(checkEmail){
        res.json({ status: 'Error', message: 'Email is already exists...'})
     }else if(req.body.password.length < 4){
       res.json({ 
        status : 'Error',
        message: 'Password is too short, use atleast four characters'
       })
     }else{

      //Save details
      await user.save();
        res.json({ status: ' succcess ', data: user })
     }

    }catch(error){
     console.log('Error', error.message)
     res.json({ status: ' error ', message : error.message})
    }
}



exports.login = async (req, res) => {
   
}