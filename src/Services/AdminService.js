import axios from "axios";

const baseurl = "http://localhost:9876/admin";
class Adminservice {
  getalladmin() {
    return axios.get(baseurl + "/getall");
  }
  createadmin(admin) {
    return axios.post(baseurl + "/addadmin", admin);
  }

  deleteadmin(adminid) {
    return axios.delete(baseurl + "/deleteadmin/" + adminid);
  }
  gatadminbyid(adminid) {
    return axios.get(baseurl + "/getadminbyid/" + adminid);
  }
  updateadmin(adminid, admin) {
    return axios.put(baseurl + "/updateadmin/" + adminid, admin);
  }
}
export default new Adminservice();
