if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((result, curr) => result.concat(curr), [])
    }
}