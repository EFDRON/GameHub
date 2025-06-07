import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72de104f1bb242788e23e2e8071bf1ab",
  },
});
