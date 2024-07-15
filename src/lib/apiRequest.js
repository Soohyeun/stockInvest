/**
 * Fetch prediction result using API.
 * @param {Object} setPredictions - useState that changes predictions dictionary
 * @param {Object} setLast10 - useState that changes last10 list
 * @param {Object} setWrongSymbol - useState that changes boolean wrongsymbol
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
  // console.log(url);
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

/**
 * Fetch prediction result using API.
 * @param {string} stockSimbol - symbol of stock
 * @param {Object} setAiAnswer - useState that changes AI answer
 */
export const fetchAIAnswer = async (stockSimbol, setAiAnswer) => {
  const url = `${process.env.NEXT_PUBLIC_INTERNAL_API_URL}${process.env.NEXT_PUBLIC_OPENAI_END_POINT}${stockSimbol}`;
  // console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fail to fetch AI Answer.");
    }
    const res = await response.json();
    // console.log(res);
    setAiAnswer(res.content);
  } catch (error) {
    console.error("Error fetching AI Answer..", error);
  }
};
