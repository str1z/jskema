const { _object, _email, _string } = require("./jskema");

const skema = _object({
  email: _email(),
  name: _string().rangeL(10, 20),
  gender: _string().enum(["male", "female"]),
});

let res = skema.validate({
  email: "hello@asdf.ca",
  name: "basdfaasdfasdf",
  gender: "malde",
});

console.log(res);
