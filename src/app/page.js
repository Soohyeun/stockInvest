"use client";

import { useRef } from "react";
import { Top } from "@/components/Top";
import { Prediction } from "@/components/prediction";
import { About } from "@/components/about";

export default function Home() {
  const aboutRef = useRef();
  const predictionRef = useRef();

  /**
   * Scroll to component About
   */
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  /**
   * Scroll to component Prediction
   */
  const handlePredictionScroll = () => {
    window.scrollTo({
      top: predictionRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-20">
      <Top
        handleAboutScroll={handleAboutScroll}
        handlePredictionScroll={handlePredictionScroll}
      ></Top>
      <div ref={aboutRef}>
        <About handlePredictionScroll={handlePredictionScroll}></About>
      </div>
      <div ref={predictionRef}>
        <Prediction></Prediction>
      </div>
    </div>
  );
}
