const Member = require("../models/Member");
const Definer = require("../lib/mistake");
const assert = require("assert");

let memberController = module.exports;
const jwt = require("jsonwebtoken");

// memberController.home = (req, res) => {
//     console.log('GET cont.home')
//     res.send('home sahifadasiz');
// }        // only for testing

memberController.signup = async (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body,
      member = new Member(),
      new_member = await member.signupData(data);


    const token = memberController.createToken(new_member);
    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true,
    });
      
    res.json({ state: "Succeeded", data: new_member });
  } catch (err) {
    console.log(`ERROR cont/signup, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

memberController.login = async (req, res) => {
  try {
    console.log("POST: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);
    
    console.log("result:", result);

    const token = memberController.createToken(result);
    // console.log("token:", token);
    res.cookie("access_token", token, {
      maxAge: 6 * 3600 * 1000,
      httpOnly: true,
    });

    res.json({ state: "Succeeded", data: result });
  } catch (err) {
    console.log(`ERROR cont/signup, ${err.message}`);
    res.json({ state: "Failed", message: err.message });
  }
};

memberController.logout = (req, res) => {
  console.log("GET cont/logout");
  res.send("logout sahifadasiz");
};

memberController.createToken = (result) => {
  try {
    const upload_data = {
      _id: result._id,
      mb_nick: result.mb_nick,
      mb_type: result.mb_type,
    };

    const token = jwt.sign(upload_data, process.env.SECRET_TOKEN, {
      expiresIn: "6h",
    });

    assert.ok(token, Definer.auth_err2);
    return token;
  } catch (err) {
    throw err;
  }
};


memberController.checkMyAuthentication = (req, res) => {
  try {
    console.log("GET cont/checkMyAuthentication");
    let token = req.cookies["access_token"];
    console.log('token:', token);

    const member = token ? jwt.verify(token, process.env.SECRET_TOKEN) : null;
    assert.ok(member, Definer.auth_err2);



    res.json({ state: "Succeeded", data: member });


  } catch (err) {
    throw err;
  }
}
// get fetches data
// post submits data
