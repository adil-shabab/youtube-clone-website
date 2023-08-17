import axios from 'axios'



const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}


export const FetchFromAPI = async (url) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error making API request:", error);
        throw error;
    }
 }
 