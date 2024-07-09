"use client";

import { useRef } from "react";
import { Top } from "@/components/Top";
import { Prediction } from "@/components/prediction";

export default function Home() {
  const aboutRef = useRef();
  const predictionRef = useRef();

  // Handling Scroll
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePredictionScroll = () => {
    window.scrollTo({
      top: predictionRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Top handleAboutScroll={handleAboutScroll} handlePredictionScroll={handlePredictionScroll}></Top>
    <div ref={aboutRef}>
      About
    </div>
    <div ref={predictionRef}>
      <Prediction></Prediction>
    </div>
    
    </>
  );
}
