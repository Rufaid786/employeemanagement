import axios from "axios";

const baseurl = "http://localhost:9875/agentuser";
class UserService {
  getalluser() {
    return axios.get(baseurl + "/getall");
  }
  createuser(user) {
    return axios.post(baseurl + "/adduser", user);
  }

  deleteuser(userid) {
    return axios.delete(baseurl + "/deleteuser/" + userid);
  }
  gatuserbyid(userid) {
    return axios.get(baseurl + "/getuserbyid/" + userid);
  }
  updateuser(userid, user) {
    return axios.put(baseurl + "/updateuser/" + userid, user);
  }
}
export default new UserService();
