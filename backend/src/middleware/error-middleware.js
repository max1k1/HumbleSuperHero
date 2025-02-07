const ApiError = require("../exceptions/api-error");

function f(err, req, res) {
  console.log(err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "An unexpected error occurred" });
}

module.exports = f;
