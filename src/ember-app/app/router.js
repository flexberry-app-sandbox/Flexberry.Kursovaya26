import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-док-план-за-на-д-l');
  this.route('i-i-s-kursovaya-док-план-за-на-д-e',
  { path: 'i-i-s-kursovaya-док-план-за-на-д-e/:id' });
  this.route('i-i-s-kursovaya-док-план-за-на-д-e.new',
  { path: 'i-i-s-kursovaya-док-план-за-на-д-e/new' });
  this.route('i-i-s-kursovaya-организация-l');
  this.route('i-i-s-kursovaya-организация-e',
  { path: 'i-i-s-kursovaya-организация-e/:id' });
  this.route('i-i-s-kursovaya-организация-e.new',
  { path: 'i-i-s-kursovaya-организация-e/new' });
  this.route('i-i-s-kursovaya-спр-виды-раб-l');
  this.route('i-i-s-kursovaya-спр-виды-раб-e',
  { path: 'i-i-s-kursovaya-спр-виды-раб-e/:id' });
  this.route('i-i-s-kursovaya-спр-виды-раб-e.new',
  { path: 'i-i-s-kursovaya-спр-виды-раб-e/new' });
  this.route('i-i-s-kursovaya-спр-ед-измер-l');
  this.route('i-i-s-kursovaya-спр-ед-измер-e',
  { path: 'i-i-s-kursovaya-спр-ед-измер-e/:id' });
  this.route('i-i-s-kursovaya-спр-ед-измер-e.new',
  { path: 'i-i-s-kursovaya-спр-ед-измер-e/new' });
  this.route('i-i-s-kursovaya-спр-контр-аг-l');
  this.route('i-i-s-kursovaya-спр-контр-аг-e',
  { path: 'i-i-s-kursovaya-спр-контр-аг-e/:id' });
  this.route('i-i-s-kursovaya-спр-контр-аг-e.new',
  { path: 'i-i-s-kursovaya-спр-контр-аг-e/new' });
  this.route('i-i-s-kursovaya-спр-номен-l');
  this.route('i-i-s-kursovaya-спр-номен-e',
  { path: 'i-i-s-kursovaya-спр-номен-e/:id' });
  this.route('i-i-s-kursovaya-спр-номен-e.new',
  { path: 'i-i-s-kursovaya-спр-номен-e/new' });
  this.route('i-i-s-kursovaya-спр-объект-стр-l');
  this.route('i-i-s-kursovaya-спр-объект-стр-e',
  { path: 'i-i-s-kursovaya-спр-объект-стр-e/:id' });
  this.route('i-i-s-kursovaya-спр-объект-стр-e.new',
  { path: 'i-i-s-kursovaya-спр-объект-стр-e/new' });
  this.route('i-i-s-kursovaya-спр-пользов-l');
  this.route('i-i-s-kursovaya-спр-пользов-e',
  { path: 'i-i-s-kursovaya-спр-пользов-e/:id' });
  this.route('i-i-s-kursovaya-спр-пользов-e.new',
  { path: 'i-i-s-kursovaya-спр-пользов-e/new' });
  this.route('i-i-s-kursovaya-спр-тип-транс-ср-l');
  this.route('i-i-s-kursovaya-спр-тип-транс-ср-e',
  { path: 'i-i-s-kursovaya-спр-тип-транс-ср-e/:id' });
  this.route('i-i-s-kursovaya-спр-тип-транс-ср-e.new',
  { path: 'i-i-s-kursovaya-спр-тип-транс-ср-e/new' });
  this.route('i-i-s-kursovaya-спр-трансп-ср-l');
  this.route('i-i-s-kursovaya-спр-трансп-ср-e',
  { path: 'i-i-s-kursovaya-спр-трансп-ср-e/:id' });
  this.route('i-i-s-kursovaya-спр-трансп-ср-e.new',
  { path: 'i-i-s-kursovaya-спр-трансп-ср-e/new' });
  this.route('i-i-s-kursovaya-статьи-затрат-l');
  this.route('i-i-s-kursovaya-статьи-затрат-e',
  { path: 'i-i-s-kursovaya-статьи-затрат-e/:id' });
  this.route('i-i-s-kursovaya-статьи-затрат-e.new',
  { path: 'i-i-s-kursovaya-статьи-затрат-e/new' });
  this.route('i-i-s-kursovaya-тр-ср-кнтр-l');
  this.route('i-i-s-kursovaya-тр-ср-кнтр-e',
  { path: 'i-i-s-kursovaya-тр-ср-кнтр-e/:id' });
  this.route('i-i-s-kursovaya-тр-ср-кнтр-e.new',
  { path: 'i-i-s-kursovaya-тр-ср-кнтр-e/new' });
  this.route('i-i-s-kursovaya-факт-выпол-раб-l');
  this.route('i-i-s-kursovaya-факт-выпол-раб-e',
  { path: 'i-i-s-kursovaya-факт-выпол-раб-e/:id' });
  this.route('i-i-s-kursovaya-факт-выпол-раб-e.new',
  { path: 'i-i-s-kursovaya-факт-выпол-раб-e/new' });
});

export default Router;
