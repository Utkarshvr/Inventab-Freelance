/* eslint-disable react/prop-types */

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
  // console.log(chartData);
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

        {/* Left Y-Axis for Bars */}
        <YAxis
          yAxisId="left"
          tickFormatter={(value) => (value / 10000000).toFixed(2) + " Cr"}
        />

        {/* Right Y-Axis for Lines */}
        <YAxis
          yAxisId="right"
          orientation="right" // This places the axis on the right side
          tickFormatter={(value) => (value / 10000000).toFixed(2) + " Cr"}
        />

        <Tooltip formatter={(value) => (value / 10000000).toFixed(2) + " Cr"} />
        <Legend />
        {chartData?.data?.map((department, index) => {
          return (
            <Bar
              key={index}
              dataKey={department?.department}
              stackId="a"
              fill={getColorForDepartment(index)}
              yAxisId="left" // Associate this Bar series with the left Y-Axis
            />
          );
        })}
        <Line
          type="linear"
          dataKey="cumulativeTotal"
          stroke="#f39c12"
          strokeWidth={4}
          yAxisId="right" // Associate this Line series with the right Y-Axis
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
