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
    /// Спр виды раб.
    /// </summary>
    // *** Start programmer edit section *** (СпрВидыРаб CustomAttributes)

    // *** End programmer edit section *** (СпрВидыРаб CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник виды работ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СпрВидыРабE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "СпрЕдИзмер as \'Единица измерения\'",
            "СпрЕдИзмер.Наименование as \'Единица измерения\'"})]
    [View("СпрВидыРабL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "СпрЕдИзмер.Наименование as \'Единица измерения\'"})]
    public class СпрВидыРаб : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private int fКод;
        
        private IIS.Kursovaya.СпрЕдИзмер fСпрЕдИзмер;
        
        // *** Start programmer edit section *** (СпрВидыРаб CustomMembers)

        // *** End programmer edit section *** (СпрВидыРаб CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (СпрВидыРаб.Код CustomAttributes)

        // *** End programmer edit section *** (СпрВидыРаб.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (СпрВидыРаб.Код Get start)

                // *** End programmer edit section *** (СпрВидыРаб.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (СпрВидыРаб.Код Get end)

                // *** End programmer edit section *** (СпрВидыРаб.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрВидыРаб.Код Set start)

                // *** End programmer edit section *** (СпрВидыРаб.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (СпрВидыРаб.Код Set end)

                // *** End programmer edit section *** (СпрВидыРаб.Код Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (СпрВидыРаб.Наименование CustomAttributes)

        // *** End programmer edit section *** (СпрВидыРаб.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (СпрВидыРаб.Наименование Get start)

                // *** End programmer edit section *** (СпрВидыРаб.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (СпрВидыРаб.Наименование Get end)

                // *** End programmer edit section *** (СпрВидыРаб.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрВидыРаб.Наименование Set start)

                // *** End programmer edit section *** (СпрВидыРаб.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (СпрВидыРаб.Наименование Set end)

                // *** End programmer edit section *** (СпрВидыРаб.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Спр виды раб.
        /// </summary>
        // *** Start programmer edit section *** (СпрВидыРаб.СпрЕдИзмер CustomAttributes)

        // *** End programmer edit section *** (СпрВидыРаб.СпрЕдИзмер CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрЕдИзмер"})]
        [NotNull()]
        public virtual IIS.Kursovaya.СпрЕдИзмер СпрЕдИзмер
        {
            get
            {
                // *** Start programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Get start)

                // *** End programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Get start)
                IIS.Kursovaya.СпрЕдИзмер result = this.fСпрЕдИзмер;
                // *** Start programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Get end)

                // *** End programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Set start)

                // *** End programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Set start)
                this.fСпрЕдИзмер = value;
                // *** Start programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Set end)

                // *** End programmer edit section *** (СпрВидыРаб.СпрЕдИзмер Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СпрВидыРабE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрВидыРабE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрВидыРабE", typeof(IIS.Kursovaya.СпрВидыРаб));
                }
            }
            
            /// <summary>
            /// "СпрВидыРабL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрВидыРабL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрВидыРабL", typeof(IIS.Kursovaya.СпрВидыРаб));
                }
            }
        }
    }
}
