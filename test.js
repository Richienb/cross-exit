import test from "ava"
import exit from "."

test("main", (t) => {
    let exitCalled = false
    globalThis.process.exit = (code) => {
        t.is(code, 0)
        exitCalled = true
    }

    exit()

    t.true(exitCalled)
})

test("custom exit code", (t) => {
    let exitCalled = false
    globalThis.process.exit = (code) => {
        t.is(code, 1)
        exitCalled = true
    }

    exit(1)

    t.true(exitCalled)
})
