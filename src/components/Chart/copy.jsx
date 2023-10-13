import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getColorForDepartment } from "../../utils/utilityFunc/utilityFunc";

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
const CumulativeLineChart = () => {
  if (!chartData) {
    return <div>Loading...</div>; // Add appropriate handling for missing data
  }
  // Calculate cumulative data for each department
  const cumulativeData = chartData?.formattedDataWithTotal.map(
    (monthData, index) => {
      const cumulativeEntry = { month: monthData.month };
      chartData.data.forEach((department) => {
        cumulativeEntry[department.department] =
          monthData[department.department];
      });
      return cumulativeEntry;
    }
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={800}
        height={400}
        data={cumulativeData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Render lines for each department */}
        {chartData?.data?.map((department, index) => (
          <Line
            key={index}
            type="linear"
            dataKey={department.department}
            stroke={getColorForDepartment(index)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CumulativeLineChart;
