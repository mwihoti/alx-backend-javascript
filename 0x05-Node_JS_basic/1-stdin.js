console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () =>{
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('Your name is: ' + chunk);
      }
} );

process.on('SIGINT', function() {
    process.stdout.write('This important software is now closing');
  });