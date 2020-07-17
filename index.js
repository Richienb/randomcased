"use strict"

const mapString = require("map-string")
const Chance = require("chance")

module.exports = (string, seed) => {
	if (typeof string !== "string") {
		throw new TypeError(`Expected a string, got ${typeof string}`)
	}

	const chance = new Chance(seed)
	return mapString(string, character => chance.bool() ? character.toUpperCase() : character.toLowerCase())
}
