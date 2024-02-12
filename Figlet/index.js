let figlet = require("figlet");
const myfunc = (err, text) =>{
    if(err){
        console.log("an Error occured", err);
        return;
    }
    console.log(text)
}
figlet("Text Here",
    {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: false,
    },
    myfunc)
