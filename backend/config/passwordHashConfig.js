let bcrypt = require("bcryptjs");

async function convertPasswordInHash(password){
let salt = await bcrypt.genSalt();      // by default round 10 
let hashPassword  = await bcrypt.hash(password,salt);   // it will convert password in hash
return hashPassword;
}
async function comparePassword(password,hashPassword){
    let myHashConvertPassword = await bcrypt.compare(password,hashPassword);
    console.log(myHashConvertPassword);
    return myHashConvertPassword;
}

module.exports = {convertPasswordInHash,comparePassword}