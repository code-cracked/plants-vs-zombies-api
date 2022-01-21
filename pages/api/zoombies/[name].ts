export default function userHandler(
  req: { query: { name: any }; method: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      end: { (arg0: string): void; new (): any };
      json: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
) {
  const {
    query: { name },
    method,
  } = req;
  const zoombies = require("../../../data/zoombies.json");

  switch (method) {
    case "GET":
      //GET data from database
      let x = zoombies.data;
      if (!x[name]) {
        res.status(404).end("No such zoombie exists");
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
