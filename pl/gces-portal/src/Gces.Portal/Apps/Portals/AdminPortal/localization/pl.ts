export const portalPL: LanguageKeyValueMap = {

	initializationError: 'Błąd przy rozpoczęciu', // Initialization Error
	unableLoadRequiredData: 'Nie można załadować wymaganych danych', // Unable to load required data
	connectionError: 'Błąd połączenia', // Connection Error
	unableSaveChanges: 'Nie można zapisać zmian', // Unable to save changes
	saveSettingsFailed: 'Zapisywanie ustawień nie powiodło się', // Save settings failed
	PortalUriRequiedForSmtpSettings: 'Przed zapisaniem ustawień e-mail upewnij się, że „Portal URI” w ustawieniach interfejsu użytkownika jest dostępny.', // Please confirm that the "Portal URI" in "UI Settings" is already provided before you save the email settings.
	WorkerJobMaxExecTimeIsInvalid: 'Maximal exec time should be between 0(s) and 2147481(s).',
	WorkerTaskMaxCountIsInvalid: 'Task per worker should be between 0 and 100.',

	// Common
	Save: 'Zapisz', // Save
	Ok: 'OK',
	Close: 'Close',
	Cancel: 'Anuluj', // Cancel
	Reset: 'Resetuj', // Reset
	Upload: 'Załaduj', // Upload
	Update: 'Zaktualizuj', // Update
	Delete: 'Usuń', // Delete
	SaveChanges: 'Zapisz zmiany', // Save Changes
	Dismiss: 'Odrzuć', // Dismiss
	DismissAll: 'Odrzuć wszystko', // Dismiss All
	ShowDetails: 'Pokaż szczegóły', // Show Details
	ShowAll: 'Pokaż wszystko', // Show All
	Name: 'Nazwa', // Name
	Color: 'Kolor', // Color
	Icon: 'Ikona', // Icon
	GettingReady: 'Przygotowywanie', // Getting Ready
	ShowPassword: 'Pokaż hasło', // Show password
	HidePassword: 'Ukryj hasło', // Hide password
	Yes: 'Tak', // Yes
	No: 'Nie', // No
	Logo: 'Logo',
	Avatar: 'Avatar',

	// Collection Headers
	title: 'Nazwa', // Name
	creator: 'Twórca', // Creator
	created: 'Utworzone', // Created
	modifier: 'Zaktualizowane przez', // Updated By
	modified: 'Zaktualizowane', // Updated
	emptyPageTip: 'Nie ma pliku {{name}} w tym systemie', // There is no {{name}} file in the current system

	// Portal Configuration
	pcPortalSetting: 'Ustawienia portalu', // Portal Settings
	pcSupportPJBG: 'Obsługiwane formaty: PNG, JPG, BMP, GIF', // Support formats: PNG, JPG, BMP, GIF
	pcSupportICO: 'Obługiwany format: ICO', // Support formats: ICO
	pcTitle: 'Tytuł', // Title
	pcPortalUri: 'Link do portalu', // Portal Uri
	pcPortalUriPlaceHolder: 'Link do strony głównej portalu', // Portal home page url
	pcTheme: 'Motyw', // Theme
	pcTagsModel: 'Wzór tagów', // Tags Model
	pcTagsDisplay: 'Wyświetl puste kategorie', // Display Empty System Categories
	pcAllowCustomSchedule: 'Zezwól użytkownikowi tworzyć własne harmonogramy', // Allow User To Create Custom Schedule
	pcAllowEditPersonalInformation: 'Zezwól użytkownikowi nad edycję informacji personalnych', // Allow User To Edit Personal Information
	pcAllowEditPersonalTheme: 'Zezwól użytkownikowi na edycję osobistego motywu', // Allow User To Edit Personal Theme
	pcHideWelcomeScreen: 'Hide Welcome Screen On Document Portal',
	pcShowGlobalOrganization: 'Show Global Organization',
	pcAllowUrlHideActions: 'Zezwól na \'ukryjAkcje\' w URL', // Allow \'hideActions\' In Url
	pcHideActions: 'Ukryj Akcje', // Hide Actions
	pcHideActionsTip: 'Działa tylko, gdy opcja \'ukryjAkcje\' w URL jest wyłączona', // Only works when Allow \'hideActions\' In Url option is off
	pcHideActionsPlaceHolder: 'Ustaw Ukryte Akcje (oddzielane przecinkami)', // Please Set Hide Actions(Separated by commas)
	pcEditPersonalInfo: 'Zarządzaj', // Manage Item
	pcEditPersonalInfoTooltip: 'Zarządzaj niestandardowym atrybutem', // Manage Custom Property
	pcLargeLogo: 'Duże logo', // Large Logo
	pcLargeLogoDescription: 'To logo będzie wyświetlane w lewym górnym rogu portalu administratora', // This logo will be displayed in the upper left corner of Admin Portal
	pcLargeLogoRecommended: 'Zalecany rozmiar: 115px * 40px', // Recommended size: 115px * 40px
	pcSmallLogo: 'Małe logo', // Small Logo
	'pcSmallLogoDescription!en': 'To logo będzie wyświetlane w lewym górnym rogu portalu dokumentów i portalu zasobów', // This logo will be displayed in the upper left corner of Document Portal and Resource Portal
	'pcSmallLogoRecommended!en': 'Zalecany rozmiar: 40px * 40px', // Recommended size: 40px * 40px
	'pcSmallLogoDescription!zh': 'To logo będzie wyświetlane w lewym górnym rogu portalu', // This logo will be displayed in the upper left corner of Portal
	'pcSmallLogoRecommended!zh': 'Zalecany rozmiar: 40px * 40px', // Recommended size: 40px * 40px
	pcTabIcon: 'Ikona karty', // Tab Icon
	pcTabIconDescription: 'To logo będzie wyświetlane na karcie przeglądarki', // This logo will be displayed on the tab of the browser
	pcTabIconRecommended: 'Zalecany rozmiar: 16px * 16px', // Recommended size: 16px * 16px
	pcIdentitySetting: 'Ustawienia strony logowania', // Login Page Settings
	pcIdentityAdvanceSetting: 'Zaawansowane ustawienia strony logowania', // Login Page Advance Settings
	pcIdentityAdvanceSettingCss: 'CSS', // css
	pcIdentityAdvanceSettingCssDesc: 'Jeśli ustawisz CSS, zostaną one użyte zamiast wbudowanych CSS na stronie logowania.', // If you set the css, we will use this css instead of the builtin css in login page.
	pcIdentityAdvanceSettingHtml: 'HTML', // Html
	pcIdentityAdvanceSettingHtmlDesc: 'HTML przetworzy się po zawartości strony logowania.', // The html will render after our login page content.
	pcIdentityAdvanceSettingPreview: 'Podgląd', // Preview
	pcLoginLogo: 'Logo logowania', // Login Logo
	pcLoginLogoDescription: 'To logo będzie wyświetlane na stronie logowania', // This logo will be displayed in the login page
	pcLoginLogoRecommended: 'Zalecany rozmiar: 200px * 50px', // Recommended size: 200px * 50px
	pcLoginImage: 'Obrazek logowania', // Login Image
	pcLoginImageDescription: 'Ten obrazek będzie wyświetlany po lewej na stronie logowania', // This image will be displayed in the left of login page
	pcLoginImageRecommended: 'Zalecany rozmiar: 960px * 830px', // Recommended size: 960px * 830px
	pcLoginTip: 'Podpowiedź logowania', // Login Tip
	pcLoginTipDescription: 'Podpowiedź będzie wyświetlana na stronie logowania', // This tip message will be displayed in the login page
	pcLoginPreview: 'Login Preview',
	pcWCAGCompatibility: 'WCAG Compatibility',
	pcAutoDismissNotifications: 'Auto Dismiss Notifications',
	pcDurationOfNotifications: 'Duration of Notifications(s)',

	// SMTP
	emailSettingsTitle: 'Email Settings',
	smtpDialogTitle: 'Test ustawień wiadomości email', // Email Settings Test
	smtpSendTestMail: 'Wyślij', // Send
	smtpSendTestMailTitle: 'Wyślij wiadomość testową', // Send Test Email
	smtpRecipientMailAddress: 'Adres odbiorcy wiadomości', // Recipient Email Address
	smtpServerAddressError: 'Niewłaściwy adres serwera', // Incorrect server address
	smtpServerPortError: 'Niewłaściwy port serwera', // Incorrect server port
	smtpUsernameOrPasswordError: 'Niewłaściwa nazwa użytkownika lub hasło', // Incorrect username or password
	smtpSendTestMailFail: 'Wysyłanie wiadomości testowej nie powiodło się', // Send test email failed
	smtpSendTestMailSuccess: 'Poprawnie wysłano wiadomość testową', // Send test email successfully
	smtpTestMailSubject: 'Wiadomość testowa Wyn Server', // Wyn Server test e-mail
	smtpTestMailBody: 'Ta wiadomość testowa została wysłana przez Wyn Server', // This test message was sent by the Wyn Server system
	emailDomainValidationTitle: 'Email Domain Validation',
	enableDomainValidation: 'Enable Domain Validation',
	validEmailDomains: 'Valid Email Domains',
	enable: 'Enable',
	disable: 'Disable',
	mailProtocol: 'Mail Protocol',
	googleClientID: 'Client ID',
	googleClientSecret: 'Client Secret',
	senderName: 'Sender Name',
	senderEmail: 'Sender E-Mail',
	serverAddress: 'SMTP Server Address',
	serverPort: 'SMTP Server Port',
	enableSsl: 'Enable SSL',
	login: 'Login',
	password: 'Password',
	useParentSettings: 'Use Parent Organization Settings',

	// Tags
	tagsAddTag: 'Dodaj kategorię', // Add Category
	tagsEditTag: 'Edytuj kategorię', // Edit Category
	tagsCreateTag: 'Utwórz kategorię', // Create Category
	tagsUpdateTag: 'Zaktualizuj kategorię', // Update Category
	tagsEmptyName: 'Nazwa kategorii nie może być pusta.', // Category name cannot be empty.
	tagsInvalidName: 'Nazwa kategorii nie może zaczynać się od $.', // Category name cannot start with $.
	tagsNameExist: 'Nazwa kategorii "{{name}}" już istnieje.', // Category name "{{name}}" already exists.
	tagsDragTip: 'Przeciągnij element, aby go przenieść', // Drag item to move it.
	tagsTags: 'Kategorie', // Categories
	tagsDeleteTagConfirm: 'Czy chcesz usunąć kategorię "{{name}}" na zawsze?', // Do you want to delete this category "{{name}}" permanently?
	tagsAddTagFailed: 'Dodawanie kategorii nie powiodło się', // Add Category Failed
	tagsEditTagFailed: 'Edycja kategorii nie powiodła się', // Edit Category Failed
	tagsDeleteTag: 'Usuń kategorię', // Delete Category

	// Section Item
	dashHeaderDashboard: 'Dashboard',
	'portal!title': 'Interfejs użytkownika', // UI Settings
	'portal!description': 'Skonfiguruj portale administratora i dokumentów', // Configure Document and Admin portals
	'scheduler!title': 'Planer', // Scheduler
	'scheduler!description': 'Moduł planera dla prototypu GCES', // Scheduler module for GCES Prototype
	'sharedResources!title': 'Udostępnione zasoby', // Shared Resources
	'sharedResources!description': 'Moduł udostępnionych zasobów dla GCES', // Shared resources module for GCES
	'smtp!title': 'Wiadomości email', // Email Settings
	'smtp!description': 'Ustawienia serwera usługi mailowej', // Settings for the server mailing service
	'queue!title': 'Kolejka Usługi Raportowej', // Worker queue settings
	'queue!description': 'Ustawienia kolejki Usługi Raportowej', // Settings for the worker queue

	'semanticModeling!title': 'Semantic Model Settings',
	'semanticModeling!description': 'Semantic Model Settings',

	'documents!title': 'Dokumenty', // Documents
	'documents!description': 'Zarządzanie dokumentami', // Documents Management
	'images!title': 'Obrazy', // Images
	'images!description': 'Obrazy udostępniane na potrzeby tworzenia raportów', // Shared images for designing reports
	'datasources!title': 'Źródła danych', // Data Sources
	'datasources!description': 'Źródła danych udostępnione na potrzeby tworzenia raportów', // Shared data sources for designing reports
	'datasets!title': 'Zestawy danych', // Data Sets
	'datasets!description': 'Zestawy danych udostępnione na potrzeby tworzenia raportów', // Shared data sets for designing reports

	'smtp!serverAddress': 'Adres serwera SMTP', // SMTP Server Address
	'smtp!serverPort': 'Port serwera SMTP', // SMTP Server Port
	'smtp!enableSsl': 'Włącz SSL', // Enable SSL
	'smtp!login': 'Login',
	'smtp!password': 'Hasło', // Password
	'smtp!senderName': 'Nazwa nadawcy', // Sender name
	'smtp!senderEmail': 'Email nadawcy', // Sender e-mail
	'smtp!emailDomainValidation': 'Sprawdzanie poprawności domeny', // Email Domain Validation
	'smtp!emailDomains': 'Domeny', // Email Domains
	'smtp!mailProtocol': 'Protokół pocztowy', // Mail Protocol
	'smtp!mailProtocol!SMTP': 'SMTP',
	'smtp!mailProtocol!GoogleAPI': 'Google API',
	'smtp!googleClientID': 'Client ID',
	'smtp!googleClientSecret': 'Sekret Klienta', // Client Secret
	'googleAPIAuthTitle': 'Autoryzacja', // Authorization
	'googleAPIAuth': 'Autoryzuj', // Authorize
	'GoogleApisAuthFailed': 'Autoryzacja nie powiodła się', // Authorization failed
	'GoogleApisAuthSuccess': 'Autoryzacja powiodła się', // Authorization success
	'googleApisError_1': '$t(pcPortalUri) nie jest podany w $t(portal!title)', // $t(pcPortalUri) is not provided in $t(portal!title)
	'googleApisError_2': 'Autoryzacja rozpoczęta', // Authorization has begun
	'googleApisError_3': 'Autoryzacja nie powiodła się: {{message}}', // Authorization failed: {{message}}
	'googleApisError_4': 'Limit czasu autoryzacji', // Authorization timeout
	'googleApisError_5': 'Brakuje kluczowych informacji w adresie URL przekierowania', // Missing key information in redirect URL
	'googleApisError_6': '$t(pcPortalUri) w adresie URL przekierowania nie pasuje', // $t(pcPortalUri) in redirect URL does not match
	'googleApisError_7': 'Token Odświeżania nie może być pusty', // The Refresh Token cannot be empty

	'scheduleSettings!ignoreEmptyContent': 'Nie dostarczaj pustego dokumentu', // Don\'t deliver the empty document
	'scheduleSettings!disableManualAndOneTimeTask': 'Disable Manual and One-time task',
	'scheduleSettings!disableFileShare': 'Disable \"File Share\" delivery',

	'queue!maxWorkerTasks': 'Maksymalna liczba zadań na Usługę Raportową', // Max tasks per worker
	'queue!defaultExecLimit': 'Domyślny limit czasu wykonania (s)', // Default exec time limit (s)
	'queue!maxExecLimit': 'Maksymalny czas wykonania (s)', // Maximal exec time (s)

	'semanticModeling!alwaysDiscourageDistinct': 'Prevent generating DISTINCT',

	'portal!theme': 'Motyw', // Theme
	'portal!theme!Default': 'Domyślny', // Default
	'portal!theme!Light': 'Jasny', // Light
	'portal!theme!ActiveReports Server': 'Pomarańczowy', // Orange
	'portal!theme!Blue': 'Niebieski', // Blue
	'portal!theme!Red': 'Czerwony', // Red
	'portal!theme!Forest': 'Leśny', // Forest
	'portal!theme!Dark Forest': 'Leśny ciemny', // Dark Forest
	'portal!theme!Green': 'Zielony', // Green
	'portal!theme!Warm Light': 'Ciepły jasny', // Warm Light
	'portal!defaultTagsMode': 'Wzór tagów', // Tags Model
	'portal!defaultTagsMode!List': 'Lista', // List
	'portal!defaultTagsMode!TreeView': 'Widok drzewa', // Tree View
	'customTheme!head': 'Własny motyw', // Custom Theme
	GetCustomThemeContentError: 'Pobieranie własnego motywu nie powiodło się', // Get custom theme content failed
	GetBuiltInThemeContentError: 'Ładowanie wbudowanego motywu nie powiodło się', // Load built-in theme failed

	'account-management!title': 'Konto', // Account
	'account-management-user!title': 'Użytkownicy', // Users
	'account-management-user!description': 'Zarządzanie użytkownikami', // User management
	'account-management-role!title': 'Role', // Roles
	'account-management-role!description': 'Zarządzanie rolami', // Role management
	'account-management-property!title': 'Niestandardowy atrybut', // Custom Property
	'account-management-property!description': 'Zdefiniuj wartości Kontekstu Użytkownika, aby dodać dynamiczne akcje dla zestawów danych, źródeł danych i innych dokumentów', // Define UserContext values to add dynamic behavior for datasets, datasources, and other documents
	'account-management-locked-users!title': 'Zablokowani użytkownicy', // Locked Users
	'account-management-locked-users!description': 'Zarządzanie zablokowanymi użytkownikami', // Locked user management
	'account-management-concurrence!title': 'Zgodność', // Concurrence
	'account-management-concurrence!description': '',
	'account-management-security-settings!title': 'Ustawienia zabezpieczeń', // Security Settings
	'account-management-security-settings!description': 'Zarządzaj ustawieniami zabezpieczeń', // Manage security settings
	'account-management-claim-mappings!title': 'Kontekst użytkownika', // User Context
	'account-management-claim-mappings!description': 'Zarządzanie mapowaniem poświadczeń', // Claim mappings management
	'sysconfig-license!title': 'Licencja', // License
	'sysconfig-license!description': 'Aktywacja licencji', // License activation
	'sysconfig-security-provider!title': 'Dostawcy zabezpieczeń', // Security Providers
	'sysconfig-security-provider!description': 'Zarządzanie dostawcami zabezpieczeń', // Security provider management
	'sysconfig-external-provider!title': 'Zewnętrzni dostawcy', // External Providers
	'sysconfig-external-provider!description': 'Zarządzanie zewnętrznymi dostawcami', // External provider management
	'sysconfig-client!title': 'Klient', // Client
	'sysconfig-client!description': 'Zarządzanie klientem', // Client management

	'resources!title': 'Zasoby', // Resources

	'configuration!title': 'Konfiguracja', // Configuration

	'tagsEditor!title': 'Kategorie', // Categories
	'tagsEditor!description': 'Zarządzaj kategoriami dokumentu', // Manage document categories
	'auditLogConfiguration!title': 'Ustawienia audytu', // Auditing Settings
	'auditLogConfiguration!description': 'Konfiguruj informacje w rejestrze audytu', // configure audit log information
	'documentThemeEditor!title': 'Domyślny motyw dokumentu', // Default Document Theme
	'documentThemeEditor!description': 'Konfiguruj domyślny motyw dokumentu', // Configure document default theme

	'wyn-plugin!title': 'Monitorowanie', // Monitoring
	'wyn-plugin!description': 'Monitoruj stan Usług Raportowych', // Monitor workers' health
	'reporting-plugin!title': 'Raportowanie', // Reporting
	'reporting-plugin!description': '',
	'wyn-plugin-monitor!title': 'Usługi Raportowe', // Workers
	'wyn-plugin-monitor!description': '',
	'wyn-plugin-tasks!title': 'Zadania', // Tasks
	'wyn-plugin-tasks!description': '',
	'shortcut-scheduler-settings!title': 'Skrót do ustawień harmonogramów', // Scheduler Settings Shortcut
	'shortcut-scheduler-settings!description': '',
	'shortcut-reports!title': 'Skrót do raportów', // Reports Shortcut
	'shortcut-reports!description': '',
	'shortcut-images!title': 'Skrót do udostępnianych obrazów', // Shared Images Shortcut
	'shortcut-images!description': '',
	'shortcut-scheduler-settings!props!text': 'Ustawienia harmonogramów', // Scheduler Settings
	'shortcut-reports!props!text': 'Raporty', // Reports
	'shortcut-images!props!text': 'Udostępniane obrazy', // Shared Images
	'shortcut-mapData!props!text': 'Mapy', // Map Data
	'versionsInfo!title': 'Informacje o wersji', // Version Info
	'versionsInfo!description': 'Informacje o wersji', // Version Info
	'wynEnterprise': 'Wyn Enterprise',

	'Documents!title': 'Dokomenty', // Documents
	'Account Management!title': 'Konto', // Account
	'Configuration!title': 'Konfiguracja', // Configuration
	'dbd!title': 'Dashboardy', // Dashboards
	'dbd!description': 'Dashboardy', // Dashboards
	'dbd!name': 'Dashboard',
	'rdl!title': 'Raporty', // Reports
	'rdl!name': 'Raport', // Report
	'rdl!description': 'Raporty', // Reports
	'smdsc!title': 'Modele semantyczne', // Semantic Models
	'smdsc!name': 'Modele semantyczne', // Semantic Models
	'smdsc!description': 'Modele semantyczne', // Semantic Models
	'rdlx-template!title': 'Szablony raportów', // Report Templates
	'rdlx-template!description': 'Szablony raportów', // Report Templates
	'rdlx-master!title': 'Master Report',
	'rdlx-master!description': 'Master Report',
	'dataset!title': 'Zestawy danych', // Datasets
	'dataset!name': 'Zestawy danych', // Datasets
	'dataset!description': 'Zestawy danych', // Datasets

	'dsc!title': 'Źródła danych', // Data Sources
	'dsc!name': 'Źródła danych', // Data Sources
	'dsc!description': 'Źródła danych', // Data Sources
	'image/jpeg,image/bmp,image/gif,image/png!title': 'Obrazy', // Images
	'image/jpeg,image/bmp,image/gif,image/png!name': 'Obraz', // Image
	'image/jpeg,image/bmp,image/gif,image/png!description': 'Obrazy', // Images
	'theme!title': 'Motywy', // Themes
	'theme!name': 'Motywy', // Themes
	'theme!description': 'Motywy', // Themes
	'geoJson!title': 'Mapy', // Map Data
	'geoJson!description': 'Mapy', // Map Data
	'floorPlan!title': 'Plan Budynku', // Floor Plan
	'floorPlan!name': 'Plan Budynku', // Floor Plan
	'floorPlan!description': 'Plan Budynku', // Floor Plan

	'visual!title': 'Wizualizacja', // Visualization
	'visual!description': 'Wizualizacja', // Visualization

	'reporting!title': 'Ustawienia WynReports', // WynReports Settings
	'reporting!name': 'Raport', // Report
	'reporting!description': 'Konfiguruj WynReports', // Configure WynReports
	'reporting!parametersPanelPosition': 'Pozycja panelu parametrów', // Parameter panel position
	'reporting!parametersPanelPosition!Top': 'Góra', // Top
	'reporting!parametersPanelPosition!Right': 'Prawo', // Right
	'previewPagesSettings_limitPreviewPages': 'Limit stron podglądu', // Limit preview pages
	'previewPagesSettings_previewPages': 'Strony podglądu', // Preview pages
	'previewPagesSettings_hint': 'Ustawienie liczby stron podglądu ogranicza liczbę stron, która zostanie wygenerowana w podglądzie raportu. Pełny raport może zostać wygenerowany poprzez „Uruchom pełny raport.',

	'scheduleSettings!title': 'Ustawienia planowania', // Schedule Settings
	'scheduleSettings!description': 'Zarządzanie ustawieniami planowania', // Schedule Settings management

	// Nav Toolbar
	globalOrgName: 'Global',
	switchOrganization: 'Switch Organization',
	editProfileSetting: 'Edit Profile Setting',

	// Version Info
	'productVersion': 'Wyn Enterprise',
	'serverVersion': 'Serwer', // Server
	'portalVersion': 'Portal',
	'pluginTitle': 'Pluginy', // Plugins
	'Portal': 'Plugin portalu', // Portal Plugin
	'Scheduler': 'Plugin Planera', // Scheduler Plugin
	'Shared Resources': 'Plugin Wspólnych Zasobów', // Shared Resources Plugin
	'Server plugin': 'Plugin Serwera', // Server Plugin
	'Account Management Plugin': 'Plugin Zarządzania Kontem', // Account Management Plugin
	'Dataset Management Plugin': 'Plugin Zarządzania Zestawem Danych', // Dataset Management Plugin
	'GCES Dashboards': 'Plugin WynDashboards', // WynDashboards Plugin
	'GCES Reporting': 'Plugin WynReports', //  WynReports Plugin
	DeleteDocumentError: 'Błąd podczas usuwania dokumentu', // Error deleting document

	storageIntervalSettingsUnitHours: 'Godzinach', // Hours
	storageIntervalSettingsUnitDays: 'Dniach', // Days
	storageIntervalSettingsUnitWeeks: 'Tygodniach', // Weeks
	storageIntervalSettingsUnitMonths: 'Miesiącach', // Months
	storageIntervalSettingsUnitYears: 'Latach', // Years
	storageIntervalSettingsUnitForever: 'Beztermionowo', // Forever
	storageIntervalSettingsLabel: 'Maks. interwał przechowywania', // Max. storage interval

	'UpdateNotificationTips': 'There is a new version {{newestVersion}} to update, and click to view more info...',
	'UpdateNotificationSkip': 'Skip this version',
	'UpdateNotificationSkipTips': 'Skip until another version published',
	'UpdateNotificationSkipVersionError': 'Failed to skip the version',
	'UpdateNotificationSkipVersionSuccessDetail': 'Failed to skip the version "Version {{version}}"',

	err_20015: 'Nazwa kategorii "{{tagName}}" nie można zaczynać się od \"$\".', // Category name "{{tagName}}" cannot start with \"$\".
	err_20016: 'Nie można odnaleźć kategorii o ID "{{tagId}}".', // Category with the id "{{tagId}}" not found.
	err_20017: 'Kategoria o nazwie "{{name}}" już istnieje.', // Category with the name "{{name}}" already exists.
	err_20018: 'Kategoria z linkiem "{{urlName}}" już istnieje.', // Category with the url "{{urlName}}" already exists.
	err_20019: 'Kategoria z liczbą porządkową "{{order}}" już istnieje.', // Category with the order "{{order}}" already exists ### Kontekst do sprawdzenia
	err_20029: 'Nie można użyć systemowej nazwy "{{ name }}".', // Can not use system reserved tag name "{{ name }}"
};
