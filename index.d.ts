/**
 * Gracefully terminate a script in Node.js or browsers.
 * @example
 * ```
 * const exit = require("cross-exit");
 *
 * console.log("This message is logged.");
 * exit();
 * console.log("This message isn't logged.");
 * ```
*/
declare function crossExit(): void;

export = crossExit;
