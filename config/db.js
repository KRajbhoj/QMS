var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tokenDB')
.then(()=>{
   useMongoClient: true;
  console.log("Connected to DB Success")
})
.catch((e)=>{
  console.log("Didint Conenccted to DB",e)
});
const db = mongoose.connection
