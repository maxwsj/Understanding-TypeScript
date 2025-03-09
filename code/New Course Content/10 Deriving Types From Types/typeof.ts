////////////// "typeof" & A More Useful Example

const userName = 'Max';

type UserName = typeof userName;

const settings = {
   diffuculty: 'easy',
   minLevel: 10,
   didStart: false,
   player: ['Jhon', 'Jane'],
};

type Settings = typeof settings;

function loadData(s: Settings) {
   //....
}

// or
function data(s: typeof settings) {
   //....
}
