import { MancalaPage } from './app.po';

describe('mancala App', () => {
  let page: MancalaPage;

  beforeEach(() => {
    page = new MancalaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
