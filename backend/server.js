const app = require("./app");
const port = process.env.SERVER_PORT || 5002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
