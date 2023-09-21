import Select from "react-select";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  // AiOutlineCamera,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { signInSchema } from "../../schema/validationSchema";
import { axiosInstance } from "../../utils/axios/axios";
import ErrorMsg from "./ErrorMsg";
import FormButton from "./FormButton";
import TextInput from "./TextInput";
import OTPForm from "./OTPForm";

const forms = [
  {
    placeholder: "First Name",
    name: "firstName",
    type: "text",
  },
  {
    placeholder: "Last Name",
    name: "lastName",
    type: "text",
  },
  {
    placeholder: "Registration Email",
    name: "email",
    type: "email",
  },
  {
    placeholder: "Registration Mobile No",
    name: "mobile",
    type: "number",
  },
  {
    placeholder: "Select Organization",
    name: "org",
    type: "select",
  },
  {
    placeholder: "Password",
    name: "password",
    type: "password",
  },
  {
    placeholder: "Repeat Password",
    name: "repeatPassword",
    type: "password",
  },
];

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpFormOpen, setIsOtpFormOpen] = useState(false);
  const [regEmail, setRegEmail] = useState("");
  const [orgs, setOrgs] = useState([]);
  const [OtpPayload, setOtpPayload] = useState(null);

  // password show & hide
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //login submition
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      org: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        if (values.password !== values.repeatPassword) return;

        const payload = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          org: values.org?.label,
          password: values.password,
          mobile: values.mobile,
        };

        const { data } = await axiosInstance.post(
          "/users/new/create/user/",
          payload
        );

        setRegEmail(data?.email);
        setIsOtpFormOpen(true);
        setOtpPayload(payload);

        toast.success("Registered successfull", { duration: 2000 });
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        console.log(error);
      }
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get("/organizations/fetch/org/");

        console.log(data);
        setOrgs(
          data?.results?.map((res) => ({
            label: res.company_name,
            value: res.company_name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {!isOtpFormOpen ? (
        <form className="form" onSubmit={handleSubmit}>
          {/* Form */}
          <div className="row">
            {forms.map(({ name, placeholder, type }, i) => {
              return (
                <div className={`${i <= 1 ? "col-6" : "col-12"} mb-2 d-flex`}>
                  {type !== "select" ? (
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
                  ) : (
                    <Select
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      options={orgs}
                      value={values[name]}
                      onChange={(selectOption) => [
                        setFieldValue("org", selectOption),
                      ]}
                      styles={{
                        container: (provided) => ({
                          ...provided,
                          width: "100%",
                          color: "#212130",
                        }),
                        control: (provided) => ({
                          ...provided,
                          background: "#fff",
                          border: "1px solid #212130",
                          borderRadius: 24,
                          color: "#212130",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#212130",
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          color: "#212130",
                        }),
                      }}
                      isSearchable
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mb-2 d-flex justify-content-between gap-4 ">
            <Link className="btn" style={{ color: "#212130" }} to="/auth/login">
              Login
            </Link>
            <Link
              className="btn"
              style={{ color: "#212130" }}
              to="/auth/forget-password"
            >
              Forget Password?
            </Link>
          </div>
          {/* show error msg */}

          {/* Login Button */}
          <div className="mb-2">
            <FormButton type="submit" title="Register" />
          </div>
        </form>
      ) : (
        <OTPForm regEmail={regEmail} OtpPayload={OtpPayload} />
      )}
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

export default RegistrationForm;
