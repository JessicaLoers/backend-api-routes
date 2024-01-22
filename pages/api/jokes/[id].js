/**
Import the "jokes" array – this just as an example to demonstrate how API communication works
Normally, this data is retrieved from the database 😉
**/
import { jokes } from "../../../lib/data";

/** 
 - this function handles HTTP requests sent to the endpoint '/api/jokes/[id]'.
"[id]" is a placeholder for a dynamic segment of the URL, representing a joke's ID.
**/

export default function handler(request, response) {
  // Extract the "id" parameter from the query string of the incoming HTTP request
  // This "id" is used to identify a specific joke
  const { id } = request.query;

  // Search through the "jokes" array to find a joke that matches the provided "id" from res request.query
  const joke = jokes.find((joke) => {
    return joke.id === id;
  });

  // If no joke is found with the given '"id", respond with a 404 status code indicating "Not Found"
  if (!joke) {
    response.status(404).json({ status: "not found" });
    return; // End the function execution to prevent further code execution
  }

  // If a matching joke is found, respond with a 200 status code and send the joke data in JSON format as the response
  response.status(200).json(joke);
}
