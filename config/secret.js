require("dotenv").config();

exports.config = {
    userDB: process.env.USER_DB,
    userPass: process.env.PASS_DB,
    tokenSecret: process.env.TOKEN_SECRET
}

// console.log(process.env.USER_DB);