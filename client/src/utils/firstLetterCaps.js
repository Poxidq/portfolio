export default String.prototype.firstLetterCaps = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
