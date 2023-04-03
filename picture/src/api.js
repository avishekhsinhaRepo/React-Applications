import axios from "axios";
const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID 6S0qY-SVrLYgCbys4NiqHBXaiY0bKwywf7Ydl6FcmbU",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImage;