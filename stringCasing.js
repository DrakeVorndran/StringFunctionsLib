String.prototype.capitalize = function() { // Tested
  return this[0].toUpperCase() + this.slice(1, this.length)
}

String.prototype.lower = function() { // Tested
  return this[0].toLowerCase() + this.slice(1, this.length)
}

String.prototype.capitalizeSentence = function() { // Tested
  return this.split(' ').map(word => word.capitalize()).join(" ")
}

String.prototype.evenCaps = function() { // Tested
  return this.split("").map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase() ).join("")
}

String.prototype.oddCaps = function() { // Tested
  return this.split("").map((letter, i) => i % 2 === 1 ? letter.toUpperCase() : letter.toLowerCase() ).join("")
}

String.prototype.removeWhitespace = function() { // Tested
  return this.split("").map(letter =>  letter === " " ? "" : letter ).join("")
}

String.prototype.removeExtraWhitespace = function() { // Tested
  return this.split("").map((letter, i) =>  (this[i+1] === " " && letter === " ") ? "" : letter ).join("").trim()
}

String.prototype.kabobCase = function() {
  return this.removeExtraWhitespace().split(" ").join("-").toLowerCase()
}

String.prototype.snakeCase = function() {
  return this.removeExtraWhitespace().split(" ").join("_").toLowerCase()
}

String.prototype.camelCase = function() {
  return this.removeExtraWhitespace().capitalizeSentence().split(" ").join("").lower()
}


