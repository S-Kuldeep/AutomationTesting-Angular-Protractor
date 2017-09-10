
import { CurrencyformaterPipe } from './currencyformater.pipe';

describe('CurrencyformaterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyformaterPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('CurrencyformaterNullCheck', () => {
  it('Currency formater Null Check', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform("Hello World",null);
    expect("Hello World").toBe(output);
  });
});

describe('CurrencyInputAndformaterNullCheck', () => {
  it('Currency input value and formater Null Check', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform(null,null);
    expect(null).toBe(output);
  });
});

describe('CurrencyInputNullCheck', () => {
  it('Currency input value Null Check', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform(null,"test");
    expect(null).toBe(output);
  });
});

describe('CurrencyInputBlankValueCheck', () => {
  it('Currency Input Blank Value Check', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform("","test");
    expect("").toBe(output);
  });
});

describe('CurrencyFormatterBlankValueCheck', () => {
  it('Currency Formatter Blank Value Check', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform("Hello Wold test","");
    expect("Hello Wold test").toBe(output);
  });
});

//Valid test case

describe('CurrencyFormatterValidTestCase', () => {
  it('Currency Formatter Valid Test Case', () => {
    var pipe = new CurrencyformaterPipe();
    var output=pipe.transform("Hello  Wold , I  am  Here","test");
    expect("Hello  Wold , I  am  Here").toBe(output);
  });
});