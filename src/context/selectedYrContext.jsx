/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SelectedYrContext = createContext(null);

// Options for react-select
const createYearsUpto2021 = () => {
  const currentYear = new Date().getFullYear();
  const numOfYrsPast2021 = currentYear - 2021;

  const yrs = [];

  for (let yr = 0; yr <= numOfYrsPast2021; yr++) {
    const obj = {
      value: currentYear - yr,
      label: `${currentYear - yr} - ${currentYear - yr + 1}`,
    };
    yrs.push(obj);
  }

  return yrs;
};

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
