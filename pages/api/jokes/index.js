/**
Import the "jokes" array – this just as an example to demonstrate how API communication works
Normally, this data is retrieved from the database 😉
**/
import { jokes } from "../../../lib/data";

// This function handles HTTP requests sent to the endpoint '/api/jokes'
export default function handler(request, response) {
  if (!jokes) {
    response.status(400).json({ status: "not found" });
    return;
  }

  response.status(200).json(jokes);
}
