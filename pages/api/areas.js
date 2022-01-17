const areas = require("../../data/areas.json");
export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(areas.data);
}
