import { Serializer as СпрТранспСрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-спр-трансп-ср';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрТранспСрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
