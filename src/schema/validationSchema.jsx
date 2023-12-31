import * as Yup from "yup";
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// login schema
export const signInSchema = Yup.object({
  email: Yup.string()
    .email()
    .matches(emailRules, { message: "Field should contain a valid e-mail" })
    .required("Email required"),
  password: Yup.string().required("Password required"),
});

// login schema
export const emailSchema = Yup.object({
  email: Yup.string()
    .email()
    .matches(emailRules, { message: "Field should contain a valid e-mail" })
    .required("Email required"),
});

// login schema
export const leadsSchema = Yup.object({
  department: Yup.string().required({
    name: "department",
    msg: "Department required",
  }),
});
