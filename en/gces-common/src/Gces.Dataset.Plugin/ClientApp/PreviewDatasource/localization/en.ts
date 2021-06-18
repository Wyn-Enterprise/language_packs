export const en = {
	OK: 'OK',
	MessageBox: 'Message',
	PreviewDataLimitation: 'Preview data, show 100 lines at most.',
	err_10021: 'Exceeded max column\'s count, limit count: 1024.\nCurrent count: {{currentCount}}.',
	FetchDataFailed: 'Fetch data failed.',
	DataSourcePreview: 'Data Source Preview',
	EmptySchemaTip: 'Can not get the datasource schema',

	err_100001: 'Invalid parameter: {{name}}.',
	err_100002: 'Internal server error: {{message}}.',
	err_100005: 'Data provider "{{name}}" not found.',
	err_100008: 'Connection string can not be empty.',
	err_100009: 'This document is being updated by another operation. Please try later.',
	err_100014: 'You have not enough permission to access datasource "{{name}}"',
	err_100018: 'Document not found.',
	err_100019: 'You don not have permission to access the document.',
	err_100020: 'Wrong document type.',
	err_100021: 'Can not connect to datasource {{name}}.',
	err_100030: 'The mapped datasource connection string has used the context field for name mapping, and the datasource schema does not match the name mapping schema.',
	err_100018_desc: 'Error trying to resolve datasource "{{ids}}"',

	E_40001: 'SqlOptimizer failed on executing primitive sql on data source.',
	E_40002: 'Can not find specified table in context.',
	E_40003: 'Can not find specified column "{{ColumnName}}" in context.',
	E_40004: 'Found more than one matched columns in context.',
	E_40005: 'Found more than one matched tables in context.',
	E_50000: 'Try to register a null SourceLoader.',
	E_50001: 'Try to register a duplicated SourceLoader.',
	E_50002: 'Try to unregister a null SourceLoader.',
	E_50003: 'Try to unregister a inexistent SourceLoader.',
	E_50004: 'Can\'t find proper SourceLoader or Can not find the file under the specified path.',
	E_60001: 'Specified collection name is not supported in GetSchema series methods.',
	E_60003: 'Can not get schema information on closed connection.',
	E_60006: 'No valid data rows found in file datasource.',
	E_60007: 'Failed to set SpreadServices license.',
	E_60008: 'Failed to open Excel file.',
	E_60009: 'No available sheets found in Excel file.',
	E_60012: 'Can not get MongoDB table info.',
	E_60013: 'Can not get MongoDB table column info.',
	E_60018: 'Can not convert string to number.',
	E_60019: 'Invalid restriction values.',
	E_60023: 'Missing parameter(s).',
	E_60024: 'Network error found when fetching remote data.',
	E_60025: 'Can not load schema from xml string.',
	E_60028: 'An error occured when executing primitive query. {{PrimitiveSQLError}}',
	E_60034: 'Should not use table schema name in command whose owner connection has config \'TablePrefix\' set.',
	E_60035: 'Table "{{TableName}}" not found.',
	E_60039: 'Can not get schema information.',
	E_60040: 'Section \'SchemaDefinition\' is missing in connection string.',
	E_60046: 'Can not find matched Excel sheet specified by defined schema.',
	E_60047: 'Excel sheet columns count does not match the count of columns defined in schema.',
	E_60048: 'Excel sheet columns do not match the ones defined in schema.',
	E_60100: 'Incorrect json path.',
	E_60101: 'Exceeded max column\'s count, limit count: 1024.',
	E_60200: 'A non-empty row collection is required for column data type inference.',
	E_70000: 'Failed to acquire access token.',
	E_70001: 'Network error.',
	E_70002: '401 Unauthorized Error. The request has not been applied because it lacks valid authentication credentials for the target resource.',
	E_70003: '404 Not Found Error. The server can\'t find the requested resource.',
	E_70004: 'No data returned from the remote server. Please make sure that the remote server has data returned.',
	E_70005: '400 Bad Request Error. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
	E_70006: '403 Forbidden Error. The server understood the request but refuses to authorize it.',
	E_70007: '405 Method Not Allowed. The request method is known by the server but is not supported by the target resource.',
	E_70008: '500 Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.',
	E_80001: 'Can not find specified column.',
	E_80002: 'Duplicated column names found.',
	E_80024: 'Can not find specified parameter.',
	E_80026: 'Exceeded max column\'s count, limit count: 1024.',
	E_80028: 'Can not find specified table.',
	E_80048: 'Context not registered.',
	E_80059: 'No proper data type converters found between types.',
	E_80062: 'Can not convert null value to a value type.',
	E_110001: 'JDBC proxy is not alive.',
	E_110002: 'Get schema from JDBC proxy error.',
	E_110003: 'An error occurred when executing primitive query in JDBC proxy. \n{{message}}',
	E_110004: 'Connection time out.',

	err_DataSourceAccessDenied: 'You do not have permission to access datasource. \nDatasource Name: {{datasourceName}}.',
	err_DataSourceNotFound: 'Specified datasource document "{{datasourceId}}" is not found.',
};
