const httpErrors = require("http-errors");
const axios = require("axios");

/**
 * search keyword in object
 * @param  keyword
 * @returns {?Promise}
 */
const searchKeyword = async (keyword) => {
  try {
    let { data: trips } = await axios.get(
      `${process.env.JSON_SERVER_ENDPOINT}/trips`
    );

    if (keyword !== "") {
      trips = trips.filter((obj) =>
        Object.keys(obj).some((key) => obj[key].includes(keyword))
      );
    }

    return { trips };
  } catch (err) {
    console.error(err);
    throw httpErrors(500, {
      info: err,
    });
  }
};

module.exports = {
  searchKeyword,
};
