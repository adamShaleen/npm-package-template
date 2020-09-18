import { getBunchodudes } from './bunchodudes';

describe('bunchodudes', () => {
  it('returns a string and thats it', () => {
    expect(getBunchodudes()).toBe('BODs are for the children');
  });
});
