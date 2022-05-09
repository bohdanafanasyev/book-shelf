/**
 * Limits the number of times that a function will be called, by grouping multiple calls that happen
 * inside the given amount of time, and only executing the callback function once.
 *
 * Example: if the delay is set at 1s, and the returned function is called 10 times per second,
 *  the callback function won't be executed until the returned function is not called anymore for
 *  at least 1s
 *
 * @param {Number} delay Delay between function calls in ms
 * @param {Function} callback Function that will be debounced
 * @returns {Function} Function that should be called every time a new debounced execution is needed
 */
export const debounce = (delay, callback) => {
    let timerId
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            callback(...args)
            timerId = null
        }, delay)
    }
}

export const formatAuthors = (authors) => {
    return authors?.join(' ')
}
