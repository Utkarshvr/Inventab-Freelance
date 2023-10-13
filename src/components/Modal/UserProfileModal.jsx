import { useContext, useState } from "react";
import { UserProfileModalContext } from "../../context/UserProfileModalContext";
import { useAuth } from "../../hooks/useAuth";
import ChangePassForm from "../Form/ChangePassForm";
import { axiosInstance } from "../../utils/axios/axios";

export default function UserProfileModal() {
  const { isUserProfileModalOpen, setIsUserProfileModalOpen } = useContext(
    UserProfileModalContext
  );

  const [isOtpFormOpen, setIsOtpFormOpen] = useState(false);

  const { auth } = useAuth();

  const sendReq = async () => {
    const payload = {
      email: auth?.email,
    };

    const { data } = await axiosInstance.post(
      "/users/forgot/password/",
      payload
    );

    setIsOtpFormOpen(true);
  };

  if (isUserProfileModalOpen)
    return (
      <div
        className="modal fade show"
        id="payment-modal"
        style={{
          display: "block",
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                User Profile
              </h1>

              <div className="d-flex gap-2 align-items-center div">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsUserProfileModalOpen(false)}
                />
              </div>
            </div>
            {/* Content */}
            <div className="p-5">
              <div
                className="d-flex gap-2 mb-2"
                style={{ flexDirection: "column" }}
              >
                <h5>Name: {auth?.firstname + auth?.lastname}</h5>
                <h5>Phone: {auth?.phone}</h5>
                <h5>Email: {auth?.email}</h5>
                <h5>Organisation: {auth?.orgName}</h5>
              </div>
              {!isOtpFormOpen ? (
                <button onClick={sendReq} className="btn btn-primary">
                  Change Password
                </button>
              ) : (
                <ChangePassForm
                  regEmail={auth?.email}
                  OtpPayload={{ email: auth?.email }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
