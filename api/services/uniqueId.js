var crypto = require('crypto');
module.exports = {
  generate : function(){
      return  crypto.randomBytes(5).toString('hex');
  },
  generateOTP : function(){
      return  crypto.randomBytes(3).toString('hex');
  }

}
