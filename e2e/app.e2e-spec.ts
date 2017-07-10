import { PipesAPPPage } from './app.po';

describe('pipes-app App', () => {
  let page: PipesAPPPage;

  beforeEach(() => {
    page = new PipesAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
