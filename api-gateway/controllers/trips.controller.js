const logger = require("../utils/logger");
const Service = require("../services/trips.service");

/**
 * The getDE
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.searchKeyword = async (req, res, next) => {
  const { keyword = "" } = req.query;

  try {
    const result = await Service.searchKeyword(keyword);
    res.status(200).send(result);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
