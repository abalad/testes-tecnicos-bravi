const groupBrackets = require( './const/groupBrackets' );

module.exports = ( topOfStack, closedParenthesis ) => {
  for ( let k = 0; k < groupBrackets.length; k++ ) {
    if ( groupBrackets[k][0] === topOfStack &&
        groupBrackets[k][1] === closedParenthesis ) {
      return true;
    }
  }
  return false;
};
