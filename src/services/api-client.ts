import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28f73fc9016f43d3b066b803ea409273",
  },
});
