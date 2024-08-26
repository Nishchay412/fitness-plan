import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export function Schedule() {
  const [docId, setDocId] = useState(null);
  const [docId2, setDocId2] = useState(null);
  const [exercise, setExercise] = useState([]); // Initialize as an array
  const [diet, setDiet] = useState([]); // Initialize as an array
  const navigate = useNavigate(); // Correctly call useNavigate to get navigate function

  const handleNavigation = (item) => {
    navigate(item); // Navigate to the path specified in 'item'
  };

  useEffect(() => {
    const storedDocId = localStorage.getItem('docRefId');
    const storedDocId2 = localStorage.getItem('docRefId2');

    setDocId(storedDocId);
    setDocId2(storedDocId2);

    async function fetchDocumentById() {
      if (!storedDocId || !storedDocId2) {
        console.log("No document IDs found in localStorage.");
        return;
      }

      try {
        // Fetch exercise document
        const exerciseDocRef = doc(db, "exercises", storedDocId);
        const exerciseDocSnap = await getDoc(exerciseDocRef);
        if (exerciseDocSnap.exists()) {
          const exerciseData = exerciseDocSnap.data();
          console.log("Exercise document data:", exerciseData);
          setExercise(exerciseData.result || []); // Ensure result is an array
        } else {
          console.log("No such exercise document!");
        }
      } catch (error) {
        console.error("Error fetching exercise document:", error);
      }

      try {
        // Fetch diet document
        const dietDocRef = doc(db, "diet", storedDocId2);
        const dietDocSnap = await getDoc(dietDocRef);

        if (dietDocSnap.exists()) {
          const dietData = dietDocSnap.data();
          console.log("Diet document data:", dietData);
          setDiet(dietData.result || []); // Ensure result is an array
        } else {
          console.log("No such diet document!");
        }
      } catch (error) {
        console.error("Error fetching diet document:", error);
      }
    }

    fetchDocumentById();
  }, []); // Only run once when the component mounts

  return (
    <div className="bg-custom-background5 bg-center bg-fixed bg-cover flex flex-col items-center justify-center gap-2">
      <Header />
      <div className="flex items-center justify-center gap-5 mt-4">
        <Button className="text-white bg-black" onClick={() => handleNavigation("/diet")}>
          CLICK TO GET YOUR DIET PLAN 🍱
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {exercise.length > 0 ? (
          exercise.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border cursor-pointer rounded-lg hover:shadow-lg text-center items-center"
            >
              <h2 className="text-xl text-white font-bold">{item.day}</h2>
              <div className="flex flex-col items-center justify-center">
                {Array.isArray(item.exercises) ? (
                  item.exercises.map((exerciseDetail, i) => (
                    <div key={i} className="text-left mt-2 flex flex-col items-center">
                      <h3 className="font-bold text-lg text-white">{exerciseDetail.name}</h3>
                      {exerciseDetail.reps && (
                        <p className="text-sm text-neutral-50">
                          Frequency: {exerciseDetail.reps}
                        </p>
                      )}
                      {exerciseDetail.sets && (
                        <p className="text-sm text-neutral-50">
                          Number of Sets: {exerciseDetail.sets}
                        </p>
                      )}
                      {exerciseDetail.intensity && (
                        <p className="text-sm text-neutral-50">
                          Intensity: {exerciseDetail.intensity}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-50">No exercises for today, Enjoy 😉 </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No exercise data available.</p>
        )}
      </div>
    </div>
  );
}
