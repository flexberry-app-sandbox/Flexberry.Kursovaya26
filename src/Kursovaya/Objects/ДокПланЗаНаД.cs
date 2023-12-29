﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Док план за на Д.
    /// </summary>
    // *** Start programmer edit section *** (ДокПланЗаНаД CustomAttributes)

    // *** End programmer edit section *** (ДокПланЗаНаД CustomAttributes)
    [AutoAltered()]
    [Caption("Документ: Плановая заявка на день")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокПланЗаНаДE", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Организация\'",
            "СпрПользов as \'Пользователь\'",
            "СпрПользов.ФИО as \'Пользователь\'",
            "СпрОбъектСтр as \'Объект строительства\'",
            "СпрОбъектСтр.Наименование as \'Объект строительства\'"})]
    [AssociatedDetailViewAttribute("ДокПланЗаНаДE", "ТЧПлЗНаД", "ТЧПлЗНаДE", true, "", "Табличная часть: Плановая заявка на день", true, new string[] {
            ""})]
    [View("ДокПланЗаНаДL", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Организация.Наименование as \'Организация\'",
            "СпрПользов.ФИО as \'Пользователь\'",
            "СпрОбъектСтр.Наименование as \'Объект строительства\'"})]
    public class ДокПланЗаНаД : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private System.DateTime fДата;
        
        private string fВремя;
        
        private IIS.Kursovaya.СпрОбъектСтр fСпрОбъектСтр;
        
        private IIS.Kursovaya.Организация fОрганизация;
        
        private IIS.Kursovaya.СпрПользов fСпрПользов;
        
        private IIS.Kursovaya.DetailArrayOfТЧПлЗНаД fТЧПлЗНаД;
        
        // *** Start programmer edit section *** (ДокПланЗаНаД CustomMembers)

        // *** End programmer edit section *** (ДокПланЗаНаД CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.Время CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Время Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Время Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Время Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Время Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Дата Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Дата Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Дата Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Дата Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.Номер CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Номер Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Номер Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Номер Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Номер Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Номер Set end)
            }
        }
        
        /// <summary>
        /// Док план за на Д.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.Организация CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Организация Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Организация Get start)
                IIS.Kursovaya.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Организация Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.Организация Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.Организация Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.Организация Set end)
            }
        }
        
        /// <summary>
        /// Док план за на Д.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрОбъектСтр"})]
        [NotNull()]
        public virtual IIS.Kursovaya.СпрОбъектСтр СпрОбъектСтр
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Get start)
                IIS.Kursovaya.СпрОбъектСтр result = this.fСпрОбъектСтр;
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Set start)
                this.fСпрОбъектСтр = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрОбъектСтр Set end)
            }
        }
        
        /// <summary>
        /// Док план за на Д.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.СпрПользов CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.СпрПользов CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрПользов"})]
        [NotNull()]
        public virtual IIS.Kursovaya.СпрПользов СпрПользов
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрПользов Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрПользов Get start)
                IIS.Kursovaya.СпрПользов result = this.fСпрПользов;
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрПользов Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрПользов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрПользов Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрПользов Set start)
                this.fСпрПользов = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.СпрПользов Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.СпрПользов Set end)
            }
        }
        
        /// <summary>
        /// Док план за на Д.
        /// </summary>
        // *** Start programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД CustomAttributes)

        // *** End programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД CustomAttributes)
        public virtual IIS.Kursovaya.DetailArrayOfТЧПлЗНаД ТЧПлЗНаД
        {
            get
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Get start)

                // *** End programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Get start)
                if ((this.fТЧПлЗНаД == null))
                {
                    this.fТЧПлЗНаД = new IIS.Kursovaya.DetailArrayOfТЧПлЗНаД(this);
                }
                IIS.Kursovaya.DetailArrayOfТЧПлЗНаД result = this.fТЧПлЗНаД;
                // *** Start programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Get end)

                // *** End programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Set start)

                // *** End programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Set start)
                this.fТЧПлЗНаД = value;
                // *** Start programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Set end)

                // *** End programmer edit section *** (ДокПланЗаНаД.ТЧПлЗНаД Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокПланЗаНаДE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокПланЗаНаДE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокПланЗаНаДE", typeof(IIS.Kursovaya.ДокПланЗаНаД));
                }
            }
            
            /// <summary>
            /// "ДокПланЗаНаДL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокПланЗаНаДL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокПланЗаНаДL", typeof(IIS.Kursovaya.ДокПланЗаНаД));
                }
            }
        }
    }
}
