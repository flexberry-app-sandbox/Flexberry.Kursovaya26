import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-факт-выпол-раб-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-т-ч-факт-вып-р+статьиЗатрат':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'статья затрат',
            required: true,
            relationName: 'статьиЗатрат',
            projection: 'СтатьиЗатратL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-т-ч-факт-вып-р+спрНомен':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номенклатура',
            required: true,
            relationName: 'спрНомен',
            projection: 'СпрНоменL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-т-ч-факт-вып-р+спрКонтрАг':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'контрагент',
            required: true,
            relationName: 'спрКонтрАг',
            projection: 'СпрКонтрАгL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-т-ч-факт-вып-р+спрВидыРаб':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'вид работы',
            required: true,
            relationName: 'спрВидыРаб',
            projection: 'СпрВидыРабL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-т-ч-факт-вып-р+трСрКнтр':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'транспортное средство контрагента',
            required: true,
            relationName: 'трСрКнтр',
            projection: 'ТрСрКнтрL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-т-ч-факт-вып-р+спрЕдИзмер':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'единица измерения',
            required: true,
            relationName: 'спрЕдИзмер',
            projection: 'СпрЕдИзмерL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
