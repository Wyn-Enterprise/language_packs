export const portalPL: LanguageKeyValueMap = {

	// Common
	fetchDataFailed: 'Pozyskanie danych nie powiodło się', //  Fetch data failed
	GettingReady: 'Przygotowanie', // Getting Ready
	Close: 'Zamknij', // Close
	Logo: 'Logo',
	Avatar: 'Avatar',
	EmptyPage: 'Empty Page',
	SearchCategory: 'Select category',
	cmEmptyResult: 'empty result',

	// Nav App
	naDocumentPortal: 'Portal dokumentów', // Document Portal
	naResourcePortal: 'Portal zasobów', // Resource Portal
	naAdminPortal: 'Portal administratora', // Admin Portal
	naLogout: 'Wyloguj', // Logout
	naFavorites: 'Ulubione', // Favorites
	naCreateDoc: 'Utwórz', // Create
	naCategories: 'Kategorie', // Categories
	naCategorySettingsTitle: 'Zarządzaj własnymi kategoriami', // Manage personal Categories
	naUpload: 'Załaduj', // Upload
	naOrganization: 'Switch Organization',
	naOk: 'OK',
	naCancel: 'Cancel',
	// Nav Toolbar
	switchPortal: 'Zmień portal', // Switch Portal
	globalOrgName: 'Global',
	switchOrganization: 'Switch Organization',
	editProfileSetting: 'Edit Profile Setting',

	// Document List
	dlName: 'Nazwa', // Name
	dlType: 'Typ', // Type
	dlUpdateBy: 'Zaktualizowany przez', // Updated By
	dlUpdated: 'Zaktualizowany', // Updated
	dlDelete: 'Usuń', // Delete
	dlNoDocumentTip: 'brak wyników', // no results
	dlPreview: 'Podgląd', // Preview
	dlOpenInNewWindow: 'View {{type}} in new window',
	dlDownload: 'Pobieranie', // Download
	dlDatasetType: 'Typ zestawu danych', // Dataset Type
	dlDashboardDataset: 'Na potrzeby dashboardu', // For Dashboard
	dlReportDataset: 'Na potrzeby raportu', // For Report
	dlDataProvider: 'Dostawca danych', // Data Provider
	dlDataSource: 'Źrodło danych', // Data Source
	dlDocRef: 'Wskazany dokument danych', // Referenced Data Document

	// Document Row Actions
	docSetAsHome: 'Ustaw jako główny', // Set as Home
	docSetAsHomeDescription: 'Ten dokument będzie otwierany domyślnie', // This document will be opened by default
	docRename: 'Zmień nazwę', // Rename
	docRenameDescription: 'Zmień nazwę dokumentu', // Rename document
	docDownload: 'Pobierz', // Download
	docDownloadDescription: 'Pobierz dokument', // Download document
	docSetCategory: 'Kategorie...', // Categories...
	docSetCategoryDescription: 'Edytuj kategorie dokumentu', // Edit document categories
	docSetDelete: 'Usuń', // Delete
	docSetDeleteDescription: 'Usuń ten dokument', // Delete this document
	docBatchDeleteDescription: 'Usuń wybrane dokumenty', // Delete selected documents
	docsBatchTagDescription: 'Edytuj kategorie dokumentu', // Edit document categories
	docsBatchPermissionDescription: 'Edytuj uprawnienia dokumentu', // Edit document permissions
	docEdit: 'Edytuj...', // Edit...
	docEditTitle: 'Edytuj ten dokument', // Edit this document
	docAddToFavorites: 'Dodaj do ulubionych', // Add to Favorites
	docRemoveFromFavorites: 'Usuń z ulubionych', // Remove from Favorites
	docFilterByDocumentType: 'Filtruj wg typu dokumentu', // Filter by document type
	docItemCopyURL: 'Kopiuj link', // Copy URL
	docItemCopyURLDescription: 'Kopiuj link dokumentu', // Copy Document URL
	docCreateDocument: 'Create', // 'Create'

	// Delete Confirm Dialog
	dcdTitle: 'Usuń dokument', // Delete Document
	dcdMessage: 'Usunąć dokument "{{name}}" na zawsze?', // Delete document "{{name}}" forever?
	dcdDeleteSelectedDocumentMessage: 'Usunąć wybrane dokumenty na zawsze?', // Delete selected documents forever?
	dcdDeleteDocumentError: 'Błąd podczas usuwania dokumentu', // Error deleting document
	dcdOK: 'OK',
	dcdCancel: 'Anuluj', // Cancel
	dcdClose: 'Close',

	// Notifications
	ntfDismiss: 'Odrzuć', // Dismiss
	ntfDismissAll: 'Odrzuć wszystkie', // Dismiss All
	ntfShowDetails: 'Pokaż szczegóły', // Show Details
	ntfShowAll: 'Pokaż wszystko', // Show All
	ntfCancelTask: 'Anuluj to zadanie', // Cancel this task

	// Document Error Message
	documentNotDeleted: 'Dokument nie został usunięty', // Document was NOT deleted
	documentUsedByAnother: 'Nie można usunąć dokumentu \"{{docName}}\". Jest używany przez następujące dokumenty:\n{{refDocNames}}', // The document \"{{docName}}\" can not be deleted. It is used by the following documents:\n{{refDocNames}}
	renameDocumentError: 'Błąd podczas zmiany nazwy', // Rename error
	updateDocumentDescriptionError: 'Błąd akutalizacji opisu dokumentu', // Update document description error
	updateDocHideOnMobileError: 'Błąd aktualizacji widoczności na urządzeniu mobilnym', // Update document show on mobile error
	err_NoPermissionRename: 'Nie można zmienić nazwy dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	duplicateDocumentError: 'Błąd duplikacji', // 'Duplicate Error'
	err_AccessDenied: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień do edycji niektórych dokumentów powiązanych z tym dokumentem', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	previewDocumentError: 'Błąd podglądu', // Preview Error
	errorAccessDenied: 'Nie masz uprawnień dostępu do niektórych dokumentów powiązanych z tym dokumentem.', // You do not have permission to access some of the documents referenced in this document.
	updateDocumentHideInDocumentPortalError: 'Show document on portal failed.',
	insufficientReferenceDocNames: '\nInsufficient permission documents: ',
	docOrRefDocNotFound: 'The document or the referenced document with id {{id}} not found.',
	downloadFailed: 'Download failed',

	// Permissions
	psPermissions: 'Uprawnienia', // Premissions
	psShare: 'Udostępnij', // Share
	psNoSharing: 'Nie udostępniaj', // no sharing
	'psExecute!name': 'Execute', // Execute
	'psRead!name': 'Odczyt', // Read
	'psReadWrite!name': 'Odczyt / Zapis', // Read / Write
	psCancel: 'Anuluj', // Cancel
	psSave: 'Zapisz', // Save
	psNoRolesTip: 'no matched roes found', // no matched roes found
	psPermissionInfo: 'Permission Information',
	psApplyMinNeededPermission: 'Apply Minimum Needed Permission',
	psApplyMinNeededPermissionTip: 'You will grant the \"Execute\" permission to the referenced documents.',
	psInsufficientPermission: 'The checked role/organization does not have sufficient permissions on the referenced documents to perform the action. You can apply minimum needed permission to make sure users can preview this document normally.',
	psReferencedDocuments: 'Referenced documents:',
	expandAll: 'Expand All',
	collapseAll: 'Collapse All',
	// permission role display name
	roleName_Everyone: 'Everyone',
	roleName_administrator: 'Administrator',
	roleName_orgadmin: 'Organization Administrator',

	// Doc Info Tab
	docInfoProps: 'Właściwości', // Properties
	docInfoName: 'Nazwa', // Name
	docInfoDescription: 'Opis', // Description
	docInfoUpdated: 'Zaktualizowane', // Updated
	docInfoUpdatedBy: 'Zaktualizowane przez', // Updated By
	docInfoCreated: 'Utworzone', // Cretaed
	docInfoCreatedBy: 'Utworzone przez', // Created By
	docInfoCategories: 'Kategorie', // Categories
	docInfoPermissions: 'Uprawnienia', // Permissions
	docInfoRead: 'Odczyt', // Read
	docInfoWrite: 'Zapis', // Write
	docInfoEdit: 'Edytuj', // Edit
	hideInDocumentPortalHideStateLabel: 'Hide In Document Portal',
	hideInDocumentPortalTrueLabel: 'True',
	hideInDocumentPortalFalseLabel: 'False',

	// Document Types
	'rdl!name': 'Raport', // Report
	'rdl!description': 'Raport', // Report
	'rdlx!name': 'Raport', // Report
	'rdlx!description': 'Raport', // Report
	'rdlx-template!name': 'Szablon raportu', // Report template
	'rdlx-template!description': 'Szablon raportu', // Report template
	'rdlx-master!name': 'Master Report',
	'rdlx-master!description': 'Master Report',
	'theme!name': 'Motyw', // Theme
	'theme!description': 'Motyw', // Theme
	'dbd!name': 'Dashboard',
	'dbd!description': 'Dashboard',
	'dsc!name': 'Data Source',
	'dsc!description': 'Data Source',
	'dataset!name': 'Dataset',
	'dataset!description': 'Dataset',

	'image!name': 'Obrazy', // Images
	'image/bmp!name': 'Obraz BMP', // BMP Image
	'image/bmp!description': 'Bitmapa', // A bitmap image
	'image/jpeg!name': 'Obraz JPEG', // JPEG Image
	'image/jpeg!description': 'JPEG', // A JPEG image
	'image/gif!name': 'GIF', // GIF Image
	'image/gif!description': 'GIF', // A GIF image
	'image/png!name': 'Obraz PNG', // PNG Image
	'image/png!description': 'PNG', // A PNG image

	'dataset-fieldsInfo!name': 'Pola', // Fields
	'dataset-fieldsInfo!description': 'Pola zestawu danych', // Fields of dataset

	// Preview
	pvPreviewIsUnavailable: 'Podgląd jest niedostępny', // Preview is unavailable :(
	pvReload: 'Przeładowanie', // Reload
	pvTitle: 'Podgląd dokumentu', // Document preview

	// License Notification
	messageGracePeriod: 'Licencja tego serwera wygasła {{alertDate}}. Możesz odnowić kontaktując się z GrapeCity Sales - US.Sales@grapecity.com. Serwer przestanie działać {{expireDate}}.', // Note: This server's license has expired on {{alertDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com. The server will stop working on {{expireDate}}.
	messageTrial: 'Używasz wersji demonstracyjnej. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby aktywować pełną licencję', // Note: You are running an evaluation version. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license.
	messageTrialWillExpire: 'Używasz wersji demonstracyjnej. Wygaśnie ona w ciągu {{remainDays}} dni. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby aktywować pełną licencję i uniknąć utraty funkcjonalności.', // Note: You are running an evaluation version. Your evaluation is due to expire in {{remainDays}} days. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license and prevent loss of functionality.
	messageTrialExpired: 'Twoja wersja demonstracyjna wygasła {{expireDate}}. Skontaktuj się z GrapeCity Sales - US.Sales@grapecity.com, aby zakupić pełną licencję.', // Note: Your evaluation has expired on {{expireDate}}. Please contact GrapeCity Sales at US.Sales@grapecity.com to purchase a full license.
	messageKeyExpired: 'Licencja tego serwera wygasła {{expireDate}}. Możesz odnowić kontaktując się z GrapeCity Sales - US.Sales@grapecity.com.', // Note: This server's license has expired on {{expireDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com.
	messageKeyVersionNotMatched: 'Uwaga: Licencja nie jest ważna dla tej wersji Wyn.', // Note: License is not valid for this version of Wyn.

	// Toolbar
	showCheckbox: 'Pokaż pole wyboru', // Show Check Box
	hideCheckbox: 'Ukryj pole wyboru', // Hide Check Box
	search: 'Szukaj', // Search

	// System Configurations
	'systemConfigsEditor!title': 'Konfiguracje systemu', // System Configurations
	'systemConfigsEditor!description': 'Zarządzaj konfiguracjami systemu', // Manage system configurations
	SaveModifications: 'Zapisz zmiany', // Save Modification
	SaveChangesAndRestartServices: 'Zachować te zmiany i zrestartować usługę?', // Save these modifications and restart the service?'
	'sysconfig-embedded-identity!name': 'Użyj wbudowanej tożsamości', // Use Embedded Identity
	'sysconfig-embedded-identity!description': 'Wybierz, aby użyć wbudowanej tożsamości usługi Wyn. Domyślnie ustawione na "tak"', // Select to use the identity service embedded in Wyn, the default value is true.
	'sysconfig-identity-url!name': 'Link do serwera tożsamości', // Identity Server URL
	'sysconfig-identity-url!description': 'Link serwera tożsamości jest taki sam jak link portalu, jeśli używasz usługi wbudowanej tożsamości', // The url of identity server, it's the same as portal's url if you use the embedded identity service.
	'sysconfig-allowed-urls!name': 'Linki autoryzowanych aplikacji sieciowych (jeden link na wiersz)', // Authorized Web Application URLs (one URL per line)
	'sysconfig-allowed-urls!description': 'Autoryzowane aplikacje sieciowe dla serwera tożsamości', // The authorized web application urls for identity server.
	'sysconfig-allowed-cors-origins!name': 'Dozowolone źródła CORS (jeden URL na linię)', // Allowed CORS Origins (one URL per line)
	'sysconfig-allowed-cors-origins!description': 'Dozwolone źródła dla polityki CORS.', // The allowed origins for CORS policy.
	'sysconfig-exposed-headers!name': 'Wystawione Nagłówki(jeden Header na linię)', // Exposed Headers (one Header per line)
	'sysconfig-exposed-headers!description': 'Nagłówki wystawione dla polityki CORS.', // The exposed headers for CORS policy.
	EmptyConfigName: 'Nazwa konfiguracji systemu nie może być pusta.', // The system configuration name can not be empty.
	GetConfigFailed: "Nie udało się pobrać wartości elementu konfiguracji systemu '{{name}}'.", // Failed to get the value of system configuration item '{{name}}'.
	SetConfigFailed: "Nie udało się ustawić wartości elementu konfiguracji systemu '{{name}}'.", // Failed to set the value of system configuration item
	SaveConfigFailed: 'Nie udało się zapisać konfiguracji systemu.', // Failed to save the system configurations.
	GetConfigsFailed: 'Nie udało się pobrać konfiguracji systemu.', // Failed to get the system configurations.
	SetConfigsFailed: 'Nie udało się ustawić konfiguracji systemu.', // Failed to set the system configurations.
	FailedRestartAllServices: 'Nie udało się zrestartować usługi.', // Failed to restart the services.

	// Comment
	'rename!comment': 'Zmieniono nazwę dokumentu z {{originName}} na {{newName}}', // Document name is changed from {{originName}} to {{newName}}
	'duplicate!comment': 'Dokument został zduplikowany z {{originName}}, wersji {{version}}', // Document is duplicated from {{originName}} of version {{version}}
	'revert!comment': 'Powrócono do wersji nr {{revision}} przez {{friendlyName}}', // Reverted to version No.{{revision}} by {{friendlyName}}
	'upload!comment': 'Załadowany przez {{friendlyName}}', // Uploaded by {{friendlyName}}
	'replace!comment': 'Zamieniony przez {{friendlyName}}', // Replaced by {{friendlyName}}

	// Server Error Code
	'documentType!dataset': 'Zestawy danych', // Datasets
	'documentType!rdl': 'Raporty', // Reports
	'documentType!rdlx-template': 'Szablony', // Templates
	'documentType!dbd': 'Dashboardy', // Dashboards

	err_20001: '{{parameter}} jest wymaganym parametrem.', // {{parameter}} is a required parameter.
	err_20002: 'Dokument "{{newName}}" już istnieje.', // Document "{{newName}}" already exists.
	err_20003: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień aby edytować niektórych dokumentów powiązanych z tym dokumentem.', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	err_20004: 'Document or referenced document not found.', // 'Nie znaleziono dokumentu.', // Document not found.
	err_20005: 'Liczba {{pluginKey}} dokumentów osiągnęła limit, nie możesz zduplikować dokumentu.', // The number of {{pluginKey}} documents has reached the limit,you can not duplicate new document.
	err_20006: 'Dokument "{{documentProperty}}" nie został znaleziony.', // Document "{{documentProperty}}" is not found.
	err_20007: 'Dokument "{{documentTitle}}" ma nierozpoznany typ "{{documentType}}.', // The document "{{documentTitle}}" has unknown/unregistered type "{{documentType}}.
	err_20008: 'Dokument \"{{documentTitle}}\" nie może zostać usunięty. Jest używany przez następujące dokumenty:\n{{documentRefNames}}', // The document \"{{documentTitle}}\" can not be deleted. It is used by the following documents:\n{{documentRefNames}}
	err_20009: 'Nie można zmienić nazwy dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	err_20010: 'Domyślny motyw dokumentu "{{documentTitle}}" nie może zostać usunięty.', // The default document theme "{{documentTitle}}" can not be deleted.
	err_20011: 'Odmowa dostępu do dokumentu "{{documentTitle}}" ', // Document with title "{{documentTitle}}" is denied.
	err_20012: 'Wbudowany dokument "{{documentTitle}}" nie może zostać usunięty.', // The built-in document "{{documentTitle}}" can not be deleted.
	err_20013: 'Nie udało się zaktualizować opisu dokumentu. Nie masz wystarczających uprawnień. Skontaktuj się z administratorem.', // Update document description failed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.
	err_20014: 'Niewłaściwa nazwa dokumentu. Nazwa dokumentu nie może być pusta oraz używać symboli < > \\ : ? * / | \". Nie używaj . (kropka) jako pierwszy symbol w nazwie dokumentu.', // Invalid document name. Document name can not be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.
	err_20020: 'FromTagId nie może być takie samo jak toTagId.', // FromTagId cannot same as toTagId.
	err_20021: 'ToTagId nie może być puste, gdy updateParent ustawiono na "nie"', // ToTagId cannot be null when updateParent is false.
	err_20025: 'Nie można skasować dokumentu "{{documentTitle}}": {{internalErrorMessage}}.', // Cannot delete the document "{{documentTitle}}": {{internalErrorMessage}}.
	err_20026: 'Dokument nie może zostać zduplikowany, nie masz uprawnień do edycji powiązanych dokumentów. Dokument jest powiązany z następującymi dokumentami :\n{{noPermissionDocRefNames}}', // The document can not be duplicated, you do not have permission to edit referenced documents. It is referenced the following documents:\n{{noPermissionDocRefNames}}
	err_20027: 'Docement nie został znaleziony, odśwież listę dokumentów.', // Docement not found, please refresh the document list.
	err_20028: 'Tag nie został znaleziony', //  Tag not found.
	err_20029: 'Nie można użyć systemowej nazwy znacznika "{{name}}".', // Can not use system reserved tag name "{{name}}".

	err_20101: 'Dodanie roli "{{roleName}}" nie udało się.', // Add role "{{roleName}}" failed.
	err_20102: 'Usunięcie roli "{{roleName}}" nie udało się.', // Delete role "{{roleName}}" failed.

	err_20201: 'Użytkownik nie jest poprawnie zarejestrowany w systemie.', // User is not properly registered in the system.
	err_20202: 'Dokument o ID "{{documentId}}" nie został znaleziony (lub nie masz uprawnień do odczytu).', // Document with id "{{documentId}}" not found (or you do not have read permissions).

	err_20301: 'Nie masz wystarczających uprawnień, aby wykonać tę operację.', // You do not have sufficient permissions to do this operation.

	// Uploade Error Code
	uploadErr_10001: 'Status pliku nie został załadowany.', // File State is not uploaded.
	uploadErr_10002: 'Nie znaleziono wtyczek do sprawdzenia poprawności zasobu.', // No plugins found to validate resource.
	uploadErr_10003: 'Wtyczka {{pluginName}} zwrócił wyjątek podczas sprawdzania poprawności pliku: {{exceptionMessage}}.', // Plugin {{pluginName}} have thrown an exception when validating file: {{exceptionMessage}}.
	uploadErr_10004: 'Zwrócono wyjątek podczas sprawdzania powiązań pliku : {{exceptionMessage}}.', // Thrown an exception when validating file reference : {{exceptionMessage}}.
	uploadErr_10005: 'Niewystarczające uprawnienia do załadowania {{documentType}}. Skontaktuj się z administratorem.', // Insufficient permissions to upload {{documentType}}. If you believe this is incorrect, please contact your administrator.
	uploadErr_10006: 'Błąd sprawdzania poprawności. {{exceptionMessage}}', // Validate failure. {{exceptionMessage}}
	uploadErr_10007: 'Niemożliwa ścieżka wykonania.', // Impossible execution path.
	uploadErr_10008: 'Maksymalna liczba dokumentów z licencją w została osiągnięta.', // The number of licensed documents in the system has reached limit.
	uploadErr_10009: 'Nie można rozwiązać powiązanego zasobu $t({{documentType}})  o nazwie "{{DocumentName}}".', // Cannot resolve referenced $t({{documentType}}) resource with name {{DocumentName}}.
	documentType_rdl: 'Raport',
	documentType_dbd: 'Dashboard',
	documentType_dsc: 'Źródło danych', // data source
	documentType_dataset: 'Zestaw danych', // dataset
	documentType_smdsc: 'Model semantyczny', // smeantic model
	documentType_theme: 'Motyw', // theme
	'documentType_image/jpeg': 'Obraz', // image,
	'documentType_image/bmp': 'Obraz', // image
	'documentType_image/gif': 'Obraz', // image
	'documentType_image/png': 'Obraz', // image
	uploadErr_10010: 'Powiązany zasób {{resourceName}} o ID <{{DocumentId}}> nie został jeszcze załadowany.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet uploaded.
	uploadErr_10011: 'Nie sprawdzono jeszcze poprawności powiązanego zasobu {{resourceName}} o ID <{{DocumentId}}>.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet validated.
	uploadErr_10012: 'Powiązany zasób {{resourceName}} o ID <{{DocumentId}}> jest nieprawidłowy.', // Referenced resource {{resourceName}} with id <{{DocumentId}}> is Invalid.
	uploadErr_10013: 'Powiązany zasób {{resourceName}} ma nierozwiązane powiązania.', // Referenced resource {{resourceName}} has unresolved references.
	uploadErr_10014: 'Zależność cykliczna z plikiem {{anotherFileName}}.', // Cyclic dependency with file {{anotherFileName}}.
	uploadErr_10015: 'Powiązany z niewłaściwym plikiem: {{badFileName}}.', // In cycle with invalid file {{badFileName}}.

	// Upload Other
	uploadFailed: 'Nie można załadować pliku, pomimo podjęcia kilku prób', // We couldn\'t upload file after a few attempts. Sorry
	uploadTextUnknownFileType: 'Nieznany typ pliku', // Unknown File Type
	uploadTextUnsupportedFileType: 'Nieobsługiwany typ pliku lub brak uprawnień do załadowania takiego pliku', // Unsupported file type or no permissions to upload such file.
	uploadTextFileNameExceedHundredCharacters: 'Nazwa pliku nie może przekraczać 100 znaków', // File name cannot exceed 100 characters.

	// welcome screen
	blogs: 'Blogi', // Blogs
	documentation: 'Dokumentacja', // Documentation
	tutorialVideos: 'Filmy', // Videos
	notShowOnNextStartup: 'Nie pokazuj przy następnym uruchomieniu', // Do not show on next startup
	gettingStarted: 'Jak zacząć', // Getting Started
	workingWidthData: 'Praca z danymi', // Working with Data
	createReport: 'Utwórz raport', // Create Report
	createDashboard: 'Utwórz dashboard', // Create Dashboard
	sourceNotFound: 'Nie znaleziono źródła...', // Source not found...
	wizardTitle: 'Witaj w Wyn Enterprise', // Welcome to Wyn Enterprise
	wizardDescription: 'Te filmy pomogą Ci rozpocząć pracę', // The following videos will help you get started.
	updateShowWelcomeSuccess: 'Poprawnie zaktualizowano ustawienia', // Update Settings Success
	updateShowWelcomeFail: 'Błąd aktualizacji ustawień', // Update Settings Error

	// force delete document
	forceDeleteTitle: 'Force Delete',
	forceDeleteContent: 'The document \"{{documentTitle}}\" is used by the following documents:\n{{documentRefNames}}.\nAre you sure to force delete?',
	forceDeleteTip: 'Force Delete',

	// page title
	'create-dsc!title': 'Create Data Source',
	'edit-dsc!title': 'Edit Data Source',
	'preview-dsc!title': 'Data Source Preview',
	'create-dataset!title': 'Create Dataset',
	'edit-dataset!title': 'Edit Dataset',
	'preview-dataset!title': 'Dataset Preview',
	'create-smdsc!title': 'Create Semantic Model',
	'edit-smdsc!title': 'Edit Semantic Model',
	'preview-smdsc!title': 'Semantic Model Preview',
	'create-floorPlan!title': 'Stwórz Plan Budynku', // Create Floor Plan
	'edit-floorPlan!title': 'Edytuj Plan Budynku', // Edit this Floor Plan
	'preview-floorPlan!title': 'Floor Plan Preview',
	'preview-theme!title': 'Theme Preview',
	'preview-rdl!title': 'Report Preview',
	'preview-rdlx-template!title': 'Report Template Preview',
	'preview-image!title': 'Image Preview',
	'preview-image/jpeg!title': 'Image Preview',
	'preview-image/bmp!title': 'Image Preview',
	'preview-image/gif!title': 'Image Preview',
	'preview-image/png!title': 'Image Preview',
	'create-dbd!title': 'Create Dashboard',
	'edit-dbd!title': 'Edit Dashboard',
	'preview-dbd!title': 'Dashboard Preview',
	'searchResult!title': 'Search Results',
};
