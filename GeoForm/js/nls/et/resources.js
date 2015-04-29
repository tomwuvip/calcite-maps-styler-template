﻿define(
   ({
    map: {
      error: "Kaarti ei saa luua"
    },
    onlineStatus: {
      offline: "Töötate praegu võrguühenduseta režiimis. Esitatud vormid salvestatakse kohalikult, kuni serveriga luuakse ühendus.",
      reconnecting: "Ühenduse taastamine&hellip;",
      pending: "${total} ootel kutse(t) edastatakse võrguühenduse taastamisel."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Minu organisatsioon",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Minu sisu",
          favoritesLabel: "Minu lemmikud"
        },
        title: "Vali veebikaart",
        searchTitle: "Otsi",
        ok: "Ok",
        cancel: "Tühista",
        placeholder: "Sisestage otsingusõnad"
      },
      groupdlg: {
        items: {
          organizationLabel: "Minu organisatsioon",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Minu sisu",
          favoritesLabel: "Minu lemmikud"
        },
        title: "Vali grupp",
        searchTitle: "Otsi",
        ok: "OK",
        cancel: "Tühista",
        placeholder: "Sisestage otsingusõnad"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Siin on GeoFormi link"
      }
    },
    user: {
      all: "Š_All__ä",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Y-koordinaat",
      utm_easting: "X-koordinaat",
      utm_zone_number: "Tsooni number",
      selectLayerTabText: "${formSection} Valige vorm",
      geoFormGeneralTabText: "${formSection} Sisestage teave",
      locationInformationText: "${formSection} Valige asukoht",
      submitInformationText: "${formSection} Täitke vorm",
      submitInstructions: "Lisage see teave kaardile.",
      myLocationText: "Praegune asukoht",
      locationDescriptionForMoreThanOneOption: "Määrake selle kirje asukoht, klõpsates/puudutades kaarti või kasutades üht järgmist valikut.",
      locationDescriptionForOneOption: "Määrake selle kirje jaoks asukoht, klõpsates/puudutades kaarti või kasutades järgmist valikut.",
      locationDescriptionForNoOption: "Määrake selle kirje jaoks asukoht, klõpsates/puudutades kaarti.",
      addressText: "Otsi",
      geographic: "Laius/pikkus",
      locationTabText: "Asukoht",
      locationPopupTitle: "Asukoht",
      submitButtonText: "Edasta kirje",
      submitButtonTextLoading: "Edastamine&hellip;",
      formValidationMessageAlertText: "Järgmised väljad on kohustuslikud:",
      selectLocation: "Valige oma edastuse asukoht.",
      emptylatitudeAlertMessage: "Sisestage ${openLink}laiuse${closeLink} koordinaat.",
      emptylongitudeAlertMessage: "Sisestage ${openLink}pikkuse${closeLink} koordinaat.",
      shareUserTitleMessage: "Täname Teid panuse eest!",
      entrySubmitted: "Teie kirje on kaardile edastatud.",
      shareThisForm: "Jaga seda vormi",
      shareUserTextMessage: "Ärgitage teisi järgmiste valikute abil panust andma.",
      addAttachmentFailedMessage: "Manuse lisamine kihile ebaõnnestus",
      addFeatureFailedMessage: "Objekti lisamine kihile ebaõnnestus",
      noLayerConfiguredMessage: "Muudetava objektikihi laadimisel või otsimisel ilmnes viga. Vormi kuvamiseks ja edastuste kogumiseks lisage veebikaardile muudetav objektikiht.",
      placeholderLatitude: "Laiuskraad (Y)",
      placeholderLongitude: "Pikkuskraad (X)",
      latitude: "Laius",
      longitude: "Pikkus",
      findMyLocation: "Määra minu asukoht",
      finding: "Asukoha määramine&hellip;",
      backToTop: "Tagasi algusse",
      addressSearchText: "Teie edastus kuvatakse siin. Asukoha korrigeerimiseks lohistage nõela.",
      shareModalFormText: "Vormi link",
      close: "Sulge",
      locationNotFound: "Asukohta ei leitud.",
      setLocation: "Määra asukoht",
      find: "Leia aadress või koht",
      attachment: "Manus",
      toggleDropdown: "Vaheta rippmenüüd",
      invalidString: "Sisestage kehtiv väärtus.",
      invalidSmallNumber: "Sisestage kehtiv ${openStrong}täisarv${closeStrong}väärtus vahemikus -32768 kuni 32767.",
      invalidNumber: "Sisestage kehtiv ${openStrong}täisarv${closeStrong}väärtus vahemikus -2147483648 kuni 2147483647.",
      invalidFloat: "Sisestage kehtiv ${openStrong}ujukoma${closeStrong}väärtus.",
      invalidDouble: "Sisestage kehtiv ${openStrong}topelt${closeStrong}väärtus.",
      invalidLatLong: "Sisestage õiged laiuse ja pikkuse koordinaadid.",
      invalidUTM: "Sisestage õiged UTM-koordinaadid.",
      invalidUSNG: "Sisestage õiged USNG-koordinaadid.",
      invalidMGRS: "Sisestage õiged MGRS-koordinaadid.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Vali&hellip;",
      applyEditsFailedMessage: "Kahjuks ei saa teie kirjet edastada. Proovige uuesti.",
      requiredFields: "Esines mõningaid vigu. Parandage need allpool.",
      requiredField: "(nõutud)",
      error: "Viga",
      textRangeHintMessage: "${openStrong}Vihje:${closeStrong} Miinimumväärtus ${minValue} ja maksimumväärtus ${maxValue}",
      dateRangeHintMessage: "${openStrong}Vihje:${closeStrong} Kuupäeva alampiir ${minValue} ja kuupäeva ülempiir ${maxValue}",
      remainingCharactersHintMessage: "${value} tähemärki kasutamata",
      mapFullScreen: "Täisekraan",
      mapRestore: "Taasta",
      filterSelectEmptyText: "Vali",
      invalidLayerMessage: "Vormikihti ei eksisteeri. Konfigureerige rakendus ja määrake kiht.",
      selectedLayerText: "Kõik",
      fileUploadStatus: "Faili üleslaadimise olek",
      uploadingBadge: "&nbsp;Üleslaadimine&hellip;",
      successBadge: "&nbsp;Üleslaaditud",
      retryBadge: "Proovi uuesti",
      errorBadge: "Viga üleslaadimisel&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Fail on manustamiseks liiga suur",
      exceededFileCountError: "Manuste suurim lubatud arv on täis",
      selectFileTitle: "Faili valimine",
      btnSelectFileText: "Š_Select File____ä",
      btnViewSubmissions: "Kuva edastused"
    },
    builder: {
      invalidUser: "Kahjuks pole Teil selle sisuobjekti vaatamiseks õigusi",
      invalidWebmapSelectionAlert: "Valitud veebikaart ei sisalda ühtegi kasutamiseks sobivat kihti. Jätkamiseks lisage oma veebikaardile muudetav objektikiht.",
      invalidWebmapSelectionAlert2: "Lisateavet leiate teemast ${openLink}Mis on objektiteenus?${closeLink}",
      selectFieldsText: "Vali vormi väljad",
      selectThemeText: "Vali teemade hulgast",
      webmapText: "Veebikaart",
      layerText: "Kiht",
      detailsText: "Detailid",
      fieldsText: "Väljad",
      styleText: "Stiil",
      optionText: "Valikud",
      previewText: "Eelvaade",
      publishText: "Publitseeri",
      optionsApplicationText: "Valikud",
      titleText: "Koostur",
      descriptionText: "GeoForm on konfigureeritav mall, mille abil saab vormipõhiselt muuta ${link1}objektiteenuse${closeLink} andmeid. Selle rakenduse abil saab andmeid sisestada mitte kaardi hüpikakna, vaid vormi kaudu ning kasutada ${link2}veebikaardi${closeLink} ja muudetavate objektiteenuste võimalusi. Kasutage oma GeoFormi kohandamiseks ja rakendamiseks järgmisi juhiseid.",
      btnPreviousText: "Eelmine",
      btnNextText: "Järgmine",
      webmapTabTitleText: "Vali veebikaart",
      viewWebmap: "Vaata veebikaarti",
      webmapDetailsText: "Valitud veebikaart on ${webMapTitleLink}${webMapTitle}${closeLink}. Mõne muu veebikaardi valimiseks klõpsake nuppu „Vali veebikaart”",
      btnSelectWebmapText: "Veebikaardi valimine",
      btnSelectWebmapTextLoading: "Laadimine&hellip;",
      layerTabTitleText: "Vali muudetav kiht",
      selectLayerLabelText: "Kiht",
      selectLayerDefaultOptionText: "Vali kiht",
      enableBasemapToggle: "Š_Show Basemap Toggle_______ä",
      enableBasemapToggleDescription: "Š_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________ä",
      defaultBasemap: "Aluskaardi vahetamine",
      secondaryBasemap: "Vaikimisi aluskaart",
      detailsTabTitleText: "Vormi üksikasjad",
      detailTitleLabelText: "Pealkiri",
      detailLogoLabelText: "Logo pilt",
      descriptionLabelText: "Vormi juhised ja üksikasjad",
      fieldDescriptionLabelText: "Abitekst (valikuline)",
      fieldTabFieldHeaderText: "Väli",
      fieldTabLabelHeaderText: "Silt",
      fieldTabDisplayTypeHeaderText: "Kuva kui",
      fieldTabOrderColumnText: "Järjekord",
      fieldTabVisibleColumnText: "Lubatud",
      displayFieldText: "Kuvamisväli",
      selectMenuOption: "Vali menüü",
      selectRadioOption: "Raadionupp",
      selectTextOption: "Tekst",
      selectDateOption: "Kuupäeva valija",
      selectRangeOption: "Puutetundlik ketaslüliti",
      selectCheckboxOption: "Märkeruut",
      selectMailOption: "E-mail",
      selectUrlOption: "URL",
      selectTextAreaOption: "Tekstiala",
      previewApplicationText: "Kuva rakenduse eelvaade",
      saveApplicationText: "Salvesta rakendus",
      saveText: "Salvesta",
      toggleNavigationText: "Muuda navigeerimist",
      formPlaceholderText: "Minu vorm",
      shareBuilderInProgressTitleMessage: "GeoFormi publitseerimine",
      shareBuilderProgressBarMessage: "Palun oodake&hellip;",
      shareBuilderTitleMessage: "Õnnestus! Objekt salvestati",
      shareBuilderTextMessage: "Saate teistega jagamise kaudu hakata teavet koguma",
      shareModalFormText: "Vormi link",
      shareBuilderSuccess: "Teie GeoForm on uuendatud ja publitseeritud!",
      geoformTitleText: "Geo Form",
      layerTabText: "GeoForm koostatakse selle kihi põhjal. Kihiks peab olema objektiteenus, mida on lubatud muuta ning mis sisaldab sihtrühmale vastavaid jagamisõigusi.",
      detailsTabText: "Pealkirja kohandamiseks ning oma logo ja GeoFormi sihtrühma jaoks mõeldud lühikese kirjelduse lisamiseks kasutage allolevaid vormi üksikasjade välju. Kirjelduses saate lisada linke muudele ressurssidele, kontaktinfot ja isegi suunata oma sihtrühma veebikaardistusrakenduse juurde, mis sisaldab kõiki GeoFormi kaudu kogutud andmeid.",
      fieldsTabText: "Siin saate valida, millised väljad on teie GeoFormi sihtrühma jaoks nähtavad, muuta sihtrühma jaoks kuvatavaid silte ning lisada lühikese kirjelduse andmete sisestamise hõlbustamiseks.",
      styleTabText: "Saate allolevate teemade abil vastavalt oma eelistusele GeoFormi laadi muuta.",
      publishTabText: "Kui olete GeoFormi kohandamise lõpetanud, salvestage rakendus ja hakake seda oma sihtrühmaga jagama. Saate sellesse koostajasse igal ajal naasta ja tagasiside põhjal rakendust veelgi kohandada.",
      headerSizeLabel: "Päise suurus",
      smallHeader: "Kasuta väikest päist",
      bigHeader: "Kasuta suurt päist",
      pushpinText: "Rõhknõel",
      doneButtonText: "Salvesta ja välju",
      fieldTabPlaceHolderHeaderText: "Vihje (valikuline)",
      enableAttachmentLabelText: "${openStrong}Luba manused${closeStrong}",
      enableAttachmentLabelHint: "Siin saate lubada/keelata manuseid",
      attachmentIsRequiredLabelText: "${openStrong}Manus on nõutav${closeStrong}",
      attachmentIsRequiredLabelHint: "Vajadusel võidakse kasutajatelt nõuda manuse lisamist.",
      attachmentLabelText: "Nupu Manus märgis",
      attachmentLabelHint: "See tekst kuvatakse nupu Manus kõrval. Siin saate kirjeldada, mida soovite lasta sihtrühmal manusena lisada (foto, video, dokument jne), soovitud failivormingu (JPEG, PNG, DOCX, PDF jne) ja mis tahes muud täiendavad juhised.",
      attachmentDescription: "Manuse kirjeldus",
      attachmentHint: "Vajadusel saate siin esitada täiendavad manuse juhised.",
      jumbotronDescription: "Kasutage vormi jaoks väikest või suurt päist. Suurest päisest võib olla abi rakenduse eesmärgi määratlemisel, kuid see võtab ekraanil rohkem ruumi",
      shareGeoformText: "Jaga Geoformi",
      shareDescription: "Jagamise paneeli abil saab teie sihtrühm edastuse järel GeoFormi kaastöölistega hõlpsalt jagada – selle saab mis tahes ajal keelata.",
      defaultMapExtent: "Vaikimisi kaardi ulatus",
      defaultMapExtentDescription: "Kaart lähtestatakse edastuse järel veebikaardi vaikeulatusele – selle saab mis tahes ajal keelata.",
      pushpinOptionsDescription: "Kaardi rõhknõela jaoks saate valida paljude värvide vahel, see peaks erinema kaardi sümboloogiast, et muuta edastuse kaardile asetamine kasutajale lihtsamaks",
      selectLocationText: "Vali asukoht",
      myLocationText: "Minu asukoht",
      searchText: "Otsi",
      coordinatesText: "Laius- ja pikkuskoordinaadid",
      usng: "USNG-koordinaadid",
      mgrs: "MGRS-koordinaadid",
      utm: "UTM-koordinaadid",
      selectLocationSDescription: "Lubage kasutajatel nende meetodite abil valida asukoht.",
      dragTooltipText: "Lohistage väli kohta, kus soovite selle kuvada",
      showHideLayerText: "Kuva kiht",
      showHideLayerHelpText: "Malli GeoForm saab konfigureerida kihti kuvama/peitma. See valik kehtib ainult ühe kihiga seadistuse puhul.",
      labelHelpMessage: "Silt",
      placeHolderHintMessage: "Vihje tekst",
      placeHolderHelpMessage: "Abitekst",
      selectTextOptionValue: "Filtri valimine",
      disableLogo: "Keela logo",
      disableLogoDescription: "GeoFormi saab konfigureerida logo vormi päises kuvama/peitma",
      locateOnLoadText: "Määra asukoht laadimisel",
      locateOnLoadDescription: "GeoFormi saab konfigureerida kasutama lehe laadimisel praegust asukohta",
      selectLayerFieldTabText: "Vali kiht",
      allLayerSelectOptionText: "Kõik",
      disableViewer: "Keela vaatur",
      disableViewerDescription: "GeoFormi saab konfigureerida vaaturit kuvama/peitma",
      displayFieldHintText: "Š_Selected display field will be shown in the viewer as a title___________________ä"
    },
    viewer: {
      geocoderCancelText: "Tühista",
      viewReportsTabText: "Edastused",
      viewLegendTabText: "Legend",
      viewAboutusTabText: "Info",
      viewMapTabText: "Kaart",
      sortHeaderText: "Sordi:",
      btnSubmitReportText: "Edasta aruanne",
      geocoderPlaceholderText: "Postikood, linn jne.",
      noSearchResult: "Tulemust ei leitud",
      recordsTabTooltip: "Kuva edastused",
      legendTabTooltip: "Legend",
      aboutUsTabTooltip: "Teave meie kohta",
      mapTabTooltip: "Kaart",
      appLoadingFailedMessage: "ViewerMode pole saadaval",
      btnDescendingText: "Laskuvas järjestuses",
      btnAscendingText: "Tõusvas järjestuses",
      geometryUnavailableErrorMessage: "Objekti geomeetriat ei leitud",
      infoPopupOffErrorMessage: "InfoPopup on väljas",
      btnLoadMoreText: "Laadi rohkem",
      unavailableTitleText: "Pealkirjata",
      unavailableConfigMessage: "Konfiguratsiooni ei saa laadida"
    }
  })
);