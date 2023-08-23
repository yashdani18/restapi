import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("dirname", __dirname);
const filePath = path.join(__dirname, "sampleData.json");
console.log("filepath", filePath);

const saveToDatabase = (DB) => {
  console.log("in saveToDatabase");
  fs.writeFileSync(filePath, JSON.stringify(DB), {
    encoding: "utf-8",
  });
};

export const utils = {
  saveToDatabase,
};
