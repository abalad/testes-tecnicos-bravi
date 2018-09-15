const matchesBrackets = require( './matchesBrackets' );
const isOpenBrackets = require( './isOpenBrackets' );
const isBrackets = require( './isBrackets' );

module.exports = ( stringInputed ) => {
  if ( stringInputed === null ) {
    return true
  }

  const stack = [];
  const expression = stringInputed.split( '' );

  for ( let i = 0; i < expression.length; i++ ) {
    if ( isBrackets( expression[ i ] ) ) {
      if ( isOpenBrackets( expression[ i ] ) ) {
        stack.push( expression[ i ] );
      } else {
        if ( stack.length === 0 ) {
          return false;
        }

        const topOfStack = stack.pop();
        if ( !matchesBrackets( topOfStack, expression[ i ] ) ) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
};
