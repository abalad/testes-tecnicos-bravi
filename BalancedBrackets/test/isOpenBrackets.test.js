const expect = require('expect.js');
const isOpenBrackets = require('../src/isOpenBrackets');

describe('isOpenBrackets()', function(){

  it('Bracket ( deve ser valido', function(){
    expect( isOpenBrackets( '(' ) ).to.eql(true);
  });

  it('Bracket [ deve ser valido', function(){
    expect( isOpenBrackets( '[' ) ).to.eql(true);
  });

  it('Bracket { deve ser valido', function(){
    expect( isOpenBrackets( '{' ) ).to.eql(true);
  });

  it('Bracket } deve ser invalido', function(){
    expect( isOpenBrackets( '}' ) ).to.eql(false);
  });

  it('Bracket ] deve ser invalido', function(){
    expect( isOpenBrackets( ']' ) ).to.eql(false);
  });

  it('Bracket ) deve ser invalido', function(){
    expect( isOpenBrackets( ')' ) ).to.eql(false);
  });

});
