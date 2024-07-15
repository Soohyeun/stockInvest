import React from "react";

export function PredictionFail() {
  return (
    <div className="mt-10">
      <h3 className="text-5xl font-bold text-gray-500 text-center">
        The symbol you entered was not found :(
      </h3>
      <div className="pt-10 text-xl text-gray-500 text-center">
        Please enter another stock symbol.
      </div>
    </div>
  );
}
