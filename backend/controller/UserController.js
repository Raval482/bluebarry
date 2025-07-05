const { secrateKey } = require("../key/secrate")
const UserModal = require("../model/UserModal")
const jwt = require("jsonwebtoken")



const createToken = async (id) => {
        const token = await jwt.sign({ id: id }, secrateKey.key)
        return token
}


const Registration = async (req, res) => {
        try {
                const { name, address, gender, hobby, email, password } = req.body
                const ExistUser = await UserModal.findOne({ email: email })
                if (ExistUser) {
                        res.status(409).json({ success: false, message: "User already registered with this email." })
                } else {
                        const createUser = new UserModal({
                                name: name,
                                address: address,
                                gender: gender,
                                hobby: hobby,
                                email: email,
                                password: password
                        })
                        const saveUser = await createUser.save()
                        // global.io.emit("doi",saveUser)
                        return res.status(200).json({ success: true, message: "User Registered SuccessFully", saveUser })

                }
        } catch (error) {
                return res.status(500).json({ success: false, message: error.message })
        }
}




const showAllUser = async (req, res) => {
        try {
                const user = req.user 
                const allUser = await UserModal.find({_id :{$ne : user._id}})
                return res.status(200).json({ success: true, allUser: allUser })

        } catch (error) {

                return res.status(500).json({ success: false, message: error.message })
        }
}


const showPerticullerUser = async (req, res) => {
        try {
                const id = req.params.id
             
                const User = await UserModal.find({_id : id})
                return res.status(200).json({ success: true, allUser: User })

        } catch (error) {

                return res.status(500).json({ success: false, message: error.message })
        }
}


const Login = async (req, res) => {
       
        try {
                const { email, password } = req.body
                const user = await UserModal.findOne({ email: email })
                if (user) {
                        const checkPassword = password === user.password
                        if (checkPassword) {
                                const token = await createToken(user._id)
                                const { password, ...userData } = user._doc;
                                return res.status(200).json({ success: true, message: "User Login Successfully", data: userData, token }) 
                        } else {
                                return res.status(404).json({ success: false, message: "Your Password is Wrong" })

                        }

                } else {
                        return res.status(404).json({ success: false, message: "User Not Found" })
                }

        } catch (error) {
                return res.status(500).json({ success: false, message: error.message })
        }
}



module.exports = {
        Registration,
        showAllUser,
        Login,
        showPerticullerUser
}