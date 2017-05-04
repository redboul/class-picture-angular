import { ClassPictureNgPage } from './app.po';

describe('class-picture-ng App', () => {
  let page: ClassPictureNgPage;

  beforeEach(() => {
    page = new ClassPictureNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
