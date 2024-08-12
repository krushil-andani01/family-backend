var family = require("../model/family");

exports.AddFamily = async (req, res) => {
  try {
    const { name, age, contact, relation } = req.body;
    if (!name || !age || !contact || !relation) {
      res.json({
        message: "All value is required",
      });
    }
    else {
      const familyData = await family.create(req.body);
      res.json({
        message: "User created successfully",
        data: familyData,
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
};


exports.getFamily = async (req, res) => {
  try {
    var getLstfamily = await family.find();
    res.json({
      message: "user get successful",
      data: getLstfamily,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.delFamily = async (req,res) => {
  try {
    
    const delFamily = await family.findByIdAndDelete(req.params.id);

    console.log(delFamily);
    

  } catch (error) {
    res.json({
      message: error
    });
  }
}
