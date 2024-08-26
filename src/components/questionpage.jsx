import React, { useState } from "react";
import { Header } from "./header";
import { AGE, GOAL, GENDER, FOOD, DIET_PREF } from "./constants/constants";
import { ComboboxDemo } from "./combobox";
import { AI_PROMPT } from "./constants/constants";
import { Button } from "./ui/button";
import { chatSession } from "./aimodel";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

export function Questions() {
  const [selectedHealth, setSelectedHealth] = useState("");
  const [goal, setGoal] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [diet, setDiet] = useState(null);
  const [dietpref, setDietpref] = useState(null);
  const [healthissue, setHealth] = useState("");
  const navigate = useNavigate();

  const handleHealthSelect = (healthCondition) => {
    setHealth(healthCondition);
  };

  const generatePrompt = async () => {
    if (age && gender && diet && healthissue && goal) {
      const updatedPrompt = AI_PROMPT
        .replace("{age}", age)
        .replace("{gender}", gender)
        .replace("{goal}", goal)
        .replace("{health_condition}", healthissue)
        .replace("{diet}", diet)
        .replace("{cuisine}", dietpref || "");
  
      console.log("Prompt:", updatedPrompt);
  
      try {
        const result = await chatSession.sendMessage(updatedPrompt);
        const responseText = await result?.response?.text();
  
        // Log the raw response
        console.log("Raw Response:", responseText);
  
        // Try parsing the response
        const responseData = JSON.parse(responseText);
        console.log("Parsed Response:", responseData);
  
        const exercise = responseData.workout_schedule;
        const diet = responseData.diet_schedule;
  
        const docRef = await addDoc(collection(db, "exercises"), {
          prompt: updatedPrompt,
          result: exercise,
          age: age,
          diet: diet,
          health: healthissue,
          createdAt: new Date(),
        });
        console.log("Document written with ID:", docRef.id);
        localStorage.setItem("docRefId", docRef.id);
  
        const docRef2 = await addDoc(collection(db, "diet"), {
          prompt: updatedPrompt,
          result: diet,
          age: age,
          diet: diet,
          health: healthissue,
          createdAt: new Date(),
        });
        console.log("Document written with ID:", docRef2.id);
        localStorage.setItem("docRefId2", docRef2.id);
        navigate("/schedule");
      } catch (error) {
        console.error("Error generating prompt or handling response:", error);
      }
    } else {
      console.error("Missing information for generating the prompt.");
    }
  };

  return (
    <div className="bg-custom-background2 bg-center bg-fixed bg-cover flex flex-col items-center justify-center gap-2">
      <Header />
      <div className="flex flex-col items-center justify-start w-full pt-20">
        <h1 className="font-bold text-xl text-white">TELL US YOUR GENDER</h1>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {GENDER.map((item, index) => (
            <div
              key={index}
              className={`p-4 border cursor-pointer rounded-lg text-center ${
                gender === item.title ? "bg-white text-black" : "text-white"
              } hover:shadow-lg`}
              onClick={() => setGender(item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-neutral-50">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-20">
        <h1 className="font-bold text-xl text-white">TELL US YOUR AGE</h1>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {AGE.map((item, index) => (
            <div
              key={index}
              className={`p-4 border cursor-pointer rounded-lg text-center ${
                age === item.title ? "bg-white text-black" : "text-white"
              } hover:shadow-lg`}
              onClick={() => setAge(item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-20">
        <h1 className="font-bold text-xl text-white">TELL US YOUR GOAL</h1>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {GOAL.map((item, index) => (
            <div
              key={index}
              className={`p-4 border cursor-pointer rounded-lg text-center ${
                goal === item.title ? "bg-white text-black" : "text-white"
              } hover:shadow-lg`}
              onClick={() => setGoal(item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-5">
        <h1 className="text-white font-extrabold text-xl">
          TELL US ABOUT YOUR HEALTH CONDITION
        </h1>
        <ComboboxDemo onSelectHealth={handleHealthSelect} />
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-20">
        <h1 className="font-bold text-xl text-white">
          WHAT ARE YOUR DIETARY PREFERENCES
        </h1>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {FOOD.map((item, index) => (
            <div
              key={index}
              className={`p-4 border cursor-pointer rounded-lg text-center ${
                diet === item.title ? "bg-white text-black" : "text-white"
              } hover:shadow-lg`}
              onClick={() => setDiet(item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-neutral-50">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-20">
        <h1 className="font-bold text-xl text-white">
          DO YOU HAVE ANY CUISINE PREFERENCE
        </h1>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {DIET_PREF.map((item, index) => (
            <div
              key={index}
              className={`p-4 border cursor-pointer rounded-lg text-center ${
                dietpref === item.title ? "bg-white text-black" : "text-white"
              } hover:shadow-lg`}
              onClick={() => setDietpref(item.title)}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="mt-10 bg-black text-white font-bold"
        onClick={generatePrompt}
      >
        GENERATE SCHEDULE 💪🏻
      </Button>
    </div>
  );
}
