import axios from "axios"

var header = {"Authorization": "Bearer " + localStorage.getItem("simple_admin_access_token")};

const userLogin = form => axios.post("/api/v2/user/login", form).then(response => response.data);

const userMe = () => axios.get("/api/v2/user/me", {headers: header}).then(response => response.data);

const userLogout = () => axios.delete("/api/v2/user/logout", {headers: header}).then(response => response.data);

export {
  userLogin,
  userMe,
  userLogout,

}
