//@ Buldings for Big War: The origin of the war

var preBuild = {
	x: 0,
	y: 0,
	empty: false
};

var buildings = [
    {name: "army", price: 650, select: false, radius: 64*3, time: 70, faer: false, reload: 0, ataca: 0, health: 185, addRes: {name: "noen", num: 0}},
    {name: "factory_1", price: 400, select: false, radius: 64*3, time: 0, faer: false, reload: 0, ataca: 0, health: 70, addRes: {name: "money", num: 9}},
    {name: "touer", price: 1500, select: false, radius: 64*3, time: 0, faer: true, reload: 60, ataca: 30, health: 200, addRes: {name: "none", num: 0}},
    {name: "armyHard", price: 1200, select: false, radius: 64*3, time: 120, faer: false, reload: 0, ataca: 0, health: 300, addRes: {name: "noen", num: 0}}
];
