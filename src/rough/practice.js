// const kpiPo = [
//   {
//     id: "a36b955d-44ee-492e-a1d7-e6c3178ebfca",
//     department: "SLS-KAM-WEST",
//     metric: "PO",
//     created: "2023-06-17T11:54:09.513632+05:30",
//     modified: "2023-07-06T18:50:42.654255+05:30",
//     apr: 4000000,
//     may: 9700000,
//     jun: 7550000,
//     jul: 20300000,
//     aug: 9300000,
//     sep: 15400000,
//     oct: 21100000,
//     nov: 14900000,
//     dec: 19900000,
//     jan: 18900000,
//     feb: 26100000,
//     mar: 7800000,
//     org: "0a055b26-ae15-40a9-8291-25427b94ebb3",
//     sub_org: null,
//     total: 174950000,
//   },
//   {
//     id: "cfbb7640-5181-43de-956c-620313c89fff",
//     department: "SLS-KAM-SOUTH",
//     metric: "PO",
//     created: "2023-06-17T11:52:02.167012+05:30",
//     modified: "2023-07-06T18:56:32.542923+05:30",
//     apr: 4460000,
//     may: null,
//     jun: null,
//     jul: 1700000,
//     aug: 5700000,
//     sep: 6000000,
//     oct: 4000000,
//     nov: 7200000,
//     dec: 8700000,
//     jan: 1700000,
//     feb: 11700000,
//     mar: null,
//     org: "0a055b26-ae15-40a9-8291-25427b94ebb3",
//     sub_org: null,
//     total: 51160000,
//   },
//   {
//     id: "08d34925-86ab-48c9-a5ae-08dc323385a8",
//     department: "SLS-KAM-NORTH",
//     metric: "PO",
//     created: "2023-06-17T11:50:00.116449+05:30",
//     modified: "2023-07-29T11:37:53.676716+05:30",
//     apr: null,
//     may: 500000,
//     jun: null,
//     jul: null,
//     aug: null,
//     sep: null,
//     oct: 7500000,
//     nov: 5000000,
//     dec: 3600000,
//     jan: null,
//     feb: 600000,
//     mar: null,
//     org: "0a055b26-ae15-40a9-8291-25427b94ebb3",
//     sub_org: null,
//     total: 17200000,
//   },
// ];

// function calculateMonthlyTotals(data) {
//   // Define an object to store monthly totals
//   const monthlyTotals = {
//     jan: 0,
//     feb: 0,
//     mar: 0,
//     apr: 0,
//     may: 0,
//     jun: 0,
//     jul: 0,
//     aug: 0,
//     sep: 0,
//     oct: 0,
//     nov: 0,
//     dec: 0,
//   };

//   // Iterate through the data array
//   data.forEach((entry) => {
//     // Iterate through each month and add the value to the monthly total
//     for (const month in monthlyTotals) {
//       if (entry[month] !== null && !isNaN(entry[month])) {
//         monthlyTotals[month] += entry[month];
//       }
//     }
//   });

//   return monthlyTotals;
// }

// // Calculate monthly totals
// const monthlyTotals = calculateMonthlyTotals(kpiPo);

// // Display the result
// console.log(monthlyTotals);

// kpiPo.push(monthlyTotals);

// console.log(kpiPo);

const data = [
  {
    department: "SLS-KAM-WEST",
    jan: 18900000,
    feb: 26100000,
    mar: 7800000,
    apr: 4000000,
    may: 9700000,
    jun: 7550000,
    jul: 20300000,
    aug: 9300000,
    sep: 15400000,
    oct: 21100000,
    nov: 14900000,
    dec: 19900000,
    total: 174950000,
  },
  {
    department: "SLS-KAM-SOUTH",
    jan: 1700000,
    feb: 11700000,
    mar: 0,
    apr: 4460000,
    may: 0,
    jun: 0,
    jul: 1700000,
    aug: 5700000,
    sep: 6000000,
    oct: 4000000,
    nov: 7200000,
    dec: 8700000,
    total: 51160000,
  },
  {
    department: "SLS-KAM-NORTH",
    jan: 0,
    feb: 600000,
    mar: 0,
    apr: 0,
    may: 500000,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 7500000,
    nov: 5000000,
    dec: 3600000,
    total: 17200000,
  },
  {
    jan: 0,
    feb: 600000,
    mar: 0,
    apr: 0,
    may: 500000,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 7500000,
    nov: 5000000,
    dec: 3600000,
    total: 17200000,
  },
];

const xyz = [];

data.forEach((entry) => {
  xyz.push(entry.department);
  // console.log(entry.department);
});

const departments = data
  ?.map((entry) => {
    if (entry.department) return entry.department;
  })
  .filter(Boolean);

console.log(xyz);
console.log(departments);

const chartData = {
  data: [
    {
      department: "SLS-KAM-WEST",
      jan: 18900000,
      feb: 26100000,
      mar: 7800000,
      apr: 4000000,
      may: 9700000,
      jun: 7550000,
      jul: 20300000,
      aug: 9300000,
      sep: 15400000,
      oct: 21100000,
      nov: 14900000,
      dec: 19900000,
      total: 174950000,
    },
    {
      department: "SLS-KAM-SOUTH",
      jan: 1700000,
      feb: 11700000,
      mar: 0,
      apr: 4460000,
      may: 0,
      jun: 0,
      jul: 1700000,
      aug: 5700000,
      sep: 6000000,
      oct: 4000000,
      nov: 7200000,
      dec: 8700000,
      total: 51160000,
    },
    {
      department: "SLS-KAM-NORTH",
      jan: 0,
      feb: 600000,
      mar: 0,
      apr: 0,
      may: 500000,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 7500000,
      nov: 5000000,
      dec: 3600000,
      total: 17200000,
    },
    {
      name: "monthly-totals",
      jan: 20600000,
      feb: 38400000,
      mar: 7800000,
      apr: 8460000,
      may: 10200000,
      jun: 7550000,
      jul: 22000000,
      aug: 15000000,
      sep: 21400000,
      oct: 32600000,
      nov: 27100000,
      dec: 32200000,
      total: 243310000,
    },
  ],
  formattedDataWithTotal: [
    {
      month: "apr",
      "SLS-KAM-WEST": 4000000,
      "SLS-KAM-SOUTH": 4460000,
      "SLS-KAM-NORTH": 0,
      undefined: 8460000,
      total: 8460000,
    },
    {
      month: "may",
      "SLS-KAM-WEST": 9700000,
      "SLS-KAM-SOUTH": 0,
      "SLS-KAM-NORTH": 500000,
      undefined: 10200000,
      total: 10200000,
    },
    {
      month: "jun",
      "SLS-KAM-WEST": 7550000,
      "SLS-KAM-SOUTH": 0,
      "SLS-KAM-NORTH": 0,
      undefined: 7550000,
      total: 7550000,
    },
    {
      month: "jul",
      "SLS-KAM-WEST": 20300000,
      "SLS-KAM-SOUTH": 1700000,
      "SLS-KAM-NORTH": 0,
      undefined: 22000000,
      total: 22000000,
    },
    {
      month: "aug",
      "SLS-KAM-WEST": 9300000,
      "SLS-KAM-SOUTH": 5700000,
      "SLS-KAM-NORTH": 0,
      undefined: 15000000,
      total: 15000000,
    },
    {
      month: "sep",
      "SLS-KAM-WEST": 15400000,
      "SLS-KAM-SOUTH": 6000000,
      "SLS-KAM-NORTH": 0,
      undefined: 21400000,
      total: 21400000,
    },
    {
      month: "oct",
      "SLS-KAM-WEST": 21100000,
      "SLS-KAM-SOUTH": 4000000,
      "SLS-KAM-NORTH": 7500000,
      undefined: 32600000,
      total: 32600000,
    },
    {
      month: "nov",
      "SLS-KAM-WEST": 14900000,
      "SLS-KAM-SOUTH": 7200000,
      "SLS-KAM-NORTH": 5000000,
      undefined: 27100000,
      total: 27100000,
    },
    {
      month: "dec",
      "SLS-KAM-WEST": 19900000,
      "SLS-KAM-SOUTH": 8700000,
      "SLS-KAM-NORTH": 3600000,
      undefined: 32200000,
      total: 32200000,
    },
    {
      month: "jan",
      "SLS-KAM-WEST": 18900000,
      "SLS-KAM-SOUTH": 1700000,
      "SLS-KAM-NORTH": 0,
      undefined: 20600000,
      total: 20600000,
    },
    {
      month: "feb",
      "SLS-KAM-WEST": 26100000,
      "SLS-KAM-SOUTH": 11700000,
      "SLS-KAM-NORTH": 600000,
      undefined: 38400000,
      total: 38400000,
    },
    {
      month: "mar",
      "SLS-KAM-WEST": 7800000,
      "SLS-KAM-SOUTH": 0,
      "SLS-KAM-NORTH": 0,
      undefined: 7800000,
      total: 7800000,
    },
  ],
};
