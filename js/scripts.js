let quotes = [
    'Only I can change my life. No one can do it for me. -Carol Burnett',
    'Failure will never overtake me if my determination to succeed is strong enough. -Og Mandino',
    'It does not matter how slowly you go as long as you do not stop. -Confucius',
    'With the new day comes new strength and new thoughts. -Eleanor Roosevelt',
    'If you try to fail, and succeed, which have you done? -George Carlin',
    'Setting goals is the first step in turning the invisible into the visible. -Tony Robbins',
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas Edison',
    'Set your goals high, and don\'t stop till you get there. -Bo Jackson',
    'You can\'t cross the sea merely by standing and staring at the water. -Rabindranath Tagore',
    'A diamond is merely a lump of coal that did well under pressure. -Unknown',
    'do or do not there is no try. -yoda',
    'What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar',
    'Always do your best. What you plant now, you will harvest later. -Og Mandino',
    'Problems are not stop signs, they are guidelines. -Robert Schuller',
    'Without hard work, nothing grows but weeds. -Gordon Hinckley',
    'Don\'t watch the clock; do what it does. Keep going. Sam Levenson',
    'You mustn\'t be afraid to dream a little bigger, darling. -Eames Inception',
    'Dude sucking at something is the first step towards being sort of good at something. -Jake from Adventure Time',
    'Follow your passion, stay true to yourself, never follow someone else\'s path unless you\'re in the woods and you\'re lost and you see a path then by all means you should follow that. -Ellen Degeneres',
    'Well-behaved women seldom make history. -Laurel Thatcher Ulrich',
    'There are no traffic jams along the extra mile. -Roger Staubach',
    'If you hit the target every time it’s too near or too big. -Tom Hirshfield',
    'Consider the postage stamp: its usefulness consists in the ability to stick to one thing til it gets there. -Josh Billings'
];

function newQuote(){

let randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
console.log ['quoteDisplay'];
}