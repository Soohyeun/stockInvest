"use client";
import Link from "next/link";

export function Top({ handleAboutScroll, handlePredictionScroll }) {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        StockInvest
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <button
          onClick={handleAboutScroll}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </button>
        <button
          onClick={handlePredictionScroll}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Start Prediction
        </button>
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_OWNER_EMAIL}`}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
