const handlers = require('../handlers');

test('renders home page', () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.home(req, res);
  expect(res.render.mock.calls[0][0]).toBe('home');
});
