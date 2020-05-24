import Character from '../app';

test('Нельзя добавить персонажа с именем короче двух символов', () => {
  function result() {
    const char = new Character('a', 'Bowman');
    return char;
  }
  expect(result).toThrow('Слишком короткое имя');
});

test('Нельзя добавить персонажа с именем длиннее десяти символов', () => {
  function result() {
    const char = new Character('aaaaaaaaaas', 'Bowman');
    return char;
  }
  expect(result).toThrow('Слишком длинное имя');
});


test('Нельзя добавить персонажа с типом, отличным от Bowman, Swordsman, Magician, Daemon, Undead, Zombie', () => {
  function result() {
    const char = new Character('aaaa', 'aa');
    return char;
  }
  expect(result).toThrow('Неизвестный тип персонажа');
});

test('Если добавить персонажа типа Bowman, получится Bowman', () => {
  const result = new Character('cat', 'Bowman');
  expect(result).toEqual({
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Bowman',
  });
});

test('Если добавить персонажа типа Swordsman, получится Swordsman', () => {
  const result = new Character('cat', 'Swordsman');
  expect(result).toEqual({
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Swordsman',
  });
});

test('Если добавить персонажа типа Magician, получится Magician', () => {
  const result = new Character('cat', 'Magician');
  expect(result).toEqual({
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Magician',
  });
});

test('Если добавить персонажа типа Undead, получится Undead', () => {
  const result = new Character('cat', 'Undead');
  expect(result).toEqual({
    attack: 25,
    defense: 25,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Undead',
  });
});

test('Если добавить персонажа типа Zombie, получится Zombie', () => {
  const result = new Character('cat', 'Zombie');
  expect(result).toEqual({
    attack: 40,
    defense: 10,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Zombie',
  });
});

test('Если добавить персонажа типа Daemon, получится Daemon', () => {
  const result = new Character('cat', 'Daemon');
  expect(result).toEqual({
    attack: 10,
    defense: 40,
    health: 100,
    level: 1,
    name: 'cat',
    type: 'Daemon',
  });
});
