import { A2sitePage } from './app.po';

describe('a2site App', () => {
  let page: A2sitePage;

  beforeEach(() => {
    page = new A2sitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
