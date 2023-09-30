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

// console.log(formattedData);

const given = [
  {
    id: "e96e2e8e-4d0d-45fa-91e1-82e78a4c96ca",
    created: "2023-07-07T17:27:22.730265+05:30",
    modified: "2023-07-07T17:27:22.730292+05:30",
    quantity: 1,
    customer_part_no: "DONGLE REPAIRING CHARGES",
    price: 3500,
    warranty: 12,
    short_description: "DONGLE REPAIRING CHARGES",
    invoice: "a3eae040-f393-42c0-bd96-dec48029c4f8",
    part: null,
  },
];
const expected = [
  {
    part_id: {
      id: "411d59f8-ecf9-4534-9a34-5654b4524050",
      part_number: "wkvci12v001",
    },
    short_description: "12v vehicle communication interface",
    quantity: 1,
    unit_cost: 450,
    status: "Active",
    gst: 18,
    net_price: 450,
    extd_gross_price: "531.00",
    serialization: false,
  },
];

given.map((part) => ({
  part_id: { id: part?.id, part_number: part?.customer_part_no },
}));
