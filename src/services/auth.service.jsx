


export const loginUser = ({ email, password }) => {
    if (email === "a@a.com" && password === "123456789") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: "user",
          token: "123"
        })
      );
      return true;
    } else {
      return false;
    }
  };




export const logout = () => {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
       
        return true;
      } else {
        return false;
      }
}
