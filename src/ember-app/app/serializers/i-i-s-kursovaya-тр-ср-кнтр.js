import { Serializer as ТрСрКнтрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-тр-ср-кнтр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТрСрКнтрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
