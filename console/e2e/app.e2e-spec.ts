import { MathPage } from './app.po';

describe('math App', () => {
  let page: MathPage;

  beforeEach(() => {
    page = new MathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
