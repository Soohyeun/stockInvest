/**
 * Fetch prediction result using API.
 * @param {string} stockSimbol - symbol of stock that will be predicted
 */
export const fetchPredictionResult = async (
  setPredictions,
  setLast10,
  setWrongSymbol,
  stockSimbol
) => {
  const url = `${process.env.NEXT_PUBLIC_PREDICTION_API_URL}${[
    process.env.NEXT_PUBLIC_PREDICTION_API_END_POINT,
  ]}${stockSimbol}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 400) {
        setWrongSymbol(true);
      }
      throw new Error("Fail to fetch prediction.");
    }
    const res = await response.json();
    setWrongSymbol(false);
    setPredictions(res.predictions);
    setLast10(res.last10);
  } catch (error) {
    console.error("Error fetching prediction.", error);
  }
};
