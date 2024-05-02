require('dotenv').config
const userModel = require('../models/userModel')
const bcryptUtils = require('../utils/bcryptUtils')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.LINK_PROVIDER_MAIL,
        pass: process.env.LINK_PROVIDER_PASS
    }
})

//signup
const registerController = async (req, res) => {
    try {
        const formData = req.body;
        const { firstName, lastName, emailAddress, password, confirmPassword, mobileNumber, make, model, age, mileage, vin, previousThreadId } = formData;
        if (!firstName || !lastName || !emailAddress || !password || !mobileNumber || !make, !model, !age, !mileage) return res.send({ success: false, message: 'Please fill the required fields.' })
        if (password !== confirmPassword) return res.send({ success: false, message: 'Both Passwords Are Different' })
        const existingUser = await userModel.findOne({ $or: [{ emailAddress }, { mobileNumber }] });
        if (existingUser) return res.status(200).send({ success: false, message: 'The provided email address or mobile number is already in use' })
        const hashedPassword = await bcryptUtils.hashPassword(password)
        const user = await new userModel({ firstName, lastName, emailAddress, mobileNumber, make, model, age, mileage, vin, previousThreadId, password: hashedPassword }).save()
        return res.status(201).send({
            success: true,
            message: 'User created successfully',
            user
        })
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error Occured While Registration',
            error
        })
    }
}

//login
const loginController = async (req, res) => {
    try {
        const formData = req.body
        const { emailAddress, password } = formData
        if (!emailAddress || !password) return res.status(200).send({ success: false, message: 'Invalid Email or Password' })
        const user = await userModel.findOne({ emailAddress })
        if (!user) return res.status(200).send({ success: false, message: 'This Account Doesnot Exists' })
        const passMatched = await bcryptUtils.comparePassword(password, user.password)
        if (!passMatched) return res.status(200).send({ success: false, message: 'Incorrect Username or Password!' })
        //token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return res.status(200).send({ success: true, message: 'Login Successfull', user: { name: user.firstName, email: user.emailAddress, phone: user.mobileNumber, make: user.make, model: user.model, age: user.age, mileage: user.mileage, vin: user.vin, previousThreadID: user.previousThreadId }, token })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'An Error Occured While Signing In',
            error
        })
    }
}

//generating reset password link
const forgetPasswordLink = async (req, res) => {
    try {
        const formData = req.body;
        const { emailAddress } = formData
        console.log(emailAddress);
        if (!emailAddress) return res.status(200).send({ success: false, message: 'Invalid Email Address' })
        const user = await userModel.findOne({ emailAddress })
        if (!user) return res.status(200).send({ success: false, message: 'User with provided email not found' })
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7m' })
        const link = `http://localhost:5173/reset-password/${user._id}/${token}`
        const mailOptions = {
            from: process.env.LINK_PROVIDER_MAIL,
            to: emailAddress,
            subject: 'Reset Your Password',
            html: `
            <p>You've requested a password reset for your account. Please use the following link to proceed:</p>
            <p style="margin-bottom: 20px; font-size: 15px">${link}</p>
            <p>If you didn't initiate this request, please ignore this email.</p>
            <p>Best regards,<br>M.Saif</p>
          `
        }
        transporter.sendMail(mailOptions, (err, result) => {
            if (err) return res.json(err)
            return res.json({ success: true, message: 'Check your inbox for link' })
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: 'An Error Occured' })
        error
    }
}

const resetPassword = (req, res) => {
    try {
        const { id, token } = req.params
        const formData = req.body
        const { password, confirmPassword } = formData
        if (!password || !confirmPassword) return res.status(200).send({ success: false, message: 'All fields are required' })
        if(password !== confirmPassword) return res.status(200).send({ success: false, message: 'Both passwords are different' })
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(200).send({ success: false, message: 'Unauthorized' })
            const userCheck = await userModel.findOne({ _id: id })
            if (!userCheck) return res.status(200).send({ success: false, message: 'Invalid email address' })
            const newHashedPassword = await bcryptUtils.hashPassword(password);
            await userModel.findByIdAndUpdate(id, { password: newHashedPassword })
            res.status(200).send({ success: true, message: 'Password updated Successfully' })
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: 'An Error Occured' })
    }
}

module.exports = { registerController, loginController, forgetPasswordLink, resetPassword }