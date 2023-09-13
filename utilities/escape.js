// function
const escape = function(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

// exports
module.exports = escape;