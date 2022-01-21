const zoombies_name = require("../../data/zoombies_name.json");
export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
    };
  }
) {
  // Get data from your database
  res.status(200).json(zoombies_name.names);
}
