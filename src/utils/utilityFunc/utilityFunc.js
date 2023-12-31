const utils = {};

//@desc remove undefined data from arr
utils.removeUndefinedObj = (arr) => {
  return arr.filter((a) => {
    if ((a.label && a.value) !== undefined) {
      return a;
    }
  });
};

//@desc remove duplicate object from arr
utils.removeDuplicateObjects = (arr) => {
  const uniqueObjects = new Set(arr.map(JSON.stringify));
  return Array.from(uniqueObjects).map(JSON.parse);
};

// @desc number Differentiation [only core]
utils.numDifferentiation = (value) =>
  value ? `${(value / 10000000).toFixed(2)} Cr` : `0 Cr`;

// @desc kpi Each total
utils.kpiEachTotal = (kpi) => {
  return (
    (parseFloat(kpi?.jan) || 0) +
    (parseFloat(kpi?.feb) || 0) +
    (parseFloat(kpi?.mar) || 0) +
    (parseFloat(kpi?.apr) || 0) +
    (parseFloat(kpi?.may) || 0) +
    (parseFloat(kpi?.jun) || 0) +
    (parseFloat(kpi?.jul) || 0) +
    (parseFloat(kpi?.aug) || 0) +
    (parseFloat(kpi?.sep) || 0) +
    (parseFloat(kpi?.oct) || 0) +
    (parseFloat(kpi?.nov) || 0) +
    (parseFloat(kpi?.dec) || 0)
  );
};

// @desc get month name by date ["01-01-2022" = "jan"]

utils.getMonthName = (dateString) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  // Split the dateString into year, month, and day parts
  const [year, month, day] = dateString.includes("-")
    ? dateString.split("-")
    : dateString.split("/");

  // Convert the month part (which is 0-indexed) to a number and subtract 1 (since months in JS are 0-11)
  const monthIndex = parseInt(month) - 1;

  // Return the month name
  return months[monthIndex];
};

//@ each month total value
utils.monthTotalValue = (arr) => {
  let t = 0;
  for (let i of arr) {
    t += i;
  }
  return t;
};

//@ indian date format
utils.formatDateToIndianVersion = (date) => {
  if (!(date instanceof Date) || isNaN(date))
    throw new Error("Invalid date object.");
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

// @desc number to words

utils.inWords = (num) => {
  let a = [
    "",
    "One ",
    "Two ",
    "Three ",
    "Four ",
    "Five ",
    "Six ",
    "Seven ",
    "Eight ",
    "Nine ",
    "Ten ",
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen ",
  ];
  let b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num === 0) return "Zero";

  if ((num = num.toString()).includes(".")) {
    const [wholePart, decimalPart] = num.split(".");
    return (
      inWords(parseInt(wholePart)) + " point " + inWords(parseInt(decimalPart))
    );
  }

  if (num.length > 9) return "overflow";
  let n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        "only "
      : "only ";
  return str.trim();
};

// @desc calculate GST

utils.calculateGST = (invoiceDetails) => {
  let result = 0;
  let arr = [];
  invoiceDetails?.parts_invoice.forEach((part) => {
    // get specific country
    let gstPercent = part?.parts_no?.gst_itm?.country_gst.find(
      (gst) =>
        gst?.country_code?.id === invoiceDetails?.billing_address?.country?.id
    );

    let res =
      part?.price *
      part?.quantity *
      (parseFloat(gstPercent?.gst_percent) / 100);
    arr.push(res);
  });

  for (let i of arr) {
    result += i;
  }

  return result;
};

// @desc format chart data structure for react-recharts

utils.formatChartData = (kipPo) => {
  let data = kipPo.map((item) => {
    return {
      department: item.department,
      name: item.name,
      jan: item.jan || 0,
      feb: item.feb || 0,
      mar: item.mar || 0,
      apr: item.apr || 0,
      may: item.may || 0,
      jun: item.jun || 0,
      jul: item.jul || 0,
      aug: item.aug || 0,
      sep: item.sep || 0,
      oct: item.oct || 0,
      nov: item.nov || 0,
      dec: item.dec || 0,
      total: item.total,
    };
  });
  // console.log({ DATA: data });
  const months = [
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
    "jan",
    "feb",
    "mar",
  ];

  const calculateTotal = (data, month) => {
    let total = 0;
    data?.forEach((department) => {
      if (department?.name !== "monthly-totals") {
        if (department[month] !== null) {
          total += department[month] || 0;
        }
      }
    });
    return total;
  };

  let prevTotal = 0;
  const calculateCumulativeData = (data, month) => {
    const total = calculateTotal(data, month); // Total of a particular month
    prevTotal += total;
    // console.log({ month, total, cumulativeTotal: prevTotal });
    return prevTotal;
  };

  const formattedDataWithTotal = months.map((month) => {
    const entry = { month };
    data?.forEach((department) => {
      if (department?.name !== "monthly-totals") {
        entry[department.department] = department[month];
      }
    });
    const total = calculateTotal(data, month); // Add the total for the month
    entry.total = total; // Add the total for the month

    const cumulativeTotal = calculateCumulativeData(data, month); // Add the cumulative figures for the month
    entry.cumulativeTotal = cumulativeTotal; // apr: apr, may: apr + may, june: apr + may + june

    // console.log({ month, total: total, cumulativeTotal });
    return entry;
  });

  return { data, formattedDataWithTotal };
};

//  @desc color for each department in sales dashboard charts

utils.getColorForDepartment = (index) => {
  const predefinedColors = ["#1e3799", "#3c6382", "#38ada9"];
  if (index < predefinedColors.length) {
    return predefinedColors[index];
  }
};

// @desc how many days left
utils.daysLeft = (targetDate) => {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate);

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = currentDate - targetDateTime;

  // Convert the difference to days
  const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);

  // Round the number of days and return it
  let res = Math.ceil(differenceInDays);
  if (res > 0) {
    return `+${parseInt(res)}`;
  }
  return res;
};
// @desc how many days left for search function
utils.daysLeftForSearchFunc = (targetDate) => {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate);

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = currentDate - targetDateTime;

  // Convert the difference to days
  const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);

  // Round the number of days and return it
  let res = Math.ceil(differenceInDays);

  return res;
};

// @desc due date
utils.dueDate = (row) => {
  let date = new Date(row?.invoice_date);
  if (row?.payment_term?.id === 1) {
    return date;
  }
  if (row?.payment_term?.id === 2) {
    return date;
  }
  if (row?.payment_term?.id === 3) {
    return new Date(date.getTime() + 15 * (24 * 60 * 60 * 1000));
  }
  if (row?.payment_term?.id === 4) {
    return new Date(date.getTime() + 30 * (24 * 60 * 60 * 1000));
  }
  if (row?.payment_term?.id === 5) {
    return new Date(date.getTime() + 45 * (24 * 60 * 60 * 1000));
  }
  if (row?.payment_term?.id === 6) {
    return new Date(date.getTime() + 60 * (24 * 60 * 60 * 1000));
  }
};

utils.calculateMonthlyTotals = (data) => {
  // Define an object to store monthly totals
  const monthlyTotals = {
    name: "monthly-totals",
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  };

  // Iterate through the data array
  data.forEach((entry) => {
    // Iterate through each month and add the value to the monthly total
    for (const month in monthlyTotals) {
      if (entry[month] !== null && !isNaN(entry[month])) {
        monthlyTotals[month] += entry[month];
      }
    }
  });

  return monthlyTotals;
};

// Options for react-select
utils.createYearsUpto2021 = () => {
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
utils.calculateTotalNetPrice = (items) => {
  return items.reduce((total, item) => {
    const netPrice = parseFloat(item.net_price);
    if (!isNaN(netPrice)) {
      total += netPrice;
    }
    return total;
  }, 0);
};
utils.calculateTotalExtdGrossPrice = (items) => {
  return items.reduce((total, item) => {
    const extdGrossPrice = parseFloat(item.extd_gross_price);
    if (!isNaN(extdGrossPrice)) {
      total += extdGrossPrice;
    }
    return total;
  }, 0);
};

utils.calculateExtdGrossPrice = (gst, net_price) => {
  if (net_price && net_price > 0 && gst && gst > 0) {
    // NET Price * (1 + (gst / 100))
    let gross_price = parseInt(net_price) * (1 + parseInt(gst) / 100);
    return parseFloat(gross_price)?.toFixed(2);
  } else {
    return 0;
  }
};

utils.extractDateInNums = (dateString) => {
  const parts = dateString.split("-");

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  return { year, month, day };
};
utils.generateWeeklyOffs = () => {
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
utils.generateOwnLeavesClassnames = (ownLeaves) => {
  let ownLeavesClassnames = [];
  ownLeaves?.forEach((leave) => {
    leave.leave_dates.forEach((leave_date) => {
      const dateObj = extractDateInNums(leave_date.date);

      let className;

      if (leave_date.status === "Applied")
        className = "custom-leaves-applied-new";
      else if (leave_date.status === "Disapproved")
        className = "custom-leaves-applied-disapproved";
      else if (leave_date.status === "Approved")
        className = "custom-leaves-applied-approved";

      ownLeavesClassnames.push({ ...dateObj, className });
    });
    return ownLeavesClassnames;
  });

  return ownLeavesClassnames;
};

utils.generateCustomClassNames = (holidays, ownLeaves) => {
  const weeklyOffs = utils.generateWeeklyOffs();

  const holidaysCustomClassnames = holidays?.map((holiday) => {
    const dateObj = extractDateInNums(holiday.date);
    return { ...dateObj, className: "custom-holidays" };
  });

  const ownLeavesClassnames = utils.generateOwnLeavesClassnames(ownLeaves);
  return [...weeklyOffs, ...holidaysCustomClassnames, ...ownLeavesClassnames];
};
utils.statusColor = (status) => {
  if (status === "Applied") {
    return "#ffb300";
  } else if (status === "Approved") {
    return "#1aff00";
  } else if (status === "Disapproved") {
    return "#ff0000";
  }
};
utils.formateReportsForTable = (reports) => {
  let results;
  // push age property in every report object
  results = reports?.map((report) => {
    let date = utils.dueDate(report);
    let age = utils.daysLeftForSearchFunc(date);
    return { ...report, age };
  });

  const DEPS = ["SLS-KAM-WEST", "SLS-KAM-NORTH", "SLS-KAM-SOUTH"];
  const formateReports = [];
  DEPS.forEach((name) => {
    const overDueMT30Days = results
      .filter((result) => result.age >= 30 && result.dept.name === name)
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);

    const overDueMT15Days = results
      .filter(
        (result) =>
          result.age < 30 && result.age >= 15 && result.dept.name === name
      )
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);

    const overDueLT15Days = results
      .filter(
        (result) =>
          result.age > 0 && result.age < 15 && result.dept.name === name
      )
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);

    const dueIn15Days = results
      .filter(
        (result) =>
          result.age < 0 && result.age >= -15 && result.dept.name === name
      )
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);

    const dueIn30Days = results
      .filter(
        (result) =>
          result.age < -15 && result.age >= -30 && result.dept.name === name
      )
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);

    const dueInMT30Days = results
      .filter((result) => result.age < -30 && result.dept.name === name)
      ?.reduce((acc, report) => {
        const reportTotal = report?.parts_invoice?.reduce(
          (totalAmount, invoice) => {
            return totalAmount + invoice?.price * invoice?.quantity;
          },
          0
        );

        return acc + reportTotal;
      }, 0);
    formateReports.push({
      name,
      overDueMT30Days,
      overDueMT15Days,
      overDueLT15Days,
      dueIn15Days,
      dueIn30Days,
      dueInMT30Days,
    });
  });

  // Initialize totals with zeros
  const totals = {
    name: "Total",
    overDueMT30Days: 0,
    overDueMT15Days: 0,
    overDueLT15Days: 0,
    dueIn15Days: 0,
    dueIn30Days: 0,
    dueInMT30Days: 0,
  };

  // Calculate the totals
  formateReports.forEach((item) => {
    for (const key in totals) {
      if (key !== "name") {
        totals[key] += item[key] || 0;
      }
    }
  });

  // Add the totals object to the data array
  formateReports.push(totals);

  return formateReports;
};

export const {
  removeDuplicateObjects,
  removeUndefinedObj,
  numDifferentiation,
  kpiEachTotal,
  monthTotalValue,
  getMonthName,
  formatDateToIndianVersion,
  inWords,
  calculateGST,
  formatChartData,
  getColorForDepartment,
  daysLeft,
  daysLeftForSearchFunc,
  dueDate,
  calculateMonthlyTotals,
  createYearsUpto2021,
  calculateTotalNetPrice,
  calculateTotalExtdGrossPrice,
  calculateExtdGrossPrice,
  generateCustomClassNames,
  extractDateInNums,
  formateReportsForTable,
  statusColor,
} = utils;
