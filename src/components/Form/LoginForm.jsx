import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  // AiOutlineCamera,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { signInSchema } from "../../schema/validationSchema";
import { axiosInstance } from "../../utils/axios/axios";
import ErrorMsg from "./ErrorMsg";
import FormButton from "./FormButton";
import TextInput from "./TextInput";

const LoginForm = ({ setActiveFormType }) => {
  const { setAuth } = useAuth();
  let location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard";

  // password show & hide
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //login submition
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInSchema,
      onSubmit: async (values) => {
        try {
          const { data } = await axiosInstance.post(
            "accounts/login",
            JSON.stringify({
              username: values.email,
              password: values.password,
            })
          );

          console.log(data);
          if (data.success) {
            const results = data?.data;

            const userObj = {
              accessToken: results?.auth_token?.access,
              dept: results?.dept,
              userId: results?.user_id,
              orgId: results?.org.id,
              orgName: results?.org?.company_name,
              firstname: results?.first_name,
              lastname: results?.last_name,
              phone: results?.mobile,
              email: results?.email,
              isLoggedIn: true,
              sessionStatus: true,
            };
            setAuth(userObj);
            localStorage.setItem("userInfo", JSON.stringify(userObj));

            // set userObj  into localstorage
            navigate(from, { replace: true });

            toast.success("Logged in successfull", { duration: 2000 });
          }
        } catch (error) {
          toast.error(error?.message, { duration: 2000 });
        }
      },
    });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-2">
          <TextInput
            type="email"
            title="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              background: "#fff",
              border: "1px solid #212130",
              color: "#212130",
              "::placeholder": { color: "#212130" },
            }}
          />
          {errors.email && touched.email ? (
            <ErrorMsg subject={errors.email} />
          ) : null}
        </div>
        {/* Password */}
        <div className="mb-2 ">
          <div className="password_field">
            <TextInput
              type={`${showPassword ? "text" : "password"}`}
              title="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                background: "#fff",
                border: "1px solid #212130",
                color: "#212130",
              }}
            />

            <div onClick={togglePasswordVisibility} className="eyeIcon">
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          {errors.password && touched.password ? (
            <ErrorMsg subject={errors.password} />
          ) : null}
        </div>
        <div className="mb-4 d-flex justify-content-between gap-4 ">
          <Link className="btn" style={{ color: "#212130" }} to="register">
            Register
          </Link>
          <Link
            className="btn"
            style={{ color: "#212130" }}
            to="forget-password"
          >
            Forget Password?
          </Link>
        </div>
        {/* show error msg */}

        {/* Login Button */}
        <div className="mb-2">
          <FormButton type="submit" title="Sign In" />
        </div>
      </form>
      <div className="mt-3">
        <p
          style={{
            color: "#212130",
            fontWeight: "600",
            fontSize: "1.5em",
            textAlign: "center",
            marginTop: "-12px",
          }}
        >
          powered by
        </p>
        <div
          className="d-flex align-content-center justify-content-center"
          style={{
            marginTop: "-30px",
          }}
        >
          <img src="/wikitech-black.png" alt="WIITECK" />
        </div>
        <p
          style={{
            color: "#212130",
            fontWeight: "600",
            fontSize: "1.5em",
            textAlign: "center",
          }}
        >
          Connect with us for any support at support@wikitek.in
        </p>
      </div>
    </>
  );
};

export default LoginForm;
