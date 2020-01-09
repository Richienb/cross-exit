"use strict"

module.exports = () => {
    const prevOnError = window.onerror
    window.onerror = () => {
        window.onerror = prevOnError
        return true
    }

    throw new Error("Script termination.")
}
