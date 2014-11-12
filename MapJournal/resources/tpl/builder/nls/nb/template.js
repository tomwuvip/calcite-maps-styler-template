﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hovedstadium",
				sideTitle: "Sidepanel",
				sideDescr: "Et oppsett for en tekstintensiv historie som på en fremragende måte kombinerer bildene, videoene og kartene dine i en klar og fokusert melding.",
				floatTitle: "Flytende panel",
				floatDescr: "Et oppsett som setter kartografien din i fokus, samtidig som et gjennomsiktig panel med en kort tekst bidrar til å fortelle historien."
			},
			common: {
				lblStatus1: "Publisert",
				lblStatus2: "Skisse",
				lblStatus3: "Skjult"
			},
			settingsLayoutOptions: {
				title: "Oppsettalternativer",
				cfgLeft: "Venstre",
				cfgRight: "Høyre",
				cfgSmall: "Liten",
				cfgMedium: "Middels",
				cfgLarge: "Stor",
				socialLinksLabel: "Vis delingskoblinger nederst i hver seksjon",
				socialLinksDescr: "Dette gjør at leserne kan referere til og fremme bestemte seksjoner av %TPL_NAME%. Hvis du for eksempel bruker et delingsikon for seksjoner, lander leserne på den bestemte %TPL_NAME%-seksjonen i stedet for på begynnelsen av historien. Leserne kan bruke koblingen for sosiale medier i tittelseksjonen for å fremme hele %TPL_NAME% (overskriftskategorien) og få dem til å lande på starten av %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Skrifter",
				defaultLbl: "Standard",
				sectionTitleLbl: "Seksjonstittel",
				sectionContentLbl: "Seksjonsinnhold"
			},
			initPopup: {
				title: "Velkommen til"
			},
			addEditPopup: {
				disabled: "Legg til seksjon er deaktivert fordi det maksimale antallet tillatte seksjoner er nådd.",
				titleAdd: "Legg til seksjon",
				titleAddHome: "Legg til Hjem-seksjon",
				titleEdit: "Rediger seksjon",
				step: "Trinn",
				stepMainStageExplain: "Hovedstadieinnhold",
				stepPanelExplain: "Innhold",
				stepMainStageNextTooltip: "Angi seksjonstittelen, og velg innholdet i hovedstadiet",
				stepMainStageNextTooltip2: "Velg innholdet på hovedstadiet",
				step2NextTooltip: "Angi seksjonstittelen og %LAYOUT-TYPE%-innholdet",
				stepNextTooltipNext: "for å gå til neste trinn",
				stepNextTooltipAdd: "for å legge til seksjonen",
				firstAddExplain: "Den første seksjonen er Hjem-seksjonen. Tenk på den seksjonen som omslaget i fortellingen. Tittelen du nettopp definerte, vises med store skrifttyper.",
				firstAddLeanMore: "Finn ut mer",
				titlePlaceholder: "Seksjonstittel..."
			},
			addEditViewText: {
				editorPlaceholder: "Legg til tekst, koblinger og små grafikkelementer her.",
				editorActionsTitle: "Handlinger på hovedstadiet",
				editorActionsHelpDescr: "Bruk disse kontrollene til å opprette koblinger som vil endre hovedstadiet. Når for eksempel leseren klikker på en kobling, kan det være lurt å zoome inn kartet til en bestemt lokasjon, vise et annet webkart eller vise et bilde.",
				mainStageDisabled: "Handlinger på hovedstadiet deaktiveres når redigeringsverktøyet maksimeres"
			},
			organizePopup: {
				title: "Organiser",
				lblHeader: "Dra og slipp seksjoner for å organisere innholdet.",
				lblColTitle: "Tittel",
				lblColPubDate: "Publiseringsdato",
				lblColStatus: "Status",
				checkDisplayReverse: "Vis seksjoner i omvendt rekkefølge",
				btnApplyWarning: "Bekreft sletting av %NB% seksjon(er)",
				deleteTooltip: "Slett",
				firstSectionExplain: "(Startseksjonen kan ikke flyttes)",
				exportMainStage: "Innhold på hovedstadiet",
				exportPanel: "Panelinnhold",
				exportActions: "Handlinger på hovedstadiet"
			},
			exportData: {
				btn: "Eksporter innhold",
				tooltip: "Hvis du eksporterer innholdet, kan du se på og lage en sikkerhetskopi av innholdet hvis du skulle komme til å slette det. Bare kopier og lim inn innholdet fra siden inn i en tekstbehandler."
			},
			help: {
				lblHelp: "Hjelp",
				lblAdd: "Legg til seksjon",
				lblSettings: "Innstillinger",
				lblOrga: "Organiser innhold",
				lblEdit: "Redigeringer",
				lblPublish: "Del",
				lblTips: "Tips",
				lblMore: "Vil du ha mer?",
				lblLink: "Gå til Esri-webområdet for historiekart.",
				content1Div1: "Du kan integrere en lang rekke ulike stiler når du bygger opp historien din. <strong>%LAYOUT_TITLE%</strong> inneholder vanligvis teksten din, bildene og videoene dine, mens kartene dine vanligvis havner på <strong>hovedstadiet</strong>. %TPL_NAME% gjør imidlertid at du kan ta med bilder, diagrammer og videoklipp på hovedstadiet, også.",
				content1Div2: "Ved å legge til seksjoner kan du virkelig tilpasse historieopplevelsen. Etter hvert som leserne ruller gjennom %LAYOUT_TITLE%-teksten din, kan du gjøre slik at de ser et kart på hovedstadiet der det panoreres eller zoomes inn til viktige punkter, eller det kan lastes inn nye kart og bilder automatisk for å underbygge budskapet ditt.",
				content2Div1: "å_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc_ø.",
				content2Div2: "å_You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ø.",
				content3Div1: "Innholdet ditt er organisert i seksjoner. Du kan ha så mange seksjoner du vil (se på dem som minikapitler). Flyten til disse kapitlene er viktig. Derfor kan du ved å klikke på Organiser endre rekkefølgen på seksjoner eller slette seksjoner hvis du ønsker.",
				content4Div1: "Har du funnet en feil eller ønsker å endre materialet? Ikke noe problem. Se etter redigeringsikonet i programmet for å gjøre endringer av innholdet. Du kommer til å bruke redigeringsfunksjonene mange ganger etter hvert som du utvikler %TPL_NAME%!",
				content5Div1: "å_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ø.",
				content5Div2: "å_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ø.",
				content6Div1: "Tittelen på startseksjonen er også tittelen på historien. Se på startseksjonen som fortellingens forside. Tittelen på startseksjonen forblir synlig når leserne navigerer i historiekartet.",
				content6Div2: "Din %LAYOUT_TITLE% må ikke bare være tekst, så vurder å bruke bilder og videoer for å gjøre fortellingen levende, og å bryte opp store deler med tekst!"
			},
			landing: {
				lblAdd: "Hva vil du kalle historiekartet?",
				phAdd: "Skriv inn tittelen...",
				lblOR: "Eller",
				lblHelp: "Få en omvisning"
			},
			firstAddSplash: {
				thisis: "Dette er",
				lblMain: "Dette er %BR%-hovedstadiet"
			}
        }
    })
);
