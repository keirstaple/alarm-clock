var expect = require('chai').expect;

//pull in whatever module/functions we are testing.
var pingpong = require('./../js/ping-pong.js').pingPong;

describe("pingpong", function(){
  it("will produce ping-pong for a number divisble by 15", function(){
    expect(pingpong(5)).to.equal["pong"];
  })
});
