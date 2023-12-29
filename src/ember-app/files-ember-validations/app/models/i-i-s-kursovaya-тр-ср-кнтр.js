import {
  defineNamespace,
  defineProjections,
  Model as ТрСрКнтрMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-тр-ср-кнтр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТрСрКнтрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
