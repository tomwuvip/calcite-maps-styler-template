﻿define(
	 ({
		commonCore: {
			common: {
				add: "Ekle",
				edit: "Düzenle",
				save: "Kaydet",
				next: "Sonraki",
				cancel: "İptal",
				back: "Geri",
				apply: "Uygula",
				close: "Kapat",
				open: "Aç",
				start: "Başlangıç",
				loading: "Yükleniyor",
				disabledAdmin: "Bu özellik Yönetici tarafından devre dışı bırakıldı",
				width: "Genişlik",
				height: "Yükseklik"
			},
			inlineFieldEdit: {
				editMe: "Beni düzenle!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSaving: "Kaydediliyor",
				buttonSaved: "Kaydedildi",
				buttonShare: "Paylaş",
				buttonSettings: "Ayarlar",
				buttonHelp: "Yardım",
				buttonPreview: "Canlı Görünüm",
				tooltipFirstSave: "ı_This isn't available until you save_İ.",
				tooltipNotShared: "ı_This isn't available until you share_İ.",
				noPendingChange: "Bekleyen değişiklik yok",
				unSavedChangePlural: "Bekleyen değişiklikler",
				closeWithPendingChange: "Bu eylemi onaylamak istediğinizden emin misiniz? Değişiklikleriniz silinecek.",
				saveError: "Kaydetme başarısız; tekrar deneyin",
				shareStatus1: "Uygulama henüz kaydedilmedi",
				shareStatus2: "Uygulama herkesle paylaşılıyor",
				shareStatus3: "Uygulama kuruluş içinde paylaşılıyor",
				shareStatus4: "Uygulama paylaşılmıyor"
			},
			saveError: {
				title: "Uygulama kaydederken hata",
				err1Div1: "Aynı ada sahip başka bir öğeniz olduğundan uygulama kaydedilemiyor (bkz. <a class='linkagolroot' target='_blank'>içerik klasörünüz</a>).",
				err1Div2: "ı_Please modify the title of your application and then save it_İ.",
				btnOk: "ı_Edit the application title_İ"
			},
			share: {
				firstSaveTitle: "Uygulama başarıyla kaydedildi",
				firstSaveHeader: "Uygulamanız %PORTAL% üzerinde kaydedildi, ancak henüz paylaştırılmadı.",
				firstSavePreview: "Önizleme",
				firstSaveShare: "Paylaş",
				firstSaveA1: "%PORTAL% üzerinde daha önce işlem yapmadıysanız veya oluşturucu arayüzü erişimi için bir kısayol kullanmak isterseniz, aşağıdaki bağlantıyı kaydedebilirsiniz: %LINK1%",
				firstSaveA1bis: "Uygulamayı ayrıca <a href='%LINK2%' target='_blank'>%PORTAL% içerik klasörünüzde</a> bulabilirsiniz.",
				shareTitle: "Uygulamanızı paylaşın",
				sharePrivateHeader: "Uygulamanız paylaştırılmadı, paylaştırmak ister misiniz?",
				sharePrivateBtn1: "Herkesle paylaş",
				sharePrivateBtn2: "Kuruluşumla Paylaş",
				sharePrivateWarning: "%WITH% ile paylaşma devre dışı bırakıldı çünkü <a href='%LINK%' target='_blank'>web haritasının</a> sahibi değilsiniz.",
				sharePrivateWarningWith1: "genel ile",
				sharePrivateWarningWith2: "genel ve Kuruluş ile",
				sharePrivateProgress: "Paylaşma sürüyor...",
				sharePrivateErr: "Paylaşma başarısız, tekrar deneyin veya",
				sharePrivateOk: "Paylaşma başarıyla güncellendi, yükleniyor...",
				shareHeader1: "Uygulamanız <strong>herkes tarafından erişilebilir</strong> durumda.",
				shareHeader2: "Uygulamanız kuruluşunuzun üyeleri tarafından (oturum açılması gerekir) erişilebilir durumda.",
				shareLinkCopy: "Kopyala",
				shareLinkCopied: "Kopyalandı",
				shareQ0: "ı_How do I embed the application in a web page_İ?",
				shareQ1Opt1: "Uygulamayı nasıl özel tutarım?",
				shareQ1Opt2: "Uygulamayı nasıl özel tutabilir ya da herkesle paylaşabilirim?",
				shareA1: "<a href='%LINK1%' target='_blank'>Uygulama öğesi sayfasındaki</a> %SHAREIMG% özelliğini kullanın.",
				shareQ2bis: "Oluşturucu arayüzüne nasıl geri giderim?",
				shareA2div1: "%LINK1% bağlantısını kaydedip tekrar kullanın veya <a href='%LINK2%' target='_blank'>uygulama öğesi sayfasını</a> kullanın.",
				shareA2div2: "Uygulamanın sahibi olarak %PORTAL% üzerinde oturum açtığınızda, uygulamada bir oluşturucu açma düğmesi görüntülenir:",				
				shareQ3: "Veriler nerede saklanıyor?",
				shareA3: "%TPL_NAME% verileri ve yapılandırması <a href='%LINK2%' target='_blank'>bu web uygulama öğesinde</a> saklanır. Flickr, Picasa, Facebook veya YouTube içe aktarma işlevi kullandıysanız, resim ve videolarınız %PORTAL% içinde çoğaltılmamış demektir."
			},
			settings: {
				header: "Ayarlar",
				tabError: "Tüm sekmelerdeki hataları kontrol edin"
			},
			settingsLayout: {
				title: "Düzen",
				explain: "Hangi düzeni kullanmak istiyorsunuz?",
				explainInit: "Ayarlar iletişim kutusunda düzeni istediğiniz zaman değiştirebilirsiniz.",
				viewExample: "Canlı örnek görüntüle"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Üstbilgi",
				logoEsri: "Esri logosu",
				logoNone: "Logo yok",
				logoCustom: "Özel logo",
				logoCustomPlaceholder: "URL (maks 250x50 piksel)",
				logoCustomTargetPlaceholder: "Tıklanabilir bağlantı",
				logoSocialExplain: "Başlık bağlantısını özelleştirin.",
				logoSocialText: "Metin",
				logoSocialLink: "Bağlantı",
				lblSmallHeader: "ı_Use compact header (no subtitle)_İ"
			},
			header: {
				title: "ı_Edit the title of your %TPL_NAME%_İ",
				subtitle: "ı_Edit the subtitle of your %TPL_NAME%_İ"
			}
		}
	})
);
