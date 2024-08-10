var family = require("../model/family");

exports.AddFamily = async (req, res) => {
  try {
    const { name, age, contact, relation } = req.body;
    if ((name = "")) {
      res.json({
        message: "name is required",
      });
    } else if ((contact = "")) {
      res.json({
        message: " mobile number is required",
      });
    } else if ((age = "")) {
      res.json({
        message: " age is required",
      });
    } else if ((relation = "")) {
      res.json({
        message: " relation is required",
      });
    } else {
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
