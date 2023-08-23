import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { utils } from "./utils.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Tommy V
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log("dirname", __dirname);
const filePath = path.join(__dirname, "sampleData.json");
// console.log("filepath", filePath);

let workouts = [];
try {
  workouts = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  // const jsonData = fs.readFileSync("./sampleData.json", "utf8");
  workouts = JSON.parse(workouts);
  // const entry = workouts["workouts"].filter((item, index) => item.name === "Tommy V");
  // console.log(entry);
  // console.log(parsedData); // Use the parsed JSON data here
} catch (error) {
  console.error("Error reading/parsing JSON:", error);
}

const getAllWorkouts = () => {
  // console.log("here", workouts);
  return workouts;
};

const createNewWorkout = (newWorkout) => {
  const entryFound = workouts["workouts"].filter((item) => item.name === newWorkout.name).length > 0;
  // console.log(entry);
  if (entryFound) {
    return;
  }
  workouts["workouts"].push(newWorkout);
  console.log("with new workout added...", workouts);
  utils.saveToDatabase(workouts);
  return newWorkout;
};

export const dbFunctions = {
  getAllWorkouts,
  createNewWorkout,
};
