// Implementation of file upload with Multer
// in NodeJS and ExpressJS.

const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

//Creating disk storage.
//Disk Storage Engine gives full control for
//storing files to the disk.

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'<specify_destination_here>');
  },
  filename: function (req, file, cb) {
    cb(null , file.originalname);
}
})

//Adding multer.
//Here, dest is the path where the file will be stored.
const upload = multer({storage:storage});


//Creating an endpoint for uploading the file.
app.post('/single', upload.single('profile'),(req,res)=>{
//upload.single is used for uploading single file.
//Note: key name or the field name should be same as the one provided in upload.single
  try{
    res.send(req.file);
  }catch(err){
    res.send(400);
  }
});


//Bulk uploading of files.
app.post('/bulk', upload.array('profiles', 4) , (req, res) =>{
  try {
      res.send(req.files);
  } catch(error) {
        console.log(error);
         res.send(400);
  }
});


app.get('/', (req, res) => {
    res.send('hello people');
});
app.listen(port, () => {
    console.log('listening on port',port);
});
