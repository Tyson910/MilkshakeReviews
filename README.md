# New Workout Plan

``` typescript
// Basic structure is 
interface Workout {
  _id: ID;
  type: string;
  // include time here?
  date: Date;
  exercise: {
    name : string;
    isBodyWeight: boolean;
    sets : {
      reps : number;
      weight: number | null;
    }[]
  }[]
}
```

CRUD operations for a workouts

## Create a workout

- Route: `POST /api/create-workout`

User stories/goals

1. Protect this route by auth...only I can create new workouts
2. Type: User can preselect workout template "Pull 1" | "Pull 2" | "Push 1" | "Push 2"
3. Date: Set workout date as today by default
4. Exercise[]: Can add as many exercises as needed (All workouts require at least one exercise)
5. Exercise[number]: Each exercise needs a name, isBodyWeight, and at least one set
6. Exercise[number]['sets'][] User can add as many sets to an exercise as needed (All sets require a number of sets, if !isBodyWeight then weight is also required)
7. Exercise[number]['sets'][number] User can fill out reps/weight info for a given exercise
8. Give sucess or failure message
9. Create new workout item or view old workouts

## Read a workout

- Route: `GET /api/get-workout/:id OR /api/get-workouts?date-range=[]`

User stories/goals

1. Can find workout by ID
2. Display all properties of Workout
3. Get multiple workouts based on queries, can combine different combos
  
## Update a workout

- Route: ``

User stories/goals

1. Can find workout by ID or get multiple workouts
2. Display all properties of Workout
3. User can update any value in a set
4. User can update any value in a exercise
5. User can update any value in a workout

## Delete a workout

- Route: `DELETE /api/delete-workout`
User stories/goals

1. Can find workout by ID or get multiple workouts
2. Display all properties of Workout
3. User can delete all but one set
4. User can delete all but one exercise
5. User can delete a workout
