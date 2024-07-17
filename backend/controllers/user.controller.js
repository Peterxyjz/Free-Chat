import User from "../models/user.model.js";

export const getUserForSideBarController = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserForSideBarController: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
