﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "媒体",
				lblSelect2: "内容",
				lblMap: "地图",
				lblImage: "图像",
				lblVideo: "视频",
				lblExternal: "Web 页面",
				disabled: "此功能已被管理员禁用",
				url: "要手动输入图像的 web 地址",
				userLookup: "加载图片集",
				notImplemented: "尚未实现。",
				noData: "未找到公共图片集"
			},
			imageSelector: {
				lblStep1: "选择服务",
				lblStep2: "选择媒体",
				lblStep3: "配置"
			},
			imageSelectorHome: {
				explain: "从社交媒体加载图像，<br /> 或直接从 URL 进行加载"
			},
			imageSelectorFlickr: {
				userInputLbl: "用户名",
				signInMsg2: "未找到用户",
				loadingFailed: "加载失败"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook 用户",
				rightHeader: "Facebook 页面",
				pageExplain: "Facebook 页面属于公共品牌/产品或像 <b>esrigis</b> 一样的名品。可以在页面 URL 的第一个\“/\”后面获得页面名称。",
				pageInputLbl: "页面名称",
				lookupMsgError: "未找到页面"
			},
			imageSelectorPicasa: {
				userInputLbl: "电子邮件或 Picasa/Google+ ID",
				signInMsg2: "未找到帐户",
				howToFind: "如何查找 Picasa 或 Google+ 帐户 ID",
				howToFind2: "复制任何 Picasa 或 G+ 页面的第一个和第二个\“/\”之间的数字"
			},
			videoSelectorCommon: {
				check: "选中",
				notFound: "未找到视频",
				found: "已找到视频",
				select: "选择此视频"
			},
			videoSelectorHome: {
				other: "其他"
			},
			videoSelectorYoutube: {
				url: "Youtube 视频的 URL",
				pageInputLbl: "用户名",
				lookupMsgError: "未找到用户",
				howToFind: "如何查找 YouTube 用户名",
				howToFind2: "用户名显示在视频下方",
				found: "已找到",
				noData: "未找到公开视频"
			},
			videoSelectorVimeo: {
				url: "Vimeo 视频的 URL"
			},
			videoSelectorOther: {
				explain1: "试_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_验.",
				explain2: "大多数在线视频托管服务均提供此功能，您必须查找此选项以嵌入视频，复制给定代码并使用 %WEBPAGE%。",
				explain3: "或者，如果您希望自己托管视频，则可以创建使用视频播放器(如 %EXAMPLE%)的 HTML 页面，托管此页面并同样使用 %WEBPAGE%。",
				webpage: "网页要素"
			},
			webpageSelectorHome: {
				lblUrl: "网页 URL",
				lblEmbed: "嵌入代码",
				lblOR: "或",
				lblError1: "错误，请清除其中一个输入字段。",
				lblError2: "嵌入代码仅可包含一个 %IFRAMETAG%",
				configure: "配置"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "图像 URL 应该以 http:// 开始，以 .jpg 或 .png 结束",
				lblURLError: "此图像可能无效。请指定图像文件的直接链接(URL 通常以 .jpg 或 .png 结尾)。包含图像的网页链接无法使用。",
				lblURLCheck: "正在检查图像...",
				lblLabel: "图像标题",
				lblLabel1: "说明文字",
				lblLabel2: "悬停文本",
				lblLabel3: "无",
				lblLabelPH: "请输入文本...",
				lblMaximize: "在图像拐角位置放置一个最大化按钮",
				lblMaximizeHelp: "建议仅用于高质量照片",
				lblPosition: "位置",
				lblPosition1: "居中",
				lblPosition2: "填充",
				lblPosition3: "适应",
				lblPosition4: "拉伸",
				lblPosition5: "自定义",
				tooltipDimension: "可使用“px”或“%”指定值",
				tooltipDimension2: "值必须在 'px'中指定",
				lblPosition2Explain: "（可裁切）",
				lblPosition3Explain: "（不裁切）",
				lblPosition3Explain2: "(宽度将始终适应面板)",
				lblPosition4Explain: "（可变形）",
				unloadLbl: "试_Unload when reader navigates away_验",
				unloadHelp: "试_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_验."
			},
			editorActionGeocode: {
				lblTitle: "定位地址或地点",
				mapMarkerExplain: "用户在单击链接时会看到地图标记"
			},
			editorActionMedia: {
				lblTitle: "更改主要阶段内容"
			},
			editorInlineMedia: {
				lblTitle: "插入图像、视频或网页"
			}
		}
	})
);
