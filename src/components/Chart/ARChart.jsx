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
import Loader from "../../ui/Loader";

const types = [
  "Overdue (>30 days)",
  "Overdue (>15 days)",
  "Overdue (<15 days)",
  "Due in 15 Days",
  "Due in 30 Days",
  "Due in > 30 Days",
];

const formateARChartData = (chartData) => {
  const formattedData = [];

  let prevTotal = 0;
  const calculateCumulativeData = (Total) => {
    prevTotal += Total;
    return prevTotal;
  };

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

    const cumulativeTotal = calculateCumulativeData(entry.Total); // Add the cumulative figures for the
    entry["Cumulative Total"] = cumulativeTotal;

    formattedData.push(entry);
  });
  return formattedData;
};

export default function ARChart({ chartData }) {
  const [reportsChartData, setReportsChartData] = useState([]);

  useEffect(() => {
    if (chartData && chartData?.length > 0) {
      const formatedData = formateARChartData(chartData);
      console.log({ formatedData });
      setReportsChartData(formatedData);
    }
  }, [chartData]);

  if (reportsChartData.length === 0) return <Loader />;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        width={800}
        height={400}
        data={reportsChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" />

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

        {["SLS-KAM-WEST", "SLS-KAM-SOUTH", "SLS-KAM-NORTH"]?.map(
          (departmentName, index) => {
            return (
              <Bar
                key={index}
                dataKey={departmentName}
                stackId="a"
                fill={getColorForDepartment(index)}
                yAxisId="left" // Associate this Bar series with the left Y-Axis
              />
            );
          }
        )}

        <Line
          type="linear"
          dataKey="Cumulative Total"
          stroke="#f39c12"
          strokeWidth={4}
          yAxisId="right" // Associate this Line series with the right Y-Axis
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
