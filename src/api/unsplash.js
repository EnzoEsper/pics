import axios from 'axios';

// Allows to create an instance of axios client with a couple of default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b5f4c046d60ebe016339e5970cd198bae6813900b55033b433f188a0a120b4b6'
  }
});