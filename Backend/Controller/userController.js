// for login users
const User = require('../Model/mongoModel');
const bcrypt = require('bcrypt');
const createToken = require('../Controller/createTokens');

const loginUsers = async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter email and password" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Incorrect email " });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const loginToken = createToken(user._id);
        res.status(200).json({ message: "Login Successfully", success: true });
    } catch (error) {

    }
}
const signinUsers = async(req, res) => {
    try {
        const { name, email, password, mobileno } = req.body || {};
        const existed = await User.findOne({ email });

        if (existed) {
            return res.status(409).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)
        const user = await User.create({ name, email, password: hash, mobileno });
        const tokenSignup = createToken(user._id);
        res.status(201).json({ message: "User created successfully", user });
        console.log("User created successfully");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};



//dummy code to see output change
const getdata = async(req, res) => {
    res.send("get request for data of chamu sing");
}

module.exports = {
    loginUsers,
    signinUsers,
    getdata
}