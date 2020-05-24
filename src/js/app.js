export default function Character(name, type) {
  name.toString();
  type.toString();
  if (name.length < 2) {
    throw (new Error('Слишком короткое имя'));
  } else if (name.length > 10) {
    throw (new Error('Слишком длинное имя'));
  }
  if (type === 'Bowman' || type === 'Undead') {
    this.attack = 25;
    this.defense = 25;
  } else if (type === 'Swordsman' || type === 'Zombie') {
    this.attack = 40;
    this.defense = 10;
  } else if (type === 'Magician' || type === 'Daemon') {
    this.attack = 10;
    this.defense = 40;
  } else {
    throw (new Error('Неизвестный тип персонажа'));
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
}
