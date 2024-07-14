import { Chart } from "react-google-charts";
import moment from "moment-business-days";

export function StockGraph({ predictions, last10 }) {
  const data = [["Date", "price", { role: "style" }]];
  const options = {
    series: {
      curveType: "function",
    },
    legend: { position: "in" },
    format: "MMM d, y",
    chartArea: {
      width: "85%",
      height: "70%",
    },
    hAxis: {
      slantedText: true,
      slantedTextAngle: 45,
      ticks: [],
    },
  };

  // Get next 10 business days
  const next10businessDays = [];
  let currentDate = moment();
  while (next10businessDays.length < 10) {
    if (currentDate.isBusinessDay()) {
        next10businessDays.push(currentDate.format('YYYY.MM.DD'));
    }
    currentDate = currentDate.add(1, 'days');
  }

  // Push last 10 days datas into data
  last10.forEach((item, index) => {
    const date = new Date(item.Date)
      .toISOString()
      .split("T")[0]
      .replace(/-/g, ".");
    data.push([date, item.Close, "blue"]);
  });

  // Push next 10 days predictions into data
  predictions.forEach((item, index) => {
    const date = next10businessDays[index];
    data.push([date, item, "red"]);
  });

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
