  /**
   * Fetch prediction result using API.
   * @param {string} stockSimbol - symbol of stock that will be predicted
   */
  export const fetchPredictionResult = async (setPredictions, setLast10, stockSimbol) => {
    const url = `${process.env.NEXT_PUBLIC_PREDICTION_API_URL}${[process.env.NEXT_PUBLIC_PREDICTION_API_END_POINT]}${stockSimbol}`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fail to fetch prediction.");
      }
      const res = await response.json();
      console.log(res);
      setPredictions(res.predictions);
      setLast10(res.last10);
    } catch (error) {
      console.error("Error fetching prediction.", error);
      throw new Error("Failed to fetch prediction. Check stock symbol again");
    }
  };
