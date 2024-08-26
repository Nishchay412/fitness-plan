import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative text-white flex items-start justify-center h-screen w-full px-4">
      <div className="flex flex-col items-center text-center mt-20 sm:mt-32 md:mt-24 lg:mt-32 p-4 bg-transparent">
        <div className="font-extrabold text-3xl sm:text-5xl md:text-5xl lg:text-6xl">
          Transform Your Fitness Journey
        </div>
        <div className="font-semibold text-xl sm:text-3xl md:text-3xl lg:text-4xl text-purple-600 mt-2">
          with AI Precision
        </div>
        <div className="flex flex-col gap-2 mt-4 sm:flex-row">
          <Button className="text-xl font-bold bg-transparent text-white">
            START YOUR JOURNEY NOW
          </Button>
          <Button
            className="outline bg-white hover:bg-slate-800"
            onClick={() => navigate("/questions")}
          >
            <ChevronRight className="h-4 w-4 text-black hover:text-neutral-300" />
          </Button>
        </div>
      </div>
    </div>
  );
}
