const test = require("ava")
const randomCased = require(".")

const fixture = "abcdef"

test("basic functionality", t => {
	t.is(randomCased(fixture).toLowerCase(), "abcdef")
})

test("seeding", t => {
	t.is(randomCased(fixture, 123), "abCDEf")
	t.is(randomCased(fixture, 123), "abCDEf")
	t.is(randomCased(fixture, 123), "abCDEf")
	t.is(randomCased(fixture, 123), "abCDEf")
	t.is(randomCased(fixture, 123), "abCDEf")
})
