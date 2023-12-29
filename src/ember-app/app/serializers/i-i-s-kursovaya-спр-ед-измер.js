import { Serializer as СпрЕдИзмерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-спр-ед-измер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрЕдИзмерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
