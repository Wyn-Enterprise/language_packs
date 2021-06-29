export const portalEN: LanguageKeyValueMap = {
	// System Management
	'Export!title': 'Export',
	'Export!description': 'Export Documents',
	'Import!title': 'Import',
	'Import!description': 'Import Documents',
	'AuditLogsView!title': 'View Audit Logs',
	'AuditLogsView!description': 'View Audit Logs',
	'documents': 'documents',
	documentType: 'Type',
	selectFiles: 'Select File...',
	onlyShowSelected: 'Only Show Selected Documents',
	emptyDocTip: 'No document',
	emptySetTip: 'No system settings',
	emptyTemplateTip: 'No schedule templates',
	emptyFileTip: 'No uploaded file',
	emptyCustomThemeTip: 'No Custom Theme',
	exportSuccess: 'Export succeeded',
	exportFailed: 'An error occurred while exporting $t({{type}}!title) ({{name}})[{{id}}]',
	uploadingInfo: 'Uploading file {{file}}',
	uploadedInfo: 'file {{file}} uploaded successfully',
	importingSettingInfo: 'Importing System Settings...',
	uploadErrorTitle: 'Upload file failed',
	importErrorTitle: 'Import file failed',
	action: 'Action',
	ImportAdd: 'Added',
	ImportReplace: 'Replaced',
	ImportUpdate: 'Updated',
	ImportPluginNonExist: 'Ignored',
	ImportIgnore: 'Ignored',
	ImportUpgrade: 'Upgraded',
	ImportCancel: 'Cancel',
	ImportStatus: 'Status',
	ImportSuccess: 'Succeed',
	ImportFail: 'Failed',
	ErrorInfo: 'Error Info',
	ImportedInfo: '{{count1}} document(s) were/was successfully imported. {{count2}} document(s) were/was failed to be imported.',
	EstName: 'Template Name',
	EstExportType: 'Type',
	EstDescriptionTitle: 'Template Description',
	'importError!100001': 'The upload file is empty',
	'importError!100002': 'Manifest file cannot be found in the upload archive',
	'importError!100003': 'The upload file has broken',
	'importError!100004': 'The content of manifest file is invalid',
	'importError!100005': 'The manifest file has broken',
	'importError!100006': 'Attachment file cannot be found in the upload archive',
	'importError!100007': 'Invalid file type, Please upload a valid zip file',
	'importError!100008': 'This builtIn document cannot be found',
	'importError!100009': 'Unknown upload error: {{message}}',
	'importError!100010': 'SessionId cannot be found',
	'importError!100020': 'Session context cannot be found',
	'importError!100030': 'The import task is running',
	'importError!100040': 'Reference document import failed',
	'importError!100041': 'Failed to import circular reference document {{title}}, this document may be corrupted.',
	'importError!100050': 'The license for the corresponding document is not found',
	'importError!100060': 'The version({{newVersion}}) is lower than or equal to current({{existingVersion}}).',
	'importError!100061': 'Invalid version({{version}}).',
	'importError!100090': 'Unknown import error: {{message}}',

	'systemSetting!title': 'Item Name',
	'systemSetting!description': 'Value',
	'sys-conf-ui!title': 'UI Settings',
	'sys-conf-rs!title': 'WynReports Settings',
	'sys-conf-es!title': 'Email Settings',
	'sys-conf-wq!title': 'Worker queue settings',
	'sys-conf-ss!title': 'Schedule Settings',
	'sys-secprovider!title': 'Security Providers',
	'sys-cat!title': 'Categories',
	'sys-conf-ddt!title': 'Default Document Theme',
	'sys-role!title': 'Roles',
	'sys-secset!title': 'Security Settings',
	'exportSystemSettings': 'Export System Settings',

	'$$system-settings!title': 'System Settings',
	'$$documents!title': 'Documents',
	'sys-ctheme!title': 'Custom Themes',
	'sys-st!title': 'Schedule Templates',
	'sys-et!title': 'Export Templates',

	'0-title!title': 'Title',
	'0-theme!title': 'Theme',
	'0-displayEmptyTags!title': 'Display Empty System Categories',
	'0-allowCustomSchedule!title': 'Allow User to Create Custom Schedule',
	'0-loginPageSetting!title': 'Login Page Settings',
	'0-allowEditPersonalInformation!title': 'Allow User To Edit Personal Information',
	'0-systemIcon!title': 'System Icons',
	'0-WCAGCompatibility!title': 'WCAG Compatibility',
	'0-autoDismissNotifications!title': 'Auto Dismiss Notifications',
	'0-durationOfNotifications!title': 'Duration of Notifications(s)',
	'systemIcon!description': 'Include large logo and small logo and tab icon',
	'loginPageSetting!description': 'Include login logo images and login page images and other files and settings',

	'sys-conf-ui!name': 'ui setting',
	'sys-conf-rs!name': 'wynReports setting',
	'sys-conf-es!name': 'email setting',
	'sys-conf-wq!name': 'worker queue setting',
	'sys-conf-ss!name': 'schedule setting',
	'sys-secprovider!name': 'security provider',
	'sys-cat!name': 'category',
	'sys-conf-ddt!name': 'default document theme',
	'sys-role!name': 'role',
	'sys-secset!name': 'security setting',
	'sys-ctheme!name': 'custom theme',
	'sys-st!name': 'schedule template',
	'sys-et!name': 'export template',

	'importError!300001': 'Cannot find the corresponding plugin',
	'importError!300002': 'Cannot find the corresponding setting group',
	'importError!200001': 'An unknown error occurred while importing system settings: {{message}}',
	'importError!200002': 'The $t({{type}}!name) is invalid',
	'importError!200003': 'The $t({{type}}!name) already exists',
	'sys-conf-ddt!1': 'No related themes found',
	'sys-conf-ddt!2': 'The default document theme is empty',
	'sys-role!1': 'Access to role API response an error: {{message}}',
	'sys-secprovider!1': 'securityProviders.config cannot be found in the upload archive',
	'sys-secprovider!2': 'Access to security provider API response an error: {{message}}',
	'sys-secprovider!3': 'Cannot find the specified portal directory: {{path}}',
	'sys-conf-ui!1': 'login images cannot be found in the upload archive',
	'importError!100011': 'An attachment with the same name exists in zip archive',
	'sys-ctheme!1': 'The custom theme manifest file cannot be found',
	'sys-ctheme!2': 'The snapshot image cannot be found',
	'sys-ctheme!3': 'The custom theme variables cannot be found',
	'sys-ctheme!4': 'The css file {{file}} is empty',
	'sys-ctheme!5': '$t(ctError!100012)',
	'sys-st!1': 'The export template used by the schedule template cannot be found',
	'sys-et!1': 'Access to export template API response an error: {{message}}',
	'ctVersion': 'Version',
	refreshToApplyTheme: '(notice: Refresh page to apply the theme)',
	refreshToApplyIcon: '(notice: Refresh page to apply the icons)',

	// #region auditLogScenarios
	naNotTurnOnAuditLogs: 'Auditing is not turned on. Please turn on auditing to see logs on this page',
	naServerIsUnavailable: 'Server is unavailable.',
	naFetchAuditLogsFailed: 'Fetch audit logs failed.',

	auditLogRefresh: 'Refresh',

	auditLogFilterActionType: 'Event Type',
	auditLogFilterDocumentType: 'Object Type',
	auditLogFilterTimeRange: 'Time Range',
	auditLogFilterTimeFrom: 'From',
	auditLogFilterTimeTo: 'To',

	auditLogTimeRangeLastDay: 'Last Day',
	auditLogTimeRangeLastWeek: 'Last Week',
	auditLogTimeRangeCustomize: 'Customize',

	auditLog_ViewMode_table: 'Report',
	auditLog_ViewMode_dashboard: 'Dashboard',

	auditLog_RequestDevice_Desktop: 'Desktop',
	auditLog_RequestDevice_Mobile: 'Mobile',

	auditLog_ActionType_All: 'All',
	auditLog_ActionType_Create: 'Create',
	auditLog_ActionType_Update: 'Update',
	auditLog_ActionType_Delete: 'Delete',
	auditLog_ActionType_Rename: 'Rename',
	auditLog_ActionType_ChangeThumbnail: 'Change Thumbnail',
	auditLog_ActionType_Refresh: 'Refresh',
	auditLog_ActionType_Cleanup: 'Cleanup',
	auditLog_ActionType_Preview: 'Preview',
	auditLog_ActionType_Copy: 'Copy',
	auditLog_ActionType_Download: 'Download Document',
	auditLog_ActionType_Upload: 'Upload Document',
	auditLog_ActionType_DocumentExport: 'Export Document',
	auditLog_ActionType_DocumentImport: 'Import Document',
	auditLog_ActionType_Export: 'Export Report',
	auditLog_ActionType_CreateTask: 'Create Task',
	auditLog_ActionType_UpdateTask: 'Update Task',
	auditLog_ActionType_DeleteTask: 'Delete Task',
	auditLog_ActionType_RunTask: 'Run Task',
	auditLog_ActionType_ChangePermission: 'Change Permission',
	auditLog_ActionType_SystemSettingsImport: 'Import System Settings',
	auditLog_ActionType_SystemSettingsExport: 'Export System Settings',

	auditLog_DocumentType_All: 'All',
	auditLog_DocumentType_Datasource: 'Data source',
	auditLog_DocumentType_SemanticModel: 'Semantic Model',
	auditLog_DocumentType_DataModel: 'Data Model',
	auditLog_DocumentType_Dataset: 'Dataset',
	auditLog_DocumentType_Theme: 'Theme',
	auditLog_DocumentType_Jpeg: 'Jpeg',
	auditLog_DocumentType_Bmp: 'Bmp',
	auditLog_DocumentType_Gif: 'Gif',
	auditLog_DocumentType_Png: 'Png',
	auditLog_DocumentType_Svg: 'Svg',
	auditLog_DocumentType_TTF: 'TTF',
	auditLog_DocumentType_OTF: 'OTF',
	auditLog_DocumentType_WOFF: 'WOFF',
	auditLog_DocumentType_WOFF2: 'WOFF2',
	auditLog_DocumentType_EOT: 'EOT',
	auditLog_DocumentType_WEBFONT: 'WEBFONT',
	auditLog_DocumentType_MapData: 'Map Data',
	auditLog_DocumentType_Dashboard: 'Dashboard',
	auditLog_DocumentType_Report: 'Report',
	auditLog_DocumentType_ReportTemplate: 'Report Template',
	auditLog_DocumentType_MasterReport: 'Master Report',
	auditLog_DocumentType_FloorPlan: 'Floor Plan',
	auditLog_DocumentType_WebPage: 'Web Page',
	auditLog_DocumentType_CustomVisualization: 'Visualization',
	'auditLog_DocumentType_sys-conf-ui': 'UI Settings',
	'auditLog_DocumentType_sys-conf-rs': 'WynReports Settings',
	'auditLog_DocumentType_sys-conf-es': 'Email Settings',
	'auditLog_DocumentType_sys-conf-wq': 'Worker Queue Settings',
	'auditLog_DocumentType_sys-conf-ss': 'Schedule Settings',
	'auditLog_DocumentType_sys-secprovider': 'Security Providers',
	'auditLog_DocumentType_sys-cat': 'Categories',
	'auditLog_DocumentType_sys-conf-ddt': 'Default Document Theme',
	'auditLog_DocumentType_sys-role': 'Roles',
	'auditLog_DocumentType_sys-secset': 'Security Settings',
	'auditLog_DocumentType_sys-st': 'Schedule Templates',
	'auditLog_DocumentType_sys-ctheme': 'Custom Theme',
	'auditLog_DocumentType_sys-et': 'Export Templates',
	'auditLog_DocumentType_wbp': 'Web Page',
	auditLog_DocumentType_ipf: 'Input Form',

	auditLog_DbField_UserName: 'User',
	auditLog_DbField_Email: 'Email',
	auditLog_DbField_UTCTime: 'Date Time',
	auditLog_DbField_UserContext: 'UserContext',
	auditLog_DbField_Info_ActionType: 'Event Type',
	auditLog_DbField_Info_DocumentName: 'Object Name',
	auditLog_DbField_Info_DocumentType: 'Object Type',
	auditLog_DbField_Info_DocumentVersion: 'Document Version',
	auditLog_DbField_Info_SemanticModelName: 'Referenced Semantic Model Name',
	auditLog_DbField_Info_SemanticModelVersion: 'Referenced Semantic Model Version',
	auditLog_DbField_Info_Parameters: 'Parameters',
	auditLog_DbField_Info_RequestDevice: 'Request Device',
	auditLog_DbField_Info_RequestSource: 'Request Source',
	auditLog_DbField_Info_ServerIP: 'Server IP',
	auditLog_DbField_Info_ClientIP: 'Client IP',
	auditLog_DbField_Info_DatasetQuery: 'Dataset Query',
	auditLog_DbField_Info_Link: 'Link',
	auditLog_DbField_Info_ResultURL: 'Result URL',
	auditLog_DbField_Info_Description: 'Description',

	auditLog_Table_Details_Title: 'Detail Information',
	auditLog_Table_Details_Empty: '[Empty]',
	auditLog_Table_ToolTip_Details: 'More',
	auditLog_Table_ToolTip_PreviousPage: 'Previous Page',
	auditLog_Table_ToolTip_NextPage: 'Next Page',

	auditLogScenarioTitle1: 'Active User Count',
	auditLogScenarioTitle2: 'Most Frequently Users Top 10',
	auditLogScenarioTitle3: 'Operating Platform',
	auditLogScenarioTitle4: 'Document Type Proportion',
	auditLogScenarioTitle5: 'Most Frequently Documents Top 10',
	auditLogScenarioTitle6: 'Document Actions Type',
	auditLogScenarioTitle7: 'Documents Actions On Time',
	auditLogScenarioNoData: 'No Data Found',
	requestDevice_Desktop: 'Desktop',
	requestDevice_Mobile: 'Mobile',

	Date_Month_Jan: 'Jan',
	Date_Month_Feb: 'Feb',
	Date_Month_Mar: 'Mar',
	Date_Month_Apr: 'Apr',
	Date_Month_May: 'May',
	Date_Month_Jun: 'Jun',
	Date_Month_Jul: 'Jul',
	Date_Month_Aug: 'Aug',
	Date_Month_Sep: 'Sep',
	Date_Month_Oct: 'Oct',
	Date_Month_Nov: 'Nov',
	Date_Month_Dec: 'Dec',
	auditLogOther: 'Other',
	// #endregion

	// custom Theme
	'CustomTheme!title': 'Custom Theme',
	'CustomTheme!description': 'Custom Theme Management',
	selectTheme: 'Upload',
	themeInfo: '{{file}} has uploaded',
	source: 'Source',
	displayName: 'Name',
	'displayName!tips': 'The custom theme name cannot start with a number, and must not contain the following special characters: :/?#[]@!$&\'()*+,;=',
	submit: 'Submit',
	submitErrorTitle: 'Submit theme failed',
	ctTitle: 'Name',
	ctCreatedTime: 'Created Time',
	ctAction: 'Action',
	ctDelete: 'Delete',
	ctThemeList: 'Themes',
	ctDeleteTheme: 'Delete Theme',
	ctDeleteThemeConfirmMessage: "Do you want to delete theme '{{title}}'?",
	'ctDelete!btn': 'Delete',
	Cancel: 'Cancel',
	deleteErrorTitle: 'Delete theme failed',
	'ctError!100001': 'Theme id is empty',
	'ctError!100002': 'The theme {{themeId}} cannot be found',
	'ctError!100003': 'Unknown server error: {{message}}',
	'ctError!100004': 'Upload content is empty',
	'ctError!100005': 'The manifest file in archive cannot be found',
	'ctError!100006': 'The theme name is empty',
	'ctError!100007': 'SessionId cannot be found',
	'ctError!100008': 'Session context cannot be found',
	'ctError!100009': 'The theme name {{displayName}} is duplicated',
	'ctError!100010': 'The theme archive has been submitted',
	'ctError!100011': 'The theme {{displayName}} has been applied in $t(portal!title), cannot be deleted',
	'ctError!100012': 'The theme language edition does not match the system',
	submitSuccess: 'Custom theme submitted successfully',
	themeDetail: 'Theme Details',
	Close: 'Close',
	themeBasicInfo: 'BASIC INFORMATION',
	themeVariables: 'COLOR VARIABLES',
	accent1: 'Accent1',
	accent2: 'Accent2',
	content_bg: 'Content BG',
	panels_bg: 'Panels BG',
	content_text: 'Content Text',
	text_contrast: 'Text Contrast',
	nav_bg: 'Nav BG',
	nav_text: 'Nav Text',
	portal_header_bg: 'Portal Header BG',
	portal_header_text: 'Portal Header Text',
	toolbar_bg: 'Toolbar BG',
	toolbar_text: 'Toolbar Text',
	ctStyle: 'Style',
	darkTheme: 'Dark Theme',
	lightTheme: 'Light Theme',
	outOfDate: 'The theme is out of date',
	updateOutOfDate: 'Update out of date',
	updateIfExist: 'Update if it exists',
	nonUpdateIfExist: 'Add only',
	ctUpdating: 'Updating theme',
	ctUpdateSuccess: 'Update succeed',
	ctUpdateFail: 'Update failed',
	ctDownload: 'Download config file',

	// Tooltip
	createBuiltInDocumentTooltipText: 'Audit log is enabled. Click the Create option to generate built in Audit log datasource and datasets',
	createBuiltInDocumentTooltipButton: 'Create ...',

	// schedule task
	'scheduleTaskManager!title': 'Tasks Management',
	'scheduleTaskManager!description': 'Tasks Management',

	taskDocName: 'Document Name',
	taskDetail: 'Task Name',
	taskType: 'Task Type',
	taskStatus: 'Task Status',
	executeType: 'Execute Type',
	taskStartTime: 'Task Start Time',
	taskExecutionManual: 'Manual',
	taskExecutionOneTime: 'One-Time',
	taskExecutionScheduled: 'Scheduled',
	taskTypeDataSourceExtract: 'DataSource Extract',
	taskTypeDatasetRefresh: 'Dataset Refresh',
	taskTypeDatasetCleanup: 'Dataset Cleanup',
	taskTypeRptExport: 'Report Export',
	taskTypeDashboardExport: 'Dashboard Export',
	taskEnableStatus: 'Enable',
	taskDisableStatus: 'Disable',
	taskEnabledStatus: 'Enabled',
	taskDisabledStatus: 'Disabled',
	taskDelete: 'Delete',
	taskToolbarFilter: 'Filter',
	taskShowCheckBox: 'Show Checkboxes',
	taskHideCheckBox: 'Hide Checkboxes',
	taskUpdateError: 'Update Task Status Failed',
	taskRemoveError: 'Delete Task Failed',
	taskExpired: 'Expired Task',
	taskButtonIsNotAvailable: 'No selected tasks or the selected tasks contain expired task.',
	taskDeletePromptDialogAllTitle: 'Delete Tasks',
	taskDeletePromptDialogAllContent: 'Do you want delete all of the selected tasks?',
	taskDeletePromptDialogOneTitle: 'Delete Task',
	taskDeletePromptDialogOneContent: 'Do you want delete the current task?',
	tasksNotFound: 'No task found',

	err_30025: 'Failed to update task in DB storage and execution persistence: provided task is outdated.',
	err_30026: 'Failed to remove task "{{taskId}}", error detail:{{innerMessage}}.',

	// Schedule Template Document Type
	datasource: 'Data Source',
	dataset: 'Dataset',
	dashboard: 'Dashboard',
	report: 'Report',
};