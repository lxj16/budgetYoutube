import axios from "axios";

const KEY = "AIzaSyDpafx592X_FxpyeAglMlhxep3rWwkeKGQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
