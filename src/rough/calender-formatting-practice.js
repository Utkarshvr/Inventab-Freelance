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

// TO CREATE:
const EXAMPLE = [
  {
    // Define the date you want to highlight
    year: 2023,
    month: 9,
    day: 13,
    className: "custom-highlighted-day", // Add custom class name
  },
];

function xyz() {
  const newArray = weeklyOffs?.map((entry) => {
    const { day, type } = entry;
    const year = new Date().getFullYear(); // 2023
    const month = new Date().getMonth() + 1; // 8 + 1 = 9

    console.log({ year, month });

    return { className: "custom-weekly-offs" };
  });
}

// xyz();
const extractDateInNums = (dateString) => {
  const parts = dateString.split("-");

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  return { year, month, day };
};
function generateCustomClassNames(holidays) {
  const year = new Date().getFullYear(); // 2023
  const month = new Date().getMonth() + 1; // September

  const resultArray = [];

  // Calculate the number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();

  // Find all Sundays in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    if (date.getDay() === 0) {
      resultArray.push({ year, month, day, className: "custom-weekly-offs" });
    }
  }

  // Find the first Saturday of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    if (date.getDay() === 6) {
      resultArray.push({ year, month, day, className: "custom-weekly-offs" });
      break;
    }
  }

  // Find the last Saturday of the month
  for (let day = daysInMonth; day >= 1; day--) {
    const date = new Date(year, month - 1, day);
    if (date.getDay() === 6) {
      resultArray.push({ year, month, day, className: "custom-weekly-offs" });
      break;
    }
  }

  const holidaysCustomClassnames = holidays.map((holiday) => {
    const dateObj = extractDateInNums(holiday.date);
    console.log(dateObj);
    return { ...dateObj, className: "custom-holidays" };
  });

  return [...resultArray, ...holidaysCustomClassnames];
}

const dateArray = generateCustomClassNames(holidays);
console.log(dateArray);
