function useDebounce(callback, delay=1000) {
    // it takes the callback and returns a modified callback
    let timerId;
    return (...args) => {
        clearInterval(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

export default useDebounce;