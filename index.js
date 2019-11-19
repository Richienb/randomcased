"use strict"

const mapString = require("map-string")
const secureChance = require("secure-chance")
const Chance = require("chance")

module.exports = (string, seed) => {
    const chance = seed ? new Chance(seed) : secureChance
    return mapString(string, (val) => chance.integer({
        min: 0,
        max: 1,
    }) === 0 ? val.toUpperCase() : val.toLowerCase())
}
