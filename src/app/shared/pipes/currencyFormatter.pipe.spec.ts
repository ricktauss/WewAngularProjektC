import { CurrencyFormatterPipe } from './currencyFormatter.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
