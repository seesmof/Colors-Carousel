"use client";

import { useState } from "react";

const colors: string[] = [
  "bg-red-600",
  "bg-green-600",
  "bg-emerald-600",
  "bg-blue-600",
  "bg-cyan-600",
  "bg-amber-600",
  "bg-pink-600",
];

export default function Page() {
  const [index, setIndex] = useState<number>(0);
  const [color, setColor] = useState<string>(colors[index]);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto w-full bg-white rounded-md p-5">
        <header className="flex flex-col gap-3 mb-5">
          <h1 className="text-3xl md:text-5xl font-black">Colors Carousel</h1>
          <p className="text-lg text-stone-700">
            This is a simple app that features a slides carousel.
          </p>
          <button
            className="bg-stone-100 p-2 rounded-md cursor-pointer active:scale-95"
            onClick={() => setIsMoving((moving) => !moving)}
          >
            Toggle automatic movement
          </button>
          <p>{isMoving.toString()}</p>
        </header>
        <main className="flex flex-row gap-3 items-center">
          <button
            className="bg-stone-100 cursor-pointer select-none active:scale-95 p-3 rounded-md h-80"
            onClick={() => {
              const prevIndex = index > 0 ? index - 1 : colors.length - 1;
              setIndex(prevIndex);
              setColor(colors[prevIndex]);
            }}
          >
            Prev
          </button>
          <div className={`rounded-md ${color} h-80 flex-1`}></div>
          <button
            className="bg-stone-100 cursor-pointer select-none active:scale-95 p-3 rounded-md h-80"
            onClick={() => {
              const nextIndex = index < colors.length - 1 ? index + 1 : 0;
              setIndex(nextIndex);
              setColor(colors[nextIndex]);
            }}
          >
            Next
          </button>
        </main>
      </div>
    </div>
  );
}
