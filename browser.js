"use strict"

module.exports = (code) => {
    const prevOnError = window.onerror
    window.onerror = () => {
        window.onerror = prevOnError
        return true
    }

    throw new Error(`Script termination with code ${code || 0}.`)
}
