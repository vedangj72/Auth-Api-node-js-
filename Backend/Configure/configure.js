// mongobdurl 
require('dotenv').config()
const mongodbpass = String(process.env.MONGODBPASSWORD);

const mongourl = `mongodb+srv://Nodejsproject:${mongodbpass}@nodejscluster.qpnatkm.mongodb.net/`

module.exports = mongourl;