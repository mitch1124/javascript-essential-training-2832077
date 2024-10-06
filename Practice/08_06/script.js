/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
//  */
// const article = document.querySelector('article')


const game = {
    players: 4,
    teams: 2,
    name: "Bops",
    money: "Bop Bucks",
    jackpot: 500,
    showMoney: function() {
        console.log("The starting jackpot is:", this.jackpot)
    }
}

console.log(game.showMoney)

const addNumbers = function (a, b, c) {
    let d = a + b + c;
    return d
}
