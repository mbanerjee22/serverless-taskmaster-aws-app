"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "implemented serverless with aws & cicd monitoring",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
