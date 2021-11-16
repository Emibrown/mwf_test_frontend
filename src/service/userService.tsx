import axios from "axios";

// const API_URL = "http://127.0.0.1:8080"
const API_URL = "https://mwf-test-backend.cleverapps.io";

class UserService {

    register(user:Register) {
      const {name,email,password} = user
      return axios
        .post(API_URL + "/register", {
          name,
          email,
          password
        })
        .then(response => {
          return response.data;
        });
    }

}


export default new UserService();