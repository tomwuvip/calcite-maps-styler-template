﻿define(
     ({
        map: {
            error: "Karttaa ei voi luoda"
        },
        onlineStatus: {
            offline: "Työskentelet tällä hetkellä offline-tilassa. Lomakkeiden lähetykset tallennetaan paikallisesti, kunnes palvelinyhteys voidaan muodostaa.",
            reconnecting: "Muodostetaan yhteyttä uudelleen&hellip;",
            pending: "${total} odottavaa muokkausta lähetetään, kun verkkoyhteys on luotu uudelleen."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Organisaationi",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Oma sisältö",
                    favoritesLabel: "Omat suosikit"
                },
                title: "Valitse Web-kartta",
                searchTitle: "Etsi",
                ok: "OK",
                cancel: "Peruuta",
                placeholder: "Anna hakuehto"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Organisaationi",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Oma sisältö",
                    favoritesLabel: "Omat suosikit"
                },
                title: "Valitse ryhmä",
                searchTitle: "Etsi",
                ok: "OK",
                cancel: "Peruuta",
                placeholder: "Anna hakuehto"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "Å_Here is a link to a GeoForm_ö"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Pohjois",
            utm_easting: "Itäinen",
            utm_zone_number: "Vyöhykkeen numero",
            geoFormGeneralTabText: "1. Anna tiedot",
            locationInformationText: "2. Valitse sijainti",
            submitInformationText: "3. Täytä lomake",
            submitInstructions: "Lisää nämä tiedot karttaan.",
            myLocationText: "Nykyinen sijainti",
            locationDescriptionForMoreThanOneOption: "Å_Specify the location for this entry by clicking/tapping the map or by using one of the following options_ö.",
            locationDescriptionForOneOption: "Å_Specify the location for this entry by clicking/tapping the map or by using the following option_ö.",
            locationDescriptionForNoOption: "Å_Specify the location for this entry by clicking/tapping the map_ö.",
            addressText: "Etsi",
            geographic: "Lev/pit",
            locationTabText: "Sijainti",
            locationPopupTitle: "Sijainti",
            submitButtonText: "Lähetä syöte",
            submitButtonTextLoading: "Lähetetään&hellip;",
            formValidationMessageAlertText: "Seuraavat kentät ovat pakollisia:",
            selectLocation: "Å_Please select a location for your submission_ö.",
            emptylatitudeAlertMessage: "Anna koordinaatti: ${openLink}latitude${closeLink}.",
            emptylongitudeAlertMessage: "Anna koordinaatti: ${openLink}longitude${closeLink}.",
            shareUserTitleMessage: "Kiitos osallistumisestasi!",
            entrySubmitted: "Syöte on lähetetty karttaan.",
            shareThisForm: "Jaa tämä lomake",
            shareUserTextMessage: "Pyydä muita käyttämään lisäyksiin seuraavia valintoja.",
            addAttachmentFailedMessage: "Ei voi lisätä liitettä karttatasoon",
            addFeatureFailedMessage: "Ei voi lisätä kohdetta karttatasoon",
            noLayerConfiguredMessage: "Å_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_ö.",
            placeholderLatitude: "Leveysaste (Y)",
            placeholderLongitude: "Pituusaste (X)",
            latitude: "Leveysaste",
            longitude: "Pituusaste",
            findMyLocation: "Paikanna minut",
            finding: "Paikannetaan&hellip;",
            backToTop: "Alkuun",
            addressSearchText: "Lähetyksesi tulee näkyviin tähän. Voit korjata sijainnin vetämällä nastaa.",
            shareModalFormText: "Lomakkeen linkki",
            close: "Sulje",
            locationNotFound: "Sijaintia ei löytynyt.",
            setLocation: "Määritä sijainti",
            find: "Etsi osoite tai paikka",
            attachment: "Liite",
            toggleDropdown: "Vaihda luetteloiden välillä",
            invalidString: "Å_Please enter valid value_ö.",
            invalidSmallNumber: "Å_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_ö.",
            invalidNumber: "Å_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_ö.",
            invalidFloat: "Å_Please enter valid ${openStrong}floating point${closeStrong} value_ö.",
            invalidDouble: "Å_Please enter valid ${openStrong}double${closeStrong} value_ö.",
            invalidLatLong: "Å_Please enter valid latitude and longitude coordinates_ö.",
            invalidUTM: "Å_Please enter valid UTM coordinates_ö.",
            invalidUSNG: "Å_Please enter valid USNG coordinates_ö.",
            invalidMGRS: "Å_Please enter valid MGRS coordinates_ö.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Valitse&hellip;",
            applyEditsFailedMessage: "Syötettä ei voi lähettää. Yritä uudelleen.",
            requiredFields: "Ilmeni virheitä. Korjaa ne alla.",
            requiredField: "(pakollinen)",
            error: "Virhe",
            textRangeHintMessage: "${openStrong}Vihje:${closeStrong} Vähimmäisarvo ${minValue} ja enimmäisarvo ${maxValue}",
            dateRangeHintMessage: "${openStrong}Vihje:${closeStrong} aikaisin ${minValue} ja myöhäisin päivämäärä ${maxValue}",
            remainingCharactersHintMessage: "Å_${value} characters remaining_ö"
        },
        builder: {
            invalidUser: "Sinulla ei ole oikeuksia tarkastella tätä kohdetta",
            invalidWebmapSelectionAlert: "Valittu Web-kartta ei sisällä kelvollista käytettävää karttatasoa. Jatka lisäämällä muokattava kohdekarttataso Web-karttaasi.",
            invalidWebmapSelectionAlert2: "Lisätietoja on kohdassa ${openLink}Mikä on kohdepalvelu?${closeLink}",
            selectFieldsText: "Valitse lomakekentät",
            selectThemeText: "Valitse lomaketeema",
            webmapText: "Web-kartta",
            layerText: "Karttataso",
            detailsText: "Yksityiskohdat",
            fieldsText: "Kentät",
            styleText: "Tyyli",
            optionText: "Valinnat",
            previewText: "Esikatselu",
            publishText: "Julkaise",
            optionsApplicationText: "Valinnat",
            titleText: "Muodostusohjelma",
            descriptionText: "Å_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_ö.",
            btnPreviousText: "Edellinen",
            btnNextText: "Seuraava",
            webmapTabTitleText: "Valitse Web-kartta",
            viewWebmap: "Näytä Web-kartta",
            webmapDetailsText: "Å_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_ö",
            btnSelectWebmapText: "Valitse Web-kartta",
            btnSelectWebmapTextLoading: "Lataa&hellip;",
            layerTabTitleText: "Valitse muokattava karttataso",
            selectLayerLabelText: "Karttataso",
            selectLayerDefaultOptionText: "Valitse karttataso",
            detailsTabTitleText: "Lomakkeen tiedot",
            detailTitleLabelText: "Otsikko",
            detailLogoLabelText: "Logokuva",
            descriptionLabelText: "Å_Form Instructions & Details_ö",
            fieldDescriptionLabelText: "Å_Help Text (optional)_ö",
            fieldTabFieldHeaderText: "Kenttä",
            fieldTabLabelHeaderText: "Tunnusteksti",
            fieldTabDisplayTypeHeaderText: "Näytä muodossa",
            fieldTabOrderColumnText: "Å_Order_ö",
            fieldTabVisibleColumnText: "Å_Enabled_ö",
            selectMenuOption: "Valitse valikko",
            selectRadioOption: "Valintanappi",
            selectTextOption: "Teksti",
            selectDateOption: "Å_Date Picker_ö",
            selectRangeOption: "Å_Touch-Spinner_ö",
            selectCheckboxOption: "Valintaruutu",
            selectMailOption: "Sähköposti",
            selectUrlOption: "URL",
            selectTextAreaOption: "Å_Text Area_ö",
            previewApplicationText: "Esikatsele sovellus",
            saveApplicationText: "Tallenna sovellus",
            saveText: "Tallenna",
            toggleNavigationText: "Käytä siirtymistä",
            formPlaceholderText: "Oma lomake",
            shareBuilderInProgressTitleMessage: "GeoForm-mallin julkaisu",
            shareBuilderProgressBarMessage: "Odota&hellip;",
            shareBuilderTitleMessage: "Kohteen tallennus onnistui",
            shareBuilderTextMessage: "Voit alkaa kerätä tietoja jakamalla ne muiden kanssa",
            shareModalFormText: "Lomakkeen linkki",
            shareBuilderSuccess: "GeoForm-mallisi on päivitetty ja julkaistu!",
            geoformTitleText: "GeoForm",
            layerTabText: "Tämä on karttataso, jonka perusteella GeoForm rakennetaan. Karttatason on oltava kohdepalvelu, jota voi muokata ja jolla on kohderyhmää vastaavat jakamisoikeudet.",
            detailsTabText: "Alla olevia Lomakkeen tiedot -ruutuja käyttämällä voit mukauttaa otsikon, lisätä mukautetun logon ja antaa lyhyen GeoForm-kohderyhmän kuvauksen. Voit lisätä kuvaukseen linkkejä muihin resursseihin ja yhteystietoihin sekä osoittaa kohderyhmällesi Web-karttasovelluksen, joka sisältää kaikki GeoForm-lomakkeella kerätyt tiedot.",
            fieldsTabText: "Tässä voit valita, mitkä kentät GeoForm-kohderyhmäsi näkee, muokata heidän näkemiään tunnustekstejä ja lisätä lyhyen kuvauksen, joka auttaa tietojen syöttämisessä.",
            styleTabText: "Voit määrittää GeoForm-tyylisi käyttämällä alla olevia teemoja sen mukaan, mitä haluat.",
            publishTabText: "Jos olet saanut valmiiksi GeoForm-mallisi mukautuksen, tallenna sovellus ja ala jakaa sitä kohderyhmäsi kanssa. Voit palata tähän muodostusohjelmaan milloin tahansa ja jatkaa sen mukautusta palautteen perusteella.",
            headerSizeLabel:"Å_Header Size_ö",
            smallHeader: "Käytä pientä ylätunnistetta",
            bigHeader: "Å_Use Large Header_ö",
            pushpinText: "Karttaneula",
            doneButtonText: "Å_Save and Exit_ö",
            fieldTabPlaceHolderHeaderText: "Vihje (valinnainen)",
            enableAttachmentLabelText: "Å_${openStrong}Enable Attachments${closeStrong}_ö",
            enableAttachmentLabelHint: "Å_You can enable/disable the attachments here_ö",
            attachmentIsRequiredLabelText: "Å_${openStrong}Attachment Required${closeStrong}_ö",
            attachmentIsRequiredLabelHint: "Å_If necessary, users can be required to enter an attachment_ö.",
            attachmentLabelText: "Å_Attachment Button Label_ö",
            attachmentLabelHint: "Å_This is the text that will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_ö",
            attachmentDescription: "Liitteen kuvaus",
            attachmentHint: "Voit tarvittaessa antaa liitteen lisäohjeita tässä.",
            jumbotronDescription: "Å_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_ö",
            shareGeoformText: "Jaa GeoForm",
            shareDescription: "Jakamisruudun ansiosta kohderyhmän on helppo jakaa GeoForm muiden avustajien kanssa lähetyksen jälkeen - se voidaan poistaa käytöstä milloin tahansa.",
            defaultMapExtent: "Kartan oletuslaajuus",
            defaultMapExtentDescription: "Lähettämisen jälkeen kartta palautuu Web-kartassasi oletuslaajuuteen - se voidaan poistaa käytöstä milloin tahansa.",
            pushpinOptionsDescription: "Valitse tarjotuista vaihtoehdoista karttaneulan väri, joka erottuu hyvin kartan symboleista ja helpottaa lähetyksen sijoittamista karttaan",
            selectLocationText: "Sijainnin valintaperuste",
            myLocationText: "Oma sijainti",
            searchText: "Etsi",
            coordinatesText: "Pituus- ja leveysasteiden koordinaatit",
            usng: "USNG-koordinaatit",
            mgrs: "MGRS-koordinaatit",
            utm: "UTM-koordinaatit",
            selectLocationSDescription: "Antaa käyttäjille mahdollisuuden valita sijainnin eri menetelmillä.",
            dragTooltipText:"Å_Drag the field where you want it to appear_ö",
            showHideLayerText:"Å_Show/Hide Layer_ö",
            showHideLayerHelpText:"Å_You can configure the GeoForm to Show/Hide Layer_ö"
        }
    })
);