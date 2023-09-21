import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios/axios";
import FormButton from "./FormButton";
import TextInput from "./TextInput";

const forms = [
  { type: "number", name: "otp_digit_1", placeholder: 0 },
  { type: "number", name: "otp_digit_2", placeholder: 0 },
  { type: "number", name: "otp_digit_3", placeholder: 0 },
  { type: "number", name: "otp_digit_4", placeholder: 0 },
];

export default function OTPForm({ regEmail }) {
  const navigate = useNavigate();
  // otp submition
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      otp_digit_1: 0,
      otp_digit_2: 0,
      otp_digit_3: 0,
      otp_digit_4: 0,
    },
    onSubmit: async (values) => {
      try {
        if (values.password !== values.repeatPassword) return;

        const payload = {
          email: regEmail,
          otp: `${values.otp_digit_1}${values.otp_digit_2}${values.otp_digit_3}${values.otp_digit_4}`,
        };
        console.log(payload);
        const { data } = await axiosInstance.post(
          "/users/confirm-registration-otp/",
          payload
        );

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
        {forms.map(({ name, placeholder, type }, i) => (
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
      {/* show error msg */}

      {/* Login Button */}
      <div className="mb-2">
        <FormButton type="submit" title="Submit" />
      </div>
    </form>
  );
}
