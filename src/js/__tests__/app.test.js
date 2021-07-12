import * as classes from '../app';
import Character from '../app';

test('class Bowerman', () => {
  expect(new classes.Bowerman('Bob')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowman',
  });
});

test('class Magician', () => {
  expect(new classes.Magician('Bob')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Magician',
  });
});

test('class Swordsman', () => {
  expect(new classes.Swordsman('Bob')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Swordsman',
  });
});

test('throws on name', () => {
  expect(() => new classes.Swordsman('B')).toThrowError(new Error('Неверный формат имени'));
  expect(() => new classes.Swordsman('Bobanecvoer')).toThrowError(new Error('Неверный формат имени'));
});

test('class Daemon', () => {
  expect(new classes.Daemon('Bob')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Daemon',
  });
});

test('class Undead', () => {
  expect(new classes.Undead('Bob')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Undead',
  });
});

test('class Zombie', () => {
  expect(new classes.Zombie('Bob')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Zombie',
  });
});

test('throws on type', () => {
  expect(() => new Character('Bob', 'Sworde')).toThrowError(new Error('Неверный формат типа'));
});
