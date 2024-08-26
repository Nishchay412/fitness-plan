export const AGE=[
    {
        id:1,
        title:'10-18',
        desc:'Teenager',
        icon:'👦🏻 👧🏻',
    },
    {
        id:2,
        title:'18-40',
        desc:'Adults',
        icon:'👨🏻 👩🏻',
    },
    {
        id:3,
        title:'40-65',
        desc:'Mature Adult',
        icon:'🧔🏻‍♂️ 👩🏻‍🦰',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'65-85',
        desc:'Old',
        icon:'👴🏻 👵🏻',
    },
]

export const DIET_PREF=[
    {
        id:1,
        title:'Indian ',
        desc:'Teenager',
        icon:'🥘',
    },
    {
        id:2,
        title:'Chinese',
        desc:'',
        icon:'🥡',
    },
    {
        id:3,
        title:'Italian',
        desc:'Mature Adult',
        icon:'🍝',
        people:'🍝'
    },
    {
        id:4,
        title:'No Preference',
        desc:'',
        icon:'🚫',
    },
]
export const GENDER=[
    {
        id:1,
        title:'MALE',
        desc:'',
        icon:'🙋🏻‍♂️',
    },
    {
        id:2,
        title:'FEMALE',
        desc:' ',
        icon:'🙋🏻‍♀️',
    },

]
export const FOOD=[
    {
        id:1,
        title:'VEG',
        desc:'',
        icon:'🥙',
    },
    {
        id:2,
        title:'NON VEG',
        desc:' ',
        icon:'🥩',
    },

]



export const GOAL=[
    {
        id:1,
        title:'GAIN WEIGHT',
        icon:'🏋🏻‍♂️ 🍖 📈',
    },
    {
        id:2,
        title:'LOOSE WEIGHT',
        desc:'Keep cost on the average side',
        icon:' 🏋🏻‍♂️ 🥗 🏃🏻‍♂️',
    },
    {
        id:3,
        title:'Stress Relief',
        desc:'Dont worry about cost',
        icon:'🤸🏻‍♂️ 😮‍💨 ',
    },
    {
        id:3,
        title:' Training for an Event',
        desc:'Dont worry about cost',
        icon:'🏋🏻‍♂️ 🧗🏻‍♂️ 🚴🏻‍♂️ ',
    }
    
]

export const AI_PROMPT = "Create a JSON object containing two sections: 'workout_schedule' and 'diet_schedule.' This JSON object should be tailored for a user with the following attributes: Age: {age}, Gender: {gender}, Goal: {goal} (if the goal is stress relief, include yoga exercises), and Health Condition: {health_condition}. Workout Schedule: Include exercises suitable for the user's goal and health condition. Each exercise should have the following details: 'name': The name of the exercise, 'sets': Number of sets, 'reps': Number of repetitions, 'rest_time': Rest time in seconds between sets. Ensure that any necessary modifications are made to accommodate the user's health condition. Diet Schedule: The diet should be {diet} and aligned with the user's goal. Meals should reflect the user's preference for {cuisine} cuisine. Provide meal options for each meal time, ensuring nutritional needs are met. The diet schedule should cover a week (Monday to Sunday) Do not rearrange or misorder the days; Monday must be the first day in the sequence IN JSON ., with meals tailored to the fitness goal: Avoid high-calorie meals if the goal is to lose weight, Include high-calorie meals if the goal is to gain weight.  JSON Format Guidelines: Ensure the JSON format is valid. Enclose all keys and string values in double quotes. Separate the 'workout_schedule' and 'diet_schedule' sections clearly. Use proper nesting of braces '{}' for objects and brackets '[]' for arrays. Remove any trailing commas to maintain valid JSON syntax. Here's an example structure to follow: { 'workout_schedule': [ { 'name': 'Push-ups', 'sets': 3, 'reps': 12, 'rest_time': 60 } ], 'diet_schedule': { 'Monday': { 'breakfast': ['Option 1', 'Option 2'], 'lunch': ['Option 1', 'Option 2'], 'dinner': ['Option 1', 'Option 2'] }, 'Tuesday': { 'breakfast': ['Option 1', 'Option 2'], 'lunch': ['Option 1', 'Option 2'], 'dinner': ['Option 1', 'Option 2'] } } }"