# Instructions to Run a JSON Server

- Install Node.js: To run a JSON server, you first need to install Node.js on your machine. You can download the latest version of Node.js from the official website: <https://nodejs.org>.

- Install JSON Server: Once you have Node.js installed, you can use the Node Package Manager (npm) to install JSON Server. Open your terminal or command prompt and run the following command:

```js
npm install -g json-server
```

- Start the JSON Server: Once you have your JSON file ready, you can start the JSON server by running the following command in your terminal:

```js
json-server --watch db-movies.json
```

- Test the API: The JSON server should now be running at http://localhost:3000. You can test the API by making HTTP requests to this URL using a tool like cURL or a web browser. The JSON server will respond with the data from your JSON file.
