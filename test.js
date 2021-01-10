const { info } = require('console');
const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "97ee8071ab13a6",
        pass: "18a10cdec5986c"
    }
}

const send = async(option)=>{
   nodemailer.createTransport(email).sendMail(option, (error, info) => {
       if(error){
           console.log(error);
       }else{
           console.log(info);
           return info.response;
       }
   });
};

let email_data = {
    from:'dnjssorkd12@naver.com',
    to:'dnjssorkd12@naver.com',
    subject:'테스트 메일',
    text:'nodejs 공부'
}

send(email_data)