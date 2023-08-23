import { services } from "../services/service.js";

const getAllWorkouts = (req, res) => {
  const allWorkouts = services.getAllWorkouts();
  res.send(allWorkouts);
  //   res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  const oneWorkout = services.getOneWorkout();
  res.send("Get one workout");
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = services.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createNewWorkout });
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = services.updateOneWorkout();
  res.send("Update existing workout");
};

const deleteOneWorkout = (req, res) => {
  const deletedWorkout = services.deleteOneWorkout();
  res.send("Delete existing workout");
};

export const controllers = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
