export const reportingPL: LanguageKeyValueMap = {
	// Designer
	
	drApplicationTitle: 'Kreator WynReports', // WynReports Designer
	drYes: 'Tak', // Yes
	drNo: 'Nie', // No
	drUnsavedChangesTitle: 'Niezapisane zmiany w raporcie', // The report has unsaved changes
	drUnsavedChangesText: 'Czy chcesz opuścić kreator bez zapisania zmian?', // Would you like to leave designer and discard these changes?

	// Export Dialog
	edTextFormat: 'Format eksportu', // Export Format
	edTextParams: 'Parametry raportu', // Report Parameters
	edTextExportParams: 'Parametry eksportu', // Export Parameters
	edTextReadyToExport: 'Gotowe do eksportu', // Ready to Export
	edTextExport: 'Eksport', // Export
	edTextExportError: 'Błąd eksportu', // Export Error
	edTextExportTo: 'Eksport do {{type}}', // Export to {{type}}
	edTextChooseExportFormat: 'Wybierz format eksportu', // Choose an export format
	edTextAdvancedSettings: 'Zaawansowane ustawienia', // Advanced Settings

	edStatusTextGettingInfo: 'pobieranie informacji o raporcie...', // getting report info... 
	edStatusTextInfoUnavailable: 'Informacje o raporcie są niedostępne', // report info is unavailable 

	edHeaderParameters: 'Ustaw parametry raportu', // Set report parameters
	edHeaderSettings: 'Ustaw parametry eksportu', // Set export settings
	edExportBtnText: 'Eksport', // Export
	edNextBtnText: 'Dalej', // Next
	edCancelBtnText: 'Anuluj', // Cancel
	edCancelBtnTitle: 'Anuluj eksport', // Cancel Export

	// Template Wizard
	tpTagName: 'Szablony', // Templates
	tpWizardTitle: 'Wybierz szablon', // Choose template
	tpWizardSearchPlaceholder: 'Wprowadź nazwę szablonu...', // Enter template name here...
	tpWizardHeaderCategories: 'Kategorie', // Categories
	tpWizardHeaderTemplates: 'Szablony', // Templates
	tpWizardHeaderDetails: 'Szczegóły', // Details
	tpWizardViewModeGallery: 'Galeria', // Gallery
	tpWizardViewModeList: 'Lista', // List
	tpCreateReport: 'Stwórz raport', // Create Report
	tpCancel: 'Anuluj', // Cancel
	tpSelectTemplateText: 'wybierz szablon, aby zobaczyć szczegóły', // select a template to see details 
	tpSelectCategoryText: 'wybierz kategorię, aby zobaczyć szablony', // select a category to see templates

	tpDetailsName: 'Nazwa szablonu', // Template Name
	tpDetailsDescription: 'Opis', // Description 
	tpDetailsCreated: 'Utworzony', // Created
	tpDetailsCreatedBy: 'Utworzony przez', // Created By
	tpDetailsModified: 'Zmodyfikowany', // Modified
	tpDetailsModifiedBy: 'Zmodyfikowany przez', // Modified By

	tpWizardBlankPage: 'Pusty raport', // Blank Page Report
	tpWizardBlankRDL: 'Pusty raport RDL', // Blank RDL Report

	sysTagNoCategory: 'Brak kategorii', // No Category 
	sysTagResources: 'Zasoby', // Resources
	sysTagFavorites: 'Ulubione', // Favorites
	sysTagImages: 'Obrazy', // Images
	sysTagThemes: 'Motywy', // Themes  
	pluginTemplates: 'Szablony', // Templates

	// Saga
	sagaQueueErrorTaskFailed: 'Zadanie nie powiodło się', // Task Failed
	sagaQueueErrorExecFailed: 'Nie można wykonać zadania', // Unable to execute task

	sagaQueueErrorNoWorkers: 'Brak dostępnych Usług Raportowych', // No workers available 
	sagaQueueErrorUnknown: 'Nieznany błąd', // Unknown Error 
	sagaTaskStatusExporting: 'Eksport {{doc}} do {{type}}', // Exporting {{doc}} to {{type}}
	sagaTaskStarting: 'Rozpoczynanie...', // Starting...

	sagaErrorExportFailed: 'Eksport nie powiódł się', // Export Failed
	sagaErrorExportFailedDetails: 'Nie można wykonać eksportu', // Unable to perform an export
	sagaErrorExportFailedParams: 'Nie można pobrać parametrów raportu', // Unable to get report parameters
	sagaErrorExportFailedParamValues: 'Nie można pobrać wartości parametru', // Unable to get parameter values

	sagaFail: 'Plugin raportowy: nieznany błąd', // Reporting Plugin: Unknown Error

	sagaQueueErrorCaption: 'Błąd kolejki', // Queue Error
	sagaQueueError1Content: 'Zadanie zostało anulowane', // Task has been cancelled
	sagaQueueError2Content: 'Przetwarzanie zadania nie powiodło się', // Task processing failed
	sagaQueueError3Content: 'Nieznany błąd wewnętrzny', // Unknown internal error
	sagaQueueError4Content: 'Nie znaleziono odpowiednich Usług Raportowych do wykonania zadania', // No suitable workers found to process the task 
	sagaQueueError5Content: 'Wymagany pełny bądź skrócony link', // Expected a task with an absolute or relative URL

	updateTemplateListError: 'Błąd podczas aktualizacji listy szablonów', // Error updating templates list

	// Document Types
	'report!name': 'Raport', // Report
	'report!description': 'Raport', // Report
	'template!name': 'Szablon', // Template
	'template!description': 'Szablon', // Template
	'masterReport!name': 'Master Report',
	'masterReport!description': 'Master Report',

	// Verbs
	'createReport!name': 'Stwórz raport', // Create Report
	'createReport!description': 'Stwórz raport', // Create Report

	'editReport!name': 'Edytuj...', // Edit...
	'editReport!description': 'Edytuj ten raport', // Edit this report

	'exportReport!name': 'Eksport...', // Export...
	'exportReport!description': 'Eksportuj ten raport', // Export this report

	'reportPreview!name': 'Przetwórz do HTML', // Render To HTML
	'reportPreview!description': 'Przetwórz do HTML, aby zobaczyć podgląd', // Render report to HTML for preview

	'templatePreview!name': 'Przetwórz do HTML', // Render To HTML
	'templatePreview!description': 'Przetwórz do HTML, aby zobaczyć podgląd', // Render report to HTML for preview

	'createReportWithTemplate!name': 'Użyj dla nowego raportu...', // Use for new report...
	'createReportWithTemplate!description': 'Stwórz nowy raport z szablonu', // Create a new report with template
	
	'copyAsTemplate!name': 'Jako szablon...', // As Template...
	'copyAsTemplate!description': 'Kopiuj raport jako szablon', // Copy report as template 
	copyDocumentSuffix: '-Szablon', // -Template

	'editTemplate!name': 'Edytuj Szablon...', // Edit Template...
	'editTemplate!description': 'Edytuj ten szablon', // Edit this template

	// Revision Verbs
	'previewRevision!name': 'Podgląd...', // Preview...
	'previewRevision!description': 'Podgląd poprawek tego raportu', // Preview this report revision

	'editRevision!name': 'Edytuj...', // Edit...
	'editRevision!description': 'Edytuj poprawki tego raportu', // Edit this report revision

	// Commands Dialog
	'commands!name': 'Polecenia',
	'commands!description': 'Polecenia',
	'commands!btnText': 'Edytuj',
	'commandsEditor': 'Polecenia',
	'commandsEditorCurrent': 'Obecne',
	'commandsEditorNoCategoriesText': 'brak przypisanych poleceń',
	'commandsEditorAvailableCategories': 'Dostępne',
	'commandsEditorNoAvailableCategories': 'brak dostępnych poleceń',
	'commands$navigation': 'Nawigacja',
	'commands$refresh': 'Odśwież',
	'commands$history': 'Historia',
	'commands$mousemode': 'Tryb Myszy',
	'commands$zoom': 'Powiększenie',
	'commands$fullscreen': 'Pełny ekran',
	'commands$print': 'Drukuj',
	'commands$singlepagemode': 'Widok pojedynczej strony',
	'commands$continuousmode': 'Widok ciągły',
	'commands$galleymode': 'Tryb szpalty',
	'commands$pdf': 'PDF',
	'commands$excel': 'Excel',
	'commands$docx': 'Word',
	'commands$image': 'Image',
	'commands$html': 'HTML',
	'commands$csv': 'CSV',
	'commands$json': 'JSON',
	'commands$txt': 'TXT',
	'commands$xml': 'XML',

	saveCommandsError: 'Błąd zapisywania poleceń',
	getCommandsError: 'Błąd pobierania poleceń',

	// Document Error Message
	documentNotDeleted: 'Dokument NIE został skasowany', // Document was NOT deleted 
	documentUsedByAnother: 'Dokument \"{{docName}}\" nie może zostać skasowany. Jest używany przez następujące dokumenty,\n{{refDocNames}}', // The document \"{{docName}}\" can not be deleted. It is used by the following documents,\n{{refDocNames}}
	renameDocumentError: 'Błąd zmiany nazwy', // Rename error
	duplicateDocumentError: 'Błąd duplikacji', // Duplicate Error
	err_AccessDenied: 'Dokument nie może zostać zduplikowany. Nie masz uprawnień, aby edytować niektóre dokumenty powiązane z tym dokumentem', // The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.
	previewDocumentError: 'Błąd podglądu', // Preview Error
	errorAccessDenied: 'Nie masz dostępu do niektórych dokumentów powiązanych z tym dokumentem', // You do not have permission to access some of the documents referenced in this document. 

	// Reporting Plugin Exceptions
	reportingPluginUnknown: 'Nieznany błąd podczas wykonywania zadania', // An unknown error occured during task execution
	reportingPluginLrt: 'Wystąpił wyjątek LRT we wtyczce raportującej', //An LRT exception occured in reporting plugin 
	reportingPluginBadResponse: 'Usługa Raportowa odpowiedziała z błędem', // Worker responded with error 
	reportingPluginStreaming: 'Wystąpił błąd podczas transmisji z Usługi Raportowej', // An error occured during streaming from worker 
	reportingPluginResponseVerification: 'Wystąpił błąd po transmisji wyników z Usługi Raportowej', // An error have been revealed after streaming result from worker

	// Worker Exceptions
	reportingWorkerExportInvalidParameters: 'Niewłaściwe parametry raportu', // Invalid report parameters
	reportingWorkerExportUnknownRenderingExt: 'Nieznane rozszerzenie przetwarzania {0}', // Unknown rendering extension {0}

	reportingWorkerTaskInitUnknown: 'Nieznany błąd podczas wykonywania zadania przez Usługę Raportową: {0}', // An unknown error occured during worker task execution: {0}
	reportingWorkerTaskInitFileNotFound: 'Plik {0} nie został znaleziony', // File {0} not found
	reportingWorkerTaskInitUnableToLoadFile: 'Nie można załadować pliku {0}', // Unable to load file {0}

	reportingWorkerFailCheckInvalidParameters: 'Niepoprawne parametry raportu', // Invalid report parameters 
	reportingWorkerFailCheckUnknown: 'Nieznany błąd podczas wykonywania zadania przez Usługę Raportową: {0}', // An unknown error occured during worker task execution: {0} 
	reportingWorkerFailCheckNoDataset: 'Nie wybrano zestawu danych', // Dataset not specified

	reportingWorkerRenderingDatasetNotFound: 'Wybrany zestaw danych nie został znaleziony, bądź jest niedstępny z powodu braku wystarczających uprawnień', // Specified dataset not found or inaccessible due to insufficient permissions  
	reportingWorkerRenderingDatasourceNotFound: 'Wybrane źródło dancyh nie zostało znalezione, bądź jest niedostępne z powodu braku wystarczających uprawnień', // Specified datasource not found or inaccessible due to insufficient permissions
	reportingWorkerRenderingUnknown: 'Nieznany błąd podczas wykonywania zadania przez Usługę Raportową: {0}', // An unknown error occured during worker task execution: {0} 

	reportingWorkerReportUnknown: 'Nieznany błąd podczas pobierania informacji o raporcie: {0}', // An unknown error occured when getting report info: {0}
	reportingWorkerReportCyclicParameterReferences: 'Wykryto cykliczne odwołania parametrów raportu', // Cyclic report parameter references detected

	// Document Section
	referencedDataDocuments: 'Dokument danych referencyjnych', // Referenced Data Document 
}
