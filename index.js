const fetch = require('your/fetch/module/path');
const { renderBooks } = require('./path/to/renderBooks');

test('fetchBooks() calls renderBooks() with JSON response', async () => {
  const spyRenderBooks = jest.spyOn(renderBooks, 'renderBooks');

  const expectedResponse = { books: ['book1', 'book2'] };
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(expectedResponse),
    })
  );

  await fetchBooks();

  expect(spyRenderBooks).toHaveBeenCalledWith(expectedResponse);
});
