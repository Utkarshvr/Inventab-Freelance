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

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  // Format the Y-Axis label by dividing the payload value by 10000000 and rounding to 2 decimal places
  const formattedValue = (payload.value / 10000000).toFixed(2);

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {formattedValue}
      </text>
    </g>
  );
};

const RevenueChart = ({ chartData }) => {
  console.log(chartData);
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
        <YAxis
          tickFormatter={(value) => (value / 10000000).toFixed(2) + " Cr"}
        />
        <Tooltip formatter={(value) => (value / 10000000).toFixed(2) + " Cr"} />
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
        <Bar type="linear" dataKey="total" fill={getColorForDepartment(0)} />
        <Line type="linear" dataKey="total" stroke="#f39c12" strokeWidth={4} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
