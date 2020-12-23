const Manatee = require('./Manatee')
const manatees = [
    new Manatee("How do fish unlock their doors?","With their manakeys!"),
    new Manatee("Who reads the ocean news?","Anchormanatees!"),
    new Manatee("Who watches sports under the sea?","fanatees!"),
]

const manateeJokeMethods= {
    getRandomJoke:function(){
        return manatees[Math.floor(Math.random()*manatees.length)]
    }
}

module.exports = manateeJokeMethods;