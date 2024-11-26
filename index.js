//const axios = require('axios');
import axios from 'axios';

async function fetchData(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

fetchData();