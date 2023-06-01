import User from "../models/user.model.js";

// Create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "User created successfully",
        data: savedUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "User Failed to be Created" });
  }
};

// Update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true});
        res
      .status(200)
      .json({
        success: true,
        message: "User updated successfully",
        data: updateUser,
      });
    } catch (err) {
        res
      .status(500)
      .json({
        success: false,
        message: "User update failed",
      });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
};

// getSingle User
export const getSingleUser = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
};


// get All User
export const getUsers = async (req, res) => {
    try {
        
    } catch (err) {
        
    }
};


