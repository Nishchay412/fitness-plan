import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Header } from "./header";
import { Button } from "./ui/button";

export function Diet() {
  const [diet, setDiet] = useState([]);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const storedDocId2 = localStorage.getItem("docRefId2");

    if (!storedDocId2) {
      console.log("No document ID found in localStorage.");
      return;
    }

    const fetchDietData = async () => {
      try {
        const dietDocRef = doc(db, "diet", storedDocId2);
        const dietDocSnap = await getDoc(dietDocRef);

        if (dietDocSnap.exists()) {
          const dietData = dietDocSnap.data();
          console.log("Diet document data:", dietData);
          if (dietData.result) {
            setDiet(dietData.result);
          } else {
            console.log("No result found in diet document!");
          }
        } else {
          console.log("No such diet document!");
        }
      } catch (error) {
        console.error("Error fetching diet document:", error);
      }
    };

    fetchDietData();
  }, []);

  return (
    <div className="bg-custom-background4 bg-center bg-fixed bg-cover flex flex-col items-center justify-center gap-4 p-4">
      <Header />
      <div className="flex items-center justify-center gap-5 mt-4 w-full max-w-lg">
        <Button
          className="bg-green-500 bg-opacity-50 text-white p-4 w-full md:w-auto"
          onClick={() => handleNavigation("/schedule")}
        >
          CLICK TO GET YOUR FITNESS PLAN 💪🏻
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full max-w-5xl">
        {diet.length > 0 ? (
          diet.map((dayPlan, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border cursor-pointer rounded-lg hover:shadow-lg text-center items-center bg-opacity-80"
            >
              <h2 className="text-xl text-green-300 font-bold">{dayPlan.day}</h2>
              <div className="flex flex-col items-center justify-center">
                {Array.isArray(dayPlan.meals) ? (
                  dayPlan.meals.map((meal, i) => (
                    <div
                      key={i}
                      className="text-left mt-2 flex flex-col items-center justify-center w-full"
                    >
                      <h3 className="font-bold text-lg text-white">{meal.time}</h3>

                      {Array.isArray(meal.options) ? (
                        meal.options.map((option, j) => (
                          <div
                            key={j}
                            className="text-sm text-neutral-50 mb-2 flex flex-col items-center justify-center"
                          >
                            <p className="font-bold text-green-300">{option.option}</p>
                            <p className="text-neutral-50">{option.details}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-neutral-50">No meal options available.</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-50">No meals for today, Enjoy 😉</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No diet data available.</p>
        )}
      </div>
    </div>
  );
}
