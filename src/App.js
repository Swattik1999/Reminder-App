const cron = require('node-cron');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const mailOptions = {
  from: 'swattiksamanta108@gmail.com', 
  to: 'swattik.official@gmail.com', 
  subject: 'A Text Message!', 
  Text: `Hello!`  
};

//Node mailer transporter using SMTP protocol....
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth :{
    user: 'swattiksamanta108@gmail.com', // sender email id
    pass : 'password' // sender password
  }
});

// Schedule Data time...
const someDate = new Date('2021-05-02T11:33:00.000+5:30')
schedule.scheduleJob(someDate, () => {
  console.log('Task schedule on ' , new Date().toString());
})

// const myJob = schedule.scheduleJob('*/2 * * * * *', () =>{
//   transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//       console.log(error);
//     }else {
//       console.log('Email sent: '+ info.response);
//       // console.log('Task schedule on ' , new Date().toString());
//       // console.log('your Job has been canceled',myJob.cancel());
//     }
//   }) 
// })

schedule.scheduleJob('myJob','*/2 * * * * *', ()=>{
  schedule.cancelJob('myJob');
  // console.log('myJob');
})


//Email to Remind on...
cron.schedule('*/2 * * * *', () => {
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    }else {
      console.log('Email sent: '+ info.response);
      // console.log(schedule.cancelJob('myJob'));
    }
  });
});
 