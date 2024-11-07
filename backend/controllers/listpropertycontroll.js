const catchAsyncError = require('../middlewares/catchAsyncError');
const nodemailer = require("nodemailer");

//Register User - /api/v1/register
exports.listpropertycontroll = catchAsyncError(async (req, res, next) => {
    const {email} = req.body
 
    // console.log(email,password , "bunbuhb");
    if(email){
       

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "files.aweganyz@gmail.com",
                pass: "dlovgnhexemnhnlq"
            }
        });
        const mailOptions = {
            from: "files.aweganyz@gmail.com",
            to: email ,  
            subject: "list",
            html: `
            <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">
        <p style="padding:1px">  list : ${email}</p>
       
         
         </div>
              
        
          `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                // res.status(201).json({status:201,info})
            }
      
        })
        
    }

   

})


