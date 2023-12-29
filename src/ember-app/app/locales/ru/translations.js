import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaДокПланЗаНаДLForm from './forms/i-i-s-kursovaya-док-план-за-на-д-l';
import IISKursovayaОрганизацияLForm from './forms/i-i-s-kursovaya-организация-l';
import IISKursovayaСпрВидыРабLForm from './forms/i-i-s-kursovaya-спр-виды-раб-l';
import IISKursovayaСпрЕдИзмерLForm from './forms/i-i-s-kursovaya-спр-ед-измер-l';
import IISKursovayaСпрКонтрАгLForm from './forms/i-i-s-kursovaya-спр-контр-аг-l';
import IISKursovayaСпрНоменLForm from './forms/i-i-s-kursovaya-спр-номен-l';
import IISKursovayaСпрОбъектСтрLForm from './forms/i-i-s-kursovaya-спр-объект-стр-l';
import IISKursovayaСпрПользовLForm from './forms/i-i-s-kursovaya-спр-пользов-l';
import IISKursovayaСпрТипТрансСрLForm from './forms/i-i-s-kursovaya-спр-тип-транс-ср-l';
import IISKursovayaСпрТранспСрLForm from './forms/i-i-s-kursovaya-спр-трансп-ср-l';
import IISKursovayaСтатьиЗатратLForm from './forms/i-i-s-kursovaya-статьи-затрат-l';
import IISKursovayaТрСрКнтрLForm from './forms/i-i-s-kursovaya-тр-ср-кнтр-l';
import IISKursovayaФактВыполРабLForm from './forms/i-i-s-kursovaya-факт-выпол-раб-l';
import IISKursovayaДокПланЗаНаДEForm from './forms/i-i-s-kursovaya-док-план-за-на-д-e';
import IISKursovayaОрганизацияEForm from './forms/i-i-s-kursovaya-организация-e';
import IISKursovayaСпрВидыРабEForm from './forms/i-i-s-kursovaya-спр-виды-раб-e';
import IISKursovayaСпрЕдИзмерEForm from './forms/i-i-s-kursovaya-спр-ед-измер-e';
import IISKursovayaСпрКонтрАгEForm from './forms/i-i-s-kursovaya-спр-контр-аг-e';
import IISKursovayaСпрНоменEForm from './forms/i-i-s-kursovaya-спр-номен-e';
import IISKursovayaСпрОбъектСтрEForm from './forms/i-i-s-kursovaya-спр-объект-стр-e';
import IISKursovayaСпрПользовEForm from './forms/i-i-s-kursovaya-спр-пользов-e';
import IISKursovayaСпрТипТрансСрEForm from './forms/i-i-s-kursovaya-спр-тип-транс-ср-e';
import IISKursovayaСпрТранспСрEForm from './forms/i-i-s-kursovaya-спр-трансп-ср-e';
import IISKursovayaСтатьиЗатратEForm from './forms/i-i-s-kursovaya-статьи-затрат-e';
import IISKursovayaТрСрКнтрEForm from './forms/i-i-s-kursovaya-тр-ср-кнтр-e';
import IISKursovayaФактВыполРабEForm from './forms/i-i-s-kursovaya-факт-выпол-раб-e';
import IISKursovayaДокПланЗаНаДModel from './models/i-i-s-kursovaya-док-план-за-на-д';
import IISKursovayaОрганизацияModel from './models/i-i-s-kursovaya-организация';
import IISKursovayaСпрВидыРабModel from './models/i-i-s-kursovaya-спр-виды-раб';
import IISKursovayaСпрЕдИзмерModel from './models/i-i-s-kursovaya-спр-ед-измер';
import IISKursovayaСпрКонтрАгModel from './models/i-i-s-kursovaya-спр-контр-аг';
import IISKursovayaСпрНоменModel from './models/i-i-s-kursovaya-спр-номен';
import IISKursovayaСпрОбъектСтрModel from './models/i-i-s-kursovaya-спр-объект-стр';
import IISKursovayaСпрПользовModel from './models/i-i-s-kursovaya-спр-пользов';
import IISKursovayaСпрТипТрансСрModel from './models/i-i-s-kursovaya-спр-тип-транс-ср';
import IISKursovayaСпрТранспСрModel from './models/i-i-s-kursovaya-спр-трансп-ср';
import IISKursovayaСтатьиЗатратModel from './models/i-i-s-kursovaya-статьи-затрат';
import IISKursovayaТЧПлЗНаДModel from './models/i-i-s-kursovaya-т-ч-пл-з-на-д';
import IISKursovayaТЧФактВыпРModel from './models/i-i-s-kursovaya-т-ч-факт-вып-р';
import IISKursovayaТрСрКнтрModel from './models/i-i-s-kursovaya-тр-ср-кнтр';
import IISKursovayaФактВыполРабModel from './models/i-i-s-kursovaya-факт-выпол-раб';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-док-план-за-на-д': IISKursovayaДокПланЗаНаДModel,
    'i-i-s-kursovaya-организация': IISKursovayaОрганизацияModel,
    'i-i-s-kursovaya-спр-виды-раб': IISKursovayaСпрВидыРабModel,
    'i-i-s-kursovaya-спр-ед-измер': IISKursovayaСпрЕдИзмерModel,
    'i-i-s-kursovaya-спр-контр-аг': IISKursovayaСпрКонтрАгModel,
    'i-i-s-kursovaya-спр-номен': IISKursovayaСпрНоменModel,
    'i-i-s-kursovaya-спр-объект-стр': IISKursovayaСпрОбъектСтрModel,
    'i-i-s-kursovaya-спр-пользов': IISKursovayaСпрПользовModel,
    'i-i-s-kursovaya-спр-тип-транс-ср': IISKursovayaСпрТипТрансСрModel,
    'i-i-s-kursovaya-спр-трансп-ср': IISKursovayaСпрТранспСрModel,
    'i-i-s-kursovaya-статьи-затрат': IISKursovayaСтатьиЗатратModel,
    'i-i-s-kursovaya-т-ч-пл-з-на-д': IISKursovayaТЧПлЗНаДModel,
    'i-i-s-kursovaya-т-ч-факт-вып-р': IISKursovayaТЧФактВыпРModel,
    'i-i-s-kursovaya-тр-ср-кнтр': IISKursovayaТрСрКнтрModel,
    'i-i-s-kursovaya-факт-выпол-раб': IISKursovayaФактВыполРабModel
  },

  'application-name': 'Kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya',
          title: 'Kursovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        приложение: {
          caption: 'Приложение',
          title: 'Приложение',
          'i-i-s-kursovaya-спр-пользов-l': {
            caption: 'Справочник: Пользователи',
            title: ''
          },
          'i-i-s-kursovaya-тр-ср-кнтр-l': {
            caption: 'Справочник: Транспортные средства контрагента',
            title: ''
          },
          'i-i-s-kursovaya-статьи-затрат-l': {
            caption: 'Справочник: Статьи Затрат',
            title: ''
          },
          'i-i-s-kursovaya-спр-трансп-ср-l': {
            caption: 'Справочник: Транспортные Средства',
            title: ''
          },
          'i-i-s-kursovaya-док-план-за-на-д-l': {
            caption: 'Документ: Плановая заявка на день',
            title: ''
          },
          'i-i-s-kursovaya-спр-контр-аг-l': {
            caption: 'Справочник: Контрагенты',
            title: ''
          },
          'i-i-s-kursovaya-спр-виды-раб-l': {
            caption: 'Справочник: Виды Работ',
            title: ''
          },
          'i-i-s-kursovaya-организация-l': {
            caption: 'Справочник: Организации',
            title: ''
          },
          'i-i-s-kursovaya-спр-номен-l': {
            caption: 'Справочник: Номенклатуры',
            title: ''
          },
          'i-i-s-kursovaya-спр-тип-транс-ср-l': {
            caption: 'Справочник: Тип транспортного средства',
            title: ''
          },
          'i-i-s-kursovaya-спр-объект-стр-l': {
            caption: 'Справочник: Объект строительства',
            title: ''
          },
          'i-i-s-kursovaya-спр-ед-измер-l': {
            caption: 'Справочник: Единицы измерения',
            title: ''
          },
          'i-i-s-kursovaya-факт-выпол-раб-l': {
            caption: 'Документ: Фактическое выполнение работ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-док-план-за-на-д-l': IISKursovayaДокПланЗаНаДLForm,
    'i-i-s-kursovaya-организация-l': IISKursovayaОрганизацияLForm,
    'i-i-s-kursovaya-спр-виды-раб-l': IISKursovayaСпрВидыРабLForm,
    'i-i-s-kursovaya-спр-ед-измер-l': IISKursovayaСпрЕдИзмерLForm,
    'i-i-s-kursovaya-спр-контр-аг-l': IISKursovayaСпрКонтрАгLForm,
    'i-i-s-kursovaya-спр-номен-l': IISKursovayaСпрНоменLForm,
    'i-i-s-kursovaya-спр-объект-стр-l': IISKursovayaСпрОбъектСтрLForm,
    'i-i-s-kursovaya-спр-пользов-l': IISKursovayaСпрПользовLForm,
    'i-i-s-kursovaya-спр-тип-транс-ср-l': IISKursovayaСпрТипТрансСрLForm,
    'i-i-s-kursovaya-спр-трансп-ср-l': IISKursovayaСпрТранспСрLForm,
    'i-i-s-kursovaya-статьи-затрат-l': IISKursovayaСтатьиЗатратLForm,
    'i-i-s-kursovaya-тр-ср-кнтр-l': IISKursovayaТрСрКнтрLForm,
    'i-i-s-kursovaya-факт-выпол-раб-l': IISKursovayaФактВыполРабLForm,
    'i-i-s-kursovaya-док-план-за-на-д-e': IISKursovayaДокПланЗаНаДEForm,
    'i-i-s-kursovaya-организация-e': IISKursovayaОрганизацияEForm,
    'i-i-s-kursovaya-спр-виды-раб-e': IISKursovayaСпрВидыРабEForm,
    'i-i-s-kursovaya-спр-ед-измер-e': IISKursovayaСпрЕдИзмерEForm,
    'i-i-s-kursovaya-спр-контр-аг-e': IISKursovayaСпрКонтрАгEForm,
    'i-i-s-kursovaya-спр-номен-e': IISKursovayaСпрНоменEForm,
    'i-i-s-kursovaya-спр-объект-стр-e': IISKursovayaСпрОбъектСтрEForm,
    'i-i-s-kursovaya-спр-пользов-e': IISKursovayaСпрПользовEForm,
    'i-i-s-kursovaya-спр-тип-транс-ср-e': IISKursovayaСпрТипТрансСрEForm,
    'i-i-s-kursovaya-спр-трансп-ср-e': IISKursovayaСпрТранспСрEForm,
    'i-i-s-kursovaya-статьи-затрат-e': IISKursovayaСтатьиЗатратEForm,
    'i-i-s-kursovaya-тр-ср-кнтр-e': IISKursovayaТрСрКнтрEForm,
    'i-i-s-kursovaya-факт-выпол-раб-e': IISKursovayaФактВыполРабEForm
  },

});

export default translations;
