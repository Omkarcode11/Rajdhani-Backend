const db = require('./../model/index');

let signup = async (req, res) => {
  try {
    let userinfo = req.body;
    let [user, created] = await db.user.findOrCreate({
      where: { email: userinfo.email },
      defaults: userinfo,
    });
    if (created) {
      await user.createCart();
    }
    res.status(200).send('Account Created Successfully');
    res.end();
  } catch (err) {
    res.status(400).send(err.errors);
    res.end();
  }
};

let login = async (req, res) => {
  let userinfo = req.body;
  try {
    let user = await db.user.findOne({
      where: {
        email: userinfo.email,
      },
    });
    if (!user) {
      res.status(401).send('user name is not valid please signup');
      return;
    }
    if (user) {
      res.status(200).json(user);
      return;
    }
  } catch (err) {
    res.status(400).send('user not found');
    res.end();
  }
};

const editAuth = async (req, res) => {
  let newInfo = req.body;
  try {
    let newUser = await db.user.update(
      { phone: newInfo.phone, address: newInfo.address,pinCode:newInfo.pinCode },
      { where: { email: newInfo.email } }
    );
    res.status(200).send('user Update successfully ');
    res.end();
  } catch (err) {
    res.status(400).send('user not found');
    res.end();
  }
};

module.exports = { signup, login, editAuth };
