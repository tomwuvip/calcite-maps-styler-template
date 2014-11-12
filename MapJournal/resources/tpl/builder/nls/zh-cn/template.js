﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "主要阶段",
				sideTitle: "侧面板",
				sideDescr: "文本密集型故事的布局可将照片、视频和地图组合在重点明确的消息中。",
				floatTitle: "浮动面板",
				floatDescr: "一种布局，以制图为重点，同时借助格式简单明了的文本面板来讲述故事。"
			},
			common: {
				lblStatus1: "已发布",
				lblStatus2: "草稿",
				lblStatus3: "隐藏"
			},
			settingsLayoutOptions: {
				title: "布局选项",
				cfgLeft: "左",
				cfgRight: "右",
				cfgSmall: "小",
				cfgMedium: "中",
				cfgLarge: "大",
				socialLinksLabel: "在每节底部显示共享链接",
				socialLinksDescr: "这使读者可以引用并提升 %TPL_NAME% 的特定节。例如，如果使用节共享图标，读者将会定位到该特定 %TPL_NAME% 节，而并非定位到故事的开头。读者可使用标题节中的社交媒体链接来提升整个 %TPL_NAME%（标题选项卡）并定位到 %TPL_NAME% 的开头。"
			},
			settingsLayoutFonts: {
				title: "字体",
				defaultLbl: "默认",
				sectionTitleLbl: "章节标题",
				sectionContentLbl: "章节内容"
			},
			initPopup: {
				title: "欢迎使用"
			},
			addEditPopup: {
				disabled: "由于允许的部分已达到最大数量，因此禁用“添加部分”。",
				titleAdd: "添加节",
				titleAddHome: "添加主目录部分",
				titleEdit: "编辑节",
				step: "步骤",
				stepMainStageExplain: "主要阶段内容",
				stepPanelExplain: "内容",
				stepMainStageNextTooltip: "输入节标题并选择主要阶段内容",
				stepMainStageNextTooltip2: "选择主要阶段内容",
				step2NextTooltip: "输入节标题和 %LAYOUT-TYPE% 内容",
				stepNextTooltipNext: "要进行下一步",
				stepNextTooltipAdd: "要添加节",
				firstAddExplain: "第一部分是主目录部分，可将其看做故事“封面”。刚刚定义的标题将显示为大号字体。",
				firstAddLeanMore: "了解详细信息",
				titlePlaceholder: "节标题..."
			},
			addEditViewText: {
				editorPlaceholder: "在此添加文本、链接和小图形。",
				editorActionsTitle: "主要阶段操作",
				editorActionsHelpDescr: "使用这些控件来创建将更改主要阶段的链接。例如，当读者单击某链接时，您会希望地图缩放至特定位置，显示其他 Web 地图或显示图像。",
				mainStageDisabled: "编辑器最大化时将禁用主要阶段操作"
			},
			organizePopup: {
				title: "组织",
				lblHeader: "拖放节以对内容进行组织。",
				lblColTitle: "标题",
				lblColPubDate: "发布日期",
				lblColStatus: "状态",
				checkDisplayReverse: "以相反顺序显示节",
				btnApplyWarning: "确认删除 %NB% 个部分",
				deleteTooltip: "删除",
				firstSectionExplain: "（无法移动主目录节）",
				exportMainStage: "主要阶段内容",
				exportPanel: "面板内容",
				exportActions: "主要阶段操作"
			},
			exportData: {
				btn: "导出内容",
				tooltip: "通过导出内容您可以查看并创建意外删除内容的备份。只需将页面内容复制粘贴至任意文字处理器中即可。"
			},
			help: {
				lblHelp: "帮助",
				lblAdd: "添加节",
				lblSettings: "设置",
				lblOrga: "组织内容",
				lblEdit: "编辑",
				lblPublish: "共享",
				lblTips: "提示",
				lblMore: "是否想了解更多信息？",
				lblLink: "访问 Esri Story Maps 网站。",
				content1Div1: "构建故事时，可集成各种风格。<strong>%LAYOUT_TITLE%</strong> 通常在地图要发布在<strong>主要阶段</strong>时会保留文本、图像和视频。但 %TPL_NAME% 也可以在主要阶段中展示图像、图表和视频。",
				content1Div2: "添加节可以使您真正自定义提供信息的经验。在读者滚动 %LAYOUT_TITLE% 文本时，主要阶段上的地图可平移或缩放至关键点或新地图，图像也可以自动切换以支持消息。",
				content2Div1: "试_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc_验.",
				content2Div2: "试_You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_验.",
				content3Div1: "您的内容将组织成部分。您可拥有任意数量的部分(可将其视为微型章节)。这些章节流十分重要；可在组织内根据需要重新排序或删除部分。",
				content4Div1: "发现错误或希望更改材料？别担心。在整个应用程序中查找编辑图标，以对内容进行更改。在开发 %TPL_NAME% 时将多次使用编辑功能！",
				content5Div1: "试_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_验.",
				content5Div2: "试_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_验.",
				content6Div1: "主目录节的标题也是您日志的标题；将主目录节作为故事的\“封面\”。读者浏览日志时主目录节标题仍然可见。",
				content6Div2: "您的 %LAYOUT_TITLE% 无需仅包含文字，可考虑将照片和视频包含在内以更加生动地展现故事并断开长篇文本部分!"
			},
			landing: {
				lblAdd: "若要调用地图日志需要执行什么操作?",
				phAdd: "输入标题...",
				lblOR: "或",
				lblHelp: "浏览"
			},
			firstAddSplash: {
				thisis: "这是",
				lblMain: "这是 %BR% 主要阶段"
			}
        }
    })
);
