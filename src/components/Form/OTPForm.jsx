import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
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

const resendTime = (1 * 60 * 1000) / 4; // 15 secs

export default function OTPForm({ regEmail, renewPass, OtpPayload }) {
  const [timeLeftToRegenOtp, setTimeLeftToRegenOtp] = useState(resendTime);

  let initialValues;
  if (renewPass) {
    initialValues = {
      password: "",
      confirmPassword: "",
      otp_digit_1: "",
      otp_digit_2: "",
      otp_digit_3: "",
      otp_digit_4: "",
    };
  } else {
    initialValues = {
      otp_digit_1: "",
      otp_digit_2: "",
      otp_digit_3: "",
      otp_digit_4: "",
    };
  }

  const navigate = useNavigate();
  // otp submission
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
  const handleOtpChange = (index, value, event) => {
    if (value >= 0 && value <= 9) {
      handleChange(event);
      // Move focus to the next input field
      const nextIndex = index + 1;
      console.log(nextIndex);
      if (nextIndex < otpForm.length) {
        document.getElementById(`otp-form ${nextIndex}`).focus();
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeftToRegenOtp > 0) {
        setTimeLeftToRegenOtp((prev) => prev - 1000);
      }
    }, 1000);

    // Cleanup the interval when the component unmounts or when timeLeftToRegenOtp changes.
    return () => clearInterval(timer);
  }, [timeLeftToRegenOtp]);

  const resendOtp = async () => {
    const OTP_API_ROUTE = renewPass
      ? "/users/forgot/password/"
      : "/users/new/create/user/";

    console.log(OTP_API_ROUTE, OtpPayload);
    try {
      const { data } = await axiosInstance.post(OTP_API_ROUTE, OtpPayload);
      toast.success("Otp Sent to your email", { duration: 2000 });
      setTimeLeftToRegenOtp(resendTime);
    } catch (error) {
      toast.error(error?.mesasage, { duration: 2000 });
    }
  };

  return (
    <>
      <form className="form my-8" onSubmit={handleSubmit}>
        {/* Form */}
        <div className="row">
          {renewPass
            ? formsForRenewing.map(({ name, placeholder, type }, i) => (
                <div className={`col-12 mb-2 d-flex`} key={name}>
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
            <div className={`col-3 d-flex`} key={name}>
              <TextInput
                type={type}
                name={name}
                placeholder={placeholder}
                id={`otp-form ${i}`}
                value={values[name]}
                onChange={(e) => handleOtpChange(i, e.target.value, e)}
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

        {/* Login Button */}
        <div className="mt-4">
          <FormButton type="submit" title="Submit" />
        </div>
      </form>

      <div className="mt-2 mb-5 d-flex flex-column align-items-center justify-content-center ">
        <p style={{ margin: "0" }}>
          {timeLeftToRegenOtp > 0
            ? `Resend OTP after ${timeLeftToRegenOtp / 1000} seconds`
            : null}
        </p>
        <button
          disabled={timeLeftToRegenOtp > 0}
          onClick={resendOtp}
          className="btn btn-outline-primary px-2 py-1"
        >
          Resend OTP
        </button>
      </div>
    </>
  );
}
