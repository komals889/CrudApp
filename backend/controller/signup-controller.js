
const signup = require("../model/signup")
const bcrypt = require("bcryptjs")
exports.signupUser = async (req, res) => {
    // let {password} = req.body
    // const salt = await bcrypt.genSalt(10)
    // password = await bcrypt.hash(password,salt)
    try {
        const result = await signup.create(
            {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                isAdmin:req.body.isAdmin,
                phoneNo:req.body.phoneNo,
                password:req.body.password,
                conPassword:req.body.conPassword
            }
        )
        res.json({
            message: "add Data",
            success: true,
            data: result,
        }) 
    } catch (error) {    
        res.json({
            message: "error"+error,
        })
    }
}