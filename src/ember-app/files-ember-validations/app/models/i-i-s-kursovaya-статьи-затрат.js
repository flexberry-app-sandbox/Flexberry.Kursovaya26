import {
  defineNamespace,
  defineProjections,
  Model as СтатьиЗатратMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-статьи-затрат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтатьиЗатратMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
