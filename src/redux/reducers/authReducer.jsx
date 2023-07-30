import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from 'react-toastify'
import { registerUser } from "../../services/auth.service";
// const navigate=useNavigate()
const notifySuccess = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);




// Get user from localStorage
const token = localStorage.getItem("user")
const url = 'http://127.0.0.1:2211/api'

const initialState = {
  token: token ? token : null,
  userId: null,
  loading: false,
  error: null,
}

// Register user
export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
  try {
    return await registerUser({ email, password })
  } catch (err) {
    err.response.status === 500 && notifyError("500: Server ERROR")
    err.response && notifyError(err.response.data)
    return thunkAPI.rejectWithValue(err.message || err.toString())
  }

})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.token = null
      state.userId = null
      state.loading = false
      state.error = null
    },
    logout: (state) => {
      if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
      }
      state.token = null
      state.userId = null
      state.loading = false
      state.error = null
    },
    // login
    login: async (state, { payload }) => {
      const { email, password } = payload
      try {
        const res = await axios.post(url + "/auth/login", {
          username: email,
          password: password
        })

        if (res.status === 200) {
          const user = res.data
          console.log(user);
          // enregistrer le token sur le localStorage
          localStorage.setItem(
            "user",
            JSON.stringify(user.token)
          );
          notifySuccess("Connected successfully")
          state.token = payload.token;
          state.userId = payload.userId;
          return true;

        }
        return false;

      } catch (err) {
        err.response.status === 500 && notifyError("500: Server ERROR")
        err.response && notifyError(err.response.data)
        console.error(err);
        return false
      }

    },
    registerr: async (state, { payload }) => {

    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(register.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.loading = false;
  //     })
  //     .addCase()
  // }
})

export const { login, logout, registerr, reset } = authSlice.actions;
export default authSlice.reducer;