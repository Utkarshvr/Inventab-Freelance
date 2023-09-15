const chartData = [
  {
    name: "SLS-KAM-WEST",
    overDueMT30Days: 0,
    overDueMT15Days: 0,
    overDueLT15Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueInMT30Days: 0,
  },
  {
    name: "SLS-KAM-NORTH",
    overDueMT30Days: 1544000,
    overDueMT15Days: 0,
    overDueLT15Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueInMT30Days: 0,
  },
  {
    name: "SLS-KAM-SOUTH",
    overDueMT30Days: 1123000,
    overDueMT15Days: 1275001,
    overDueLT15Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueInMT30Days: 0,
  },
  {
    name: "Total",
    overDueMT30Days: 2667000,
    overDueMT15Days: 1275001,
    overDueLT15Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueInMT30Days: 0,
  },
];

const types = [
  "Overdue (>30 days)",
  "Overdue (>15 days)",
  "Overdue (<15 days)",
  "Due in 15 Days",
  "Due in 30 Days",
  "Due in > 30 Days",
];
const formattedData = [];

types.forEach((type) => {
  const entry = { type };

  chartData?.forEach((data) => {
    // Check wich prop you need
    let prop = "";
    if (type === "Overdue (>30 days)") {
      prop = "overDueMT30Days";
    } else if (type === "Overdue (>15 days)") {
      prop = "overDueMT15Days";
    } else if (type === "Overdue (<15 days)") {
      prop = "overDueLT15Days";
    } else if (type === "Due in 15 Days") {
      prop = "dueIn15Days";
    } else if (type === "Due in 30 Days") {
      prop = "dueIn30Days";
    } else if (type === "Due in > 30 Days") {
      prop = "dueInMT30Days";
    }

    entry[data.name] = data[prop];
  });

  formattedData.push(entry);
});

console.log(formattedData);
