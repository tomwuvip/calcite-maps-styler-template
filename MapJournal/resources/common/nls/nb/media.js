﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medier",
				lblSelect2: "Innhold",
				lblMap: "Kart",
				lblImage: "Bilde",
				lblVideo: "Video",
				lblExternal: "Webside",
				disabled: "Administratoren har deaktivert denne funksjonen",
				url: "For å angi webadressen til et bilde manuelt",
				userLookup: "Last inn albumer",
				notImplemented: "Ikke implementert ennå.",
				noData: "Finner ingen offentlige albumer"
			},
			imageSelector: {
				lblStep1: "Velg tjeneste",
				lblStep2: "Velg medier",
				lblStep3: "Konfigurer"
			},
			imageSelectorHome: {
				explain: "Last inn bilder fra sosiale medier <br /> eller direkte fra en URL-adresse"
			},
			imageSelectorFlickr: {
				userInputLbl: "Brukernavn",
				signInMsg2: "Finner ikke bruker",
				loadingFailed: "Innlasting mislyktes"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-bruker",
				rightHeader: "Facebook-side",
				pageExplain: "En Facebook-side er for et offisielt merke, et produkt eller en kjendis, for eksempel <b>esrigis</b>. Du finner navnet på siden etter første / i sidens URL-adresse.",
				pageInputLbl: "Sidenavn",
				lookupMsgError: "Finner ikke siden"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-postadresse eller Picasa-/Google+-ID",
				signInMsg2: "Finner ikke kontoen",
				howToFind: "Slik finner du en konto-ID for Picasa eller Google+",
				howToFind2: "Kopier tallene mellom første og andre/ på en tilfeldig side på Picasa eller G+"
			},
			videoSelectorCommon: {
				check: "Kontroller",
				notFound: "Fant ikke videoen",
				found: "Fant videoen",
				select: "Velg denne videoen"
			},
			videoSelectorHome: {
				other: "Annet"
			},
			videoSelectorYoutube: {
				url: "Nettadressen for en Youtube-video",
				pageInputLbl: "Brukernavn",
				lookupMsgError: "Finner ikke bruker",
				howToFind: "Slik finner du et YouTube-brukernavn",
				howToFind2: "Brukernavnet vises under videoer",
				found: "Funnet",
				noData: "Finner ingen offentlige videoer"
			},
			videoSelectorVimeo: {
				url: "Nettadressen for en Vimeo-video"
			},
			videoSelectorOther: {
				explain1: "å_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ø.",
				explain2: "De fleste nettbaserte videovertstjenestene har denne funksjonen. Du må finne alternativet for å bygge inn videoen, kopiere den oppgitte koden og bruke %WEBPAGE%.",
				explain3: "Du kan eventuelt være vert for videoen selv. Da må du lage en HTML-side som bruker en videospiller som %EXAMPLE%, være vert for den siden og også bruke %WEBPAGE%.",
				webpage: "Nettsidefunksjon"
			},
			webpageSelectorHome: {
				lblUrl: "Nettside-URL",
				lblEmbed: "Bygg inn kode",
				lblOR: "OR",
				lblError1: "Feil, fjern ett av de to inndatafeltene.",
				lblError2: "Innbygging av kode kan inneholde bare én %IFRAMETAG%",
				configure: "Konfigurer"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "En bilde-URL bør starte med http:// og slutte med .jpg eller .png",
				lblURLError: "Dette bildet ser ikke ut til å være gyldig. Angi en direkte kobling til en bildefil (URL-adressen skal normalt ende på .jpg eller .png). Koblinger til en webside som inneholder et bilde, kommer ikke til å fungere.",
				lblURLCheck: "Kontrollerer bilde...",
				lblLabel: "Bildetekst",
				lblLabel1: "Undertekst",
				lblLabel2: "Tekst med musepekeren over",
				lblLabel3: "Ingen",
				lblLabelPH: "Skriv inn noe tekst...",
				lblMaximize: "Ta med en maksimeringsknapp i bildehjørnet",
				lblMaximizeHelp: "Anbefales bare for bilder av høy kvalitet",
				lblPosition: "Posisjon",
				lblPosition1: "Midtstill",
				lblPosition2: "Fyll",
				lblPosition3: "Tilpass",
				lblPosition4: "Strekk",
				lblPosition5: "Tilpasset",
				tooltipDimension: "Verdien kan angis i \'px\' eller \'%\'",
				tooltipDimension2: "Verdien må angis i piksler",
				lblPosition2Explain: "(kan bli beskåret)",
				lblPosition3Explain: "(blir ikke beskåret)",
				lblPosition3Explain2: "(bredden passer alltid med panelet)",
				lblPosition4Explain: "(kan bli forvrengt / vises skjevt)",
				unloadLbl: "å_Unload when reader navigates away_ø",
				unloadHelp: "å_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ø."
			},
			editorActionGeocode: {
				lblTitle: "Finn en adresse eller et sted",
				mapMarkerExplain: "Brukeren ser en kartmarkør når han/hun klikker på koblingen"
			},
			editorActionMedia: {
				lblTitle: "Endre innholdet for hovedstadiet"
			},
			editorInlineMedia: {
				lblTitle: "Sett inn et bilde, en video eller en webside"
			}
		}
	})
);
