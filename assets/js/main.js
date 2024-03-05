// select elements
const grid = document.querySelector('.grid');
const playAgainButton = document.querySelector('.play_again');
const score = document.querySelector('.score_counter');
const difficult = document.querySelector('#difficult');


// create the matrix
const gridMatrix = [
    ['', '', '', '', '', '', '', '', ''],
    ['river', 'wood', 'wood', 'river', 'wood', 'river', 'river', 'river', 'river'],
    ['river', 'river', 'river', 'wood', 'wood', 'river', 'wood', 'wood', 'river'],
    ['', '', '', '', '', '', '', '', ''],
    ['road', 'bus', 'road', 'road', 'road', 'car', 'road', 'road', 'road'],
    ['road', 'road', 'road', 'car', 'road', 'road', 'road', 'road', 'bus'],
    ['road', 'road', 'car', 'road', 'road', 'road', 'bus', 'road', 'road'],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];
