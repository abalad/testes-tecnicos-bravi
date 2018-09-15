const expect = require('expect.js');
const isBalanced = require('../src/isBalanced');

describe('isBalanced()', function(){

    it('Bracket (){}[] deve ser valido', function(){
        expect( isBalanced( '(){}[]' ) ).to.eql(true);
    });

    it('Bracket [{()}](){} deve ser valido', function(){
        expect( isBalanced( '[{()}](){}' ) ).to.eql(true);
    });

    it('Bracket []{() deve ser invalido', function(){
        expect( isBalanced( '[]{()' ) ).to.eql(false);
    });

    it('Bracket [{)] deve ser invalido', function(){
        expect( isBalanced( '[{)]' ) ).to.eql(false);
    });

    it('Bracket 1234567 deve ser valido', function(){
        expect( isBalanced( '1234567' ) ).to.eql(true);
    });

    it('Bracket abcdefg deve ser valido', function(){
        expect( isBalanced( 'abcdefg' ) ).to.eql(true);
    });

    it('Bracket (bravi){bravi}[bravi] deve ser valido', function(){
        expect( isBalanced( '(bravi){bravi}[bravi]' ) ).to.eql(true);
    });

    it('Bracket [{bravi)] deve ser invalido', function(){
        expect( isBalanced( '[{bravi)]' ) ).to.eql(false);
    });

    it('Bracket [{(1234567)}](1234567){} deve ser valido', function(){
        expect( isBalanced( '[{(1234567)}](1234567){}' ) ).to.eql(true);
    });

    it('Bracket [1234567]{() deve ser invalido', function(){
        expect( isBalanced( '[1234567]{()' ) ).to.eql(false);
    });

});
