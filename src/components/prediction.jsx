import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PredictionResult } from "./predictionResult";
import { AIAnalysis } from "./aiAnalysis";

export function Prediction() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-background">
      <div className="flex flex-col items-center justify-center gap-6 max-w-5xl w-full px-4 md:px-6">
        <div className="w-full max-w-md flex items-center space-x-2">
          <Input
            placeholder="Enter your information"
            className="w-full rounded-full py-3 px-4 text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button className="flex-shrink-0 bg-gray-500 text-white">
            Search
          </Button>
        </div>
        <PredictionResult></PredictionResult>
        <AIAnalysis></AIAnalysis>
      </div>
    </div>
    )
}