class Animals {
    move () {
        return 'I can move!';
    }

    say () {
        return 'I can talk!';
    }
    
    eat () {
        return 'I can eat!';
    }
};

// Animals
class Mammals extends Animals{};

class Birds extends Animals {

    static maxAge = 5;
    static maxWeight = 10;
    static isBird (obj) {
        return obj instanceof Birds;
    };

    constructor (age, name, weight, limbAmount) {
        super();
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    };

    move () {
        return 'I can fly!';
    };

    say () {
        return 'I can tweet!';
    };
    
    eat () {
        return 'I can eat!';
    };
};

class Fish extends Animals {

    static maxAge = 5;
    static maxWeight = 10;
    static isFish (obj) {
        return obj instanceof Fish;
    };

    constructor (age, name, weight, limbAmount) {
        super();
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    };
    move () {
        return 'I can move!';
    }

    say () {
        return 'I can not talk!';
    }
    
    eat () {
        return 'I can eat!';
    }
};
// Animals End

// Mammals
class Predators extends Mammals {};
class Whales extends Mammals {};
class Primates extends Mammals {};
// Mammals End

// Predators, Whales, Primates 
class Dog extends Predators {

    static maxAge = 15;
    static maxWeight = 120;
    static isDog (obj) {
        return obj instanceof Dog;
    };

    constructor (age, name, weight, limbAmount) {
        super();
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    };

    move () {
        return 'I can run!';
    }

    say () {
        return 'I can bark!';
    }
    
    eat () {
        return 'I can eat!';
    }
}

class Dolphin extends Whales {

    static maxAge = 20;
    static maxWeight = 50;
    static isDolphin (obj) {
        return obj instanceof Dolphin;
    };

    constructor (age, name, weight, limbAmount) {
        super();
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    };

    move () {
        return 'I can swim!';
    }

    say () {
        return 'I can not talk!';
    }
    
    eat () {
        return 'I can eat!';
    }
}

class Human extends Primates {

    static maxAge = 100;
    static maxWeight = 200;
    static isHuman (obj) {
        return obj instanceof Human;
    };

    constructor (age, name, weight, limbAmount) {
        super();
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    };

    move () {
        return 'I can walk!';
    }

    say () {
        return 'I can talk!';
    }
    
    eat () {
        return 'I can eat!';
    }
}
// Predators, Whales, Primates End

const Vulture = new Birds(3, 'Vulture', 17, 2)
const Arowana = new Fish(2, 'Arowana', 12, 4);
const Askold = new Dog(7, 'Askold', 68, 4);
const Star = new Dolphin(4, 'Star', 23, 3);
const John = new Human(21, 'John', 76, 4);
const Sparrow = new Birds(1, 'Sparrow', 5, 2);
const Shark = new Fish(8, 'Shark', 1500, 0);
const Rex = new Dog(4, 'Rex', 25, 4);
const Flipper = new Dolphin(10, 'Flipper', 200, 2);
const Jane = new Human(35, 'Jane', 130, 4);
console.log('-----------Testing------------')
console.log(Vulture)
console.log(Arowana)
console.log(Askold)
console.log(Star)
console.log(John)
console.log(Sparrow);
console.log(Shark);
console.log(Rex);
console.log(Flipper);
console.log(Jane);
console.log('-----------Examples------------')
console.log(Birds.isBird(Vulture));
console.log(Fish.isFish(Arowana));
console.log(Dog.isDog(Askold));
console.log(Dolphin.isDolphin(Star));
console.log(Human.isHuman(John));
console.log(Birds.isBird(Sparrow));
console.log(Fish.isFish(Shark));
console.log(Dog.isDog(Rex));
console.log(Dolphin.isDolphin(Flipper));
console.log(Human.isHuman(Jane));
