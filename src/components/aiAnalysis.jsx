export function AIAnalysis({aiAnswer}) {

  return (
    <div className="grid w-full w-full items-center justify-center mt-10">
      <h3 className="text-2xl font-bold text-center">Analysis from AI</h3>
      <p className="text-muted-foreground text-center pt-5">
        {aiAnswer}
      </p>
    </div>
  );
}
