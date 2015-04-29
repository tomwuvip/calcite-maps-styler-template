﻿define(
   ({
    map: {
      error: "يتعذر إنشاء الخريطة"
    },
    onlineStatus: {
      offline: "أنت الآن تعمل بدون اتصال. سيتم حفظ عمليات إرسال النموذج محليًا حتى يتم إجراء اتصال بالخادم.",
      reconnecting: "إعادة الاتصال&hellip;",
      pending: "سيتم إرسال ${total} عمليات التحرير المُعلّقة عند إعادة إنشاء اتصال بالشبكة."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "المؤسسة",
          onlineLabel: "ArcGIS Online",
          contentLabel: "المحتوى",
          favoritesLabel: "المُفضّلات"
        },
        title: "حدد خريطة ويب",
        searchTitle: "بحث",
        ok: "موافق",
        cancel: "إلغاء الأمر",
        placeholder: "أدخل مصطلح البحث"
      },
      groupdlg: {
        items: {
          organizationLabel: "المؤسسة",
          onlineLabel: "ArcGIS Online",
          contentLabel: "المحتوى",
          favoritesLabel: "المُفضّلات"
        },
        title: "حدد مجموعة",
        searchTitle: "بحث",
        ok: "موافق",
        cancel: "إلغاء الأمر",
        placeholder: "أدخل مصطلح البحث"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "فيما يلي رابط لـ GeoForm"
      }
    },
    user: {
      all: "بيت_All__لاحقة",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "شمالي",
      utm_easting: "شرقي",
      utm_zone_number: "رقم المنطقة",
      selectLayerTabText: "${formSection} اختر النموذج",
      geoFormGeneralTabText: "${formSection} أدخل المعلومات",
      locationInformationText: "${formSection} حدد الموقع",
      submitInformationText: "${formSection} أكمل النموذج",
      submitInstructions: "أضف هذه المعلومات إلى الخريطة.",
      myLocationText: "الموقع الحالي",
      locationDescriptionForMoreThanOneOption: "حدد موقع هذا الإدخال بالنقر/الضغط على الخريطة أو باستخدام أحد الخيارات التالية.",
      locationDescriptionForOneOption: "حدد موقع هذا الإدخال بالنقر/الضغط على الخريطة أو باستخدام الخيارات التالية.",
      locationDescriptionForNoOption: "حدد موقع هذا الإدخال بالنقر/الضغط على الخريطة.",
      addressText: "بحث",
      geographic: "خطوط الطول/دوائر العرض",
      locationTabText: "الموقع",
      locationPopupTitle: "الموقع",
      submitButtonText: "إرسال الإدخال",
      submitButtonTextLoading: "&إرسال hellip،",
      formValidationMessageAlertText: "الحقول التالية مطلوبة:",
      selectLocation: "يرجى تحديد موقع للإرسال.",
      emptylatitudeAlertMessage: "يرجى إدخال إحداثيات ${openLink}دائرة العرض${closeLink}.",
      emptylongitudeAlertMessage: "يرجى إدخال إحداثيات ${openLink}خط الطول${closeLink}.",
      shareUserTitleMessage: "!شكرًا للمساهمة",
      entrySubmitted: "تم إرسال الإدخال إلى الخريطة.",
      shareThisForm: "مشاركة هذا النموذج",
      shareUserTextMessage: "أخبر الآخرين بالمساهمة باستخدام الخيارات التالية.",
      addAttachmentFailedMessage: "يتعذر إضافة مرفقات إلى الطبقة",
      addFeatureFailedMessage: "يتعذر إضافة معلم إلى الطبقة",
      noLayerConfiguredMessage: "حدث خطأ أثناء التحميل أو العثور على طبقة معالم قابلة للتحرير. لعرض النموذج وبدء جمع عمليات الإٍرسال أضف طبقة معالم قابلة للتحرير إلى خريطة الويب.",
      placeholderLatitude: "خط الطول (Y)",
      placeholderLongitude: "خط الطول (X)",
      latitude: "دوائر العرض",
      longitude: "خط الطول",
      findMyLocation: "تحديد موقعي",
      finding: "&تحديد موقع hellip،",
      backToTop: "الرجوع إلى الأعلى",
      addressSearchText: "ستظهر عملية الإرسال هنا. يمكنك سحب الدبوس لتصحيح الموقع.",
      shareModalFormText: "رابط النموذج",
      close: "إغلاق",
      locationNotFound: "يتعذر العثور على الموقع.",
      setLocation: "تعيين الموقع",
      find: "العثور على عنوان أو مكان ما",
      attachment: "مرفق",
      toggleDropdown: "تبديل القائمة المنسدلة",
      invalidString: "يرجى إدخال قيمة صحيحة.",
      invalidSmallNumber: "يرجى إدخال قيمة ${openStrong}عدد صحيح${closeStrong} بين -32768 و32767.",
      invalidNumber: "يرجى إدخال قيمة ${openStrong}عدد صحيح${closeStrong} بين -2147483648 و2147483647.",
      invalidFloat: "يرجى إدخال قيمة ${openStrong}نقطة عائمة${closeStrong} صحيحة.",
      invalidDouble: "يرجى إدخال قيمة ${openStrong}مزدوجة${closeStrong} صحيحة.",
      invalidLatLong: "يرجى إدخال إحداثيات خطوط الطول ودوائر العرض.",
      invalidUTM: "يرجى إدخال إحداثيات UTM صحيحة.",
      invalidUSNG: "يرجى إدخال إحداثيات USNG صحيحة.",
      invalidMGRS: "يرجى إدخال إحداثيات MGRS صحيحة.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "حدد&hellip;",
      applyEditsFailedMessage: "عذرًا، يتعذر إرسال الإدخال. يرجى إعادة المحاولة.",
      requiredFields: "توجد بعض الأخطاء. يرجى تصحيحها أدناه.",
      requiredField: "(مطلوب)",
      error: "خطأ",
      textRangeHintMessage: "${openStrong}تلميح:${closeStrong} القيمة الدنيا ${minValue} والقيمة العليا ${maxValue}",
      dateRangeHintMessage: "${openStrong}تلميح:${closeStrong} التاريخ الأدنى ${minValue} والتاريخ الأقصى ${maxValue}",
      remainingCharactersHintMessage: "${value} الأحرف المتبقية",
      mapFullScreen: "ملء الشاشة",
      mapRestore: "استعادة",
      filterSelectEmptyText: "تحديد",
      invalidLayerMessage: "طبقة النموذج غير موجودة. يرجى تكوين التطبيق وتعيين الطبقة.",
      selectedLayerText: "الكل",
      fileUploadStatus: "حالة تحميل الملف",
      uploadingBadge: "&nbsp;تحميل&hellip;",
      successBadge: "&nbsp;تم التحميل",
      retryBadge: "إعادة المحاولة",
      errorBadge: "خطأ في التحميل&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "حجم الملف كبير جدا لإرفاقه",
      exceededFileCountError: "تم تجاوز العدد الأقصى للمرفقات المسموح بها",
      selectFileTitle: "حدد ملفًا",
      btnSelectFileText: "بيت_Select File____لاحقة",
      btnViewSubmissions: "عرض عمليات الإرسال"
    },
    builder: {
      invalidUser: "عذرًا، لا يوجد لديك الإذن اللازم لعرض هذا العنصر",
      invalidWebmapSelectionAlert: "خريطة الويب المحددة لا تحتوي على طبقة صحيحة صالحة للاستخدام. يرجى إضافة FeatureLayer قابلة للتحرير في خريطة الويب للاستمرار.",
      invalidWebmapSelectionAlert2: "لمزيد من المعلومات، يرجى الرجوع إلى ${openLink}ما هي خدمة المعالم؟${closeLink}",
      selectFieldsText: "حدد حقول النموذج",
      selectThemeText: "حدد موضوع النموذج",
      webmapText: "خريطة ويب",
      layerText: "طبقة",
      detailsText: "التفاصيل",
      fieldsText: "حقول",
      styleText: "النمط",
      optionText: "خيارات",
      previewText: "معاينة",
      publishText: "نشر",
      optionsApplicationText: "خيارات",
      titleText: "مُنشئ",
      descriptionText: "قالب GeoForm هو قالب قابل للتكوين لتحرير البيانات القائمة على النموذج في ${link1}خدمة المعالم${closeLink}. ويتيح هذا التطبيق للمستخدمين بإدخال البيانات عبر نموذج بدلاً من عنصر منبثق للخريطة عند رفع مستوى قوة ${link2}خريطة الويب${closeLink} وخدمات المعالم القابلة للتحرير. استخدم الخطوات التالية لتخصيص GeoForm ونشره.",
      btnPreviousText: "السابق",
      btnNextText: "التالي",
      webmapTabTitleText: "حدد خريطة ويب",
      viewWebmap: "عرض خريطة الويب",
      webmapDetailsText: "خريطة الويب المحددة هي ${webMapTitleLink}${webMapTitle}${closeLink}. لتحديد خريطة ويب أخرى، يرجى النقر على زر اختر خريطة ويب.",
      btnSelectWebmapText: "اختر خريطة أساس",
      btnSelectWebmapTextLoading: "&تحميل hellip،",
      layerTabTitleText: "حدد طبقة قابلة للتحرير",
      selectLayerLabelText: "طبقة",
      selectLayerDefaultOptionText: "حدد طبقة",
      enableBasemapToggle: "بيت_Show Basemap Toggle_______لاحقة",
      enableBasemapToggleDescription: "بيت_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________لاحقة",
      defaultBasemap: "تبديل خريطة الأساس",
      secondaryBasemap: "خريطة الأساس الافتراضية",
      detailsTabTitleText: "تفاصيل النموذج",
      detailTitleLabelText: "العنوان",
      detailLogoLabelText: "صورة الشعار",
      descriptionLabelText: "تعليمات وتفاصيل النموذج",
      fieldDescriptionLabelText: "نص التعليمات (اختياري)",
      fieldTabFieldHeaderText: "الحقل",
      fieldTabLabelHeaderText: "تسمية",
      fieldTabDisplayTypeHeaderText: "عرض في شكل",
      fieldTabOrderColumnText: "طلب",
      fieldTabVisibleColumnText: "مُمكّن",
      displayFieldText: "عرض الحقل",
      selectMenuOption: "حدد قائمة",
      selectRadioOption: "زر الراديو",
      selectTextOption: "نص",
      selectDateOption: "تاريخ المُنتقي",
      selectRangeOption: "أداة انتقاء تعمل باللمس",
      selectCheckboxOption: "خانة الاختيار",
      selectMailOption: "البريد الإلكتروني",
      selectUrlOption: "عنوان URL",
      selectTextAreaOption: "منطقة نصية",
      previewApplicationText: "معاينة التطبيق",
      saveApplicationText: "حفظ التطبيق",
      saveText: "حفظ",
      toggleNavigationText: "تبديل الانتقال",
      formPlaceholderText: "المنتدى",
      shareBuilderInProgressTitleMessage: "نشر GeoForm",
      shareBuilderProgressBarMessage: "يرجى الانتظار&hellip;",
      shareBuilderTitleMessage: "لقد تم بنجاح! تم حفظ العنصر",
      shareBuilderTextMessage: "يمكنك البدء بجمع المعلومات عبر مشاركتها مع الآخرين",
      shareModalFormText: "رابط النموذج",
      shareBuilderSuccess: "تم تحديث ونشر GeoForm!",
      geoformTitleText: "Geo Form",
      layerTabText: "هذه هي الطبقة التي سيتم إنشاء GeoForm منها. ويجب أن تكون الطبقة خدمة معالم مُمكنة للتحرير باستخدام أذونات المشاركة المناسبة لجمهور المستخدمين.",
      detailsTabText: "استخدام مربعات تفاصيل النموذج أدناه لتخصيص العنوان وإضافة شعار مخصص وتقديم وصف قصير لجمهور مستخدمي GeoForm. في الوصف يمكنك إضافة روابط إلى الموارد الأخرى وبيانات الاتصال وكذلك توجيه جمهور المستخدمين إلى تطبيق تخطيط ويب تُميّز جميع البيانات التي يتم جمعها باستخدام GeoForm.",
      fieldsTabText: "يمكنك هنا تحديد الحقول المرئية لجمهور مستخدمي GeoForm وتحرير التسميات التي سيرونها وإضافة وصف قصير للمساعدة في إدخال البيانات.",
      styleTabText: "غيّر نمط GeoForm باستخدام الموضوعات أدناه بحسب التفضيل.",
      publishTabText: "إذا انتهيت من تخصيص GeoForm، احفظ التطبيق وابدأ مشاركته مع جمهور المستخدمين. يمكنك دائمًا العودة إلى هذا المُنشئ ومتابعة تخصيصه بحسب الملاحظات.",
      headerSizeLabel: "حجم العنوان",
      smallHeader: "استخدام عنوان صغير",
      bigHeader: "استخدام عنوان كبير",
      pushpinText: "دبوس الدفع",
      doneButtonText: "حفظ وخروج",
      fieldTabPlaceHolderHeaderText: "تلميح (اختياري)",
      enableAttachmentLabelText: "${openStrong}تمكين المرفقات${closeStrong}",
      enableAttachmentLabelHint: "يمكنك تمكين/تعطيل المرفقات هنا",
      attachmentIsRequiredLabelText: "${openStrong}المرفقات مطلوبة${closeStrong}",
      attachmentIsRequiredLabelHint: "إذا لزم الأمر، قد يتعين على المستخدمين إدخال مرفق.",
      attachmentLabelText: "لافتة تسمية زر الإرفاق",
      attachmentLabelHint: "سيظهر هذا النص بجوار زر المرفقات. يمكنك استخدام هذه المساحة لوصف ما تريد إرفاقه لجمهور المستخدمين (صورة أو مقطع فيديو أو مستند وغير ذلك) وتنسيق الملف الذي تريده (.jpeg أو .png أو .docx أو .pdf أو غير ذلك) وأي تعليمات إضافية.",
      attachmentDescription: "وصف المرفقات",
      attachmentHint: "إذا لزم الأمر، يمكنك تقديم تعليمات إضافية للمُرفق هنا.",
      jumbotronDescription: "استخدم عنوانًا صغيرًا أو كبيرًا للنموذج، وقد يساعد العنوان الكبير في تعريف الغرض من التطبيق، إلا أنه يشغل حيزًا كبيرًا من الشاشة",
      shareGeoformText: "مشاركة Geoform",
      shareDescription: "تعمل لوحة المشاركة على تسهيل مشاركة GeoForm لجمهور المستخدمين مع المتعاونين الآخرين بمجرد قيامهم بعملية إرسال - يمكن تعطيل ذلك في أي وقت.",
      defaultMapExtent: "مدى الخريطة الافتراضي",
      defaultMapExtentDescription: "سيتم إعادة تعيين الخريطة إلى المدى الافتراضي في خريطة الويب بعد عملية الإرسال - يمكن تعطيل ذلك في أي وقت.",
      pushpinOptionsDescription: "اختر من مجموعة متنوعة من الألوان لدبوس تثبيت الخريطة، ويجب أن يختلف عن رموز الخريطة لمساعدة المستخدم في وضع الإرسال على الخريطة",
      selectLocationText: "حدد موقعًا بحسب",
      myLocationText: "موقعي",
      searchText: "بحث",
      coordinatesText: "إحداثيات خطوط الطول ودوائر العرض",
      usng: "إحداثيات USNG",
      mgrs: "إحداثيات MGRS",
      utm: "إحداثيات UTM",
      selectLocationSDescription: "السماح للمستخدمين بتحديد موقع ما باستخدام هذه الطرق.",
      dragTooltipText: "اسحب الحقل حيث تريد ظهوره",
      showHideLayerText: "عرض الطبقة",
      showHideLayerHelpText: "يمكنك تكوين GeoForm لعرض/إخفاء الطبقة. ولا يتم تطبيق هذا الخيار إلا على إعداد طبقة مفردة.",
      labelHelpMessage: "تسمية",
      placeHolderHintMessage: "نص التلميح",
      placeHolderHelpMessage: "نص التعليمات",
      selectTextOptionValue: "تحديد تصفية",
      disableLogo: "تعطيل الشعار",
      disableLogoDescription: "يمكنك تكوين GeoForm لعرض/إخفاء الشعار في عنوان النموذج",
      locateOnLoadText: "تحديد موقع على التحميل",
      locateOnLoadDescription: "يمكنك تكوين GeoForm لاستخدام الموقع الحالي في تحميل الصفحة",
      selectLayerFieldTabText: "حدد طبقة",
      allLayerSelectOptionText: "الكل",
      disableViewer: "تعطيل العارض",
      disableViewerDescription: "يمكنك تكوين GeoForm لتمكين/تعطيل العارض",
      displayFieldHintText: "بيت_Selected display field will be shown in the viewer as a title___________________لاحقة"
    },
    viewer: {
      geocoderCancelText: "إلغاء الأمر",
      viewReportsTabText: "عمليات الإرسال",
      viewLegendTabText: "وسيلة إيضاح",
      viewAboutusTabText: "نبذة عن",
      viewMapTabText: "خريطة",
      sortHeaderText: "فرز بواسطة:",
      btnSubmitReportText: "إرسال تقرير",
      geocoderPlaceholderText: "كود بريدي، المدينة، وما إلى ذلك",
      noSearchResult: "لم يتم العثور على نتائج",
      recordsTabTooltip: "عرض عمليات الإرسال",
      legendTabTooltip: "وسيلة إيضاح",
      aboutUsTabTooltip: "AboutUs",
      mapTabTooltip: "خريطة",
      appLoadingFailedMessage: "يكون ViewerMode غير متاح",
      btnDescendingText: "تنازلي",
      btnAscendingText: "تصاعدي",
      geometryUnavailableErrorMessage: "يتعذر العثور على الشكل الهندسي للمعلم",
      infoPopupOffErrorMessage: "تكون InfoPopup قيد إيقاف التشغيل",
      btnLoadMoreText: "تحميل المزيد",
      unavailableTitleText: "بلا عنوان",
      unavailableConfigMessage: "يتعذر تحميل التكوين"
    }
  })
);