import * as classes from '../app';
import Character from '../app';

test('class Bowerman', () => {
  const expectedAttack = 25;
  const expectedDefence = 25;
  const expectedName = 'Bob';
  const newClass = new classes.Bowerman('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  const receivedName = newClass.name;
  expect(receivedName).toBe(expectedName);
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Magician', () => {
  const expectedAttack = 10;
  const expectedDefence = 40;
  const newClass = new classes.Magician('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Swordsman', () => {
  const expectedAttack = 40;
  const expectedDefence = 10;
  const newClass = new classes.Swordsman('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('throws on name', () => {
  expect(() => {
    const newClass = new classes.Swordsman('B');
  }).toThrowError(new Error('Неверный формат имени'));
  expect(() => {
    const newClass = new classes.Swordsman('Bobanecvoer');
  }).toThrowError(new Error('Неверный формат имени'));
});

test('class Daemon', () => {
  const expectedAttack = 25;
  const expectedDefence = 25;
  const newClass = new classes.Daemon('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Undead', () => {
  const expectedAttack = 40;
  const expectedDefence = 10;
  const newClass = new classes.Undead('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Zombie', () => {
  const expectedAttack = 10;
  const expectedDefence = 40;
  const expectedType = 'Zombie';
  const newClass = new classes.Zombie('Bob');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  const receivedType = newClass.type;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
  expect(receivedType).toBe(expectedType);
});

test('throws on type', () => {
  expect(() => {
    const newClass = new Character('Bob', 'Sworde');
  }).toThrowError(new Error('Неверный формат типа'));
});
