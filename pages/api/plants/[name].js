export default function userHandler(req, res) {
  const {
    query: { name },
    method,
  } = req;
  const plants = require("../../../data/plants.json");

  switch (method) {
    case "GET":
      //GET data from database
      let x = plants.data;
      if (!x[name]) {
        res.status(404).end("No such plant exists");
      } else {
        res.status(200).json(x[name]);
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
