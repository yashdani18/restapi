import { dbFunctions } from "../../database/workout.js";
import { v4 as uuid } from "uuid";

const getAllWorkouts = () => {
  const allWorkouts = dbFunctions.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  console.log("workoutToInsert", workoutToInsert);
  const createdWorkout = dbFunctions.createNewWorkout(workoutToInsert);
  //   console.log("newWorkout", newWorkout);
  return;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

export const services = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
