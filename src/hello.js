"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "implemented serverless with aws app cicd logs ggs",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
