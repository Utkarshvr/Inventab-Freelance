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
import { useEffect, useState } from "react";

const RevenueChart = ({ chartData }) => {
  const [cumulativeDataState, setCumulativeDataState] = useState([]);
  const [calcDone, setCalcDone] = useState(false);
  console.log({ chartData, cumulativeDataState });

  useEffect(() => {
    if (chartData?.formattedDataWithTotal && !calcDone) {
      console.log("Iam here");
      const formattedDataWithTotalCopy =
        chartData?.formattedDataWithTotal || [];
      const cumulativeData = {};

      // Iterate through the cumulativeDataState array
      for (const data of formattedDataWithTotalCopy) {
        const month = data.month;

        // Iterate through each department in the current month
        for (const departmentKey in data) {
          if (departmentKey !== "month" && departmentKey !== "total") {
            // Initialize the cumulative value for the department if not present
            if (!cumulativeData[departmentKey]) {
              cumulativeData[departmentKey] = 0;
            }

            // Calculate the cumulative value for the current month and department
            cumulativeData[departmentKey] += data[departmentKey];

            // Update the cumulativeDataState with the cumulative value
            data[departmentKey] = cumulativeData[departmentKey];
          }
        }
      }

      if (formattedDataWithTotalCopy?.length > 0) setCalcDone(true);
      console.log(formattedDataWithTotalCopy);
      setCumulativeDataState(formattedDataWithTotalCopy);
    }
    // if (cumulativeDataState?.length > 0) setCalcDone(true);
  }, [chartData]);

  if (calcDone)
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={800}
          height={400}
          data={cumulativeDataState}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chartData?.data?.map((department, index) => {
            return (
              <>
                <Bar
                  key={index}
                  dataKey={department?.department}
                  stackId="a"
                  fill={getColorForDepartment(index)}
                />
              </>
            );
          })}
          {chartData?.data?.map((department, index) => {
            return (
              <Line
                type="linear"
                legendType="none" // Set legendType to "none" for line so that only 3 are visible & not 6
                tooltipType="none" // Set tooltipType to "none" for line so that only 3 are visible & not 6
                dataKey={department?.department}
                stroke="#f39c12"
                strokeWidth={4}
              />
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    );
};

export default RevenueChart;
