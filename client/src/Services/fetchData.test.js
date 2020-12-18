import fetchData from './fetchData';

describe('fetchData', () => {
  it('returns an object and calls fetch twice', async () => {
    const fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve('test'),
      })
    );
    const result = await fetchData(fetch);
    expect(result).toEqual(['test', 'test']);
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
