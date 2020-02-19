import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'My App';
    config.map([
      { route: ['', 'welcome'],    name: 'welcome',    moduleId: 'welcome', nav: true, title: 'Welcome'},
      { route: 'about',            name: 'about',      moduleId: 'about',   nav: true, title: 'About' }
    ]);
  }
}
