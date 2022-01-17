const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const plants = require("../../storage/plants.json");
export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(plants.data);
}
