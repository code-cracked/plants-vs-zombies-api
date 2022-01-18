export default function userHandler(req, res) {
  const {
    query: { name },
    method,
  } = req;
  const areas = require("../../../data/areas.json");

  switch (method) {
    case "GET":
      //GET data from database
      if (!areas.data[name]) {
        res.status(404).json("No such area exists");
      } else {
        res.status(404).json(areas.data[name]);
      }
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json("Nothing to see here");
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
