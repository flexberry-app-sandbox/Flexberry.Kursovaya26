import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  регНом: DS.attr('string'),
  спрКонтрАг: DS.belongsTo('i-i-s-kursovaya-спр-контр-аг', { inverse: null, async: false }),
  спрТранспСр: DS.belongsTo('i-i-s-kursovaya-спр-трансп-ср', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-kursovaya-тр-ср-кнтр.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  регНом: {
    descriptionKey: 'models.i-i-s-kursovaya-тр-ср-кнтр.validations.регНом.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-kursovaya-тр-ср-кнтр.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТранспСр: {
    descriptionKey: 'models.i-i-s-kursovaya-тр-ср-кнтр.validations.спрТранспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТрСрКнтрE', 'i-i-s-kursovaya-тр-ср-кнтр', {
    код: attr('Код', { index: 0 }),
    регНом: attr('Регистрационный номер', { index: 1 }),
    спрТранспСр: belongsTo('i-i-s-kursovaya-спр-трансп-ср', 'Транспортное средство ', {
      наименование: attr('Транспортное средство ', { index: 3 })
    }, { index: 2 }),
    спрКонтрАг: belongsTo('i-i-s-kursovaya-спр-контр-аг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('ТрСрКнтрL', 'i-i-s-kursovaya-тр-ср-кнтр', {
    код: attr('Код', { index: 0 }),
    регНом: attr('Регистрационный номер', { index: 1 }),
    спрТранспСр: belongsTo('i-i-s-kursovaya-спр-трансп-ср', 'Транспортное средство ', {
      наименование: attr('Транспортное средство ', { index: 2 })
    }, { index: -1, hidden: true }),
    спрКонтрАг: belongsTo('i-i-s-kursovaya-спр-контр-аг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
