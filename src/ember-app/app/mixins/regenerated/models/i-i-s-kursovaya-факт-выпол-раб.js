import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-kursovaya-организация', { inverse: null, async: false }),
  спрОбъектСтр: DS.belongsTo('i-i-s-kursovaya-спр-объект-стр', { inverse: null, async: false }),
  спрПользов: DS.belongsTo('i-i-s-kursovaya-спр-пользов', { inverse: null, async: false }),
  тЧФактВыпР: DS.hasMany('i-i-s-kursovaya-т-ч-факт-вып-р', { inverse: 'фактВыполРаб', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрОбъектСтр: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.спрОбъектСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрПользов: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.спрПользов.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧФактВыпР: {
    descriptionKey: 'models.i-i-s-kursovaya-факт-выпол-раб.validations.тЧФактВыпР.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФактВыполРабE', 'i-i-s-kursovaya-факт-выпол-раб', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    организация: belongsTo('i-i-s-kursovaya-организация', 'Организация', {
      наименование: attr('Организация', { index: 4 })
    }, { index: 3 }),
    спрПользов: belongsTo('i-i-s-kursovaya-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 6 })
    }, { index: 5 }),
    спрОбъектСтр: belongsTo('i-i-s-kursovaya-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 8 })
    }, { index: 7 }),
    тЧФактВыпР: hasMany('i-i-s-kursovaya-т-ч-факт-вып-р', 'Табличная часть: Фактическое выполнение работ', {
      статьиЗатрат: belongsTo('i-i-s-kursovaya-статьи-затрат', 'Статья затрат', {
        наименование: attr('Статья затрат', { index: 1 })
      }, { index: 0, displayMemberPath: 'статья затрат' }),
      спрНомен: belongsTo('i-i-s-kursovaya-спр-номен', 'Номенклатура', {
        наименование: attr('Номенклатура', { index: 3 })
      }, { index: 2, displayMemberPath: 'номенклатура' }),
      спрКонтрАг: belongsTo('i-i-s-kursovaya-спр-контр-аг', 'Контрагент', {
        наименование: attr('Контрагент', { index: 5 })
      }, { index: 4, displayMemberPath: 'контрагент' }),
      спрВидыРаб: belongsTo('i-i-s-kursovaya-спр-виды-раб', 'Вид работы', {
        наименование: attr('Вид работы', { index: 7 })
      }, { index: 6, displayMemberPath: 'вид работы' }),
      трСрКнтр: belongsTo('i-i-s-kursovaya-тр-ср-кнтр', 'Транспортное средство контрагента', {
        регНом: attr('Транспортное средство контрагента', { index: 9 })
      }, { index: 8, displayMemberPath: 'транспортное средство контрагента' }),
      обРаб: attr('Объем работы', { index: 10 }),
      врПриб: attr('Время прибытия', { index: 11 }),
      врУб: attr('Время убытия', { index: 12 }),
      клЧасНОб: attr('Количество часов на объекте', { index: 13 }),
      кдПрост: attr('Код простоя', { index: 14 }),
      колЧасПр: attr('Количество часов простоя', { index: 15 }),
      колЧасРаб: attr('Количество часов работы', { index: 16 }),
      обГруз: attr('Объем груза', { index: 17 }),
      спрЕдИзмер: belongsTo('i-i-s-kursovaya-спр-ед-измер', 'Единица измерения', {
        наименование: attr('Единица измерения', { index: 19 })
      }, { index: 18, displayMemberPath: 'единица измерения' })
    })
  });

  modelClass.defineProjection('ФактВыполРабL', 'i-i-s-kursovaya-факт-выпол-раб', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    организация: belongsTo('i-i-s-kursovaya-организация', 'Организация', {
      наименование: attr('Организация', { index: 3 })
    }, { index: -1, hidden: true }),
    спрПользов: belongsTo('i-i-s-kursovaya-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 4 })
    }, { index: -1, hidden: true }),
    спрОбъектСтр: belongsTo('i-i-s-kursovaya-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
