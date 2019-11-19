/**
 * Convert a string to use RANdOmcasE.
 * @param string The string to convert.
 * @param seed The seed to use.
 * @example
 * ```
 * const randomCased = require("randomcased");
 *
 * randomCased("abcdefghijklmnopqrstuvwxyz");
 * //=> 'AbCDeFghIjkLMnoPQrstuVwxyZ'
 *
 * randomCased("abcdefghijklmnopqrstuvwxyz");
 * //=> 'ABcDEFGHijklmNOPQrstUvwXYz'
 *
 * // Seeding
 * randomCased("abcdefghijklmnopqrstuvwxyz", 123456789);
 * //=> 'abcDefgHIjkLmnOpqRsTuvwXyz'
 *
 * randomCased("abcdefghijklmnopqrstuvwxyz", 123456789);
 * //=> 'abcDefgHIjkLmnOpqRsTuvwXyz'
 * ```
*/
declare function randomCased(string: string, seed?: number): string;

export = randomCased;
