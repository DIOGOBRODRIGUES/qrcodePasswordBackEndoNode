async function permittedCharacters(){
    let permitted =[]
    if(process.env.UPERCASE_LETTERS === "true")
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");  
    if(process.env.LOWERCASE_LETTERS === "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    if(process.env.NUMBERS === "true")
        permitted.push(..."0123456789");
    if(process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(..."!@#$%^&*()_+[]{}|;:,.<>/?");
  return permitted;
}

async function handle(){
 let characters = await permittedCharacters();
 let password = ""
 const passwordLength = process.env.PASSWORD_LENGTH;


for(let i = 0; i < passwordLength; i++){
 const index = Math.floor(Math.random() * characters.length);
 password += characters[index];

}

return password;
}

export default handle;