
export const datasetES = {

	// common
	Save: 'Save',
	SaveAndCreateAnother: 'Save And Create Another',
	OK: 'OK',
	Cancel: 'Cancel',
	Close: 'Close',
	Edit: 'Edit',
	Dataset: 'Dataset',
	Delete: 'Delete',
	Add: 'Add',
	Up: 'Move Up',
	Down: 'Move Down',
	Expand: 'Expand',
	Collapse: 'Collapse',
	PleaseInputName: 'Please input dataset name.',
	DatasetNameError: 'The dataset name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the dataset name.',
	DatasetNameOnlySpacesError: 'The dataset name is invalid. Please do not use spaces only as dataset name.',
	DatasourceNameError: 'The datasource name is invalid. Please do not use restricted symbols < > \ : ? * / | " and do not use . (dot) as the first symbol in the datasource name.',
	NewDataset: 'New Dataset',
	TableName: 'Table Name',
	DatasetDesigner: 'Dataset Designer',
	Untitled: 'Untitled',
	Categories: 'Categories',
	Comment: 'Comment',
	Yes: 'Yes',
	No: 'No',
	MessageBox: 'Message',
	RefreshDataSet: 'Refresh Dataset',
	Refreshing: 'Refreshing',
	RefreshComplete: 'Refresh Complete',
	NoNeedRefresh: 'No need to refresh this dataset.',
	RefreshDatasetFailed: 'Refresh dataset failed',
	DocumentInOperation: 'This document is being updated by another operation. Please try later.',
	GetDataSourceSchemaFailed: 'Get data source schema failed, Please check if you can access the datasource server.',
	ColumnCanNotFound: 'Column({{column}}) can not found.',
	'ColumnCanNotFound!description': 'Column({{column}}) in Data Source ({{datasource}}) can not found, please modify the dataset and save again.',
	TableCanNotFound: 'Table({{table}}) can not found.',
	cgridMore: 'More',
	tooManyFieldsWarning: 'Selecting more than 30 output fields may affect calculation performance. Currently {{count}} fields are selected for output.',
	datasourceUnknown: 'Deleted',
	Parameters: 'Parameters',
	Validating: 'Validating...',

	// designer mode modal
	SelectCreateMode: 'Please select create dataset mode',
	VisualDesigner: 'Visual Designer',
	SQLDesigner: 'SQL Designer',
	Confirmation: 'Confirmation',
	CloseDatasetDesignerConfirm: 'Do you want to leave dataset designer and discard the changes?',
	ChangeUseCacheConfirm: 'In dashboard dataset, the followings that are not supported will be discarded, Are you sure to switch?',
	DeleteFieldConfirm: 'Do you want to delete this {{fieldType}} Field({{fieldName}})?',
	DeleteAllInvalidField: 'Clear all the invalid fields',
	DeleteAllInvalidFieldsConfirm: 'Do you want to clear all the invalid fields?',
	IncrementalUpdateSettingLostConfirm: 'Do you want to remove the incremental update setting?',
	BinaryToImageConfirm: 'Only support the image data, continue?',
	CreateDataSetIframeTitle: 'Create DataSet',
	EditDataSetIframeTitle: 'Edit DataSet',
	CreateDataSourceIframeTitle: 'Create DataSource',
	EditDataSourceIframeTitle: 'Edit DataSource',

	// choose dataset type
	ChooseDatasetTypeTitle: 'Please select dataset type',
	ChooseReportDataset: 'For Report',
	ChooseDashboardDataset: 'For Dashboard',
	IntroduceReport: 'The dataset for report will be calculated every time when it is consumed.',
	IntroduceDashboard: 'The dataset for dashboard will be calculated and cached when it is saved.',

	// data type
	Number: 'Number',
	Integer: 'Integer',
	Float: 'Float',
	String: 'String',
	DateTime: 'DateTime',
	Date: 'Date',
	Boolean: 'Boolean',
	Guid: 'Guid',
	Binary: 'Binary',
	Unknown: 'Unsupported',

	// tabs
	Relationships: 'Relationships',
	Fields: 'Fields',
	Filters: 'Filters',
	CommonFilters: 'Filters',
	WebURIFilters: 'Web URI Filters',
	// Parameters: 'Parameters',
	Options: 'Options',
	Field: 'Field',
	DataType: 'Data Type',
	Multivalue: 'Multivalue',

	// relationships tab
	DataSource: 'Data Source',
	DataSources: 'Data Sources',
	CreateDatasetTip: 'Click "Data Source" to add data source',
	AddCustomSqlTable: 'Add Custom SQL Table',
	Preview: 'Preview',
	AddNewDataSource: 'Add New Data Source',
	SearchForDataSource: 'Search for Data Source',
	Schema: 'Schema',
	Table: 'Table',
	View: 'View',
	CustomSqlTables: 'Custom Sql Collection',
	CustomSqlTable: 'Custom Sql Table',
	PreviewData: 'Preview Data',
	ThisTableHasBeenUsed: 'This table has been used.',
	NoDatasource: 'Please add datasource',
	DropTablesHere: 'Drop Tables Here',
	Join: 'Join',
	Union: 'Union',
	Replace: 'Replace',
	Operator: 'Operator',
	InnerJoin: 'Inner Join',
	LeftJoin: 'Left Join',
	RightJoin: 'Right Join',
	FullJoin: 'Full Join',
	UnionAll: 'Union All',
	AddCustomSQLTable: 'Add Custom SQL Table',
	UnionTip: 'Drop here to union',
	OutputFieldName: 'Output Field Name',
	NameCanNotBeEmpty: 'Name can not be empty.',
	NameAlreadyExist: 'Name {{name}} already exist.',
	CanNotRemove: '{{datasource}} is being used and cannot be removed at the moment.',
	ConfirmRemoveDataSource: '{{datasource}} is being used in the dataset, are you sure to remove?',
	CustomTableCanNotRemove: '{{datasource}} is being used in the dataset and cannot be removed at the moment.',
	CustomTableCanNotEdit: '{{datasource}} is being used in the dataset and cannot be modified at the moment.',
	ConfirmEditCustomTable: '{{datasource}} is being used in the dataset, are you sure to edit?',
	AddJoinCondition: 'Add Join Condition',
	AddUnionCondition: 'Add Union Condition',
	CustomTables: 'Custom Tables',
	FetchDataFailed: 'Fetch data failed',
	NoTableMatchedTip: 'There is no table match the search.',
	SearchForTables: 'Search for tables',
	Procedure: 'Stored procedure',
	TableHasBeenUsed: 'Set table alias',
	TableHasBeenUsedTip: 'Table has been used, please set table alias',
	PleaseEnterAlias: 'Please enter table alias',
	Confirm: 'Confirm',
	TableNameAlreadyExists: 'The table name {{name}} already exists',
	TableNameCanNotBeEmpty: 'The table name can not be empty',
	ReplaceTable: 'Replace Table',
	ConfirmReplace: 'Confirm to replace {{source}} with {{target}}?',
	GenerateAliasSqlDescription: 'Generate alias by MS_Description',
	GenerateAliasPostgreDescription: 'Generate alias by Comment',
	GenerateAliasDescriptionOrMappingConfig: 'Generate alias by description or datasource mapping configuration',
	NoSchema: '(No Schema)',

	// custom sql table
	ChooseDataConnection: 'Choose Data Connection',
	SQLCommand: 'SQL Command',
	SameNameMsg: 'A table named "{{name}}" already exists.',
	UndefinedParameter: 'The Sql contains undefined parameter: {{parameter}}. Please click the "Parameters" button to generate and configure it.',
	InvalidParameter: 'The Sql contains invalid parameter: {{parameter}}. For dashboard dataset, the parameter type should be constant in the custom sql table.',
	CaseNotMatchedParameters: 'The Sql contains not matched parameter: {{parameter}}, the case must match sensitively.',
	QueryType: 'Query Type',
	QueryType_Text: 'Text',
	QueryType_StoredProcedure: 'Stored Procedure',
	QueryType_NativeQuery: 'Native Query',
	DeleteCustomSqlTableTitle: 'Delete Custom Sql Table',
	DeleteCustomSqlTableConfirmMsg: 'Delete Custom Sql Table "{{name}}" forever?',
	Procedures: 'Procedures',
	ProcedureParameterName: 'Parameter Name',
	ProcedureParameterType: 'Data Type',
	ProcedureParameterValueType: 'Value Type',
	ProcedureParameterDefaultValue: 'Default Value',
	InParam: 'In Parameter',
	ResultSet: 'Result Set',
	CustomTableParameterNotFound: 'The current custom Sql table is corrupted, the following bound parameters are not found: {{invalidParametersName}}.',
	ProcedureNotSupported: 'The procedure "{{name}}" is not supported or not found.',
	NoAvailableProcedures: 'No available procedures',
	NoItems: 'No Items',
	SelectNewProcedure: 'Please select a procedure',

	// fields tab
	Detail: 'Detail',
	GroupBy: 'Group By',
	DetailView: 'Detail View',
	GroupByView: 'GroupBy View',
	CustomField: 'Custom Field',
	SqlExpressionField: 'Sql Expression Field',
	CalculatedField: 'Calculated Field',
	CategoryField: 'Category Field',
	AddCustomFields: 'Add Custom Fields',
	FieldName: 'Field Name',
	FieldFormat: 'Field Format',
	EditColumn: 'Edit Column',
	ChooseFunction: 'Choose Function',
	Description: 'Comment',
	Syntax: 'Syntax',
	DatasetFields: 'Dataset Fields',
	Aggregation: 'Aggregation',
	Calculated: 'Calculated',
	GroupRules: 'Group Rules',
	GroupSize: 'Group Size',
	RangeOfValues: 'Range Of Values',
	MinimumValue: 'Minimum Value',
	MaximumValue: 'Maximum Value',
	Items: 'Items',
	Groups: 'Groups',
	SwitchViewConfirm: 'Switch view would lost current settings, continue?',
	CategoryGroupNameMustBeUnique: 'Group name must be unique.',
	CategoryAtLeastTwoPointsInGroupRange: 'At least two points in grouping range.',
	CategoryGroupNameCanNotBeEmpty: 'Group name can not be empty.',
	CategoryPointAlreadyExist: 'Point({{point}}) already exist.',
	CategoryPleaseInsertAPoint: 'Please insert a point.',
	Bins: 'Bins',
	CustomGrouping: 'Custom Grouping',
	LeftOpenRightClose: 'Value1 < Value <= Value2',
	LeftCloseRightOpen: 'Value1 <= Value < Value2',
	IncludeLessMinValue: 'Include less than Min value',
	IncludeMoreMaxValue: 'Include more than Max value',
	CategoryBinMinShouldLessThanMax: 'The min value should be less than max value.',
	CategoryBinMinCanNotBeEmpty: 'The min value can not be empty.',
	CategoryBinMaxCanNotBeEmpty: 'The max value can not be empty.',
	InsertPoint: 'Insert data segmentation point',
	Insert: 'Insert',
	GroupRange: 'Group Value Range',
	GroupName: 'Group Name',
	GroupValue: 'Value',
	EmptyFieldsCollectionTip: 'First add output fields to show here.',
	EmptyFieldsSearchResultTip: 'There is no field match the search.',
	DragColumnToGroup: 'Drop Column Here to do group.',
	DragColumnToAggregation: 'Drop Column Here to do aggregation.',
	ClickPlugButtonToAdd: 'Click "+" button to add calculated field.',
	FieldDetailTitle: 'In this mode, you could select and modify some fields to used as output',
	FieldGroupTitle: 'In this mode, you could group some field and do the aggregation same time',
	FieldColumnLabel: 'Field',
	FieldDisplayLabel: 'Output',
	FieldDatatypeLabel: 'Type',
	FieldTargetDataTypeLabel: 'Target Type',
	FieldAliasLabel: 'Alias',
	FieldDesLabel: 'Description',
	FieldExpression: 'Expression',
	ExpressionIsEmptyMsg: 'Expression could not be empty',
	ExpressionContainUndefinedParameter: 'The expression contains undefined parameter: {{parameter}}. Please click the "Parameters" button to generate and configure it.',
	ExpressionContainInvalidParameter: 'The expression contains invalid parameter: {{parameter}}. For dashboard dataset, the parameter type should be constant in the expression.',
	CustomFieldAliasCanNotBeEmpty: 'Custom field\'s alias could not be empty',
	FieldIsReferByOther: 'Could not change current field, it is referred by other field',
	NameContainsNonWord: 'The specified name is not valid. Please do not use restricted character "{{word}}"',
	FieldExistError: 'Column "{{column}}" already exists in dataset columns',
	ErrorMessage: 'Error Message',
	SuccessMessage: 'Success Message',
	Function: 'Function',
	ReferField: 'Refer Field',
	ReferTable: 'Refer Table',
	CalculatedFields: 'Calculated Fields',
	Expression: 'Expression',
	CategoryNameAlreadyExist: 'Category name \'{{name}}\' already exist',
	CalculateCategoryAll: 'All',
	SearchForFields: 'Search for fields',
	CreateFieldSuccessfully: 'Field \'{{fieldName}}\' created successfully',

	// filters tab
	MoveUp: 'Move Up',
	MoveDown: 'Move Down',
	ValueType: 'Value Type',
	Value: 'Value',
	And: 'And',
	Constant: 'Constant',
	AddFilter: 'Add Filter',
	URIParameters: 'URI Parameter',
	FieldType: 'Field Type',
	StartsWith: 'StartsWith',
	NotStartsWith: 'NotStartsWith',
	EndsWith: 'EndsWith',
	NotEndsWith: 'NotEndsWith',
	Contains: 'Contains',
	NotContains: 'NotContains',
	Is: 'Is',
	NotIs: 'NotIs',
	In: 'In',
	NotIn: 'NotIn',
	Between: 'Between',
	tableFilter: 'Tables',
	andFilter: 'And',
	orFilter: 'Or',
	addRule: 'Add rule',
	addGroup: 'Add group',
	UserContextParameter: 'User Context Parameter',
	OrganizationContextParameter: 'Organization Context Parameter',
	ConstantParameter: 'Constant Parameter',

	// parameters tab
	ConnectDbType: 'Connect Database Type',
	ConnectMode: 'Dataset Type:',
	DirectConnection: 'For Report',
	UseCache: 'For Dashboard',
	Parameter: 'Parameter',
	DataModelParameter: 'Parameter',
	DatasourceParameter: 'Datasource Parameter',
	ContextField: 'Context Field',
	DefaultValue: 'Default Value',
	UserContext: 'User Context',
	OrganizationContext: 'Organization Context',
	Source: 'Data Source',
	SetPreviewValue: 'Set Preview Parameter',
	ParameterType: 'Parameter Type',
	UserInput: 'User Input',
	UseCacheTip: 'The dataset for dashboard will be calculated and cached when it is saved.',
	DirectConnectionTip: 'The dataset for report will be calculated every time when it is consumed.',
	AddParameter: 'Add Parameter',
	CanNotSaveAlertAboutUseCache: 'Can not use \'$t(UseCache)\' mode when dataset has \'$t(UserInput)\' type parameter.',
	InvalidParameterNameError: 'Parameter name can only contains letter, number and _, the first character can not be a number, and the length should be between 1-32.',
	ParameterAlreadyExistsError: 'Parameter "{{parameter}}" already exists.',
	user_context_userid: 'user id',
	user_context_name: 'user name',
	user_context_email: 'email',
	user_context_phone_number: 'mobile phone',
	user_context_given_name: 'given name',
	user_context_family_name: 'family name',
	user_context_full_name: 'full name',
	user_context_role: 'role',
	user_context_tenant$Name: 'organization-Name',
	user_context_tenant$FromEmail: 'organization-FromEmail',
	organization_context_Name: 'Name',
	organization_context_FromEmail: 'FromEmail',
	Organization: 'organization',

	// options tab
	IncrementalUpdating: 'Incremental Update',

	// datasource
	CreateDatasource: 'Create Data Source',
	TestConnection: 'Test Connection',
	ConnectError: 'Connection error',
	ConnectSuccess: 'Connect successfully.',
	Create: 'Create',
	EditDatasource: 'Edit Data Source',
	ReconfigDatasource: 'Reconfigure Data Source',
	Update: 'Update',
	Local: 'Local',
	Embed: 'Embed',
	Web: 'Web',
	FileSystem: 'File System',
	Name: 'Name',
	User: 'User',
	SecurityToken: 'Security Token',
	CacheExpiration: 'Cache Expiration',
	CacheExpirationMode: 'Cache Expiration Mode',
	Password: 'Password',
	FilePassword: 'FilePassword',
	Server: 'Server',
	Host: 'Host',
	Port: 'Port',
	CommandTimeout: 'Command Timeout(s)',
	CommandTimeoutLimitation: 'Command timeout must be an integer value',
	Database: 'Database',
	Service_Name: 'Service Name',
	Encrypt: 'Encrypt',
	SIP: 'Schema Infer Policy',
	AllowHiddenSheets: 'Load Hidden Sheets',
	AllowDBNull: 'Convert empty cell to DBNull',
	UseAuth: 'Use Auth',
	XPath: 'XPath',
	ConnectionString: 'ConnectionString',
	Url: 'Url',
	JsonPath: 'Json Path',
	JsonHttpMethod: 'HTTP Method',
	JsonHttpPostMethod: 'POST',
	JsonHttpGetMethod: 'GET',
	JsonParameterName: 'Name',
	JsonParameterType: 'Parameter Type',
	JsonParameterDataType: 'Data Type',
	JsonParameterDefaultValue: 'Default value',
	JsonParameterLabel: 'Parameter',
	JsonParameterAdd: 'Add Parameter',
	HttpHeaderKey: 'Key',
	HttpHeaderValue: 'Value',
	HttpHeadersLabel: 'Http Headers',
	AddHttpHeader: 'Add HttpHeader',
	UseHttpHeaders: 'Use Http Headers(Advanced)',
	LineDelimiter: 'Line Delimiter',
	ColumnDelimiter: 'Column Delimiter',
	CodePage: 'Code Page',
	AuthMode: 'AuthMode',
	GrantType: 'GrantType',
	GrantType_password: 'password',
	GrantType_client_credentials: 'client_credentials',
	AutoColumnName: 'Use First Row as Header',
	OAuthTokenEndpoint: 'Token Endpoint',
	OAuthClientId: 'Client Id',
	OAuthClientSecret: 'Client Secret',
	OAuthUserName: 'UserName',
	OAuthPassword: 'Password',
	OAuthScope: 'Scope',
	SelectFile: 'Select File...',
	SourceType: 'SourceType',
	UseConfigString: 'Use Configuration String(Advanced)',
	UseURIParameters: 'Use URI Parameters(Advanced)',
	FileReady: '{{file}} is ready to upload',
	FileInProcess: 'Uploading {{file}}',
	FileUploaded: '{{file}} has been uploaded',
	FileUploadWithEmptyName: 'File has been uploaded',
	FileError: 'Upload {{file}} error',
	OAuth2: 'OAuth2',
	Basic: 'Basic',
	None: 'None',
	ExtractingData: 'ExtractingData',
	ExtractingDataMsg: 'Extracting file data to database',
	DataExtractionFailed: 'Data extraction failed',
	DataSourceCategory_All: 'All',
	DataSourceCategory_RDBMS: 'RDBMS',
	DataSourceCategory_File: 'File',
	DataSourceCategory_NoSqlDB: 'NoSqlDB',
	DataSourceCategory_ODBC: 'ODBC',
	DataSourceCategory_Web: 'Web',
	CorrectFormatFile: 'Please save your file in the correct format',
	ExcelCorrectFormatFile: 'Please save your Excel 2003 File as Excel 2007 file format',
	searchPlaceHolder: 'Please input to search',
	noSearchResultTip: 'no result',
	loadingDatabases: 'Loading Databases...',
	next: 'Next',
	back: 'Previous',
	cancel: 'Cancel',
	workSheet: 'WorkSheet',
	renameWorkSheet: 'New Sheet Name',
	renameColumnName: 'Rename',
	textType: 'Text',
	numberType: 'Number',
	datetimeType: 'DateTime',
	booleanType: 'Boolean',
	dateType: 'Date',
	selectSheetToImport: 'Select / Rename Sheets',
	create_excel_datasource_error1: 'You must select one sheet at least',
	create_excel_datasource_error2: 'The following sheet names should be no more than 30 characters:\n{{msg}}',
	create_excel_datasource_error3: 'The following sheets contain duplicate or empty column name, or the length of the column name is more than 30 characters. \n{{msg}}. ',
	create_excel_datasource_error3_msg_prefix: 'Sheet',
	'reconfigDataSource!name': 'Reconfigure',
	'reconfigDataSource!description': 'Reconfigure this document',

	// Document List
	dlDatasetType: 'Dataset Type',
	dlDashboardDataset: 'For Dashboard',
	dlReportDataset: 'For Report',
	dlDataProvider: 'Data Provider',
	dlDataSource: 'Data Source',

	// Errors
	err_10008: 'Calculated field "{{calculatedField}}" is referencing an undefined field "{{referredField}}".',
	err_10009: 'Syntax error found in calculated field expression "{{calculatedField}}". {{message}}',
	err_10010: 'Group field "{{groupField}}" is undefined.',
	err_10011: 'Aggregation field "{{aggregationField}}" is referencing an undefined field "{{referredField}}".',
	err_10012: 'Category field "{{categoryField}}" is referencing an undefined field "{{referredField}}".',
	err_10013: 'Calculated field "{{calculatedField}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10014: 'Sql expression "{{sqlExpression}}" on table "{{table}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10015: 'Filter "{{filter}}" is referencing an undefined parameter "{{referredParameter}}".',
	err_10016: 'Runtime error occurred: {{message}}',
	err_10017: 'Filter with BETWEEN operator requires 2 parameters.',
	err_10018: 'In \'For Dashboard\' mode, CustomSql can not reference an {{context}} parameter "{{referredParameter}}".',
	err_10019: 'In \'For Dashboard\' mode, Calculated field "{{calculatedField}}" can not reference an {{context}} parameter "{{referredParameter}}".',
	err_10020: 'In \'For Dashboard\' mode, Sql expression "{{sqlExpression}}" on table "{{table}}" can\'t reference an {{context}} parameter "{{referredParameter}}".',
	err_10021: 'Exceeded max column\'s count, limit count: 1024.\nCurrent count: {{currentCount}}.',
	err_10022: 'Calculated field "{{calculatedField}}" can not reference itself.',
	err_10023: 'Calculated field contains cycle reference.',
	err_10024: 'The join/union condition field type is inconsistent and can not be converted.',
	err_10025: 'Get databases failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections.',
	err_10026: 'Get database list failed. The server is not found or is not accessible. Please verify your settings and make sure the server allows remote connections. If connection still failed, please input the database/service name manually.',
	err_10027: 'Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.',
	err_10028: 'Custom SQL table could not contain duplicate column:"{{column}}".',
	err_10029: 'In filter cannot contain empty and/or group.',
	err_10030: 'The model fields duplicated',
	err_10034: 'Sql expression is referencing an undefined parameter "{{referredParameter}}".',
	err_10035: 'In \'For Dashboard\' mode,Sql expression can\'t reference an {{context}} parameter "{{referredParameter}}".',
	err_10036: 'The following bound parameters are not found in custom Sql table: "{{referredParameters}}".',
	err_10037: '{{option}} option cannot be empty.',

	err_40001: 'MultiDatasource is not supported in incremental update.',
	err_40002: 'Custom SQL table is not supported in incremental update.',
	err_40003: 'Group fields is not allowed to use in incremental update.',
	err_40004: 'Category fields is not allowed to use in incremental update.',
	err_40005: 'Incremental update field does not contain in fields.',
	err_40006: 'Incremental update settings is empty.',

	// update datasource error
	err_20001: 'Datasource extension document not found.',
	err_20002: 'DataSourceFile attachment not found.',
	err_20003: 'Datasource extraction failed.',
	err_20004: 'You don\'t have permission to update datasource.',
	err_20005: 'Datasource document not found.',
	err_20006: 'Invalid datasource document id.',
	err_20007: 'Unable to append data onto non-local-file datasource.',
	err_20008: 'No valid schema definition found in datasource connection string.',
	err_20009: 'Parameter error: Failed to bind {{parameterName}}',

	err_100001: 'Invalid parameter: {{name}}.',
	err_100002: 'Internal server error: {{message}}.',
	err_100003: 'Data source "{{name}}" already exists.',
	err_100004: 'Dataset "{{name}}" already exists.',
	err_100005: 'Data provider "{{name}}" not found.',
	err_100006: 'Data source name can not be empty.',
	err_100007: 'Data provider can not be empty.',
	err_100008: 'Connection string can not be empty.',
	err_100009: 'This document is being updated by another operation. Please try later.',
	err_100010: 'You don\'t have permission to create data source.',
	err_100011: 'You don\'t have sufficient license to create data source.',
	err_100012: 'Invalid user context: {{claimName}}.',
	err_100013: 'Invalid document name. Document name can not be empty and please do not use restricted symbols < > \\ : ? * / | \" and do not use . (dot) as the first symbol in the document name.',
	err_100014: 'You have not enough permission to access datasource "{{name}}"',
	err_100015: 'You have not enough permission to access referenced datasources, or one or more datasources do not exist.',
	err_100016: 'The join/union condition field type is inconsistent and can not be converted.',
	err_100017: 'The "{{key}}" value "{{value}}" on "{{ptype}}" is an invalid {{dtype}} value.',
	err_100018: 'Document not found.',
	err_100019: 'You don not have permission to access the document.',
	err_100020: 'Wrong document type.',
	err_100021: 'Can not connect to datasource {{name}}.',
	err_100022: 'You don\'t have permission to update the data set.',
	err_100023: 'No available COT worker.',
	err_100030: 'The mapped datasource connection string has used the context field for name mapping, and the datasource schema does not match the name mapping schema.',
	err_100032: 'Unknown database {{databaseName}}.',
	err_100033: 'Database option cannot be empty.',
	err_100034: 'Get schema failed. Please make sure: \n1, Your settings are valid.\n2, The server allows remote connections.\n3, The data source is available. \n4, The URI parameters are valid.',

	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',

	err_DataSourceAccessDenied: 'You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.',
	err_DataSourceNotFound: 'Specified datasource document "{{datasourceId}}" is not found.',
	err_DataSourceIntegrityCheck: 'Data source with id {{documentId}} integrity check error.',
	err_UserNotInOrgnization: 'Current user is not in any orgnization. Please check parameter "{{propertyName}}" with orgnization context.',

	// data source append data
	AppendData: 'Append Data',
	AppendSource: 'Source',
	AppendImport: 'Append',
	AppendDataSuccess: 'Data appended successfully',

	// fields format
	FieldFormat_General: 'General',
	FieldFormat_Number: 'Number',
	FieldFormat_Currency_USD: 'Currency ($)',
	FieldFormat_Currency_EUR: 'Currency (€)',
	FieldFormat_Currency_GBP: 'Currency (£)',
	FieldFormat_Currency_JPY: 'Currency (¥)',
	FieldFormat_ShortDate: 'Short Date ({{date}})',
	FieldFormat_LongDate: 'Long Date ({{date}})',
	FieldFormat_ShortTime: 'Short Time ({{time}})',
	FieldFormat_LongTime: 'Long Time ({{time}})',
	FieldFormat_Percentage: 'Percentage (%)',
	FieldFormat_Scientific: 'Scientific ({{number}})',

	// dataSourceDisplayName
	'DataSourceDisplayName!Oracle': 'Oracle',
	'DataSourceDisplayName!SqlServer': 'SQL Server',
	'DataSourceDisplayName!MySql': 'Mysql',
	'DataSourceDisplayName!Postgres': 'Postgres',
	'DataSourceDisplayName!Snowflake': 'Snowflake',
	'DataSourceDisplayName!SQLite': 'SQLite',
	'DataSourceDisplayName!Excel': 'Excel',
	'DataSourceDisplayName!Json': 'Json',
	'DataSourceDisplayName!CSV': 'CSV',
	'DataSourceDisplayName!Xml': 'Xml',
	'DataSourceDisplayName!MongoDB': 'MongoDB',
	'DataSourceDisplayName!ODBC': 'ODBC',
	'DataSourceDisplayName!OData': 'OData',

	'DataSourceDisplayName!SparkSQL': 'SparkSQL',
	'DataSourceDisplayName!Hive': 'Hive',
	'DataSourceDisplayName!GBase8s': 'GBase8s',
	'DataSourceDisplayName!GBase8a': 'GBase8a',
	'DataSourceDisplayName!ElasticSearch': 'ElasticSearch',
	'DataSourceDisplayName!DM': 'DM',
	'DataSourceDisplayName!TimeScale': 'TimeScale',
	'DataSourceDisplayName!GreenPlum': 'GreenPlum',
	'DataSourceDisplayName!TiDB': 'TiDB',
	'DataSourceDisplayName!ALIAnalyticDBMySql': 'ALIAnalyticDBMySql',
	'DataSourceDisplayName!Kingbase': 'Kingbase',
	'DataSourceDisplayName!Hana': 'Hana',

	// keys used in descriptors
	'UID': 'User',
	'UserName': 'UserName',
	'User ID': 'User',
	'Server:Port(e.g. localhost:39013))': 'Server:Port(e.g. localhost:39013))',
	'ALIAnalyticDBMySql': 'AnalyticDB for MySQL',

	// dataset manager error message
	'err_3000': 'The calculation failed due to exceptions or the calculation was canceled by administrator.'
};

export const gridDataES = {
	cgridMore: 'More',
};
