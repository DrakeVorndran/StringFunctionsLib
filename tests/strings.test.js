require('../stringCasing')

test('Sanity Check', () => {
  //this test passes
})

test('Test String.prototype.capitalize', () => {
  expect("hello".capitalize()).toBe("Hello")
  expect("goodbye".capitalize()).toBe("Goodbye")
  expect("I don't know why you say goodbye".capitalize()).toBe("I don't know why you say goodbye")
})

test('Test String.prototype.lower', () => {
  expect("Hello".lower()).toBe("hello")
  expect("goodbye".lower()).toBe("goodbye")
  expect("I don't know why you say goodbye".lower()).toBe("i don't know why you say goodbye")
})

test('Test String.prototype.capitalizeSentence', () => {
  expect("Hello".capitalizeSentence()).toBe("Hello")
  expect("Goodbye".capitalizeSentence()).toBe("Goodbye")
  expect("I don't know why you say goodbye".capitalizeSentence()).toBe("I Don't Know Why You Say Goodbye")
})

test('test String.prototype.evenCaps', () => {
  expect("Hello".evenCaps()).toBe("HeLlO")
  expect("GoodBye".evenCaps()).toBe("GoOdByE")
  expect("I don't know why you say goodbye".evenCaps()).toBe("I DoN'T KnOw wHy yOu sAy gOoDbYe")
})

test('test String.prototype.oddCaps', () => {
  expect("Hello".oddCaps()).toBe("hElLo")
  expect("GoodBye".oddCaps()).toBe("gOoDbYe")
  expect("I don't know why you say goodbye".oddCaps()).toBe("i dOn't kNoW WhY YoU SaY GoOdByE")
})

test('Test String.prototype.removeWhitespace', () => {
  expect("Hello".removeWhitespace()).toBe("Hello")
  expect("I don't know why you say goodbye".removeWhitespace()).toBe("Idon'tknowwhyyousaygoodbye")
  expect(" I Say Hello  ".removeWhitespace()).toBe("ISayHello")
})

test('Test String.prototype.removeExtraWhitespace', () => {
  expect("Hello  ".removeExtraWhitespace()).toBe("Hello")
  expect("  I don't know   why you say goodbye".removeExtraWhitespace()).toBe("I don't know why you say goodbye")
  expect(" I  Say   Hello  ".removeExtraWhitespace()).toBe("I Say Hello")
})

test('Test String.prototype.kabobCase', () => {
  expect("Hello".kabobCase()).toBe("hello")
  expect("  I don't know   why you say goodbye".kabobCase()).toBe("i-don't-know-why-you-say-goodbye")
  expect(" I  Say   Hello  ".kabobCase()).toBe("i-say-hello")
})

test('Test String.prototype.snakeCase', () => {
  expect("Hello".snakeCase()).toBe("hello")
  expect("  I don't know   why you say goodbye".snakeCase()).toBe("i_don't_know_why_you_say_goodbye")
  expect(" I  Say   Hello  ".snakeCase()).toBe("i_say_hello")
})

test('Test String.prototype.camelCase', () => {
  expect("Hello".camelCase()).toBe("hello")
  expect("  I don't know   why you say goodbye".camelCase()).toBe("iDon'tKnowWhyYouSayGoodbye")
  expect(" I  Say   Hello  ".camelCase()).toBe("iSayHello")
})

