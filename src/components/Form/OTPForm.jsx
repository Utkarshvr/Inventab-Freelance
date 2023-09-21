import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios/axios";
import FormButton from "./FormButton";
import TextInput from "./TextInput";

const otpForm = [
  { type: "number", name: "otp_digit_1", placeholder: 0 },
  { type: "number", name: "otp_digit_2", placeholder: 0 },
  { type: "number", name: "otp_digit_3", placeholder: 0 },
  { type: "number", name: "otp_digit_4", placeholder: 0 },
];

const formsForRenewing = [
  { type: "password", name: "password", placeholder: "New Password" },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
  },
];

export default function OTPForm({ regEmail, renewPass }) {
  let initialValues;
  if (renewPass) {
    initialValues = {
      password: "",
      confirmPassword: "",
      otp_digit_1: 0,
      otp_digit_2: 0,
      otp_digit_3: 0,
      otp_digit_4: 0,
    };
  } else {
    initialValues = {
      otp_digit_1: 0,
      otp_digit_2: 0,
      otp_digit_3: 0,
      otp_digit_4: 0,
    };
  }

  const navigate = useNavigate();
  // otp submition
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        if (renewPass && values.password !== values.confirmPassword) {
          toast.error("Password didn't match", { duration: 2000 });

          return;
        }
        let payload;
        if (renewPass) {
          payload = {
            email: regEmail,
            otp: `${values.otp_digit_1}${values.otp_digit_2}${values.otp_digit_3}${values.otp_digit_4}`,
            new_password: values.password,
          };
        } else {
          payload = {
            email: regEmail,
            otp: `${values.otp_digit_1}${values.otp_digit_2}${values.otp_digit_3}${values.otp_digit_4}`,
          };
        }
        console.log(payload);

        const apiRoute = renewPass
          ? "/users/reset/password/"
          : "/users/confirm-registration-otp/";

        const { data } = await axiosInstance.post(apiRoute, payload);

        navigate("/auth/login");

        toast.success("User Active", { duration: 2000 });
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        console.log(error);
      }
    },
  });
  return (
    <form className="form my-8" onSubmit={handleSubmit}>
      {/* Form */}
      <div className="row">
        {renewPass
          ? formsForRenewing.map(({ name, placeholder, type }, i) => (
              <div className={`col-12 mb-2 d-flex`}>
                <TextInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={values[name]}
                  onChange={handleChange}
                  style={{
                    background: "#fff",
                    border: "1px solid #212130",
                    color: "#212130",
                    "::placeholder": { color: "#212130" },
                  }}
                />
              </div>
            ))
          : null}
        {otpForm.map(({ name, placeholder, type }, i) => (
          <div className={`col-3 d-flex`}>
            <TextInput
              type={type}
              name={name}
              placeholder={placeholder}
              value={values[name]}
              onChange={(e) => {
                if (e.target.value < 0 || e.target.value > 9) {
                } else handleChange(e);
              }}
              style={{
                background: "#fff",
                border: "1px solid #212130",
                color: "#212130",
                "::placeholder": { color: "#212130" },
              }}
            />
          </div>
        ))}
      </div>

      <div className="my-2 d-flex flex-column align-items-center justify-content-center ">
        <p style={{ margin: "0" }}>Resend OTP after xxx seconds</p>
        <button className="btn btn-outline-primary px-2 py-1">
          Resend OTP
        </button>
      </div>

      {/* Login Button */}
      <div className="mb-2">
        <FormButton type="submit" title="Submit" />
      </div>
    </form>
  );
}
