const groupBrackets = require( './const/groupBrackets' );

module.exports = ( parenthesisChar ) => {
  let isOpenBrackets = false;
  groupBrackets.forEach( ( group ) => {
    if ( group[0] === parenthesisChar ) {
      isOpenBrackets = true;
    }
  } );

  return isOpenBrackets;
};
