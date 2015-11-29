var crypto = require('crypto');
module.exports = {
  generate : function(){
      return  crypto.randomBytes(5).toString();
  }
}
