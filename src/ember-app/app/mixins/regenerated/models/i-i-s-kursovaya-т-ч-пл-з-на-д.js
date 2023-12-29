import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времПриб: DS.attr('string'),
  колЧас: DS.attr('decimal'),
  обГруз: DS.attr('decimal'),
  обРаб: DS.attr('string'),
  спрВидыРаб: DS.belongsTo('i-i-s-kursovaya-спр-виды-раб', { inverse: null, async: false }),
  спрЕдИзмер: DS.belongsTo('i-i-s-kursovaya-спр-ед-измер', { inverse: null, async: false }),
  спрКонтрАг: DS.belongsTo('i-i-s-kursovaya-спр-контр-аг', { inverse: null, async: false }),
  спрНомен: DS.belongsTo('i-i-s-kursovaya-спр-номен', { inverse: null, async: false }),
  статьиЗатрат: DS.belongsTo('i-i-s-kursovaya-статьи-затрат', { inverse: null, async: false }),
  трСрКнтр: DS.belongsTo('i-i-s-kursovaya-тр-ср-кнтр', { inverse: null, async: false }),
  докПланЗаНаД: DS.belongsTo('i-i-s-kursovaya-док-план-за-на-д', { inverse: 'тЧПлЗНаД', async: false })
});

export let ValidationRules = {
  времПриб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.времПриб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колЧас: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.колЧас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обГруз: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.обГруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.обРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрВидыРаб: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.спрВидыРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрНомен: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.спрНомен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  статьиЗатрат: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.статьиЗатрат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  трСрКнтр: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.трСрКнтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докПланЗаНаД: {
    descriptionKey: 'models.i-i-s-kursovaya-т-ч-пл-з-на-д.validations.докПланЗаНаД.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПлЗНаДE', 'i-i-s-kursovaya-т-ч-пл-з-на-д', {
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
    обРаб: attr('Объем работ', { index: 10 }),
    времПриб: attr('Время прибытия', { index: 11 }),
    колЧас: attr('Количество часов работы', { index: 12 }),
    обГруз: attr('Объем груза', { index: 13 }),
    спрЕдИзмер: belongsTo('i-i-s-kursovaya-спр-ед-измер', 'Единица измерения', {
      наименование: attr('Единица измерения', { index: 15 })
    }, { index: 14, displayMemberPath: 'единица измерения' })
  });
};
