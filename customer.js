const express = require('express');
const router = express.Router();
const { Customer } = require("./model/Customers");

//const { auth } = require("../middleware/auth");

//=================================
//             Customer
//=================================
/*var newCustomer = new Customer(
{
    image: 'https://placeimg.com/48/48/2',
    name: '나동빈',
    birthday: '960508',
    gender: '남자',
    job: '프로그래머'
    });
// 9. 데이터 저장
newCustomer.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('Saved!')
    }
});*/
router.get('/customers',(req,res)=>{
    console.log("customers")
    Customer.find({}, (error, datas) => {
        return res.status(200).send(datas);
    });
})
router.post('/customers',(req,res)=>{
    console.log("uploads", req.body.name)
    var newCustomer = new Customer(req.body);
    newCustomer.save((err,doc)=>{
        if(err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})
/*router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});*/

module.exports = router;
