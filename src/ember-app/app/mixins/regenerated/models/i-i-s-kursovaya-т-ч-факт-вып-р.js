import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  врПриб: DS.attr('string'),
  врУб: DS.attr('string'),
  кдПрост: DS.attr('decimal'),
  клЧасНОб: DS.attr('decimal'),
  колЧасПр: DS.attr('decimal'),
  колЧасРаб: DS.attr('decimal'),
  обГруз: DS.attr('decimal'),
  обРаб: DS.attr('string'),
  спрВидыРаб: DS.belongsTo('i-i-s-kursovaya-спр-виды-раб', { inverse: null, async: false }),
  спрЕдИзмер: DS.belongsTo('i-i-s-kursovaya-спр-ед-измер', { inverse: null, async: false }),
  спрКонтрАг: DS.belongsTo('i-i-s-kursovaya-спр-контр-аг', { inverse: null, async: false }),
  спрНомен: DS.belongsTo('i-i-s-kursovaya-спр-номен', { inverse: null, async: false }),
  статьиЗатрат: DS.belongsTo('i-i-s-kursovaya-статьи-затрат', { inverse: null, async: false }),
  трСрКнтр: DS.belongsTo('i-i-s-kursovaya-тр-ср-кнтр', { inverse: null, async: false }),
  фактВыполРаб: DS.belongsTo('i-i-s-kursovaya-факт-выпол-раб', { inverse: 'тЧФактВыпР', async: false })
});

export let ValidationRules = {
  врПриб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.врПриб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  врУб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.врУб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кдПрост: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.кдПрост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  клЧасНОб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.клЧасНОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колЧасПр: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.колЧасПр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колЧасРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.колЧасРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обГруз: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.обГруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.обРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрВидыРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.спрВидыРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрНомен: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.спрНомен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  статьиЗатрат: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.статьиЗатрат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  трСрКнтр: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.трСрКнтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фактВыполРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-факт-вып-р.validations.фактВыполРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧФактВыпРE', 'i-i-s-kursovaya-т-ч-факт-вып-р', {
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
  });
};
