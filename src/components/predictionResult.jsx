import { LineChart } from "./ui/LineChart";

export function PredictionResult() {
  return (
    <div>
      <h3 className="text-xl font-bold">Predictions for upcoming 10 days</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="bg-card rounded-lg p-6 flex flex-col gap-4">
          <p className="text-muted-foreground">
            This is where you can find more details about the information you
            entered.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6">
          <LineChart className="w-full aspect-[4/3]" />
        </div>
      </div>
    </div>
  );
}
