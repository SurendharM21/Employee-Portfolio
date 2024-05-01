const express=require('express')
const multer = require('multer');
const path = require('path');
const router=express.Router();
const resumeController=require('../Controller/resumeController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage }); 

router.post("/", upload.single('image'),resumeController.createResume)
router.get("/:id", resumeController.getSingleResume);
module.exports=router;


/*

const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { createResume } = require('../Controller/resumeController');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

router.post("/", upload.single('image'), createResume);
module.exports = router;
*/