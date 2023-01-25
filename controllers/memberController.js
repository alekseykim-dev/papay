const Member = require("../models/Member");

let memberController = module.exports;

// memberController.home = (req, res) => {
//     console.log('GET cont.home')
//     res.send('home sahifadasiz');
// }        // only for testing

memberController.signup = async (req, res) => {
    try{
        console.log('POST: cont/signup')
        const data = req.body;
        const member = new Member()
        const new_member = await member.signupData(data);

        res.send('Done!')
    } catch(err) {
        console.log(`ERROR cont/signup, ${err.message}`)

    }
};

memberController.login = (req, res) => {
    console.log('POST cont.login')
    res.send('login sahifadasiz');
};

memberController.logout = (req, res) => {
    console.log('GET cont.logout')
    res.send('logout sahifadasiz');
};

// get fetches data
// post submits data