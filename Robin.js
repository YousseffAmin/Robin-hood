const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
  };
  
  // Log each item in Robin's inventory
  for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
  }
  
  const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat"
    }
  };
  
  // Add a companion for Leo
  adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    inventory: ["small hat", "sunglasses"]
  };
  
  // Add roll method to the adventurer
  adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  };
  
  // Test the roll method
  adventurer.roll();
  adventurer.roll(2);
  adventurer.roll(-1);

  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  // Create Robin and companions using the Character class
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Test roll method for Robin and companions
  robin.roll();
  robin.companion.roll();
  robin.companion.companion.roll();

  
  class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const thisRoll = Math.floor(Math.random() * 20) + 1;
        const opponentRoll = Math.floor(Math.random() * 20) + 1;
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
        console.log(`${this.name} rolled ${thisRoll}, ${opponent.name} rolled ${opponentRoll}`);
        console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
      }
      const winner = this.health > 50 ? this.name : opponent.name;
      console.log(`${winner} wins the duel!`);
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  
    play() {
      console.log(`${this.name} the ${this.type} is playing!`);
    }
  }
  
  // Create Robin and companions using the new classes
  const robin = new Adventurer("Robin", "Fighter");
  robin.inventory.push("sword", "potion", "artifact");
  robin.companion = new Companion("Leo", "Cat");
  robin.companion.companion = new Companion("Frank", "Flea");
  robin.companion.companion.inventory.push("small hat", "sunglasses");
  
  // Test the new methods
  robin.scout();
  robin.companion.play();
  robin.companion.companion.play();

  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}`);
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const thisRoll = Math.floor(Math.random() * 20) + 1;
        const opponentRoll = Math.floor(Math.random() * 20) + 1;
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
        console.log(`${this.name} rolled ${thisRoll}, ${opponent.name} rolled ${opponentRoll}`);
        console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
      }
      const winner = this.health > 50 ? this.name : opponent.name;
      console.log(`${winner} wins the duel!`);
    }
  }
  
  // Test dueling
  const fighterJohn = new Adventurer("John", "Fighter");
  robin.duel(fighterJohn);

  const adventurers = [
    new Adventurer("Alice", "Wizard"),
    new Adventurer("Bob", "Fighter"),
    new Adventurer("Charlie", "Healer")
  ];
  
  adventurers.forEach(adventurer =>
  