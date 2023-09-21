import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { emailSchema } from "../../schema/validationSchema";
import { axiosInstance } from "../../utils/axios/axios";
import FormButton from "./FormButton";
import TextInput from "./TextInput";
import OTPForm from "./OTPForm";

const forms = [
  {
    placeholder: "Registration Email",
    name: "email",
    type: "email",
  },
];

const RenewPasswordForm = () => {
  const [isOtpFormOpen, setIsOtpFormOpen] = useState(false);
  const [regEmail, setRegEmail] = useState("");

  //login submition
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: async (values) => {
      try {
        if (values.password !== values.repeatPassword) return;

        const payload = {
          email: values.email,
        };

        const { data } = await axiosInstance.post(
          "/users/forgot/password/",
          payload
        );

        setRegEmail(values.email);
        setIsOtpFormOpen(true);
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        console.log(error);
      }
    },
  });

  return (
    <>
      {!isOtpFormOpen ? (
        <form className="form" onSubmit={handleSubmit}>
          {/* Form */}
          <div className="row">
            {forms.map(({ name, placeholder, type }, i) => {
              return (
                <div className={`col-12 mb-4 d-flex`}>
                  (
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
              );
            })}
          </div>

          {/* Login Button */}
          <div className="mb-2">
            <FormButton type="submit" title="Submit" />
          </div>
        </form>
      ) : (
        <OTPForm regEmail={regEmail} renewPass={true} />
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

export default RenewPasswordForm;
