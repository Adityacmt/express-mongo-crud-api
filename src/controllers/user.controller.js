import User from "../models/User.model.js";

/* CREATE USER */
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/* GET ALL USERS */
export const getUsers = async (req, res) => {
  try {
    const {role, active}= req.query;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1)*limit;

    const filter = {};
    if(role) filter.role= role;
    if(active) filter.active= active === "true";

    const users = await User.find(filter).skip(skip).limit(limit);

    const total = await User.countDocuments(filter);

    res.status(200).json({
      success: true,
      page,
      total,
      pages: Math.ceil(total / limit),
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/* GET USER BY ID */
export const getUser = async (req, res) =>{
  try {
    const user = await User.findById(req.params.id);

    if(!user){
      return res.status(400).json({
        success: false,
        message: "User Not Found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: "Invalid user ID"
    });
  }
};

/* UPDATE USER */
export const updateUser = async (req, res) =>{
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true}
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/* DELETE USER */
export const deleteUser = async (req, res) =>{
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid user ID"
    });
  }
};