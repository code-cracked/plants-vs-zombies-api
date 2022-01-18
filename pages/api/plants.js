const plants_name = require("../../data/plants_name.json");
export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(plants_name.names);
}
