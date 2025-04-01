import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

// Access your key
const apiKey = process.env.GOOGLE_API_KEY;

console.log('Your API Key:', apiKey);

// const form = document.querySelector('form')!;
// const addressInput = document.querySelector('address')! as HTMLInputElement;

// function searchAddressHandler(event: Event) {
//    event.preventDefault();
//    const enteredAddress = addressInput.value;
// }

// form?.addEventListener('submit');
