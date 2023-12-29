import { Serializer as СпрВидыРабSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-спр-виды-раб';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрВидыРабSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
