import { print as printAndroid } from '../print.android';
import { print as printIos } from '../print.ios';

describe('print utility', () => {
  it('Android print logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    printAndroid();
    expect(consoleSpy).toHaveBeenCalledWith('Print do Android');
    consoleSpy.mockRestore();
  });

  it('iOS print logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    printIos();
    expect(consoleSpy).toHaveBeenCalledWith('Print do iOS');
    consoleSpy.mockRestore();
  });
});
