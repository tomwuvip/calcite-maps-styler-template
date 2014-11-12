﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Sisältö",
				lblMap: "Kartta",
				lblImage: "Kuva",
				lblVideo: "Video",
				lblExternal: "Web-sivu",
				disabled: "Pääkäyttäjä on poistanut tämän toiminnon käytöstä.",
				url: "Kuvan verkko-osoitteen manuaalinen syöttäminen",
				userLookup: "Lataa albumit",
				notImplemented: "Ei ole vielä toteutettu.",
				noData: "Julkista albumia ei löytynyt"
			},
			imageSelector: {
				lblStep1: "Valitse palvelu",
				lblStep2: "Valitse media",
				lblStep3: "Muokkaa"
			},
			imageSelectorHome: {
				explain: "Lataa kuvat sosiaalisesta mediasta <br />tai suoraan URL-osoitteesta"
			},
			imageSelectorFlickr: {
				userInputLbl: "Käyttäjätunnus",
				signInMsg2: "Käyttäjää ei löydy",
				loadingFailed: "Lataus epäonnistui"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-käyttäjä",
				rightHeader: "Facebook-sivu",
				pageExplain: "Facebook-sivu on julkinen tuotemerkki tai tunnettu tuote, kuten <b>esrigis</b>. Saat sivun nimen sivun URL-osoitteessa olevan ensimmäisen vinoviivan (/) jälkeen.",
				pageInputLbl: "Sivun nimi",
				lookupMsgError: "Sivua ei löydy"
			},
			imageSelectorPicasa: {
				userInputLbl: "Sähköpostiosoite tai Picasa-/Google+-tunnus",
				signInMsg2: "Tiliä ei löydy",
				howToFind: "Picasa- tai Google+-tilitunnuksen etsiminen",
				howToFind2: "Kopioi minkä tahansa Picasa- tai Google+-sivun ensimmäisen ja toisen vinoviivan (/) välissä olevat luvut"
			},
			videoSelectorCommon: {
				check: "Valitse",
				notFound: "Videota ei löydy",
				found: "Video löytyi",
				select: "Valitse tämä video"
			},
			videoSelectorHome: {
				other: "Muu"
			},
			videoSelectorYoutube: {
				url: "Youtube-videon URL-osoite",
				pageInputLbl: "Käyttäjätunnus",
				lookupMsgError: "Käyttäjää ei löydy",
				howToFind: "YouTube-käyttäjätunnuksen etsiminen",
				howToFind2: "Käyttäjätunnus näkyy videoissa",
				found: "Löytyi",
				noData: "Yhtään julkista videota ei löytynyt"
			},
			videoSelectorVimeo: {
				url: "Vimeo-videon URL-osoite"
			},
			videoSelectorOther: {
				explain1: "Å_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ö.",
				explain2: "Useimmissa online-videoisännöintipalveluissa voi käyttää kyseistä ominaisuutta, ja sinun on etsittävä videon upotusvalinta, kopioitava annettu koodi ja käytettävä sivustoa %WEBPAGE%.",
				explain3: "Jos taas haluat isännöidä itse videota, voit luoda HTML-sivun, joka käyttää videosoitinta (esim. %EXAMPLE%), isännöidä tätä sivua ja käyttää myös sivustoa %WEBPAGE%.",
				webpage: "Web-sivukohde"
			},
			webpageSelectorHome: {
				lblUrl: "Web-sivun URL-osoite",
				lblEmbed: "Upotuskoodi",
				lblOR: "TAI",
				lblError1: "Virhe, tyhjennä toinen kahdesta lähtöaineistokentästä.",
				lblError2: "Upotuskoodi voi sisältää vain yhden merkkijonon %IFRAMETAG%",
				configure: "Määritä"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Kuvan URL-osoitteen on alettava merkkijonolla http:// ja loputtava tarkenteeseen .jpg tai .png",
				lblURLError: "Kuva ei ole kelvollinen. Määritä suora linkki kuvatiedostoon (URL päättyy yleensä jpg- tai png-tunnisteeseen ). Linkki kuvan sisältävään verkkosivuun ei toimi.",
				lblURLCheck: "Tarkistetaan kuvaa...",
				lblLabel: "Kuvan seloste",
				lblLabel1: "Seloste",
				lblLabel2: "Kohoteksti",
				lblLabel3: "Ei mitään",
				lblLabelPH: "Kirjoita vähän tekstiä...",
				lblMaximize: "Sisällytä suurennuspainike kuvan kulmaan",
				lblMaximizeHelp: "Suositellaan vain korkealaatuisille valokuville",
				lblPosition: "Sijainti",
				lblPosition1: "Keskikohta",
				lblPosition2: "Täytä",
				lblPosition3: "Sovita",
				lblPosition4: "Venytä",
				lblPosition5: "Mukautettu",
				tooltipDimension: "Arvo voidaan määrittää px (pikseli)- tai %-yksiköissä",
				tooltipDimension2: "Arvo on määritettävä pikseleinä",
				lblPosition2Explain: "(voi rajautua)",
				lblPosition3Explain: "(ei rajaudu)",
				lblPosition3Explain2: "(leveys sopii aina paneeliin)",
				lblPosition4Explain: "(voi vääristyä)",
				unloadLbl: "Å_Unload when reader navigates away_ö",
				unloadHelp: "Å_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ö."
			},
			editorActionGeocode: {
				lblTitle: "Paikanna osoite tai paikka",
				mapMarkerExplain: "Käyttäjä näkee karttamerkit napsauttaessaan linkkiä"
			},
			editorActionMedia: {
				lblTitle: "Muuta päävaiheen sisältöä"
			},
			editorInlineMedia: {
				lblTitle: "Lisää kuva, video tai verkkosivu"
			}
		}
	})
);
