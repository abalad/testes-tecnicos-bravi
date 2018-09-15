const expect = require('expect.js');
const isBrackets = require('../src/isBrackets');

describe('isBrackets()', function(){

  it('Bracket ( deve ser valido', function(){
    expect( isBrackets( '(' ) ).to.eql(true);
  });

  it('Bracket [ deve ser valido', function(){
    expect( isBrackets( '[' ) ).to.eql(true);
  });

  it('Bracket { deve ser valido', function(){
    expect( isBrackets( '{' ) ).to.eql(true);
  });

  it('Bracket } deve ser valido', function(){
    expect( isBrackets( '}' ) ).to.eql(true);
  });

  it('Bracket ] deve ser valido', function(){
    expect( isBrackets( ']' ) ).to.eql(true);
  });

  it('Bracket ) deve ser valido', function(){
    expect( isBrackets( ')' ) ).to.eql(true);
  });

  it('Char "A" deve ser invalido', function(){
    expect( isBrackets( 'A' ) ).to.eql(false);
  });

  it('Char "2"  deve ser invalido', function(){
    expect( isBrackets( '2' ) ).to.eql(false);
  });

  it('Char "^" deve ser invalido', function(){
    expect( isBrackets( '^' ) ).to.eql(false);
  });

});
