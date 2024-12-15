import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js ";
import handler from "./handle.js";

async function createQRCode(params) {
    prompt.get(promptQRCode, (handler));
    prompt.start();
}

export default createQRCode;