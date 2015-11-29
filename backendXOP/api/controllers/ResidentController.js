/**
 * ResidentController
 *
 * @description :: Server-side logic for managing residents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find : function(req , res){
		var resident_data = req.body;
		Resident
			.findOne({uid : resident_data.uid })
			.then(function(resident){
					if(!resident){
						throw new Error("404");
					}else{
						res.ok({status : 200 , data : resident , message : "resident found"})
					}
			})
			.catch(function(error){
				if(error === "404"){
					res.notFound({status : 404 , message : (" No one  with " + resident_data.uid + " Aadhaar Number") });
				}
			});
	}
};
