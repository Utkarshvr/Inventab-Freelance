// import {
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { getColorForDepartment } from "../../utils/utilityFunc/utilityFunc";

// const CumulativeFrequencyChart = ({ chartData }) => {
//   const departments = chartData?.data
//     ?.map((entry) => entry?.department)
//     .filter(Boolean);
//   // console.log({ chartData, departments });
//   console.log(chartData);

//   // Initialize an object to store cumulative totals for each department
//   const cumulativeData = {};

//   departments?.forEach((department) => {
//     cumulativeData[department] = [];
//   });

//   // console.log(cumulativeData);

//   // Iterate through the data and calculate cumulative totals for each department
//   chartData?.data?.forEach((entry) => {
//     const department = entry?.department;
//     if (department) {
//       let cumulativeTotal = 0;
//       const monthlyMetrics = [
//         entry?.apr,
//         entry?.may,
//         entry?.jun,
//         entry?.jul,
//         entry?.aug,
//         entry?.sep,
//         entry?.oct,
//         entry?.nov,
//         entry?.dec,
//         entry?.jan,
//         entry?.feb,
//         entry?.mar,
//       ];
//       const cumulativeValues = [];

//       monthlyMetrics.forEach((metric) => {
//         if (metric !== null && metric !== undefined) {
//           cumulativeTotal += metric;
//         }
//         cumulativeValues.push(cumulativeTotal);
//       });

//       cumulativeData[department] = cumulativeValues;
//     }
//   });
// //
//   console.log(cumulativeData);

//   // console.log("----------------------");
//   // departments?.map((department, index) => {
//     // console.log(
//     //   cumulativeData[department].map((value, month) => ({
//     //     month: month + 1,
//     //     [department]: value,
//     //   }))
//     // );
//     // console.log(cumulativeData[department]);
//   // });
//   // Generate an array of month labels from 1 to totalMonths

//   if (!!chartData && Object.keys(cumulativeData).length !== 0)
//     return (
//       <ResponsiveContainer width="100%" height={400}>
//         <ComposedChart
//           width={800}
//           height={400}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />

//           {departments.map((department, index) => (
//             <>
//               <Line
//                 key={department}
//                 type="linear"
//                 dataKey={department}
//                 name={department}
//                 stroke={getColorForDepartment(index)}
//                 data={cumulativeData[department].map((value, month) => ({
//                   month: month + 1,
//                   [department]: value,
//                 }))}
//               />
//             </>
//           ))}
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
// };

// export default CumulativeFrequencyChart;

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getColorForDepartment } from "../../utils/utilityFunc/utilityFunc";

const RevenueChart = ({ chartData }) => {
  console.log({ chartData });
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        width={800}
        height={400}
        data={chartData?.formattedDataWithTotal}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* {chartData?.data?.map((department, index) => {
          return (
            <Bar
              key={index}
              dataKey={department?.department}
              stackId="a"
              fill={getColorForDepartment(index)}
            />
          );
        })} */}
        {/* <Line type="linear" dataKey="total" stroke="#f39c12" strokeWidth={4} /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;

// import React from "react";
// import {
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { getColorForDepartment } from "../../utils/utilityFunc/utilityFunc";

// const calculateCumulativeFrequency = (data) => {
//   if (data && data?.data) {
//     // console.log({ data });
//     const cumulativeData = {};
//     const months = [
//       "jan",
//       "feb",
//       "mar",
//       "apr",
//       "may",
//       "jun",
//       "jul",
//       "aug",
//       "sep",
//       "oct",
//       "nov",
//       "dec",
//     ];

//     // Initialize cumulativeData with department keys and empty arrays
//     data.data.forEach((entry) => {
//       cumulativeData[entry.department] = [];
//     });

//     // Calculate cumulative values for each month
//     months.forEach((month) => {
//       let total = 0;
//       data.data.forEach((entry) => {
//         total += entry[month] || 0;
//         cumulativeData[entry.department].push(total);
//       });
//     });

//     console.log({ cumulativeData });
//     return cumulativeData;
//   }
// };

// const RevenueChart = ({ chartData }) => {
//   const cumulativeData = calculateCumulativeFrequency(chartData);

//   if (chartData && chartData?.data)
//     return (
//       <ResponsiveContainer width="100%" height={400}>
//         <ComposedChart
//           width={800}
//           height={400}
//           data={chartData.formattedDataWithTotal}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           {chartData.data.map((department, index) => (
//             <Bar
//               key={index}
//               dataKey={department.department}
//               stackId="a"
//               fill={getColorForDepartment(index)}
//             />
//           ))}
//           <Line
//             type="linear"
//             dataKey="total"
//             stroke="#f39c12"
//             strokeWidth={4}
//           />
//           {Object.entries(cumulativeData).map(
//             ([department, cumulativeValues], index) => (
//               <Line
//                 key={index}
//                 dataKey={department}
//                 stroke={getColorForDepartment(index)}
//                 strokeDasharray="5 5"
//               />
//             )
//           )}
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
// };

// export default RevenueChart;

// import React from "react";
// import {
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { getColorForDepartment } from "../../utils/utilityFunc/utilityFunc";

// const calculateCumulativeFrequency = (data) => {
//   if (data?.data) {
//     const cumulativeData = {};

//     data.data.forEach((entry) => {
//       cumulativeData[entry.department] = [];
//     });

//     const months = [
//       "jan",
//       "feb",
//       "mar",
//       "apr",
//       "may",
//       "jun",
//       "jul",
//       "aug",
//       "sep",
//       "oct",
//       "nov",
//       "dec",
//     ];

//     data.data.forEach((departmentEntry) => {
//       let cumulativeTotal = 0;
//       months.forEach((month) => {
//         cumulativeTotal += departmentEntry[month] ?? 0;
//         cumulativeData[departmentEntry.department].push(cumulativeTotal);
//       });
//     });

//     return cumulativeData;
//   }
// };

// const RevenueChart = ({ chartData }) => {
//   const cumulativeData = calculateCumulativeFrequency(chartData);
//   if (cumulativeData)
//     return (
//       <ResponsiveContainer width="100%" height={400}>
//         <ComposedChart
//           width={800}
//           height={400}
//           data={chartData.formattedDataWithTotal}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           {chartData.data.map((department, index) => (
//             <Bar
//               key={index}
//               dataKey={department?.department}
//               stackId="a"
//               fill={getColorForDepartment(index)}
//             />
//           ))}
//           <Line
//             type="linear"
//             dataKey="total"
//             stroke="#f39c12"
//             strokeWidth={4}
//           />
//           {Object.entries(cumulativeData).map(
//             ([department, cumulativeValues], index) => (
//               <Line
//                 key={index}
//                 dataKey={department}
//                 stroke={getColorForDepartment(index)}
//                 strokeDasharray="5 5"
//               />
//             )
//           )}
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
// };

// export default RevenueChart;
