var cursed = require("./cursed.json");
const getChar = (r, e) => {
  if (r.normal) return e;
  let t = Math.floor(Math.random() * cursed[e].length);
  return cursed[e][t];
};
exports.sarcastic = function (r, e) {
  r = r.toUpperCase();
  let t = "";
  if (e.random) {
    for (let a = 0; a < r.length; a++) {
      let o = r[a];
      t +=
        o >= "A" && o <= "Z"
          ? getChar(e, Math.random() > 0.5 ? o : o.toLowerCase())
          : o;
    }
    return t;
  }
  let a = !0;
  e.startUpper && (a = !1);
  for (let o = 0; o < r.length; o++) {
    let n = r[o];
    n >= "A" && n <= "Z"
      ? (a && (n = n.toLowerCase()), (a = !a), (t += getChar(e, n)))
      : " " === n
      ? ((t += n), e.startLower && (a = !0), e.startUpper && (a = !1))
      : (t += n);
  }
  return t;
};
