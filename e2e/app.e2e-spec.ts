import { EggheadAngularStartPage } from './app.po';

describe('egghead-angular-start App', function() {
  let page: EggheadAngularStartPage;

  beforeEach(() => {
    page = new EggheadAngularStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
