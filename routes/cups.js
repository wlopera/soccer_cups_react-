const express = require("express");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./db.json");
const router = express.Router();

const getCups = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const cups = JSON.parse(data);
    res.json(cups);
  } catch (error) {
    next(error);
  }
};

const getCupByYear = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const cups = JSON.parse(data);
    const dataCups = cups.find((cup) => `${cup.year}` === `${req.params.year}`);
    if (!dataCups) {
      const err = new Error(`No existe datos para ese año: ${req.params.year}`);
      err.code = 204;
      res.json({
        error: {
          code: err.code,
          message: err.message,
        },
      });
    }
    res.json(dataCups);
  } catch (e) {
    next(e);
  }
};

const addCup = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const cups = JSON.parse(data);
    const newCups = {
      id: req.body.id,
      headquarter: req.body.headquarter,
      year: req.body.year,
      champion: req.body.champion,
      score: req.body.score,
      subChampion: req.body.subChampion,
    };

    cups.push(newCups);
    fs.writeFileSync(filePath, JSON.stringify(cups));
    res.status(201).json(newCups);
  } catch (error) {
    next(error);
  }
};

const updateCup = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const cups = JSON.parse(data);
    const dataCups = cups.find((cup) => `${cup.year}` === `${req.params.year}`);

    if (!dataCups) {
      const err = new Error(`No existe datos para ese año: ${req.params.year}`);
      err.code = 204;
      throw err;
    }
    const newCups = {
      id: req.body.id,
      headquarter: req.body.headquarter,
      year: req.body.year,
      champion: req.body.champion,
      score: req.body.score,
      subChampion: req.body.subChampion,
    };

    const newDataCups = cups.map((cup) => {
      if (`${cup.year}` === `${req.params.year}`) {
        return newCups;
      }
      return cup;
    });

    fs.writeFileSync(filePath, JSON.stringify(newDataCups));
    res.status(200).json(newDataCups);
  } catch (error) {
    next(error);
  }
};

const deleteCup = (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const cups = JSON.parse(data);
    const dataCups = cups.find((cup) => `${cup.year}` === `${req.params.year}`);

    if (!dataCups) {
      const err = new Error(`No existe datos para ese año: ${req.params.year}`);
      err.code = 204;
      throw err;
    }

    const newDataCups = cups
      .map((cup) => {
        if (`${cup.year}` === `${req.params.year}`) {
          return null;
        }
        return cup;
      })
      .filter((cup) => cup !== null);

    fs.writeFileSync(filePath, JSON.stringify(newDataCups));
    res.status(200).json(newDataCups);
  } catch (error) {
    next(error);
  }
};

router.route("/api/v1/cups/:year").get(getCupByYear).put(updateCup).delete(deleteCup);
router.route("/api/v1/cups/").get(getCups).post(addCup);

module.exports = router;
