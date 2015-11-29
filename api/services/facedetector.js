var cv  = require("opencv");


module.exports = {
  match : function(){
    cv.readImage("assets/images/qr5.jpg", function(err, im){
  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    for (var i=0;i<faces.length; i++){
      var x = faces[i]
      im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
    }
    im.save('out.jpg');
  });
})
  }
}