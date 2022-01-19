const plants_name = require("../../data/plants_name.json");
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
  res.status(200).json(plants_name.names);
}
