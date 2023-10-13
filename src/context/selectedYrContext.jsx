/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { createYearsUpto2021 } from "../utils/utilityFunc/utilityFunc";

export const SelectedYrContext = createContext(null);

const SelectedYrContextProvider = ({ children }) => {
  const options = createYearsUpto2021();
  const [selectedYr, setSelectedYr] = useState(options[0]);

  return (
    <SelectedYrContext.Provider value={{ selectedYr, options, setSelectedYr }}>
      {children}
    </SelectedYrContext.Provider>
  );
};

export default SelectedYrContextProvider;
