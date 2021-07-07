export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Неверный формат имени');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Неверный формат типа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Zombie extends Magician {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
  }
}
