String.prototype.toJadenCase = function () {
  return this.split(" ").map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }).join(" ")
};
