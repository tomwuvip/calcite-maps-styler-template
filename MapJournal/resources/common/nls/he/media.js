﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "מדיה",
				lblSelect2: "תוכן",
				lblMap: "מפה",
				lblImage: "תמונה",
				lblVideo: "וידאו",
				lblExternal: "דף אינטרנט",
				disabled: "תכונה זו הוגדרה כלא זמינה על ידי המנהל",
				url: "בכדי להכניס באופן ידני כתובת אינטרנט או תמונה",
				userLookup: "טען אלבומים",
				notImplemented: "לא נתמך כעת.",
				noData: "לא נמצא אלבום ציבורי"
			},
			imageSelector: {
				lblStep1: "בחר את השירות",
				lblStep2: "בחר את המדיה שלך",
				lblStep3: "קבע תצורה"
			},
			imageSelectorHome: {
				explain: "טען תמונות ממדיה חברתית, <br /> או באופן ישיר מ- URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "שם משתמש",
				signInMsg2: "משתמש לא נמצא",
				loadingFailed: "טעינה נכשלה"
			},
			imageSelectorFacebook: {
				leftHeader: "משתמש פייסבוק",
				rightHeader: "עמוד פייסבוק",
				pageExplain: "A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the firstq'\/'\ in the page URL.",
				pageInputLbl: "שם דף",
				lookupMsgError: "עמוד לא נמצא"
			},
			imageSelectorPicasa: {
				userInputLbl: "אמייל או Picasa/Google+ ID",
				signInMsg2: "חשבון לא נמצא",
				howToFind: "כיצד למצוא את ה- ID של חשבון ה- Picasa או Google+",
				howToFind2: "העתק תווים בין ה \'/\'  הראשון לשני של כל עמוד Picasa או G+"
			},
			videoSelectorCommon: {
				check: "בדיקה",
				notFound: "לא נמצא וידאו",
				found: "נמצא וידאו",
				select: "בחר וידאו זה"
			},
			videoSelectorHome: {
				other: "אחר"
			},
			videoSelectorYoutube: {
				url: "URL של וידאו של יוטיוב",
				pageInputLbl: "שם משתמש",
				lookupMsgError: "משתמש לא נמצא",
				howToFind: "איך למצוא שם משתמש ב-YouTube",
				howToFind2: "שם המשתמש מוצג תחת קטעי וידאו",
				found: "נמצא",
				noData: "לא נמצאו סרטונים ציבוריים"
			},
			videoSelectorVimeo: {
				url: "URL של וידאו של Vimeo"
			},
			videoSelectorOther: {
				explain1: "כן_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ש.",
				explain2: "רוב שירותי הארוח של וידאו מאפשרים את היכולת הזו. אתה צריך למצוא את האפשרות לשבץ את הוידאו, להעתיק את הקוד המתאים ולהשתמש בתוך  %WEBPAGE%.",
				explain3: "לחילופין, אם אתה רוצה לארח וידאו בעצמך, אתה יכול ליצור דף HTML המשתמש בנגן וידאו כגון %EXAMPLE%, לארח דף זה וגם להשתמש ב-%WEBPAGE%.",
				webpage: "תכונות דף אינטרנט"
			},
			webpageSelectorHome: {
				lblUrl: "URL של דף האינטרנט",
				lblEmbed: "קוד מוטמע",
				lblOR: "או",
				lblError1: "שגיאה, נקה אחד משני שדות הקלט.",
				lblError2: "קוד מוטמע יכול להכיל רק %IFRAMETAG% אחד",
				configure: "קבע תצורה"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "URL של תמונה צריך להתחיל עם http:// ולהסתיים עם .jpg או .png",
				lblURLError: "תמונה זו אינה נראית חוקית. ציין קישור ישיר לקובץ תמונה (ה-URL שלך יסתיים בדרך כלל ב-‎.jpg או ‎.png). קישורים לדף אינטרנט שמכיל תמונה לא יפעלו.",
				lblURLCheck: "בודק תמונה...",
				lblLabel: "תאור תמונה",
				lblLabel1: "כותרת",
				lblLabel2: "טקסט מוצג בריחוף",
				lblLabel3: "ללא",
				lblLabelPH: "הכנס טקסט כלשהו...",
				lblMaximize: "כלול את כפתור ה-maximize  בפינת התמונה",
				lblMaximizeHelp: "מומלץ רק לתמונות באיכות גבוהה",
				lblPosition: "מיקום",
				lblPosition1: "ממורכז",
				lblPosition2: "מלא",
				lblPosition3: "מותאם",
				lblPosition4: "מתוח",
				lblPosition5: "גודל מותאם",
				tooltipDimension: "הערך יכול להיות מוגדר בתוך  'px' או '%'",
				tooltipDimension2: "יש לציין את הערך ב-'px'",
				lblPosition2Explain: "(יכול להחתך)",
				lblPosition3Explain: "(לא יכול להחתך)",
				lblPosition3Explain2: "(רוחב תמיד יתאים ללוח)",
				lblPosition4Explain: "(יכול להתעוות)",
				unloadLbl: "כן_Unload when reader navigates away_ש",
				unloadHelp: "כן_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ש."
			},
			editorActionGeocode: {
				lblTitle: "אתר כתובת או מקום",
				mapMarkerExplain: "המשתמש יראה סימן מפה בעת לחיצה על הקישור"
			},
			editorActionMedia: {
				lblTitle: "שנה את תוכן התצוגה הראשית"
			},
			editorInlineMedia: {
				lblTitle: "הכנס תמונה, קטע וידאו או דף אינטרנט"
			}
		}
	})
);
