import { Button } from "./ui/button";

export function About({ handlePredictionScroll }) {
  return (
    <main className="flex flex-col">
      <section className="container px-4 md:px-6 md:py-8 lg:py-10 space-y-10 xl:space-y-16">
        <div className="grid mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <img className="md:hidden" src="/boy_stock.jpg"></img>
          <div className="flex flex-col justify-center items-start">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Train predictive model,
            </h1>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              <span className="text-cyan-800">Predict the stock prices </span>
              for the next <span className="text-red-500">10 </span>days
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-l mt-5">
              Once you enter a stock symbol, our predictive model is trained
              with data from the past 1000 days and predicts the stock price for
              the next 10 days. You will also see the AI-generated analysis of
              the stock.
            </p>
            <Button
              onClick={handlePredictionScroll}
              className="mt-10 mb-10 lg:mb-0"
            >
              Click here to start the prediction
            </Button>
          </div>
          <img className="hidden md:block" src="/boy_stock.jpg"></img>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center bg-blue-50">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How to Forecast the price
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Based on data from the past 1000 days, our predictive model will
                forecast the stock you enter, while AI will offer insights into
                its investment potential.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">ARIMA Model</h3>
              <p className="text-sm text-gray-500">
                Our predictive model utilizes an ARIMA model with optimized
                parameters to achieve the lowest RMSE.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Past 1000 Days Data</h3>
              <p className="text-sm text-gray-500">
                The predictive model is trained using closing prices from the
                past 1000 days sourced from Yahoo Finance.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">AI Analysis</h3>
              <p className="text-sm text-gray-500">
                AI analysis is powered by GPT-4.0, providing insights into
                investment potential.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Caution</h3>
              <p className="text-sm text-gray-500">
                Predictions are only based on historical data and should be used
                for reference purposes only; they do not guarantee profits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
