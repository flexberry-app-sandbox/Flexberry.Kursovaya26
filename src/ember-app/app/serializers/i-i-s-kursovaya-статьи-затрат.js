import { Serializer as СтатьиЗатратSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-статьи-затрат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтатьиЗатратSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
