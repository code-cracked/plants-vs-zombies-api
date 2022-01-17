export default function userHandler(req, res) {
  const {
    query: { name },
    method,
  } = req;
  const areas = require("../../../data/areas.json");

  switch (method) {
    case "GET":
      //GET data from database
      let x = areas.data;
      let area_data = null;
      for (let i = 0; i < x.length; i++) {
        if (x[i].name === name) {
          area_data = x[i];
          break;
        }
      }
      if (area_data === null) {
        res.status(200).json("No such areas exist");
      } else {
        console.log(area_data);
        res.status(200).json(area_data);
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
