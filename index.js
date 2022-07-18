var nodeMailer=require("nodeMailer")

var transport =nodeMailer.createTransport({
    host:"sntp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    
    auth:{
        user:`anuppandey000@gmail.com`,
        pass:'Indus@009'
    }
});

var mailOptions={
    from:`anuppandey000@gmail.com`,
    to:"anuppandey000@gmail.com",
    subject:"test node mail",
    text:"hi...."
}

transport.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log("err");
    }
    else{
        console.log("success");
    }
})