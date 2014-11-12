﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Основная площадка",
				sideTitle: "Боковая панель",
				sideDescr: "Компоновка с доминированием текста, содержащая фотографии, видео и карты, чтобы обратить основное внимание на тему.",
				floatTitle: "Открепленная панель",
				floatDescr: "Компоновка, которая делает акцент на картографию, предоставляя прозрачную панель краткого текста, помогающего передать историю."
			},
			common: {
				lblStatus1: "Опубликованные",
				lblStatus2: "Черновой",
				lblStatus3: "Скрытый"
			},
			settingsLayoutOptions: {
				title: "Параметры компоновки",
				cfgLeft: "Слева",
				cfgRight: "Справа",
				cfgSmall: "Малый",
				cfgMedium: "Средний",
				cfgLarge: "Большой",
				socialLinksLabel: "Отображать ссылки на публикацию в нижней части каждого раздела",
				socialLinksDescr: "Это дает возможность читателям, делать ссылки и повышать популярность отдельных разделов %TPL_NAME%.  Например, если вы используйте в разделе значок поделиться, читатели скорее обратятся к этому разделу %TPL_NAME%, чем  к началу. Они могут с помощью ссылок на социальные сети, расположенных у названия раздела, сделать известным весь %TPL_NAME% (закладка названия) и выполнить переход в начало %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Шрифты",
				defaultLbl: "По умолчанию",
				sectionTitleLbl: "Название раздела",
				sectionContentLbl: "Содержание раздела"
			},
			initPopup: {
				title: "Добро пожаловать"
			},
			addEditPopup: {
				disabled: "Функция Добавить раздел отключена, поскольку достигнуто максимально допустимое число разделов.",
				titleAdd: "Добавить раздел",
				titleAddHome: "Добавить домашний раздел",
				titleEdit: "Изменить раздел",
				step: "Шаг",
				stepMainStageExplain: "Ресурсы главной площадки",
				stepPanelExplain: "Ресурсы",
				stepMainStageNextTooltip: "Введите название раздела и выберите ресурсы основной площадки",
				stepMainStageNextTooltip2: "Выберите ресурсы главной площадки",
				step2NextTooltip: "Введите название раздела и ресурсы %LAYOUT-TYPE%",
				stepNextTooltipNext: "чтобы перейти к следующему шагу",
				stepNextTooltipAdd: "чтобы добавить раздел",
				firstAddExplain: "Первый раздел является вашим Главным (стартовым) разделом, как обложка для вашей истории. Указанный заголовок будет отображаться крупным шрифтом.",
				firstAddLeanMore: "Подробнее",
				titlePlaceholder: "Название раздела..."
			},
			addEditViewText: {
				editorPlaceholder: "Добавьте здесь текст, ссылки и небольшие графики.",
				editorActionsTitle: "Действия основной площадки",
				editorActionsHelpDescr: "Используйте эти элементы управления для создания ссылок, которые будут изменять основную площадку. Например, когда читатель щелкает ссылку, карта может приблизиться к определенному местоположению, может отобразиться другая веб-карта или изображение.",
				mainStageDisabled: "Если редактор отображается в максимальном размере, действия главной площадки отключены"
			},
			organizePopup: {
				title: "Организовать",
				lblHeader: "Перетаскивайте разделы для организации ваших ресурсов.",
				lblColTitle: "Название",
				lblColPubDate: "Дата публикации",
				lblColStatus: "Статус",
				checkDisplayReverse: "Отображать разделы в обратном порядке",
				btnApplyWarning: "Подтвердите удаление разделов %NB%",
				deleteTooltip: "Удалить",
				firstSectionExplain: "(Главный раздел нельзя переместить)",
				exportMainStage: "Ресурсы главной площадки",
				exportPanel: "Панель ресурсов",
				exportActions: "Действия главной площадки"
			},
			exportData: {
				btn: "Экспорт ресурсов",
				tooltip: "Экспорт ваших ресурсов позволяет просматривать и создавать резервные копии ресурсов, которые могут случайно быть удалены. Просто скопируйте и вставьте содержимое страницы в любой текстовый процессор."
			},
			help: {
				lblHelp: "Справка",
				lblAdd: "Добавить раздел",
				lblSettings: "Настройки",
				lblOrga: "Организовать ресурсы",
				lblEdit: "Изменения",
				lblPublish: "Общий доступ",
				lblTips: "Подсказки",
				lblMore: "Хотите узнать больше?",
				lblLink: "Посетите веб-сайт Esri Story Maps.",
				content1Div1: "В процессе создания вашей истории вы можете интегрировать множество стилей. Компоновка <strong>%LAYOUT_TITLE%</strong> обычно содержит текст, изображения и видео, а для карт применяется <strong>Основная площадка</strong>. Однако %TPL_NAME% позволяет встраивать также изображения, таблицы и видео в основную площадку.",
				content1Div2: "Добавление разделов позволяет чётко настроить представление вашей истории. Читатели просматривают текст  %LAYOUT_TITLE%, карту на основной площадке можно масштабировать и перемещать, новые карты и изображения автоматически переключаются для поддержки вашего сообщения.",
				content2Div1: "Ж_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc_Я.",
				content2Div2: "Ж_You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_Я.",
				content3Div1: "Ваши ресурсы организованны по разделам. Вы можете создавать любое количество разделов (глав истории). Последовательность изложения этих глав не менее важна; с помощью инструмента Организовать вы можете задать любой порядок следования и удалить ненужные главы.",
				content4Div1: "Нашли ошибку или хотите внести изменения? Нет проблем! Чтобы изменить данные, нажмите значок Изменить в вашем приложении. В процессе создания вашего%TPL_NAME% функции редактирования будут применяться очень часто.",
				content5Div1: "Ж_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_Я.",
				content5Div2: "Ж_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_Я.",
				content6Div1: "Заголовок вашего Главного раздела также является заголовком журнала; главный раздел можно сравнить с обложкой вашей истории. Заголовок Главного раздела виден с любой страницы журнала.",
				content6Div2: "В вашем %LAYOUT_TITLE% может быть не только текст, но и фотографии и видео, чтобы сделать историю более красочной и оживить длинные тексты разделов."
			},
			landing: {
				lblAdd: "Что называется Журналом карт?",
				phAdd: "Введите ваш заголовок...",
				lblOR: "Или",
				lblHelp: "Ознакомительный тур"
			},
			firstAddSplash: {
				thisis: "Это",
				lblMain: "Это главная площадка %BR%"
			}
        }
    })
);
