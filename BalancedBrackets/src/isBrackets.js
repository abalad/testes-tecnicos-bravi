module.exports = ( char ) => {
  const str = '{}[]()';
  return ( str.indexOf( char ) > -1 );
};
