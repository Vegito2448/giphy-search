import { getGifs } from "../../src/helpers";

describe('getGifs Helper', () => {

  const props = {
    category: 'One Punch',
    setImages: vi.fn()
  };

  test('should return 10 elements', async () => {
    const gifs = await getGifs(props);

    expect(gifs).toHaveLength(10);
  });


});