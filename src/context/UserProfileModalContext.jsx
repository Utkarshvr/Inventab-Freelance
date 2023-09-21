/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserProfileModalContext = createContext({
  isUserProfileModalOpen: false,
});

const UserProfileModalContextProvider = ({ children }) => {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

  return (
    <UserProfileModalContext.Provider
      value={{ isUserProfileModalOpen, setIsUserProfileModalOpen }}
    >
      {children}
    </UserProfileModalContext.Provider>
  );
};

export default UserProfileModalContextProvider;
