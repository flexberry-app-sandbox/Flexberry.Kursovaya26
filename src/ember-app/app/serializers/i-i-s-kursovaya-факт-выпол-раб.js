import { Serializer as ФактВыполРабSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-факт-выпол-раб';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФактВыполРабSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
