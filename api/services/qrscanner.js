var options = {
    try_harder: false,
  multi: false
};

var qrdecoder = require('node-zxing')(options);

module.exports = {
  scan : function(path){
    return new Promise(function(resolve , reject){
      qrdecoder.decode(path,
      function(err, out) {
        if(err){
          reject(err);
        }else if(!out){
          reject(new Error("Invalid QR Code"))
        }else{
         var json =   parser.toJson(out)
          resolve(JSON.parse(json));
        }
      }
    );
    })

    }
}
