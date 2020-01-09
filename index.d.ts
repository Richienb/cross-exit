/**
 * Gracefully terminate a script in Node.js or browsers.
 * @param code The exit code. Defaults to 0.
 * @example
 * ```
 * const exit = require("cross-exit");
 *
 * console.log("This message is logged.");
 * exit();
 * console.log("This message isn't logged.");
 * ```
*/
declare function crossExit(code?: number): void;

export = crossExit;
