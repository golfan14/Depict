const db = require("../models");

// Defining methods for the booksController
module.exports = {
  addPhoto: function(req, res) {
    // if (!req.files) {
    //   return res.status(400).send('No files were uploaded.');
    // }
  
  
    // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file (this must match the HTML name attribute on the input element)
    // var sampleFile = req.files.sampleFile;
    
    // var newFileName = Date.now() + req.files.sampleFile.name; // creating unique file name based on current time and file name of file uploaded, that way if two people upload the same file name it won't overwrite the existing file
    
    // // Use the mv() method to place the file somewhere on your server (in this case we are placing it to the `uploads` folder with the name that we just created above, newFileName)
    // sampleFile.mv('uploads/' + newFileName, function(err) {
    //   // If there was an error send that back as the response
    //   if (err) {
    //     return res.status(500).send(err);
    //   }
  
    //   // Upload to S3
    //   var params = {
    //     // The file on our server that we want to upload to S3
    //     localFile: 'uploads/' + newFileName,
        
        
    //     s3Params: {
    //       Bucket: keys.s3bucket + req.params.id,
    //       Key: newFileName, // File path of location on S3
    //     },
    //   };
  
    //   const newPhoto = {
    //     url : "https://s3.us-east-2.amazonaws.com/depict-travel-photos/" + newFileName,
    //     tripId : req.params.id
    //   }

    // const newPhoto = {
    //   tripid: req.params.id,
    //   imageurl: req.body.imageurl,
    //   caption: req.body.caption
    // };

    const newPhoto = req.body;
      //post to mongo photos collection
      db.Photo.create(newPhoto)
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  
    //   console.log("About to upload");
    //   var uploader = client.uploadFile(params);
    //   // On S3 error
    //   uploader.on('error', function(err) {
    //     // On error print the error to the console and send the error back as the response
    //     console.error("unable to upload:", err);
    //     res.status(500).send(err);
    //   });
    //   uploader.on('progress', function fnProgress() {
    //     console.log('progress', uploader.progressMd5Amount,
    //           uploader.progressAmount, uploader.progressTotal);
    //   });
    //   // On S3 success
    //   uploader.on('end', function() {
    //     // Print done uploading on success
    //     console.log("done uploading");
    //     // Send back a success message as the response
    //     res.send('File uploaded!');
    //     //Removing file from server after uploaded to S3
    //     fs.unlink('uploads/' + newFileName, function () {});
    //   });
    // });
  },

  findTrip: function(req, res) {
    db.Photo.find({tripId : req.params.id})
    .then(data => res.json(data))
    .catch(err => console.log(err));
  }
}