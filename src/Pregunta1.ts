const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//---------Tarea 1 ------------------
console.log("-----------Tarea 1-----------------");
let jugadores1: String[] = game.players[0];
let jugadores2: String[] = game.players[1];

console.log(jugadores1);
console.log(jugadores2);


//--------Tarea 2-------------------
console.log("-----------Tarea 2-----------------");
var gk: String;
gk = game.players[0][0];

const fieldplayers: String[] = [];
for (var i = 1; i < game.players[1].length; i++) {
    fieldplayers.push(game.players[0][i]);
}

console.log(`Portero: ${gk}`)
console.log(`Jugadores: ${fieldplayers}`);


//----------------tarea 3 ----------------------
console.log("-----------Tarea 3-----------------");
let allplayers: String[] = game.players[0].concat(game.players[1]);
console.log(allplayers);


//----------------tarea 4 ----------------------
console.log("-----------Tarea 4-----------------");
let players1Final: String[] = game.players[0].concat('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final);


//----------------tarea 5 ----------------------
console.log("-----------Tarea 5-----------------");
let equipo1: number = game.odds.team1;
let empate: number = game.odds.x;
let equipo2: number = game.odds.team2;

console.log(equipo1);
console.log(empate);
console.log(equipo2);


//----------------tarea 6 ----------------------
console.log("-----------Tarea 6-----------------");
function printGoals(...selec: string[]) {
    let total: number = 0;
    let bool: boolean = true;
    for (var i = 0; i < selec.length; i++) {


        for (var j = 0; j < i; j++) {
            if (selec[j] == selec[i]) {
                bool = false;

                break;
            }
        }

        if (bool) {
            for (var k = i; k < selec.length; k++) {
                if (selec[i] == selec[k]) {
                    total += 1;
                }
            }
            console.log(selec[i] + ": " + total + " goles");
        }

        bool = true;
        total = 0;
    }


}
printGoals(...game.scored);


//----------------tarea 7 ----------------------
console.log("-----------Tarea 7-----------------");
let tot = [
    {
        name: game.team1,
        cuota: game.odds.team1
    },
    {
        name: game.team2,
        cuota: game.odds.team2
    }
]
let mini: number = Math.min(tot[0].cuota, tot[1].cuota);
let winner = tot.filter(tot => tot.cuota == mini);

console.log(winner);