const readline = require( 'readline' )
const isBalanced = require( './isBalanced' )

const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} )

const formatOutput = valid => ( valid ? '\x1b[32m BALANCEADO' : '\x1b[31m DESBALANCEADO' )

const recursiveAsyncReadLine = () => rl.question( 'Informe uma sequência de Brackets: ', ( answer ) => {
  if ( answer === 'exit' ) {
    process.stdin.destroy()
    return rl.close()
  }
  console.log( `BRACKETS ${answer} ESTA${formatOutput( isBalanced( answer ) )} \n \x1b[0m` )
  recursiveAsyncReadLine()
} )

recursiveAsyncReadLine()
