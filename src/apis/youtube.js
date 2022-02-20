import axios from "axios";

const KEY = "AIzaSyB77Lb1jP50NEeynuxZ767bLLZXJT4nb1g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
