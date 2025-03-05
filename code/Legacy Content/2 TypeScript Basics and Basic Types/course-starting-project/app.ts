// The "unknown" type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
   userName = userInput;
}

// The "never" type
function generateError(message: string, code: number) {
   throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
