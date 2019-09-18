import { ToDoAppPage } from './app.po';

describe('to-do-app App', function() {
  let page: ToDoAppPage;

  beforeEach(() => {
    page = new ToDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
