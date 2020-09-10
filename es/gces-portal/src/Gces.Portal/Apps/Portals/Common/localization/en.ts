export const portalEN: LanguageKeyValueMap = {

	// Common
	fetchDataFailed: 'Fetch data failed',
	GettingReady: 'Getting Ready',
	Close: 'Close',
	Logo: 'Logo',
	Avatar: 'Avatar',
	EmptyPage: 'Empty Page',
	SearchCategory: 'Select category',
	cmEmptyResult: 'empty result',

	// Nav App
	naDocumentPortal: 'Document Portal',
	naResourcePortal: 'Resource Portal',
	naAdminPortal: 'Admin Portal',
	naLogout: 'Logout',
	naFavorites: 'Favorites',
	naCreateDoc: 'Create',
	naCategories: 'Categories',
	naCategorySettingsTitle: 'Manage personal Categories',
	naUpload: 'Upload',
	naOrganization: 'Switch Organization',
	naOk: 'OK',
	naCancel: 'Cancel',
	// Nav Toolbar
	switchPortal: 'Switch Portal',
	globalOrgName: 'Global',
	switchOrganization: 'Switch Organization',

	// Document List
	dlName: 'Name',
	dlType: 'Type',
	dlUpdateBy: 'Updated By',
	dlUpdated: 'Updated',
	dlDelete: 'Delete',
	dlNoDocumentTip: 'no results',
	dlPreview: 'Preview',
	dlOpenInNewWindow: 'View {{type}} in new window',
	dlDownload: 'Download',
	dlDatasetType: 'Dataset Type',
	dlDashboardDataset: 'For Dashboard',
	dlReportDataset: 'For Report',
	dlDataProvider: 'Data Provider',
	dlDataSource: 'Data Source',
	dlDocRef: 'Referenced Data Document',

	// Document Row Actions
	docSetAsHome: 'Set as Home',
	docSetAsHomeDescription: 'This document will be opened by default',
	docRename: 'Rename',
	docRenameDescription: 'Rename document',
	docDownload: 'Download',
	docDownloadDescription: 'Download document',
	docSetCategory: 'Categories...',
	docSetCategoryDescription: 'Edit document categories',
	docSetDelete: 'Delete',
	docSetDeleteDescription: 'Delete this document',
	docBatchDeleteDescription: 'Delete selected documents',
	docsBatchTagDescription: 'Edit document categories',
	docsBatchPermissionDescription: 'Edit document permissions',
	docEdit: 'Edit...',
	docEditTitle: 'Edit this document',
	docAddToFavorites: 'Add to Favorites',
	docRemoveFromFavorites: 'Remove from Favorites',
	docFilterByDocumentType: 'Filter by document type',
	docItemCopyURL: 'Copy URL',
	docItemCopyURLDescription: 'Copy document URL',
	docCreateDocument: 'Create',

	// Delete Confirm Dialog
	dcdTitle: 'Delete Document',
	dcdMessage: 'Delete document "{{name}}" forever?',
	dcdDeleteSelectedDocumentMessage: 'Delete selected documents forever?',
	dcdDeleteDocumentError: 'Error deleting document',
	dcdOK: 'OK',
	dcdCancel: 'Cancel',
	dcdClose: 'Close',

	// Notifications
	ntfDismiss: 'Dismiss',
	ntfDismissAll: 'Dismiss All',
	ntfShowDetails: 'Show Details',
	ntfShowAll: 'Show All',
	ntfCancelTask: 'Cancel this task',

	// Document Error Message
	documentNotDeleted: 'Document was NOT deleted',
	documentUsedByAnother: 'The document \"{{docName}}\" can not be deleted. It is used by the following documents:\n{{refDocNames}}',
	renameDocumentError: 'Rename error',
	updateDocumentDescriptionError: 'Update document description error',
	updateDocHideOnMobileError: 'Update document show on mobile error',
	err_NoPermissionRename: 'The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.',
	duplicateDocumentError: 'Duplicate Error',
	err_AccessDenied: 'The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.',
	previewDocumentError: 'Preview Error',
	errorAccessDenied: 'You do not have permission to access some of the documents referenced in this document.',
	updateDocumentHideInDocumentPortalError: 'Show document on portal failed.',
	insufficientReferenceDocNames: '\nInsufficient permission documents: ',

	// Permissions
	psPermissions: 'Permissions',
	psShare: 'Share',
	psNoSharing: 'no sharing',
	'psExecute!name': 'Execute',
	'psRead!name': 'Read',
	'psReadWrite!name': 'Read / Write',
	psCancel: 'Cancel',
	psSave: 'Save',
	psNoRolesTip: 'no results',
	psPermissionInfo: 'Permission Information',
	psApplyMinNeededPermission: 'Apply Minimum Needed Permission',
	psApplyMinNeededPermissionTip: 'You will grant the \"Execute\" permission to the referenced documents.',
	psInsufficientPermission: 'The checked role/organization does not have sufficient permissions on the referenced documents to perform the action. You can apply minimum needed permission to make sure users can preview this document normally.',
	psReferencedDocuments: 'Referenced documents:',
	expandAll: 'Expand All',
	collapseAll: 'Collapse All',
	roleNameEveryone: 'Everyone',
	// Doc Info Tab
	docInfoProps: 'Properties',
	docInfoName: 'Name',
	docInfoDescription: 'Description',
	docInfoUpdated: 'Updated',
	docInfoUpdatedBy: 'Updated By',
	docInfoCreated: 'Created',
	docInfoCreatedBy: 'Created By',
	docInfoCategories: 'Categories',
	docInfoPermissions: 'Permissions',
	docInfoRead: 'Read',
	docInfoWrite: 'Write',
	docInfoEdit: 'Edit',
	hideInDocumentPortalHideStateLabel: 'Hide In Document Portal',
	hideInDocumentPortalTrueLabel: 'True',
	hideInDocumentPortalFalseLabel: 'False',

	// Document Types
	'rdl!name': 'Report',
	'rdl!description': 'Report',
	'rdlx!name': 'Report',
	'rdlx!description': 'Report',
	'rdlx-template!name': 'Report template',
	'rdlx-template!description': 'Report template',
	'theme!name': 'Theme',
	'theme!description': 'Theme',
	'dbd!name': 'Dashboard',
	'dbd!description': 'Dashboard',
	'dsc!name': 'Data Source',
	'dsc!description': 'Data Source',
	'dataset!name': 'Dataset',
	'dataset!description': 'Dataset',

	'image!name': 'Image',
	'image/bmp!name': 'BMP Image',
	'image/bmp!description': 'A bitmap image',
	'image/jpeg!name': 'JPEG Image',
	'image/jpeg!description': 'A JPEG image',
	'image/gif!name': 'GIF Image',
	'image/gif!description': 'A GIF image',
	'image/png!name': 'PNG Image',
	'image/png!description': 'A PNG image',

	'dataset-fieldsInfo!name': 'Fields',
	'dataset-fieldsInfo!description': 'Fields of dataset',

	// Preview
	pvPreviewIsUnavailable: 'Preview is unavailable :(',
	pvReload: 'Reload',
	pvTitle: 'Document preview',

	// License Notification
	messageGracePeriod: "Note: This server's license has expired on {{alertDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com. The server will stop working on {{expireDate}}.",
	messageTrial: 'Note: You are running an evaluation version. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license.',
	messageTrialWillExpire: 'Note: You are running an evaluation version. Your evaluation is due to expire in {{remainDays}} days. Please contact GrapeCity Sales at US.Sales@grapecity.com to activate a full license and prevent loss of functionality.',
	messageTrialExpired: 'Note: Your evaluation has expired on {{expireDate}}. Please contact GrapeCity Sales at US.Sales@grapecity.com to purchase a full license.',
	messageKeyExpired: "Note: This server's license has expired on {{expireDate}}. Please renew immediately by contacting GrapeCity Sales at US.Sales@grapecity.com.",
	messageKeyVersionNotMatched: 'Note: License is not valid for this version of Wyn.',

	// Toolbar
	showCheckbox: 'Show Check Box',
	hideCheckbox: 'Hide Check Box',
	search: 'Search',

	// System Configurations
	'systemConfigsEditor!title': 'System Configurations',
	'systemConfigsEditor!description': 'Manage system configurations',
	SaveModifications: 'Save Modification',
	SaveChangesAndRestartServices: 'Save these modifications and restart the service?',
	'sysconfig-embedded-identity!name': 'Use Embedded Identity',
	'sysconfig-embedded-identity!description': 'Select to use the identity service embedded in Wyn, the default value is true.',
	'sysconfig-identity-url!name': 'Identity Server URL',
	'sysconfig-identity-url!description': "The url of identity server, it's the same as portal's url if you use the embedded identity service.",
	'sysconfig-allowed-urls!name': 'Authorized Web Application URLs (one URL per line)',
	'sysconfig-allowed-urls!description': 'The authorized web application urls for identity server.',
	'sysconfig-allowed-cors-origins!name': 'Allowed CORS Origins (one URL per line)',
	'sysconfig-allowed-cors-origins!description': 'The allowed origins for CORS policy.',
	'sysconfig-exposed-headers!name': 'Exposed Headers (one Header per line)',
	'sysconfig-exposed-headers!description': 'The exposed headers for CORS policy.',
	EmptyConfigName: 'The system configuration name can not be empty.',
	GetConfigFailed: "Failed to get the value of system configuration item '{{name}}'.",
	SetConfigFailed: "Failed to set the value of system configuration item '{{name}}'.",
	SaveConfigFailed: 'Failed to save the system configurations.',
	GetConfigsFailed: 'Failed to get the system configurations.',
	SetConfigsFailed: 'Failed to set the system configurations.',
	FailedRestartAllServices: 'Failed to restart the services.',

	// Comment
	'rename!comment': 'Document name is changed from {{originName}} to {{newName}}',
	'duplicate!comment': 'Document is duplicated from version {{version}} of {{originName}}',
	'revert!comment': 'Reverted to version No.{{revision}} by {{friendlyName}}',
	'upload!comment': 'Uploaded by {{friendlyName}}',
	'replace!comment': 'Replaced by {{friendlyName}}',

	// Server Error Code
	'documentType!dataset': 'Datasets',
	'documentType!rdl': 'Reports',
	'documentType!rdlx-template': 'Templates',
	'documentType!dbd': 'Dashboards',

	err_20001: '{{parameter}} is a required parameter.',
	err_20002: 'Document "{{newName}}" already exists.',
	err_20003: 'The document can not be duplicated, you do not have permission to edit some of the documents referenced in this document.',
	err_20004: 'Document not found.',
	err_20005: 'The number of {{pluginKey}} documents has reached the limit,you can not duplicate new document.',
	err_20006: 'Document "{{documentProperty}}" is not found.',
	err_20007: 'The document "{{documentTitle}}" has unknown/unregistered type "{{documentType}}".',
	err_20008: 'The document \"{{documentTitle}}\" can not be deleted. It is used by the following documents:\n{{documentRefNames}}',
	err_20009: 'The document cannot be renamed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.',
	err_20010: 'The default document theme "{{documentTitle}}" can not be deleted.',
	err_20011: 'Document with title "{{documentTitle}}" is denied.',
	err_20012: 'The built-in document "{{documentTitle}}" can not be deleted.',
	err_20013: 'Update document description failed. You do not have sufficient permissions on this document to perform the action. Please contact your administrator in case you feel this is incorrect.',
	err_20014: 'Invalid document name. Document name can not be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.',
	err_20020: 'FromTagId cannot same as toTagId.',
	err_20021: 'ToTagId cannot be null when updateParent is false.',
	err_20025: 'Cannot delete the document "{{documentTitle}}": {{internalErrorMessage}}.',
	err_20026: 'The document can not be duplicated, you do not have permission to edit referenced documents. It is referenced the following documents:\n{{noPermissionDocRefNames}}',
	err_20027: 'Document not found, please refresh the document list.',
	err_20028: 'Tag not found.',
	err_20029: 'Can not use system reserved tag name "{{name}}".',

	err_20101: 'Add role "{{roleName}}" failed.',
	err_20102: 'Delete role "{{roleName}}" failed.',

	err_20201: 'User is not properly registered in the system.',
	err_20202: 'Document with id "{{documentId}}" not found (or you do not have read permissions).',

	err_20301: 'You do not have sufficient permissions to do this operation.',

	// Uploade Error Code
	uploadErr_10001: 'File State is not uploaded.',
	uploadErr_10002: 'No plugins found to validate resource.',
	uploadErr_10003: 'Plugin {{pluginName}} have thrown an exception when validating file: {{exceptionMessage}}.',
	uploadErr_10004: 'Thrown an exception when validating file reference : {{exceptionMessage}}.',
	uploadErr_10005: 'Insufficient permissions to upload {{documentType}}. If you believe this is incorrect, please contact your administrator.',
	uploadErr_10006: 'Validate failure. {{exceptionMessage}}',
	uploadErr_10007: 'Impossible execution path.',
	uploadErr_10008: 'The number of licensed documents in the system has reached limit.',
	uploadErr_10009: 'Cannot resolve referenced $t({{documentType}}) resource with name "{{DocumentName}}".',
	documentType_rdl: 'report',
	documentType_dbd: 'dashboard',
	documentType_dsc: 'data source',
	documentType_dataset: 'dataset',
	documentType_smdsc: 'semantic model',
	documentType_theme: 'theme',
	'documentType_image/jpeg': 'image',
	'documentType_image/bmp': 'image',
	'documentType_image/gif': 'image',
	'documentType_image/png': 'image',
	uploadErr_10010: 'Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet uploaded.',
	uploadErr_10011: 'Referenced resource {{resourceName}} with id <{{DocumentId}}> is not yet validated.',
	uploadErr_10012: 'Referenced resource {{resourceName}} with id <{{DocumentId}}> is Invalid.',
	uploadErr_10013: 'Referenced resource {{resourceName}} has unresolved references.',
	uploadErr_10014: 'Cyclic dependency with file {{anotherFileName}}.',
	uploadErr_10015: 'In cycle with invalid file {{badFileName}}.',

	// Upload Other
	uploadFailed: 'We couldn\'t upload file after a few attempts. Sorry',
	uploadTextUnknownFileType: 'Unknown File Type',
	uploadTextUnsupportedFileType: 'Unsupported file type or no permissions to upload such file.',
	uploadTextFileNameExceedHundredCharacters: 'File name cannot exceed 100 characters.',

	// welcome screen
	blogs: 'Blogs',
	documentation: 'Documentation',
	tutorialVideos: 'Videos',
	notShowOnNextStartup: 'Do not show on next startup',
	gettingStarted: 'Getting Started',
	workingWidthData: 'Working with Data',
	createReport: 'Create Report',
	createDashboard: 'Create Dashboard',
	sourceNotFound: 'Source not found...',
	wizardTitle: 'Welcome to Wyn Enterprise',
	wizardDescription: 'The following videos will help you get started.',
	updateShowWelcomeSuccess: 'Update Settings Success',
	updateShowWelcomeFail: 'Update Settings Error',

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
	'create-floorPlan!title': 'Create Floor Plan',
	'edit-floorPlan!title': 'Edit Floor Plan',
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