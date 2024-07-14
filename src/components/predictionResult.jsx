import React from "react";
import { LineChart } from "./ui/LineChart";
const NUM_OF_DAYS = 10;

export function PredictionResult({ predictions, last10 }) {
  const sum_last10 = Object.values(last10).reduce(
    (acc, curr) => acc + curr.Close,
    0
  );
  const avg_last10 = sum_last10 / NUM_OF_DAYS;
  const sum_predictions = predictions.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const avg_predictions = sum_predictions / NUM_OF_DAYS;
  const increased = (avg_predictions >= avg_last10) ? true : false

  return (
    predictions.length != 0 && (
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-center">
          Predictions for upcoming 10 days
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex justify-center items-center bg-card rounded-lg p-6 flex flex-col gap-4">
            <h3 className="text-xl text-muted-foreground text-center">
              The average predicted stock price
            </h3>
            <div className={`p-7 text-6xl font-bold text-muted-foreground ${increased ? "text-blue-500" : "text-red-600"}`}>
              ${avg_predictions.toFixed(2)}
            </div>
            <div className="text-l text-muted-foreground text-center">
            Compared to the previous 10 days, the next 10 days of the stock are expected to {increased ? "increase":"decrease"} by <span className={`${increased ? "text-blue-500" : "text-red-600"}`}>{((avg_predictions/avg_last10-1)*100).toFixed(2)}%</span> {increased ? ":D":":'("}
            </div>
          </div>
          <div className="bg-card rounded-lg p-6">
            <LineChart className="w-full aspect-[4/3]" />
          </div>
        </div>
      </div>
    )
  );
}
