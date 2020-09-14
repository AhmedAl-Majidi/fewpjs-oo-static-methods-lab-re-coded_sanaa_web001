class Formatter {

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g,'')
  }

  function titleize (sentence) {
  if(!sentence.split) return sentence;
  let tWord = function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      },
      result = [];
  sentence.split(" ").forEach(function(w) {
      result.push(tWord(w));
  });
  return result.join(" ");
}

}
