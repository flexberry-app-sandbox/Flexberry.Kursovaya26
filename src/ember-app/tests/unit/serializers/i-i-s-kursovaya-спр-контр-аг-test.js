import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-спр-контр-аг', 'Unit | Serializer | i-i-s-kursovaya-спр-контр-аг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-спр-контр-аг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-kursovaya-док-план-за-на-д',
    'model:i-i-s-kursovaya-организация',
    'model:i-i-s-kursovaya-спр-виды-раб',
    'model:i-i-s-kursovaya-спр-ед-измер',
    'model:i-i-s-kursovaya-спр-контр-аг',
    'model:i-i-s-kursovaya-спр-номен',
    'model:i-i-s-kursovaya-спр-объект-стр',
    'model:i-i-s-kursovaya-спр-пользов',
    'model:i-i-s-kursovaya-спр-тип-транс-ср',
    'model:i-i-s-kursovaya-спр-трансп-ср',
    'model:i-i-s-kursovaya-статьи-затрат',
    'model:i-i-s-kursovaya-т-ч-пл-з-на-д',
    'model:i-i-s-kursovaya-т-ч-факт-вып-р',
    'model:i-i-s-kursovaya-тр-ср-кнтр',
    'model:i-i-s-kursovaya-факт-выпол-раб',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
