import axios from "axios";
import { toast } from 'react-toastify'

const notifySuccess = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);

// export const loginUser = ({ email, password }) => {
//     if (email === "a@a.com" && password === "123456789") {
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           user: "user",
//           token: "123"
//         })
//       );
//       return true;
//     } else {
//       return false;
//     }
//   };
const url = 'http://127.0.0.1:2211/api'
export const loginUser = async ({ email, password }) => {
  try {
    const res = await axios.post(url + "/auth/login", {
      username: email,
      password: password
    })

    if (res.status === 200) {
      const  user  = res.data
      console.log(user);
      // enregistrer le token sur le localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          token:user.token,
          userId:user._id,
          username:user.email.split("@")[0]
        })
      );
      notifySuccess("Connected successfully")
      return true;
      
    }
    return false;

  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response&& notifyError(err.response.data)

    console.error(err);
    return false
  }

};


export const logoutUser = () => {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
    return true;
  } else {
    return false;
  }
}


export const registerUser = async ({ email, password }) => {
  try {
    const res = await axios.post(url + "/auth/register", {
      email: email,
      password: password
    })
    if (res.status === 201) {
      const { msg ,data } = res.data
      console.log(data);
      // enregistrer le token sur le localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          token:data.token,
          userId:data._id,
          username:data.email.split("@")[0]
        })
      );

      notifySuccess(msg)
      return true;
      
    }
    return false;

  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response && notifyError(err.response.data)

    console.error(err.msg);
  }
}
