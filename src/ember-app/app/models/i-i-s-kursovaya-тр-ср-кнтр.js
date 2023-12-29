import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТрСрКнтрMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-тр-ср-кнтр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТрСрКнтрMixin, Validations, {
});

defineProjections(Model);

export default Model;
