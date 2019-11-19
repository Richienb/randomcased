import test from "ava"
import randomCased from "."

test("basic functionality", (t) => {
    t.is(typeof randomCased("abcdef"), "string")
})

test("seeding", (t) => {
    t.is(randomCased("abcdef", 123), "abCDEf")
    t.is(randomCased("abcdef", 123), "abCDEf")
    t.is(randomCased("abcdef", 123), "abCDEf")
    t.is(randomCased("abcdef", 123), "abCDEf")
    t.is(randomCased("abcdef", 123), "abCDEf")
})
