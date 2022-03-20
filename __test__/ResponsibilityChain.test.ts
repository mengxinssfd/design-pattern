import {
  DogHandler,
  MonkeyHandler,
  SquirrelHandler,
} from '../src/Behavioral/ResponsibilityChain/FindEatFoodAnimal';

describe('ResponsibilityChain', () => {
  test('ObjectOriented', () => {
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();
    const dog = new DogHandler();

    monkey.setNext(squirrel).setNext(dog);

    const foods = ['Nut', 'Banana', 'Cup of coffee'];
    const animals = foods.map((f) => monkey.handle(f));

    expect(animals).toEqual([`Squirrel: I'll eat the Nut.`, `Monkey: I'll eat the Banana.`, null]);
  });
});
