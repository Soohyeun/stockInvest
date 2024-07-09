  /**
   * Fetch prediction result using API.
   * @param {string} stockSimbol - symbol of stock that will be predicted
   */
  export const fetchPredictionResult = async (setPredictions, stockSimbol) => {

    console.log("CLICK");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_PREDICTION_API_URL}${process.env.NEXT_PUBLIC_PREDICTION_API_END_POINT}NVDA`
      );

      if (!response.ok) {
        throw new Error("Fail to fetch prediction.");
      }
      const res = await response.json();
      console.log(res);
      setPredictions(res);
    } catch (error) {
      console.error("Error fetching prediction.", error);
      throw new Error("Failed to fetch prediction. Check stock symbol again");
    }
  };