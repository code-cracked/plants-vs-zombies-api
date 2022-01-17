export default function userHandler(req, res) {
  const {
    query: { name },
    method,
  } = req;
  const plants = require("../../../storage/plants.json");

  switch (method) {
    case "GET":
      //GET data from database
      let x = plants.data;
      let plant_data = null;
      for (let i = 0; i < x.length; i++) {
        if (x[i].name === name) {
          plant_data = x[i];
          break;
        }
      }
      if (plant_data === null) {
        res.status(200).json("No such plant exist");
      } else {
        console.log(plant_data);
        res.status(200).json(plant_data);
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
