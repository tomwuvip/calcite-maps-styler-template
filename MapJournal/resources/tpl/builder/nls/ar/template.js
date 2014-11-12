﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "المرحلة الأساسية",
				sideTitle: "اللوحة الجانبية",
				sideDescr: "التخطيط الطباعي للحكاية النصية التي تدمج الصور ومقاطع الفيديو والخرائط في رسائل واضحة.",
				floatTitle: "اللوحة العائمة",
				floatDescr: "التخطيط الطباعي الذي يضع الخرائط في وضع التركيز أثناء السماح بشفافية لوحة نص النموذج القصير للمساعدة في تبادل القصص."
			},
			common: {
				lblStatus1: "تم النشر",
				lblStatus2: "مسودة",
				lblStatus3: "مخفي"
			},
			settingsLayoutOptions: {
				title: "خيارات التخطيط الطباعي",
				cfgLeft: "يسار",
				cfgRight: "يمين",
				cfgSmall: "صغير",
				cfgMedium: "متوسط",
				cfgLarge: "كبير",
				socialLinksLabel: "عرض مشاركة الروابط أسفل كل جزء",
				socialLinksDescr: "يُمكن ذلك القراء من إرجاع المقاطع المحددة من %TPL_NAME%. على سبيل المثال، عند استخدام مقاطع تشارك رمز، سيقوم القراء بالوصول إلى مقطع %TPL_NAME% المحدد عوضًا عن بداية القصة. يمكن للقراء استخدام رابط الوسائط الاجتماعية في مقطع العنوان لترقية %TPL_NAME% (علامة تبويب العنوان) الكلية وكذلك الوصول إلى بداية  %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "خطوط",
				defaultLbl: "الافتراضي",
				sectionTitleLbl: "عنوان المقطع",
				sectionContentLbl: "محتوى المقطع"
			},
			initPopup: {
				title: "مرحباً بك في"
			},
			addEditPopup: {
				disabled: "يتم تعطيل إضافة المقطع نظرًا لأنه تم الوصول إلى العدد الأقصى المسموح به من المقاطع.",
				titleAdd: "إضافة مقطع",
				titleAddHome: "إضافة مقطع الصفحة الرئيسية",
				titleEdit: "تحرير المقطع",
				step: "خطوة",
				stepMainStageExplain: "محتوى المرحلة الأساسية",
				stepPanelExplain: "المحتوى",
				stepMainStageNextTooltip: "أدخل",
				stepMainStageNextTooltip2: "حدد محتوى المرحلة الأساسية",
				step2NextTooltip: "أدخل عنوان المقطع ومحتويات %LAYOUT-TYPE%",
				stepNextTooltipNext: "للانتقال إلى الخطوة التالية",
				stepNextTooltipAdd: "لإضافة المقطع",
				firstAddExplain: "الجزء الأول هو جزء الصفحة الرئيسية، واعتبره 'صفحة الغلاف' لموضوعك. وسيُعرَض العنوان الذي عرفته توًا بخطوط كبيرة.",
				firstAddLeanMore: "تعلم المزيد",
				titlePlaceholder: "عنوان المقطع..."
			},
			addEditViewText: {
				editorPlaceholder: "إضافة النص والروابط والرسومات الصغيرة هنا.",
				editorActionsTitle: "إجراءات المرحلة الأساسية",
				editorActionsHelpDescr: "استخدم عناصر التحكم الحالية لإنشاء الروابط التي ستقوم بتغيير المرحلة الأساسية. مثال، عند نقر القارئ على الرابط المطلوب لتكبير الخريطة وصولا للموقع المحدد أو عرض خريطة ويب أخرى أو عرض الصورة.",
				mainStageDisabled: "يتم تعطيل إجراءات المرحلة الأساسية عند تكبير المحرر"
			},
			organizePopup: {
				title: "ترتيب",
				lblHeader: "سحب وإفلات المقاطع لتنظيم المحتويات.",
				lblColTitle: "العنوان",
				lblColPubDate: "تاريخ المنشور",
				lblColStatus: "حالة",
				checkDisplayReverse: "عرض المقاطع بترتيب عكسي",
				btnApplyWarning: "تأكيد حذف %NB% مقطع",
				deleteTooltip: "حذف",
				firstSectionExplain: "(يتعذر نقل المقطع الأساسي)",
				exportMainStage: "محتوي المرحلة الأساسية",
				exportPanel: "محتوى اللوحة",
				exportActions: "إجراءات المرحلة الأساسية"
			},
			exportData: {
				btn: "تصدير المحتوى",
				tooltip: "يتيح لك تصدير المحتوى عرض وإنشاء نسخة احتياطية من المحتوى إذا حذفتها عن غير قصد. ببساطة انسخ المحتوى من الصفحة والصقه في أي معالج للكلمات."
			},
			help: {
				lblHelp: "تعليمات",
				lblAdd: "إضافة مقطع",
				lblSettings: "الإعدادات",
				lblOrga: "تنظيم المحتويات",
				lblEdit: "تحرير",
				lblPublish: "مشاركة",
				lblTips: "تلميحات",
				lblMore: "هل تريد المزيد؟",
				lblLink: "تفضل بزيارة موقع خرائط قصص Esri على الويب.",
				content1Div1: "يمكن تكامل أنماط متعددة عند بناء الحكاية. يحتفظ <strong>%LAYOUT_TITLE%</strong> بالنصوص والصور ومقاطع الفيديو عند وصول الخرائط<strong>إلى المرحلة الأساسية</strong>. مع ذلك، يسمح %TPL_NAME% بتمييز الصور والمخططات ومقاطع الفيديو داخل المرحلة الاساسية أيضًا.",
				content1Div2: "تسمح إضافة المقاطع بتخصيص خبرة تبادل القصص. بصفتك من القُراء قم بالتمرير خلال نصوص %LAYOUT_TITLE% أو يمكن تحريك أو تكبير الخريطة على المرحلة الأساسية أو يمكن للخرائط والصور الجديدة التبديل تلقائيًا لدعم الرسالة.",
				content2Div1: "بيت_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc_لاحقة.",
				content2Div2: "بيت_You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_لاحقة.",
				content3Div1: "يتم تنظيم المحتويات داخل المقاطع. يمكن الحصول على العديد من المقاطع كما تريد (بصفتها فصول صغيرة). مسار هذه الفصول هام جدًا؛ بذلك سيصبح من الممكن إعادة ترتيب بعض المقاطع أو حذفها كما تريد.",
				content4Div1: "هل تم إيجاد خطأ أو ترغب في تغيير المواد التعليمية؟ لا. ابحث عن رمز تحرير في التطبيق للقيام بالتغييرات في المحتويات. ستقوم باستخدام وظائف التحرير عدة مرات عند تطوير %TPL_NAME%!",
				content5Div1: "بيت_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_لاحقة.",
				content5Div2: "بيت_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_لاحقة.",
				content6Div1: "عنوان قسم الصفحة الرئيسية هو نفسه عنوان دفتر اليومية؛ واعتبر قسم الصفحة الرئيسية هو 'صفحة غلاف' موضوعك. سيظل قسم الصفحة الرئيسية مرئيًا عند انتقال القُرّاء إلى دفتر اليومية.",
				content6Div2: "لا يجب أن يكون %LAYOUT_TITLE% نصًا فقط، وضع في اعتبارك تضمين صور ومقاطع فيديو للمساعدة في إضافة حياة إلى العنصر، وكذلك لتقسيم الأجزاء الطويلة للنص."
			},
			landing: {
				lblAdd: "ماذا تريد لاستدعاء دفتر الخريطة؟",
				phAdd: "أدخل عنوان...",
				lblOR: "أو",
				lblHelp: "القيام بجولة"
			},
			firstAddSplash: {
				thisis: "هذا هو",
				lblMain: "هذا هو مرحلة %BR% الأساسية"
			}
        }
    })
);
