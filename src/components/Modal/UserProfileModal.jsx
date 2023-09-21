import { useContext } from "react";
import { UserProfileModalContext } from "../../context/UserProfileModalContext";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function UserProfileModal() {
  const { isUserProfileModalOpen, setIsUserProfileModalOpen } = useContext(
    UserProfileModalContext
  );
  console.log(isUserProfileModalOpen);

  const { auth } = useAuth();

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
            <div className="p-5" >
              <div className="d-flex gap-2 mb-2" style={{ flexDirection: "column" }}>
                <h5>User Id: {auth?.userId}</h5>
                <h5>Name: {auth?.firstname + auth?.lastname}</h5>
                <h5>Phone: {auth?.phone}</h5>
                <h5>Email: {auth?.email}</h5>
                <h5>Organisation: {auth?.orgName}</h5>
              </div>
              <Link to={"/auth/forget-password"} className="btn btn-primary">
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
