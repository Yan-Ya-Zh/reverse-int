module.exports = function reverse (n) {
  return (n > 0) ? Number(n.toString().split("").reverse().join("")) : Number(Math.abs(n).toString().split("").reverse().join(""));
}
