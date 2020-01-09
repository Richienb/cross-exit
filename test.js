import test from "ava"
import exit from "."

test("main", (t) => {
    let exitCalled = false
    globalThis.process.exit = () => {
        exitCalled = true
    }

    exit()

    t.true(exitCalled)
})
