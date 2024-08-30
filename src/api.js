import axios from "axios"; // download the latest version of the axios package

export default axios.create({
    baseURL:"http://localhost:3500" // localhost json server link.
})