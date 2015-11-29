var sails = require('sails');
var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  service: 'gmail',
  auth : {
    user : 'barcodeclays@gmail.com',
    pass : 'qwertyuiop@123456789'
  }
});

 

module.exports = {
  sendMail : function(mailOptions,callback){
    transport.sendMail(mailOptions,function(err , data){
      if(err){ callback(err); }
      else{
        callback(null,data);
      }
    });
  },
}
