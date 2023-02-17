import Validator from '../index';

test('Проверка имени пользователя на соответствие регулярному выражению.', () => {
  const input = new Validator().validateUsername('Dafery');
  expect(input).toEqual(true);
});
