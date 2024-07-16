"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PredictionResult } from "./predictionResult";
import { AIAnalysis } from "./aiAnalysis";
import { fetchPredictionResult, fetchAIAnswer } from "@/lib/apiRequest";
import { Loading } from "./ui/loading";
import { PredictionFail } from "./predictionFail";
import { AutoCompleteInput } from "./ui/autoCompleteInput";
import nasdaqData from "../lib/nasdaq.json";

export function Prediction() {
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [last10, setLast10] = useState({});
  const [wrongSymbol, setWrongSymbol] = useState(false);
  const [aiAnswer, setAiAnswer] = useState("");

  /**
   * Get stock symbol by name user input
   */
  function getSymbolByName() {
    let inputStockSymbol = null;
    if (typeof stock === "object") {
      inputStockSymbol = stock.Symbol;
    } else if (typeof stock === "string") {
      const foundSymbol = nasdaqData.find(
        (data) =>
          data.Name.toLowerCase() === stock.toLowerCase() ||
          data.Symbol.toLowerCase() === stock.toLowerCase()
      );
      inputStockSymbol = foundSymbol ? foundSymbol.Symbol : null;
    }
    return inputStockSymbol;
  }

  /**
   * Fetch predictions and ai advice when user clicks search button
   */
  const onClickButton = async () => {
    const symbol = getSymbolByName();
    if (symbol) {
      try {
        setIsLoading(true);

        const predictionResultPromise = fetchPredictionResult(
          setPredictions,
          setLast10,
          setWrongSymbol,
          symbol
        );
        const aiAnswerPromise = fetchAIAnswer(symbol, setAiAnswer);

        await Promise.all([predictionResultPromise, aiAnswerPromise]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setWrongSymbol(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-background">
      <div className="flex flex-col items-center justify-center gap-6 max-w-5xl w-full px-4 md:px-6">
        <h2 className="text-3xl mt-20 font-bold tracking-tighter sm:text-5xl">
          Get Started Predicting
        </h2>
        <p className="max-w-[900px] text-gray-500 text-center md:text-l/relaxed lg:text-base/relaxed xl:text-l/relaxed">
          Enter a stock symbol and click the search button. The predictive model
          will be trained in a minute (sometimes it can take longer), and will
          show you the 10-day predictions. Moreover, AI will give you some
          insight of the stock!
        </p>
        <div className="w-full mt-10 max-w-md flex items-center space-x-2">
          <AutoCompleteInput inputValue={stock} onChangeFunction={setStock} />
          <Button
            onClick={onClickButton}
            disabled={isLoading}
            className="flex-shrink-0 bg-gray-500 text-white"
          >
            Search
          </Button>
        </div>
        <div className="relative min-h-[10vh]">
          {predictions.length != 0 && !wrongSymbol && (
            <div className={`${isLoading ? "opacity-20" : ""}`}>
              <PredictionResult
                predictions={predictions}
                last10={last10}
              ></PredictionResult>
              <AIAnalysis aiAnswer={aiAnswer}></AIAnalysis>
            </div>
          )}
          {wrongSymbol && (
            <div className={`${isLoading ? "opacity-20" : ""}`}>
              <PredictionFail />{" "}
            </div>
          )}
          {isLoading && <Loading />}
        </div>
      </div>
    </div>
  );
}
