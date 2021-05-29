import axios from "axios";
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID 6S0qY-SVrLYgCbys4NiqHBXaiY0bKwywf7Ydl6FcmbU"
  }
});