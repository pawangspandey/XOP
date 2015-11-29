var pars = require('xml2json');
// var xml  = '<?xml version="1.0" encoding="UTF-8"?> <PrintLetterBarcodeData uid="919177416996" name="Gouresh Ashok Ramrakhyani" gender="M" yob="1991" co="S/0: Ashok Ramrakhyani" house="barak 525, room no, 16/17" street="near aradhana depareament" loc="ulhasnagar- 2" vtc="Ulhasnagar" po="Ulhasnagar-2" dist="Thane" subdist="Ulhasnagar" state="Maharashtra" pc="421002"/>';
// var json = {"PrintLetterBarcodeData":{"uid":"919177416996","name":"Gouresh Ashok Ramrakhyani","gender":"M","yob":"1991","co":"S/0: Ashok Ramrakhyani","house":"barak 525, room no, 16/17","street":"near aradhana depareament","loc":"ulhasnagar- 2","vtc":"Ulhasnagar","po":"Ulhasnagar-2","dist":"Thane","subdist":"Ulhasnagar","state":"Maharashtra","pc":"421002"}};
module.exports  = {
  toJson : function(xml){
    return (pars.toJson(xml));
  },
  toXml : function(json){
  return (pars.toXml(json));
  }
}
