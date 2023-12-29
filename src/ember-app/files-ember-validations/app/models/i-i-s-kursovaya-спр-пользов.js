import {
  defineNamespace,
  defineProjections,
  Model as СпрПользовMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-спр-пользов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрПользовMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
