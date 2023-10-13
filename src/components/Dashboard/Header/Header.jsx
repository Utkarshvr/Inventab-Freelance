import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
// import { BsSun, BsMoon } from "react-icons/bs";
import avatar from "../../../assets/images/avatar.png";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { useContext } from "react";
import { UserProfileModalContext } from "../../../context/UserProfileModalContext";
import UserProfileModal from "../../Modal/UserProfileModal";

const Header = () => {
  const axios = useAxiosPrivate();
  const { auth, setAuth } = useAuth();
  const { firstname, lastname } = auth;

  const { setIsUserProfileModalOpen } = useContext(UserProfileModalContext);

  const handleLogout = async () => {
    try {
      const res = await axios.post(`accounts/logout`);
      if (res.status === 200) {
        const modifiedUserObj = {
          ...auth,
          isLoggedIn: false,
        };
        setAuth(modifiedUserObj);
        localStorage.setItem("userInfo", JSON.stringify(modifiedUserObj));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowProfileModal = () => {
    setIsUserProfileModalOpen(true);
  };
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">
                  Welcome {`${firstname} ${lastname} (${auth?.orgName})`}
                </div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link bell dz-theme-mode p-0">
                    <DarkModeSwitcher />
                  </a>
                </li>

                {/* User Profile */}
                <li className="nav-item dropdown header-profile">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={avatar}
                      className="img-fluid rounded-circle avatar-profile"
                      width={60}
                      alt
                    />
                  </a>

                  {/* Log out */}
                  <div className="dropdown-menu dropdown-menu-end">
                    <a
                      className="dropdown-item ai-icon"
                      style={{ cursor: "pointer" }}
                      onClick={handleShowProfileModal}
                    >
                      <AiOutlineUser className="text-primary fs-4" />
                      <span className="ms-2 fs-4">Profile</span>
                    </a>
                    <a
                      className="dropdown-item ai-icon"
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      <AiOutlineLogout className="text-primary fs-4" />
                      <span className="ms-2 fs-4">Logout </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <UserProfileModal />
    </>
  );
};

export default Header;
