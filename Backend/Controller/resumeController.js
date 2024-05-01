const resumeModel = require('../Models/resumeModel');
const mongoose=require('mongoose')
exports.createResume = async (req, res) => {
    try {
      const { name, email, role,bio,resp,int,tag,exp,phone,skills } = req.body;
      let imagePath;
      if(req.file)
      {
        imagePath=req.file.path;
      }
      else
      {
        imagePath=' ';
      }
      const formData = new resumeModel({ name, email, role,bio, imagePath,resp,int,tag,exp,phone,skills });
      await formData.save();
      res.json({ success: true, message: 'Form submitted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };

exports.getSingleResume = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Resume Not found" });
    }
    try {
      const singleResume = await resumeModel.findById(id);
      res.status(200).json(singleResume);
    } catch (e) {
      res.status(404).json({error :e.message});
    }
  };

exports.getImage=async(req,res)=>{
  const imagePath = path.join(__dirname, 'path_to_your_project_folder', 'uploads', req.params.imageName);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send(req.params.imageName);
    }
};
  /*

  const resumeModel = require('../Models/resumeModel');

exports.createResume = async (req, res) => {
    try {
        const { name, email, role, bio } = req.body;
        const imagePath = req.file.path;
        const formData = new resumeModel({ name, email, role, bio, imagePath });
        await formData.save();
        res.json({ success: true, message: 'Form submitted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
  */