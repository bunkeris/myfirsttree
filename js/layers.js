addLayer("a", {
    name: "A layer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "A letter points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        gain = new Decimal(1)
            if (hasUpgrade("a", 12)) gain = gain.times(50)
        return gain
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for A letter points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    milestones: {
    1: {
    requirementDescription: "1 A letter points",
    effectDescription: "x1.2 points gain",
    done() { return player.a.points.gte(1) },
    // STILIAUS PATOBULINIMAS:
    style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
},
    2: {
        requirementDescription: "2 A letter points",
        effectDescription: "x1.4 points gain",
        done() { return player.a.points.gte(2) },
        unlocked()
        {
return hasMilestone('a', 1)
},
         style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    3: {
        requirementDescription: "3 A letter points",
        effectDescription: "x1.6 points gain",
        done() { return player.a.points.gte(3) },
        unlocked()
        {
return hasMilestone('a', 2)
},
         style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },    
    4: {
        requirementDescription: "4 A letter points",
        effectDescription: "x1.8 points gain",
        done() { return player.a.points.gte(4) },
        unlocked()
        {
return hasMilestone('a', 3)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    5: {
        requirementDescription: "5 A letter points",
        effectDescription: "x2 points gain",
        done() { return player.a.points.gte(5) },
        unlocked()
        {
return hasMilestone('a', 4)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    6: {
        requirementDescription: "6 A letter points",
        effectDescription: "x2.2 points gain",
        done() { return player.a.points.gte(6) },
        unlocked()
        {
return hasMilestone('a', 5)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    7: {
        requirementDescription: "7 A letter points",
        effectDescription: "x2.4 points gain",
        done() { return player.a.points.gte(7) },
        unlocked()
        {
return hasMilestone('a', 6)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    8: {
        requirementDescription: "8 A letter points",
        effectDescription: "x2.6 points gain",
        done() { return player.a.points.gte(8) },
        unlocked()
        {
return hasMilestone('a', 7)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    9: {
        requirementDescription: "9 A letter points",
        effectDescription: "x2.8 points gain",
        done() { return player.a.points.gte(9) },
        unlocked()
        {
return hasMilestone('a', 8)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    10: {
        requirementDescription: "10 A letter points",
        effectDescription: "x3 points gain",
        done() { return player.a.points.gte(10) },
        unlocked()
        {
return hasMilestone('a', 9)
},
 style() {
        return {
            "background-color": player[this.layer].milestones.includes(this.id) ? "#4CAF50" : "#222222", // Žalias jei gautas, tamsiai pilkas jei ne
            "border": "2px solid #FFD700", // Auksinis rėmelis
            "border-radius": "15px", // Suapvalinti kampai
            "box-shadow": "0px 0px 10px #FFD700", // Švytėjimo efektas
            "color": "#FFFFFF", // Balta teksto spalva
            "padding": "10px",
            "width": "750px", // Pailgina bloką horizontaliai (galite keisti skaičių)
            "min-height": "100px", // Jei norite, kad būtų ir aukštesnis vertikaliai
            "padding": "15px 30px", // Prideda daugiau vietos vafliams viduje (viršuj/apačioj ir šonuose)
            "margin": "10px auto", // Centruoja pailgintą bloką ekrane
        }
    }
    },
    
},

/*upgrades: {
    11: {
        title: "paaiskinimas",
        description: "2x points",
        cost: new Decimal(1),
        
    },
    12: {
        title: "paaiskinimas",
        description: "3x points",
        cost: new Decimal(2),
        unlocked()
        {
return hasUpgrade('p', 11)
},
    },
    21: {
        title: "paaiskinimas",
        description: "points boost points",
        cost: new Decimal(5),
        unlocked()
        {
return hasUpgrade('p', 12)
},
effect()
{
let eff = player.points.plus(2).pow(0.5)

return eff
},
 effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
    },
    
},*/

})
