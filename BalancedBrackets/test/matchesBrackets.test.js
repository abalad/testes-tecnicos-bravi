const expect = require('expect.js');
const matchesBrackets = require('../src/matchesBrackets');

describe('matchesBrackets()', function(){

  it('Bracket () deve ser valido', function(){
    expect( matchesBrackets( '(', ')' ) ).to.eql(true);
  });

  it('Bracket [] deve ser valido', function(){
    expect( matchesBrackets( '[', ']' ) ).to.eql(true);
  });

  it('Bracket {} deve ser valido', function(){
    expect( matchesBrackets( '{', '}' ) ).to.eql(true);
  });

  it('Bracket )( deve ser invalido', function(){
    expect( matchesBrackets( ')', '(' ) ).to.eql(false);
  });

  it('Bracket ][ deve ser invalido', function(){
    expect( matchesBrackets( ']', '[' ) ).to.eql(false);
  });

  it('Bracket }{ deve ser invalido', function(){
    expect( matchesBrackets( '}', '{' ) ).to.eql(false);
  });

  it('Bracket [) deve ser invalido', function(){
    expect( matchesBrackets( '[', ')' ) ).to.eql(false);
  });

});
