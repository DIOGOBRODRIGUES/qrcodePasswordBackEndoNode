import chalk from "chalk";

const mainPrompt =[
    {
        name: "select",
        description: chalk.yellow.bold("choose the tool(1 - QRCODE ou (2- password"),
        pattern: /[1-2]+$/, //regex 
        message: chalk.red.italic("choose only between 1 and 2"),
        required: "true",
    }
];

export default mainPrompt;