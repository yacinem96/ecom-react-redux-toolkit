import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required("No password provided").min(8, "taille inf a 8")
  });
  
export const registerSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required("No password provided").min(8, "taille inf a 8"),
    cpassword: yup.string().required("confirm your password"),
  });
  

