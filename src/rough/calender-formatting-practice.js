const holidays = [
  {
    id: "63b06288-49b5-4ea4-be28-11ce98693c5b",
    date: "2023-05-01",
  },
  {
    id: "23e9342f-3840-41b5-b70a-db9ab64b72e7",
    date: "2024-01-26",
  },
  {
    id: "53b6b490-6f03-469a-8ffa-21f891d4602a",
    date: "2024-02-18",
  },
  {
    id: "4fc551f0-ce87-48f3-97c8-f5ad86ab8a95",
    date: "2024-03-07",
  },
  {
    id: "3770bd37-997c-4a64-801f-d726cefe216d",
    date: "2024-03-22",
  },
  {
    id: "daf3c845-702a-451d-8ba3-ee4f4c8b1cef",
    date: "2023-08-15",
  },
  {
    id: "e84e2ba0-2ccc-4775-87ad-27bffe4f1d41",
    date: "2023-09-19",
  },
  {
    id: "69f41f38-a5c4-4c28-bd41-3bcce05bfe50",
    date: "2023-10-24",
  },
  {
    id: "4b573fc5-d560-4f46-966d-6035a53d6d3f",
    date: "2023-11-13",
  },
  {
    id: "e3d582db-b211-44e1-9cbb-c5457c71099a",
    date: "2023-11-14",
  },
  {
    id: "85744afb-e467-49cc-9bc7-11a61832fe8e",
    date: "2023-11-15",
  },
  {
    id: "95ff4373-a262-4ad9-9a73-4bac5c4eee82",
    date: "2023-12-25",
  },
];

const weeklyOffs = [
  {
    id: "736a8dde-2d1a-4025-b31f-69534763279d",
    day: "Sunday",
    type: "Every",
  },
  {
    id: "fa22c74e-fb70-4a50-8f35-d5506ca2450a",
    day: "Saturday",
    type: "EveryFirstPerMonth",
  },
  {
    id: "87e95fcc-f0bb-4e7c-a69e-f8b7ff8b457f",
    day: "Saturday",
    type: "EveryThirdPerMonth",
  },
];

const ownLeaves = [
  {
    id: "6ca4a16b-d525-435d-af8c-60210d7e7d57",
    user: "c0a6fa60-a5af-43af-918b-993ef01bd56e",
    status: "New",
    leave_dates: [
      {
        id: "7017faef-c932-4665-aaea-9189602cfad4",
        date: "2023-09-16",
        type: "Secondhalf",
        status: "Applied",
      },
      {
        id: "fc281334-45f8-40aa-931d-532699890808",
        date: "2023-08-29",
        type: "Secondhalf",
        status: "Applied",
      },
    ],
  },
  {
    id: "2e75f977-6cfd-4c48-9fed-a7666044b671",
    user: "c0a6fa60-a5af-43af-918b-993ef01bd56e",
    status: "New",
    leave_dates: [
      {
        id: "03ac9738-6a30-4831-898e-1d479f67a581",
        date: "2023-09-16",
        type: "Secondhalf",
        status: "Applied",
      },
      {
        id: "1bffbf6a-79f1-4c7c-9f08-05c3508ee8af",
        date: "2023-08-29",
        type: "Secondhalf",
        status: "Applied",
      },
    ],
  },
  {
    id: "3facdfcf-8f8a-4b8a-9832-4853da1554f7",
    user: "c0a6fa60-a5af-43af-918b-993ef01bd56e",
    status: "New",
    leave_dates: [
      {
        id: "ff453d05-6f04-4ea9-9db6-05fb0f83e92a",
        date: "2023-09-13",
        type: "Secondhalf",
        status: "Applied",
      },
      {
        id: "911a682c-cf24-47b3-ac5f-ec6f3856eb57",
        date: "2023-09-07",
        type: "Secondhalf",
        status: "Applied",
      },
    ],
  },
  {
    id: "adfda643-7499-4395-b4b3-21c3bb61a758",
    user: "c0a6fa60-a5af-43af-918b-993ef01bd56e",
    status: "New",
    leave_dates: [
      {
        id: "da538bc4-16a8-4964-8145-60614aeed1d5",
        date: "2023-09-13",
        type: "Secondhalf",
        status: "Applied",
      },
      {
        id: "8df4c08a-2d0b-4602-a697-3a3815f34b6a",
        date: "2023-09-07",
        type: "Secondhalf",
        status: "Applied",
      },
    ],
  },
];

const extractDateInNums = (dateString) => {
  const parts = dateString.split("-");

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  return { year, month, day };
};
const generateWeeklyOffs = () => {
  const currentYear = new Date().getFullYear(); // 2023

  const resultArray = [];

  const startYear = 2020;

  for (let year = startYear; year <= currentYear; year++) {
    for (let month = 1; month <= 12; month++) {
      // Calculate the number of days in the month
      const daysInMonth = new Date(year, month, 0).getDate();

      // Find all Sundays in the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        if (date.getDay() === 0) {
          resultArray.push({
            year,
            month,
            day,
            className: "custom-weekly-offs",
          });
        }
      }

      // Find the first Saturday of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        if (date.getDay() === 6) {
          resultArray.push({
            year,
            month,
            day,
            className: "custom-weekly-offs",
          });
          break;
        }
      }

      // Find the last Saturday of the month
      for (let day = daysInMonth; day >= 1; day--) {
        const date = new Date(year, month - 1, day);
        if (date.getDay() === 6) {
          resultArray.push({
            year,
            month,
            day,
            className: "custom-weekly-offs",
          });
          break;
        }
      }
    }
  }

  return resultArray;
};
const generateOwnLeavesClassnames = (ownLeaves) => {
  let ownLeavesClassnames = [];
  ownLeaves.forEach((leave) => {
    leave.leave_dates.forEach((leave_date) => {
      const dateObj = extractDateInNums(leave_date.date);

      let className;

      if (leave.status === "New") className = "custom-leaves-applied-new";
      else if (leave.status === "Disapproved")
        className = "custom-leaves-applied-disapproved";
      else if (leave.status === "Approved")
        className = "custom-leaves-applied-approved";

      ownLeavesClassnames.push({ ...dateObj, className });
    });
    return ownLeavesClassnames;
  });

  return ownLeavesClassnames;
};

const generateCustomClassNames = (holidays, ownLeaves) => {
  // const weeklyOffs = generateWeeklyOffs();
  const weeklyOffs = [];

  const holidaysCustomClassnames = holidays.map((holiday) => {
    const dateObj = extractDateInNums(holiday.date);
    return { ...dateObj, className: "custom-holidays" };
  });

  const ownLeavesClassnames = generateOwnLeavesClassnames(ownLeaves);
  return [...weeklyOffs, ...holidaysCustomClassnames, ...ownLeavesClassnames];
};
console.log(generateCustomClassNames(holidays));
