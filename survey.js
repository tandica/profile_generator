const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname?', (answer) => {
  rl.question('What is an activity you like doing?', (answer1) => {
    rl.question('What do you listen to while doing that?', (answer2) => {
        rl.question('What meal is your favourite?', (answer3) => {
            rl.question('What do you eat for that meal?', (answer4) => {
                rl.question('What is your favourite sport?', (answer5) => {
                    rl.question('What is your superpower?', (answer6) => {
                        console.log(`Howdy! I'm ${answer} and I love ${answer1}. Listening to ${answer2} makes me happy. 
                        If you are still reading this, you owe me ${answer3}, specifically ${answer4}. 
                        When I'm not watching/playing ${answer5}, I like to describe myself as ${answer6}.`)
                        rl.close();
                        });
                    });
                });
            });
        });
    });
});
