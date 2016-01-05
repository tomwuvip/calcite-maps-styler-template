﻿define(
   ({
    map: {
      error: "無法建立地圖"
    },
    onlineStatus: {
      offline: "您目前是離線工作。連接到伺服器之前，提交的表單將儲存在本機。",
      reconnecting: "正在重新連接&hellip;",
      pending: "重新建立網路連線時將提交 ${total} 個待決的編輯內容。"
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "我的組織",
          onlineLabel: "ArcGIS Online",
          contentLabel: "我的內容",
          favoritesLabel: "我的最愛"
        },
        title: "選擇 Web 地圖",
        searchTitle: "搜尋",
        ok: "確定",
        cancel: "取消",
        placeholder: "輸入搜尋詞彙"
      },
      groupdlg: {
        items: {
          organizationLabel: "我的組織",
          onlineLabel: "ArcGIS Online",
          contentLabel: "我的內容",
          favoritesLabel: "我的最愛"
        },
        title: "選擇群組",
        searchTitle: "搜尋",
        ok: "確定",
        cancel: "取消",
        placeholder: "輸入搜尋詞彙"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "此處是 GeoForm 連結"
      }
    },
    user: {
      all: "全部",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "北移",
      utm_easting: "東移",
      utm_zone_number: "區域編號",
      selectLayerTabText: "${formSection} 選擇表單",
      geoFormGeneralTabText: "${formSection} 輸入資訊",
      locationInformationText: "${formSection} 選擇位置",
      submitInformationText: "${formSection} 完成表單",
      submitInstructions: "將此資訊新增到地圖。",
      myLocationText: "目前位置",
      locationDescriptionForMoreThanOneOption: "透過按一下/點選地圖或使用以下任一選項來指定此條目的位置。",
      locationDescriptionForOneOption: "透過按一下/點選地圖或使用以下選項來指定此條目的位置。",
      locationDescriptionForNoOption: "透過按一下/點選地圖來指定此條目的位置。",
      addressText: "搜尋",
      geographic: "經緯度",
      locationTabText: "位置",
      locationPopupTitle: "位置",
      submitButtonText: "提交輸入內容",
      submitButtonTextLoading: "正在提交&hellip;",
      formValidationMessageAlertText: "以下為必填欄位:",
      selectLocation: "請選擇提交時所處的位置。",
      emptylatitudeAlertMessage: "請輸入${openLink}緯度${closeLink}坐標。",
      emptylongitudeAlertMessage: "請輸入${openLink}經度${closeLink}坐標。",
      shareUserTitleMessage: "感謝您所做的貢獻!",
      entrySubmitted: "您的輸入已提交至地圖。",
      shareThisForm: "分享此表單",
      shareUserTextMessage: "使用以下選項告知其他使用者貢獻力量吧。",
      addAttachmentFailedMessage: "無法向圖層新增附件",
      addFeatureFailedMessage: "無法向圖層新增圖徵",
      noLayerConfiguredMessage: "載入或查詢可編輯圖徵圖層時出錯。為顯示表單並開始收集提交內容，請將可編輯的圖徵圖層新增到 Web 地圖中。",
      placeholderLatitude: "緯度(Y)",
      placeholderLongitude: "經度(X)",
      latitude: "緯度",
      longitude: "經度",
      findMyLocation: "我的位置",
      finding: "正在定位&hellip;",
      backToTop: "返回頂部",
      addressSearchText: "將在此處顯示您的提交。您可以拖動圖釘以更正位置。",
      shareModalFormText: "表單連結",
      close: "關閉",
      locationNotFound: "位置查詢失敗。",
      setLocation: "設定位置",
      find: "查詢地址或地點",
      attachment: "附件",
      toggleDropdown: "切換下拉式清單",
      invalidString: "請輸入一個有效值。",
      invalidSmallNumber: "請輸入一個介於 -32768 和 32767 之間的 ${openStrong}整數${closeStrong} 值。",
      invalidNumber: "請輸入有效${openStrong}整數${closeStrong}值，範圍在 -2147483648 到 2147483647 之間。",
      invalidFloat: "請輸入有效${openStrong}浮點${closeStrong}值。",
      invalidDouble: "請輸入有效${openStrong}雙精度${closeStrong}值。",
      invalidLatLong: "請輸入有效的經緯度坐標。",
      invalidUTM: "請輸入有效的 UTM 坐標。",
      invalidUSNG: "請輸入有效的 USNG 坐標。",
      invalidMGRS: "請輸入有效的 MGRS 坐標。",
      geoformTitleText: "GeoForm",
      domainDefaultText: "選擇&hellip;",
      applyEditsFailedMessage: "抱歉，無法提交您的輸入。請重試。",
      requiredFields: "以下欄位為必填欄位。請進行有效輸入。",
      requiredField: "(必填)",
      error: "錯誤",
      textRangeHintMessage: "${openStrong}提示:${closeStrong} 最小值 ${minValue} 和最大值 ${maxValue}",
      dateRangeHintMessage: "${openStrong}提示:${closeStrong} 最小日期 ${minValue} 和最大日期 ${maxValue}",
      remainingCharactersHintMessage: "剩餘 ${value} 個字元",
      mapFullScreen: "全螢幕",
      mapRestore: "復原",
      filterSelectEmptyText: "選擇",
      invalidLayerMessage: "表單圖層不存在。請設定應用程式並設置該圖層。",
      selectedLayerText: "全部",
      fileUploadStatus: "檔案上傳狀態",
      uploadingBadge: "&nbsp;正在上傳&hellip;",
      successBadge: "&nbsp;已上傳",
      retryBadge: "重試",
      errorBadge: "上傳期間出錯&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "檔案太大，無法附加",
      exceededFileCountError: "附件數量可以超過上限",
      selectFileTitle: "選擇一個檔案",
      btnSelectFileText: "選擇檔案",
      btnViewSubmissions: "查看提交內容"
    },
    builder: {
      gettingStarted: "啟動",
      dateSettings: "日期設定",
      hiddenDateField: "隱藏此日期欄位",
      preventPastDates: "阻止過去的日期",
      preventFutureDates: "阻止未來日期",
      useCurrentDate: "將此欄位設定為目前日期和時間",
      configure: "配置",
      configureField: "配置欄位 \'${fieldName}\'",
      invalidUser: "抱歉，您無查看此項目的權限",
      invalidWebmapSelectionAlert: "所選 web 地圖未包含可以使用的有效圖層。請在您的 web 地圖中新增可編輯的圖徵圖層以繼續。",
      invalidWebmapSelectionAlert2: "有關詳細資訊，請參閱${openLink}什麼是圖徵服務?${closeLink}",
      selectFieldsText: "選擇表單欄位",
      selectThemeText: "選擇表單主題",
      setViewerText: "配置檢視器",
      introText: "起始值",
      webmapText: "Web 地圖",
      layerText: "圖層",
      detailsText: "詳細資訊",
      fieldsText: "欄位",
      styleText: "樣式",
      viewerText: "檢視器(V)",
      optionText: "選項",
      previewText: "預覽",
      publishText: "發佈",
      optionsApplicationText: "選項",
      titleText: "建構器",
      descriptionText: "GeoForm 是一種可設定範本，可用於編輯${link1}圖徵服務${closeLink}的表單式資料。使用者可透過該應用程式使用表單輸入資料(而非透過地圖的快顯)，同時使用 ${link2}Web 地圖${closeLink}的強大功能和可編輯圖徵服務。請使用以下步驟自訂並部署 GeoForm。",
      btnPreviousText: "上一步",
      btnNextText: "下一步",
      webmapTabTitleText: "選擇 web 地圖",
      viewWebmap: "查看 web 地圖",
      webmapDetailsText: "所選 web 地圖為 ${webMapTitleLink}${webMapTitle}${closeLink}。要選擇其他 Web 地圖，請按一下“選擇 Web 地圖”按鈕",
      btnSelectWebmapText: "選擇 web 地圖",
      btnSelectWebmapTextLoading: "正在載入&hellip;",
      layerTabTitleText: "選擇可編輯圖層",
      selectLayerLabelText: "圖層",
      selectLayerDefaultOptionText: "選擇圖層",
      enableBasemapToggle: "顯示底圖切換",
      enableBasemapToggleDescription: "可將 GeoForm 配置為顯示/隱藏底圖切換",
      defaultBasemap: "底圖切換",
      secondaryBasemap: "預設底圖",
      detailsTabTitleText: "表單詳細資訊",
      detailTitleLabelText: "標題",
      detailLogoLabelText: "標誌圖像",
      descriptionLabelText: "表單說明和詳細資訊",
      fieldDescriptionLabelText: "說明文字(可選)",
      fieldDescriptionHelpText: "為此欄位提供簡短描述或說明。",
      fieldHintHelpText: "此欄位的佔位符文字。",
      fieldTabFieldHeaderText: "欄位",
      fieldTabLabelHeaderText: "標籤",
      fieldTabDisplayTypeHeaderText: "顯示為",
      fieldTabOrderColumnText: "順序",
      fieldTabVisibleColumnText: "已啟用",
      displayFieldText: "顯示欄位",
      selectMenuOption: "選擇功能表",
      selectRadioOption: "選項按鈕",
      selectTextOption: "文字",
      selectDateOption: "日期選取器",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "勾選方塊",
      selectMailOption: "電子郵件",
      selectUrlOption: "URL",
      selectTextAreaOption: "文字區",
      previewApplicationText: "預覽應用程式",
      saveApplicationText: "儲存應用程式",
      saveText: "儲存",
      toggleNavigationText: "切換導航",
      formPlaceholderText: "我的表單",
      shareBuilderInProgressTitleMessage: "發佈 GeoForm",
      shareBuilderProgressBarMessage: "請稍候&hellip;",
      shareBuilderTitleMessage: "成功! 項目已儲存",
      shareBuilderTextMessage: "可透過與其他成員分享開始收集資訊",
      shareModalFormText: "表單連結",
      shareBuilderSuccess: "已更新並發佈 GeoForm!",
      geoformTitleText: "地理表單",
      layerTabText: "這是從中構建 GeoForm 的圖層。該圖層必須是啟用的圖徵服務，讓使用者以適當的共用授權進行編輯。如果選擇了所有圖層，GeoForm 將允許使用者選擇所要提交到的表格圖層。",
      detailsTabText: "使用下方的“表單詳細資訊”方塊自訂標題、新增自訂標誌並為 GeoForm 觀眾提供簡短描述。您可以在描述中新增其他資源的連結和聯繫資訊，甚至可以將您的觀眾指向包含所有透過 GeoForm 所收集資料的 Web 製圖應用程式。",
      fieldsTabText: "您可以在此處選擇對 GeoForm 觀眾可見的欄位，編輯觀眾可見的標記並新增簡短描述以說明輸入資料。",
      styleTabText: "根據首選項使用下方的主題設置 GeoForm 樣式。",
      viewerTabText: "設定可用於檢視從 GeoForm 中收集的提交內容選項。",
      publishTabText: "如果已完成對 GeoForm 的自訂，請儲存應用程式並將其與觀眾分享。您可隨時返回此建構器並根據意見反應繼續進行自訂。",
      headerSizeLabel: "標題大小",
      smallHeader: "使用小標題",
      bigHeader: "使用大標題",
      pushpinText: "圖釘",
      doneButtonText: "儲存並退出",
      fieldTabPlaceHolderHeaderText: "提示(可選)",
      enableAttachmentLabelText: "${openStrong}啟用附件${closeStrong}",
      enableAttachmentLabelHint: "可在此啟用/停用附件",
      attachmentIsRequiredLabelText: "${openStrong}所需附件${closeStrong}",
      attachmentIsRequiredLabelHint: "如有必要，可能會要求使用者輸入附件。",
      attachmentLabelText: "附件按鈕標籤",
      attachmentLabelHint: "此文字將顯示在“附件”按鈕旁邊。可利用此空間來描述您希望觀眾按照您要求的檔案格式(.jpeg、.png、.docx 和 .pdf 等等)附加的內容(照片、影片和說明文件等等)以及任何附加說明",
      attachmentDescription: "附件描述",
      attachmentHint: "如有必要，可在此處提供其他附件說明。",
      jumbotronDescription: "為表單使用大標題或小標題。大標題可說明定義應用程式的目的，但會佔用更多的螢幕空間",
      shareGeoformText: "社交媒體共用按鈕",
      shareDescription: "社交媒體共用按鈕允許您的使用眾在提交後，輕鬆地共用您的 GeoForm。",
      defaultMapExtent: "預設地圖範圍",
      defaultMapExtentDescription: "地圖在提交後將重設為 web 地圖中的預設範圍 - 可隨時停用此功能。",
      pushpinOptionsDescription: "可為地圖圖釘選擇不同的顏色，該顏色應不同於地圖符號系統顏色以說明使用者將其提交內容放在地圖上",
      selectLocationText: "位置選擇依據",
      myLocationText: "我的位置",
      searchText: "搜尋",
      coordinatesText: "經緯度坐標",
      usng: "USNG 坐標",
      mgrs: "MGRS 坐標",
      utm: "UTM 坐標",
      selectLocationSDescription: "允許使用者使用這些方法選擇位置。",
      dragTooltipText: "將欄位拖放到預期的顯示位置",
      showHideLayerText: "顯示圖層",
      showHideLayerHelpText: "可將 GeoForm 配置為顯示/隱藏圖層。此選項僅應用於單一圖層設定。",
      enableOfflineSupport: "試_Enable offline support________驗",
      enableOfflineSupportHelpText: "試_Store submissions when there is no network connection and submit them when a connection is restored_______________________________驗.",
      labelHelpMessage: "標籤",
      placeHolderHintMessage: "提示文字",
      placeHolderHelpMessage: "說明文字",
      selectTextOptionValue: "篩選選擇",
      disableLogo: "停用標誌",
      disableLogoDescription: "可設定 GeoForm 以在表單標題中顯示/隱藏標誌",
      locateOnLoadText: "在載入中定位",
      locateOnLoadDescription: "可設定 GeoForm 以使用頁面載入中的目前位置",
      selectLayerFieldTabText: "選擇圖層",
      allLayerSelectOptionText: "所有圖層",
      disableViewer: "停用檢視器",
      disableViewerDescription: "可將 GeoForm 配置為停用/啟用檢視器",
      displayFieldHintText: "所選顯示欄位將以標題形式顯示在檢視器中"
    },
    viewer: {
      geocoderCancelText: "取消",
      viewMapTabText: "地圖",
      sortHeaderText: "排序方式:",
      geocoderPlaceholderText: "郵遞區號、城市等",
      noSearchResult: "未找到結果",
      recordsTabTooltip: "查看提交內容",
      legendTabTooltip: "圖例",
      aboutUsTabTooltip: "關於我們",
      mapTabTooltip: "地圖",
      btnDescendingText: "降序",
      btnAscendingText: "遞增",
      geometryUnavailableErrorMessage: "尋找圖徵幾何時出錯",
      infoPopupOffErrorMessage: "沒有要顯示的任何資訊",
      btnLoadMoreText: "載入更多",
      unavailableTitleText: "無標題",
      unavailableConfigMessage: "無法載入設定",
      share: "共用",
      viewReportsTabText: "報告(R)",
      viewLegendTabText: "圖例",
      viewAboutusTabText: "關於",
      btnSubmitReportText: "提交報告",
      appLoadingFailedMessage: "載入檢視器時有錯誤"
    }
  })
);