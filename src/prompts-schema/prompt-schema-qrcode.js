import chalk from "chalk";


const promptQRCode = [
    {
        name:"link", 
        description:chalk.yellow("Enter the link to generate the QRCODE ")
    },{
        name:"type",
        description:chalk.yellow("Choose between the type (1 - Normal or (2- Terminal"
        ),
        pattern:/[1-2]+$/,
        message: chalk.red.italic("Choose only between alternatives 1 and 2 "), 
        require:true
    }
];

export default promptQRCode;