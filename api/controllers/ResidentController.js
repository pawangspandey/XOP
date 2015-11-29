/**
 * ResidentController
 *
 * @description :: Server-side logic for managing residents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
module.exports = {
	findOrCreate : function(req , res){

		 req.file('qr').upload({
		  dirname: './assets/images'
		},function (err, uploadedFiles) {
		  if (err) return res.serverError(err);
			if(uploadedFiles.length === 0){
				return res.badRequest({message : "Please send QR code image"});
			}
			var path = "./assets/images/abc.jpg";

			uploader(uploadedFiles[0].fd,path).then(function(){
				qrscanner
						.scan(path)
								.then(function(qrdata){
									var data = qrdata.PrintLetterBarcodeData;
									console.log(qrdata);
									Resident.findOrCreate(data).then(function(resident){
										res.ok({status : '3', message:"resident found" , data : resident});
									});
								}, function(error){
									res.badRequest({ status : "1" ,  message:"Improper QR code image" , attribute : "qr"});
								})
			})
				.catch(function(error){
									res.serverError({message : error});
							});

		});
	},

 // img : function(req , res){
 //
 // req.file('avatar').upload({
 //   dirname: './assets/images'
 // },function (err, uploadedFiles) {
 //   if (err) return res.serverError(err);
 // 	if(uploadedFiles.length === 0){
 // 		return res.badRequest({message : "no file found to upload"});
 // 	}
 // 	fs.createReadStream(uploadedFiles[0].fd).pipe(fs.createWriteStream('./assets/js/abc.jpg'));
 //   return res.json({
 //     message: uploadedFiles
 //   });
 // });
 // },

find : function(req,res){
	var uid = req.param('uid');
	var query;
	if(uid){
		query = Resident.findOne({uid:uid});
	}
	else{
		query = Resident.find();
	}

	query.then(function(data){
		if(!data || data.length === 0){
			res.ok({status:'2' , message : "Requested Resident Not Found"});
		}else{
			res.ok({status:'3' , data : data , message : "Resident Found"})
		}
	}).catch(function(error){
		res.serverError({message:error});
	})

},

update : function(req,res){
	var data = req.body;
	var uid = data.uid;
	delete data.uid;
	var hasEmailPro = false;
	if(data.hasOwnProperty('email')){
		hasEmailPro = true;
	}
	Resident
		.update({uid:uid},data)
			.then(function(resident){

						res.ok({status : "4" , message : "update suuceefully" , data : data})
					
			})
				.catch(function(error){
					res.serverError(error);
				});


}


 };




 var uploader = function(fd , path){
	  return new Promise(function(resolve , reject){
			fs.createReadStream(fd).pipe(fs.createWriteStream(path));
			resolve();
		})

 }
