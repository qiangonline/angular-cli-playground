import { OakPage } from './app.po';

describe('oak App', () => {
  let page: OakPage;

  beforeEach(() => {
    page = new OakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
