/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
  
 /*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

  
  const apiKey = "AIzaSyDFzCGZgW8Iavqj2YbdbX28WqhiwxUmLNw" 
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
  export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Create a JSON object containing two sections: a workout schedule and a diet schedule for a 10-20-year-old male who is looking to gain weight. The workout schedule should include exercises with details such as name, sets, reps, and rest time. The diet schedule should be vegetarian and include meals with multiple options for each meal time. Ensure the JSON format is valid, with each string value properly enclosed in double quotes, and separate the workout and diet sections clearly. make sure you do follow the correct rules for making json just make sure everything you write is in json and nothing outside it . Missing Commas: Ensure that properties in the JSON string are separated by commas.\nIncorrect Braces: Make sure that all objects {} and arrays [] are correctly closed.\nUnescaped Characters: Ensure that any special characters, like quotes within string values, are properly escaped. "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"workout_schedule\": [{\"day\": \"Monday\", \"exercises\": [{\"name\": \"Squats\", \"sets\": 3, \"reps\": 8-12, \"rest\": \"60 seconds\"}, {\"name\": \"Bench Press\", \"sets\": 3, \"reps\": 8-12, \"rest\": \"60 seconds\"}, {\"name\": \"Deadlifts\", \"sets\": 1, \"reps\": 5, \"rest\": \"120 seconds\"}, {\"name\": \"Overhead Press\", \"sets\": 3, \"reps\": 8-12, \"rest\": \"60 seconds\"}, {\"name\": \"Barbell Rows\", \"sets\": 3, \"reps\": 8-12, \"rest\": \"60 seconds\"}]}, {\"day\": \"Tuesday\", \"exercises\": [{\"name\": \"Leg Press\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"60 seconds\"}, {\"name\": \"Leg Extensions\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}, {\"name\": \"Hamstring Curls\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}, {\"name\": \"Calf Raises\", \"sets\": 3, \"reps\": 15-20, \"rest\": \"30 seconds\"}]}, {\"day\": \"Wednesday\", \"exercises\": [{\"name\": \"Pull-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": \"90 seconds\"}, {\"name\": \"Dips\", \"sets\": 3, \"reps\": \"Max\", \"rest\": \"90 seconds\"}, {\"name\": \"Push-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": \"60 seconds\"}]}, {\"day\": \"Thursday\", \"exercises\": [{\"name\": \"Dumbbell Shoulder Press\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"60 seconds\"}, {\"name\": \"Lateral Raises\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}, {\"name\": \"Front Raises\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}]}, {\"day\": \"Friday\", \"exercises\": [{\"name\": \"Bicep Curls\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}, {\"name\": \"Tricep Extensions\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}, {\"name\": \"Hammer Curls\", \"sets\": 3, \"reps\": 10-15, \"rest\": \"45 seconds\"}]}, {\"day\": \"Saturday\", \"exercises\": [{\"name\": \"Cardio (running, swimming, cycling)\", \"duration\": \"30-45 minutes\", \"intensity\": \"Moderate\"}]}, {\"day\": \"Sunday\", \"exercises\": \"Rest\"}], \"diet_schedule\": {\"breakfast\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}], \"lunch\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}], \"dinner\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "you need to keep these things in mind before making json file Invalid Range Values: In JSON, you need to use strings for ranges or numerical values. The 8-12 and 10-15 ranges should be quoted to be valid JSON.\n\nInvalid Data Type for \"Rest\": The \"Rest\" key in some items is a string like \"None\" or \"60 seconds\", which is fine. However, ensure consistency in the formatting.\n\nMissing Values in JSON: Check that all keys and values are correctly formatted and closed."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"workout_schedule\": [{\"day\": \"Monday\", \"exercises\": [{\"name\": \"Squats\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Bench Press\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Deadlifts\", \"sets\": 1, \"reps\": 5, \"rest\": 120}, {\"name\": \"Overhead Press\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Barbell Rows\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}]}, {\"day\": \"Tuesday\", \"exercises\": [{\"name\": \"Leg Press\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 60}, {\"name\": \"Leg Extensions\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Hamstring Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Calf Raises\", \"sets\": 3, \"reps\": \"15-20\", \"rest\": 30}]}, {\"day\": \"Wednesday\", \"exercises\": [{\"name\": \"Pull-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 90}, {\"name\": \"Dips\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 90}, {\"name\": \"Push-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 60}]}, {\"day\": \"Thursday\", \"exercises\": [{\"name\": \"Dumbbell Shoulder Press\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 60}, {\"name\": \"Lateral Raises\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Front Raises\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}]}, {\"day\": \"Friday\", \"exercises\": [{\"name\": \"Bicep Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Tricep Extensions\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Hammer Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}]}, {\"day\": \"Saturday\", \"exercises\": [{\"name\": \"Cardio (running, swimming, cycling)\", \"duration\": \"30-45 minutes\", \"intensity\": \"Moderate\"}]}, {\"day\": \"Sunday\", \"exercises\": \"Rest\"}], \"diet_schedule\": {\"breakfast\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}], \"lunch\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}], \"dinner\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "also i want the weekly daily diet plan just as you made it for the exercises , again i just want json no other data than that "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"workout_schedule\": [{\"day\": \"Monday\", \"exercises\": [{\"name\": \"Squats\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Bench Press\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Deadlifts\", \"sets\": 1, \"reps\": 5, \"rest\": 120}, {\"name\": \"Overhead Press\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}, {\"name\": \"Barbell Rows\", \"sets\": 3, \"reps\": \"8-12\", \"rest\": 60}]}, {\"day\": \"Tuesday\", \"exercises\": [{\"name\": \"Leg Press\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 60}, {\"name\": \"Leg Extensions\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Hamstring Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Calf Raises\", \"sets\": 3, \"reps\": \"15-20\", \"rest\": 30}]}, {\"day\": \"Wednesday\", \"exercises\": [{\"name\": \"Pull-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 90}, {\"name\": \"Dips\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 90}, {\"name\": \"Push-ups\", \"sets\": 3, \"reps\": \"Max\", \"rest\": 60}]}, {\"day\": \"Thursday\", \"exercises\": [{\"name\": \"Dumbbell Shoulder Press\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 60}, {\"name\": \"Lateral Raises\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Front Raises\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}]}, {\"day\": \"Friday\", \"exercises\": [{\"name\": \"Bicep Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Tricep Extensions\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}, {\"name\": \"Hammer Curls\", \"sets\": 3, \"reps\": \"10-15\", \"rest\": 45}]}, {\"day\": \"Saturday\", \"exercises\": [{\"name\": \"Cardio (running, swimming, cycling)\", \"duration\": \"30-45 minutes\", \"intensity\": \"Moderate\"}]}, {\"day\": \"Sunday\", \"exercises\": \"Rest\"}], \"diet_schedule\": [{\"day\": \"Monday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Tuesday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Wednesday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Thursday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Friday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Saturday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}, {\"day\": \"Sunday\", \"meals\": [{\"time\": \"Breakfast\", \"options\": [{\"option\": \"Oatmeal with fruit and nuts\", \"details\": \"1 cup rolled oats, 1/2 cup berries, 1/4 cup almonds\"}, {\"option\": \"Tofu Scramble\", \"details\": \"1/2 cup firm tofu, 1/4 cup chopped vegetables, 1 tsp olive oil\"}, {\"option\": \"Whole-wheat toast with avocado and egg\", \"details\": \"2 slices whole-wheat toast, 1/4 avocado, 1 egg\"}]}, {\"time\": \"Lunch\", \"options\": [{\"option\": \"Lentil soup with whole-wheat bread\", \"details\": \"1 cup lentil soup, 2 slices whole-wheat bread\"}, {\"option\": \"Veggie burger on whole-wheat bun\", \"details\": \"1 veggie burger, 1 whole-wheat bun, side salad\"}, {\"option\": \"Quinoa salad with chickpeas and vegetables\", \"details\": \"1 cup quinoa, 1/2 cup chickpeas, 1 cup chopped vegetables\"}]}, {\"time\": \"Dinner\", \"options\": [{\"option\": \"Vegetable curry with brown rice\", \"details\": \"1 cup vegetable curry, 1/2 cup brown rice\"}, {\"option\": \"Chickpea pasta with marinara sauce\", \"details\": \"1 cup chickpea pasta, 1/2 cup marinara sauce, 1/2 cup vegetables\"}, {\"option\": \"Baked potato with black beans and salsa\", \"details\": \"1 baked potato, 1/2 cup black beans, 1/4 cup salsa\"}]}]}]}\n\n\n```"},
          ],
        },
      ],
    });
  
  