import { BubbleTalkPage } from './app.po';

describe('bubble-talk App', function() {
  let page: BubbleTalkPage;

  beforeEach(() => {
    page = new BubbleTalkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
