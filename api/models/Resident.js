/**
* Resident.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uid : {
      type:"string",
      size : 12
    },
    name : {
      type : "string",
    },
    yob : {
      type : "string",
    },
    gender : {
      type : "string",
      size : 1,
    },
    house : {
      type : "string",
    },
    street: {
      type : "string",
    },
    loc : {
      type : "string",
    },
    vtc : {
      type : "string",
    },
    co: {
      type:"string"
    },
    po :{
      type : "string",
    },
    dist: {
      type : "string",
    },
    subdist: {
      type : "string",
    },
    state:{
      type : "string",
    },
    pc : {
      type : "string",
    },
    email : {
      type : 'email',
    },
    OTP : {
      type : 'string',
    },
    otpstatus : {
      type : 'boolean',
    },
    digi_sign : {
      type : 'text',
    }
  }
};
