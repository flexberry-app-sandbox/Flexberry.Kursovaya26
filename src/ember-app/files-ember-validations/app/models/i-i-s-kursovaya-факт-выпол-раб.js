import {
  defineNamespace,
  defineProjections,
  Model as ФактВыполРабMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-факт-выпол-раб';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФактВыполРабMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
