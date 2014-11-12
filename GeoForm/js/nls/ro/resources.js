﻿define(
     ({
        map: {
            error: "Imposibil de creat harta"
        },
        onlineStatus: {
            offline: "În prezent, lucraţi offline. Trimiterea formularelor va fi salvată local până când se va putea stabili o conexiune la server.",
            reconnecting: "Se reconectează&hellip;",
            pending: "${total} editări în aşteptare vor fi trimise la restabilirea unei conexiuni de reţea."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Organizaţia mea",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Resursele mele",
                    favoritesLabel: "Preferinţele mele"
                },
                title: "Selectare hartă Web",
                searchTitle: "Căutare",
                ok: "OK",
                cancel: "Anulare",
                placeholder: "Introducere termen de căutare"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Organizaţia mea",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Resursele mele",
                    favoritesLabel: "Preferinţele mele"
                },
                title: "Selectare grup",
                searchTitle: "Căutare",
                ok: "OK",
                cancel: "Anulare",
                placeholder: "Introducere termen de căutare"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "Ă_Here is a link to a GeoForm_ș"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Spre nord",
            utm_easting: "Spre est",
            utm_zone_number: "Număr zonă",
            geoFormGeneralTabText: "1. Introduceţi informaţii",
            locationInformationText: "2. Selectaţi o locaţie",
            submitInformationText: "3. Completaţi un formular",
            submitInstructions: "Adăugaţi aceste informaţii în hartă.",
            myLocationText: "Locaţie curentă",
            locationDescriptionForMoreThanOneOption: "Ă_Specify the location for this entry by clicking/tapping the map or by using one of the following options_ș.",
            locationDescriptionForOneOption: "Ă_Specify the location for this entry by clicking/tapping the map or by using the following option_ș.",
            locationDescriptionForNoOption: "Ă_Specify the location for this entry by clicking/tapping the map_ș.",
            addressText: "Căutare",
            geographic: "Lat/Lon",
            locationTabText: "Locaţie",
            locationPopupTitle: "Locaţie",
            submitButtonText: "Trimitere date",
            submitButtonTextLoading: "Se trimite&hellip;",
            formValidationMessageAlertText: "Următoarele câmpuri sunt obligatorii:",
            selectLocation: "Ă_Please select a location for your submission_ș.",
            emptylatitudeAlertMessage: "Introduceţi o coordonată de ${openLink}latitudine${closeLink}.",
            emptylongitudeAlertMessage: "Introduceţi o coordonată de ${openLink}longitudine${closeLink}.",
            shareUserTitleMessage: "Vă mulţumim pentru contribuţie!",
            entrySubmitted: "Datele dvs. au fost trimise către hartă.",
            shareThisForm: "Partajaţi acest formular",
            shareUserTextMessage: "Recomandaţi şi altor utilizatori să contribuie folosind următoarele opţiuni.",
            addAttachmentFailedMessage: "Nu se poate adăuga o ataşare la stratul tematic",
            addFeatureFailedMessage: "Nu se poate adăuga un obiect spaţial la stratul tematic",
            noLayerConfiguredMessage: "Ă_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_ș.",
            placeholderLatitude: "Latitudine (Y)",
            placeholderLongitude: "Longitudine (X)",
            latitude: "Latitudine",
            longitude: "Longitudine",
            findMyLocation: "Localizare proprie",
            finding: "Se localizează&hellip;",
            backToTop: "Înapoi sus",
            addressSearchText: "Datele introduse vor apărea aici. Puteţi trage marcajul pentru a corecta locaţia.",
            shareModalFormText: "Link formular",
            close: "Închidere",
            locationNotFound: "Locaţia nu a putut fi găsită.",
            setLocation: "Setare locaţie",
            find: "Găsire adresă sau loc",
            attachment: "Ataşare",
            toggleDropdown: "Comutare listă derulantă",
            invalidString: "Ă_Please enter valid value_ș.",
            invalidSmallNumber: "Ă_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_ș.",
            invalidNumber: "Ă_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_ș.",
            invalidFloat: "Ă_Please enter valid ${openStrong}floating point${closeStrong} value_ș.",
            invalidDouble: "Ă_Please enter valid ${openStrong}double${closeStrong} value_ș.",
            invalidLatLong: "Ă_Please enter valid latitude and longitude coordinates_ș.",
            invalidUTM: "Ă_Please enter valid UTM coordinates_ș.",
            invalidUSNG: "Ă_Please enter valid USNG coordinates_ș.",
            invalidMGRS: "Ă_Please enter valid MGRS coordinates_ș.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Selectare&hellip;",
            applyEditsFailedMessage: "Ne pare rău, intrarea dvs. nu poate fi trimisă. Încercaţi din nou.",
            requiredFields: "Există erori. Corectaţi-le mai jos.",
            requiredField: "(obligatoriu)",
            error: "Eroare",
            textRangeHintMessage: "${openStrong}Sugestie:${closeStrong} Valoarea minimă ${minValue} şi Valoarea maximă ${maxValue}",
            dateRangeHintMessage: "${openStrong}Sugestie:${closeStrong} Data minimă ${minValue} şi Data maximă ${maxValue}",
            remainingCharactersHintMessage: "Ă_${value} characters remaining_ș"
        },
        builder: {
            invalidUser: "Ne pare rău, nu aveţi permisiunea de a vizualiza acest element",
            invalidWebmapSelectionAlert: "Harta web selectată nu conţine niciun strat tematic valid pentru utilizare. Pentru a continua, adăugaţi un strat tematic de obiecte spaţiale editabil în harta web.",
            invalidWebmapSelectionAlert2: "Pentru informaţii suplimentare, consultaţi ${openLink}Ce este un serviciu de obiecte spaţiale?${closeLink}",
            selectFieldsText: "Selectare câmpuri din formular",
            selectThemeText: "Selectare temă formular",
            webmapText: "Hartă web",
            layerText: "Strat tematic",
            detailsText: "Detalii",
            fieldsText: "Câmpuri",
            styleText: "Stil",
            optionText: "Opţiuni",
            previewText: "Previzualizare",
            publishText: "Publicare",
            optionsApplicationText: "Opţiuni",
            titleText: "Aplicaţie de creare",
            descriptionText: "Ă_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_ș.",
            btnPreviousText: "Anterior",
            btnNextText: "Următor",
            webmapTabTitleText: "Selectare hartă web",
            viewWebmap: "Vizualizare hartă web",
            webmapDetailsText: "Ă_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_ș",
            btnSelectWebmapText: "Alegere hartă web",
            btnSelectWebmapTextLoading: "Se încarcă&hellip;",
            layerTabTitleText: "Selectare strat tematic editabil",
            selectLayerLabelText: "Strat tematic",
            selectLayerDefaultOptionText: "Selectare strat tematic",
            detailsTabTitleText: "Detalii formular",
            detailTitleLabelText: "Titlu",
            detailLogoLabelText: "Imagine siglă",
            descriptionLabelText: "Ă_Form Instructions & Details_ș",
            fieldDescriptionLabelText: "Ă_Help Text (optional)_ș",
            fieldTabFieldHeaderText: "Câmp",
            fieldTabLabelHeaderText: "Etichetă",
            fieldTabDisplayTypeHeaderText: "Afişare ca",
            fieldTabOrderColumnText: "Ă_Order_ș",
            fieldTabVisibleColumnText: "Ă_Enabled_ș",
            selectMenuOption: "Meniu de selectare",
            selectRadioOption: "Buton radio",
            selectTextOption: "Text",
            selectDateOption: "Ă_Date Picker_ș",
            selectRangeOption: "Ă_Touch-Spinner_ș",
            selectCheckboxOption: "Casetă de selectare",
            selectMailOption: "E-mail",
            selectUrlOption: "URL",
            selectTextAreaOption: "Ă_Text Area_ș",
            previewApplicationText: "Previzualizare aplicaţie",
            saveApplicationText: "Salvare aplicaţie",
            saveText: "Salvare",
            toggleNavigationText: "Comutare navigaţie",
            formPlaceholderText: "Formularul meu",
            shareBuilderInProgressTitleMessage: "Publicare GeoForm în curs",
            shareBuilderProgressBarMessage: "Aşteptaţi&hellip;",
            shareBuilderTitleMessage: "Succes! Element salvat",
            shareBuilderTextMessage: "Puteţi începe să conectaţi informaţii partajându-le cu alţii",
            shareModalFormText: "Link formular",
            shareBuilderSuccess: "Serviciul dvs. GeoForm a fost actualizat şi publicat!",
            geoformTitleText: "GeoForm",
            layerTabText: "Acesta este stratul tematic din care va fi creat serviciul GeoForm. Stratul tematic trebuie să fie un serviciu de obiecte spaţiale editabil cu permisiuni de partajare adaptate audienţei dvs.",
            detailsTabText: "Utilizaţi casetele Detalii formular de mai jos pentru a particulariza titlul, adăuga o siglă particularizată şi furniza o scurtă descriere pentru audienţa serviciului GeoForm. În descriere, puteţi adăuga linkuri către alte resurse, informaţii de contact şi chiar îndruma audienţa către o aplicaţie de cartografiere web cu toate datele colectate cu ajutorul GeoForm.",
            fieldsTabText: "Aici puteţi selecta ce câmpuri vor fi vizibile pentru audienţa GeoForm, edita etichetele pe care aceştia le vor vedea şi adăuga o scurtă descriere pentru a ajuta la introducerea datelor.",
            styleTabText: "Modelaţi-vă serviciul GeoForm utilizând temele de mai jos, în funcţie de propriile preferinţe.",
            publishTabText: "Dacă aţi terminat particularizarea formularului geografic, salvaţi aplicaţia şi începeţi să o partajaţi cu audienţa. Puteţi reveni oricând la această aplicaţie de creare şi continua particularizarea în funcţie de feedback.",
            headerSizeLabel:"Ă_Header Size_ș",
            smallHeader: "Utilizare antet mic",
            bigHeader: "Ă_Use Large Header_ș",
            pushpinText: "Piuneză",
            doneButtonText: "Ă_Save and Exit_ș",
            fieldTabPlaceHolderHeaderText: "Sugestie (opţional)",
            enableAttachmentLabelText: "Ă_${openStrong}Enable Attachments${closeStrong}_ș",
            enableAttachmentLabelHint: "Ă_You can enable/disable the attachments here_ș",
            attachmentIsRequiredLabelText: "Ă_${openStrong}Attachment Required${closeStrong}_ș",
            attachmentIsRequiredLabelHint: "Ă_If necessary, users can be required to enter an attachment_ș.",
            attachmentLabelText: "Ă_Attachment Button Label_ș",
            attachmentLabelHint: "Ă_This is the text that will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_ș",
            attachmentDescription: "Descriere ataşare",
            attachmentHint: "Dacă este necesar, puteţi furniza aici instrucţiuni suplimentare pentru ataşări.",
            jumbotronDescription: "Ă_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_ș",
            shareGeoformText: "Partajare GeoForm",
            shareDescription: "Acest panou de partajare permite audienţei să partajeze cu uşurinţă GeoForm cu alţi colaboratori după ce trimit un element; acesta poate fi dezactivat în orice moment.",
            defaultMapExtent: "Extindere implicită a hărţii",
            defaultMapExtentDescription: "Harta va fi resetată la extinderea implicită în harta dvs. web după trimitere; acest lucru poate fi dezactivat în orice moment.",
            pushpinOptionsDescription: "Alegeţi dintr-o multitudine de culori pentru piuneza de pe hartă; aceasta trebuie să difere de simbolurile hărţii pentru a ajuta utilizatorul să plaseze propriul element pe hartă",
            selectLocationText: "Selectare locaţie după",
            myLocationText: "Locaţia mea",
            searchText: "Căutare",
            coordinatesText: "Coordonate de latitudine şi longitudine",
            usng: "Coordonate USNG",
            mgrs: "Coordonate MGRS",
            utm: "Coordonate UTM",
            selectLocationSDescription: "Permite utilizatorilor să selecteze o locaţie cu ajutorul acestor metode.",
            dragTooltipText:"Ă_Drag the field where you want it to appear_ș",
            showHideLayerText:"Ă_Show/Hide Layer_ș",
            showHideLayerHelpText:"Ă_You can configure the GeoForm to Show/Hide Layer_ș"
        }
    })
);