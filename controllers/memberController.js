const Member = require("../models/Member");

let memberController = module.exports;

// memberController.home = (req, res) => {
//     console.log('GET cont.home')
//     res.send('home sahifadasiz');
// }        // only for testing

memberController.signup = async (req, res) => {
    try{
        console.log('POST: cont/signup')
        const data = req.body,
        member = new Member(),
        new_member = await member.signupData(data);

        res.json({state: 'Succeeded', data: new_member})
    } catch(err) {
        console.log(`ERROR cont/signup, ${err.message}`)
        res.json({state: 'Failed', message: err.message})

    }
};

memberController.login = async (req, res) => {
    try{
        console.log('POST: cont/login')
        const data = req.body,
        member = new Member(),
        result = await member.loginData(data);

        res.json({state: 'Succeeded', data: result})
    } catch(err) {
        console.log(`ERROR cont/signup, ${err.message}`)
        res.json({state: 'Failed', message: err.message})

    }
};

memberController.logout = (req, res) => {
    console.log('GET cont.logout')
    res.send('logout sahifadasiz');
};

// get fetches data
// post submits data