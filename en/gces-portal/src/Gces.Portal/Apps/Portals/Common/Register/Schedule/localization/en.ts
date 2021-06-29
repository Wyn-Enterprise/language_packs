export const scheduleEN: LanguageKeyValueMap = {
	schNoSchedulePlugin: 'no schedule template plugin',

	'schedule!title': 'Schedule Templates',
	'schedule!description': 'Schedule Templates management',

	schNotItemsTip: 'no schedule templates, please add schedule template or check the filter setting.',
	schAddSchedule: 'Add Template',
	schScheduleName: 'Template Name',
	schScheduleNamePlaceholder: 'Please enter the template name',
	schDocumentType: 'Document Type',
	schScheduleDescription: 'Template Description',
	schScheduleDescriptionPlaceholder: 'Please enter the template description',
	schCreateSchedule: 'Create Template',
	schCancel: 'Cancel',

	schSave: 'Save',
	schClose: 'Close',
	schDelete: 'Delete',
	'schTab!basic-information': 'Basic Information',
	'schTab!recurrence': 'Recurrence',
	'schTab!delivery': 'Delivery',
	'schTab!referenced-files': 'Referenced Documents',

	schAssignPermissions: 'Assign Permission',

	schAlreadyExistTitle: 'Message',
	schAlreadyExistContent: '\'{{name}}\' already exists.',
	schAlreadyExistYes: 'OK',

	// Delete confirm
	delConfirmTitle: 'Delete Template',
	delConfirmContent: 'Do you want to delete \'{{name}}\' permanently?',
	delConfirmDelete: 'OK',
	delConfirmNo: 'Cancel',

	// Update confirm
	updateConfirmTitle: 'Update Template',
	updateConfirmContent: 'This template was referenced by scheduled tasks, do you want to update them?',
	updateConfirmRadioCascade: 'Cascade update scheduled tasks(recurrence, delivery and export settings)',
	updateConfirmRadioTemplateOnly: 'Update template only',

	// Update Error
	updateError_invalidEndTime: 'End date could not be earlier than current time.',
	updateError_taskInvalid: 'Task is invalid.',
	updateError_templateNotFound: 'Template not found.',
	updateError_noEmailAddress: 'Referenced task EmailTo could not be null, please set EmailTo in template or update template only.',

	// Delete Error
	delScheduleError: 'Failed to delete template',
	delScheduleErrorContent: 'The template can not be deleted. It is used by the following tasks:\n{{tasks}}',
	delSchRelatedTasks: 'Tasks',

	// Recurrence Editor
	recEditorHeaderRepeat: 'Repeat',
	recEditorLabelStart: 'Start',
	recEditorLabelEnd: 'End',
	recEditorPlaceholderNoEndDate: 'No End Date',
	recEditorDailyEditor: 'Daily',
	recEditorWeeklyEditor: 'Weekly',
	recEditorMonthlyEditor: 'Monthly',

	// Daily Editor
	dailyEditorTextAt: 'At {{time}}',
	dailyEditorTextEvery: 'Every',
	dailyEditorHoursTextUnits: 'hour(s)',
	dailyEditorMinutesTextUnits: 'minute(s)',
	dailyEditorSecondsTextUnits: 'second(s)',

	// Weekly Editor
	weeklyEditorTextEvery: 'Every',
	weeklyEditorTextUnits: 'week(s)',

	// Monthly Editor
	monthlyEditorTextEvery: 'Every',
	monthlyEditorTextUnits: 'month(s)',
	monthlyEditorTextOnDay: 'On day',
	monthlyEditorTextOnDayUnits: '',
	monthlyEditorTextOnTheLast: 'On the last',
	monthlyEditorTextOnTheFirst: 'On the first',
	monthlyEditorTextLastDay: 'Day',
	monthlyEditorTextLastWeekday: 'Weekday',

	// ----- Delivery ------ //
	schAllowUserToChoose: 'Allow user to choose',
	allowUserChangeEmailTip: 'Allow user to change recipient(s)',
	forbidUserChangeEmailTip: 'Restrict user to change recipient(s)',
	reportingEditorHeaderExportFormat: 'Export Format',
	reportingEditorFormatPdf: 'PDF',
	reportingEditorFormatExcel: 'Excel',
	reportingEditorFormatHTML: 'HTML',
	reportingEditorFormatCSV: 'CSV',
	reportingEditorFormatJSON: 'JSON',
	reportingEditorFormatImage: 'Image',
	reportingEditorFormatWord: 'Word',
	reportingEditorFormatTXT: 'TXT',

	// PDF
	edVersion: 'Version',
	'edPdf12': 'PDF-1.2',
	'edPdf13': 'PDF-1.3',
	'edPdf14': 'PDF-1.4',
	'edPdf15': 'PDF-1.5',
	'edPdf16': 'PDF-1.6',
	'edPdf17': 'PDF-1.7',
	'edPDF/A-1a': 'PDF/A-1a',
	'edPDF/A-1b': 'PDF/A-1b',
	'edPDF/A-2a': 'PDF/A-2a',
	'edPDF/A-2b': 'PDF/A-2b',
	'edPDF/A-2u': 'PDF/A-2u',
	'edPDF/A-3a': 'PDF/A-3a',
	'edPDF/A-3b': 'PDF/A-3b',
	'edPDF/A-3u': 'PDF/A-3u',
	'edPDF/UA-1': 'PDF/UA-1',
	edEmbedFonts: 'EmbedFonts',
	'edPartial': 'Partial',
	'edAll': 'All',
	'edNone': 'None',
	edNeverEmbedFonts: 'NeverEmbedFonts',
	edPrintOnOpen: 'PrintOnOpen',
	'edAllowPrint': 'AllowPrint',
	'edAllowModifyContents': 'AllowModifyContents',
	'edAllowCopy': 'AllowCopy',
	'edAllowModifyAnnotations': 'AllowModifyAnnotations',
	'edAllowFillIn': 'AllowFillIn',
	'edAllowAccessibleReaders': 'AllowAccessibleReaders',
	'edAllowAssembly': 'AllowAssembly',
	'edDefault': 'Default',
	edTitle: 'Title',
	edAuthor: 'Author',
	edSubject: 'Subject',
	edKeywords: 'Keywords',
	edApplication: 'Application',
	edEncrypt: 'Encrypt',
	edOwnerPassword: 'OwnerPassword',
	edUserPassword: 'UserPassword',
	edPdfPermissions: 'PdfPermissions',
	edPermissions: 'Permissions',
	edUse128Bit: 'Use128Bit',
	edHideToolbar: 'HideToolbar',
	edHideMenubar: 'HideMenubar',
	edHideWindowUI: 'HideWindowUI',
	edFitWindow: 'FitWindow',
	edCenterWindow: 'CenterWindow',
	edDisplayTitle: 'DisplayTitle',
	edDisplayMode: 'DisplayMode',
	'edOutlines': 'Outlines',
	'edThumbs': 'Thumbs',
	'edFullScreen': 'FullScreen',
	edDuplexMode: 'DuplexMode',
	'edSimplex': 'Simplex',
	'edDuplexFlipLongEdge': 'DuplexFlipLongEdge',
	'edDuplexFlipShortEdge': 'DuplexFlipShortEdge',
	edNumberOfCopies: 'NumberOfCopies',
	edImageInterpolation: 'ImageInterpolation',
	edPaperSourceByPageSize: 'PaperSourceByPageSize',
	edPrintPageRange: 'PrintPageRange',
	edIsPaginated: 'IsPaginated',
	// image
	edImageType: 'ImageType',
	'edPNG': 'PNG',
	'edJPEG': 'JPEG',
	'edGIF': 'GIF',
	'edBMP': 'BMP',
	'edTIFF': 'TIFF',
	edPagination: 'Pagination',
	edDpiX: 'DpiX',
	edDpiY: 'DpiY',
	edQuality: 'Quality',
	edDither: 'Dither',
	// HTML
	edEmbedImages: 'EmbedImages',
	edMode: 'Mode',
	'edPaginated': 'Paginated',
	'edGalley': 'Galley',
	edRenderingEngine: 'RenderingEngine',
	'edHtml': 'Html',
	'edMixed': 'Mixed',
	edLinkTarget: 'LinkTarget',
	edFragment: 'Fragment',
	edStyleStream: 'StyleStream',
	edOutputTOC: 'OutputTOC',
	edEndPage: 'EndPage',
	// excel
	edUseCompression: 'UseCompression',
	edProtectedBy: 'ProtectedBy',
	edWritePassword: 'WritePassword',
	edPassword: 'Password',
	edReadOnlyRecommended: 'ReadOnlyRecommended',
	edOpenXmlStandard: 'OpenXmlStandard',
	'edTransitional': 'Transitional',
	'edStrict': 'Strict',
	edEnableToggles: 'EnableToggles',
	edUseDefaultPalette: 'UseDefaultPalette',
	edMultiSheet: 'MultiSheet',
	'edSheet Name': 'Sheet Name',
	// csv
	edExtension: 'Extension',
	edcsv: '.csv',
	edtxt: '.txt',
	// docx
	edUseMhtOutput: 'UseMhtOutput',
	edBaseUrl: 'BaseUrl',
	edPageHeight: 'PageHeight',
	edPageWidth: 'PageWidth',
	edGenerator: 'Generator',
	edDocumentCompatibilityVersion: 'DocumentCompatibilityVersion',
	'edWord2007': 'Word2007',
	'edWord2010': 'Word2010',
	'edWord2013': 'Word2013',
	edTOCAutoUpdate: 'TOCAutoUpdate',
	edCompanyName: 'CompanyName',
	// json
	edFormatted: 'Formatted',
	edQuotePropertyNames: 'QuotePropertyNames',
	edNoHeader: 'NoHeader',
	edColumnsDelimiter: 'ColumnsDelimiter',
	edRowsDelimiter: 'RowsDelimiter',
	edQuotationSymbol: 'QuotationSymbol',
	// common
	edEncoding: 'Encoding',
	'edIBM EBCDIC (US-Canada)': 'IBM EBCDIC (US-Canada)',
	'edOEM United States': 'OEM United States',
	'edIBM EBCDIC (International)': 'IBM EBCDIC (International)',
	'edArabic (ASMO 708)': 'Arabic (ASMO 708)',
	'edArabic (DOS)': 'Arabic (DOS)',
	'edGreek (DOS)': 'Greek (DOS)',
	'edBaltic (DOS)': 'Baltic (DOS)',
	'edWestern European (DOS)': 'Western European (DOS)',
	'edCentral European (DOS)': 'Central European (DOS)',
	'edOEM Cyrillic': 'OEM Cyrillic',
	'edTurkish (DOS)': 'Turkish (DOS)',
	'edOEM Multilingual Latin I': 'OEM Multilingual Latin I',
	'edPortuguese (DOS)': 'Portuguese (DOS)',
	'edIcelandic (DOS)': 'Icelandic (DOS)',
	'edHebrew (DOS)': 'Hebrew (DOS)',
	'edFrench Canadian (DOS)': 'French Canadian (DOS)',
	'edArabic (864)': 'Arabic (864)',
	'edNordic (DOS)': 'Nordic (DOS)',
	'edCyrillic (DOS)': 'Cyrillic (DOS)',
	'edGreek, Modern (DOS)': 'Greek, Modern (DOS)',
	'edIBM EBCDIC (Multilingual Latin-2)': 'IBM EBCDIC (Multilingual Latin-2)',
	'edThai (Windows)': 'Thai (Windows)',
	'edIBM EBCDIC (Greek Modern)': 'IBM EBCDIC (Greek Modern)',
	'edJapanese (Shift-JIS)': 'Japanese (Shift-JIS)',
	'edChinese Simplified (GB2312)': 'Chinese Simplified (GB2312)',
	'edKorean': 'Korean',
	'edChinese Traditional (Big5)': 'Chinese Traditional (Big5)',
	'edIBM EBCDIC (Turkish Latin-5)': 'IBM EBCDIC (Turkish Latin-5)',
	'edIBM Latin-1': 'IBM Latin-1',
	'edIBM EBCDIC (US-Canada-Euro)': 'IBM EBCDIC (US-Canada-Euro)',
	'edIBM EBCDIC (Germany-Euro)': 'IBM EBCDIC (Germany-Euro)',
	'edIBM EBCDIC (Denmark-Norway-Euro)': 'IBM EBCDIC (Denmark-Norway-Euro)',
	'edIBM EBCDIC (Finland-Sweden-Euro)': 'IBM EBCDIC (Finland-Sweden-Euro)',
	'edIBM EBCDIC (Italy-Euro)': 'IBM EBCDIC (Italy-Euro)',
	'edIBM EBCDIC (Spain-Euro)': 'IBM EBCDIC (Spain-Euro)',
	'edIBM EBCDIC (UK-Euro)': 'IBM EBCDIC (UK-Euro)',
	'edIBM EBCDIC (France-Euro)': 'IBM EBCDIC (France-Euro)',
	'edIBM EBCDIC (International-Euro)': 'IBM EBCDIC (International-Euro)',
	'edIBM EBCDIC (Icelandic-Euro)': 'IBM EBCDIC (Icelandic-Euro)',
	'edUnicode': 'Unicode',
	'edUnicode (Big endian)': 'Unicode (Big endian)',
	'edCentral European (Windows)': 'Central European (Windows)',
	'edCyrillic (Windows)': 'Cyrillic (Windows)',
	'edWestern European (Windows)': 'Western European (Windows)',
	'edGreek (Windows)': 'Greek (Windows)',
	'edTurkish (Windows)': 'Turkish (Windows)',
	'edHebrew (Windows)': 'Hebrew (Windows)',
	'edArabic (Windows)': 'Arabic (Windows)',
	'edBaltic (Windows)': 'Baltic (Windows)',
	'edVietnamese (Windows)': 'Vietnamese (Windows)',
	'edKorean (Johab)': 'Korean (Johab)',
	'edWestern European (Mac)': 'Western European (Mac)',
	'edJapanese (Mac)': 'Japanese (Mac)',
	'edChinese Traditional (Mac)': 'Chinese Traditional (Mac)',
	'edKorean (Mac)': 'Korean (Mac)',
	'edArabic (Mac)': 'Arabic (Mac)',
	'edHebrew (Mac)': 'Hebrew (Mac)',
	'edGreek (Mac)': 'Greek (Mac)',
	'edCyrillic (Mac)': 'Cyrillic (Mac)',
	'edChinese Simplified (Mac)': 'Chinese Simplified (Mac)',
	'edRomanian (Mac)': 'Romanian (Mac)',
	'edUkrainian (Mac)': 'Ukrainian (Mac)',
	'edThai (Mac)': 'Thai (Mac)',
	'edCentral European (Mac)': 'Central European (Mac)',
	'edIcelandic (Mac)': 'Icelandic (Mac)',
	'edTurkish (Mac)': 'Turkish (Mac)',
	'edCroatian (Mac)': 'Croatian (Mac)',
	'edUnicode (UTF-32)': 'Unicode (UTF-32)',
	'edUnicode (UTF-32 Big endian)': 'Unicode (UTF-32 Big endian)',
	'edChinese Traditional (CNS)': 'Chinese Traditional (CNS)',
	'edTCA Taiwan': 'TCA Taiwan',
	'edChinese Traditional (Eten)': 'Chinese Traditional (Eten)',
	'edIBM5550 Taiwan': 'IBM5550 Taiwan',
	'edTeleText Taiwan': 'TeleText Taiwan',
	'edWang Taiwan': 'Wang Taiwan',
	'edWestern European (IA5)': 'Western European (IA5)',
	'edGerman (IA5)': 'German (IA5)',
	'edSwedish (IA5)': 'Swedish (IA5)',
	'edNorwegian (IA5)': 'Norwegian (IA5)',
	'edUS-ASCII': 'US-ASCII',
	'edx-cp20261': 'T.61',
	'edISO-6937': 'ISO-6937',
	'edIBM EBCDIC (Germany)': 'IBM EBCDIC (Germany)',
	'edIBM EBCDIC (Denmark-Norway)': 'IBM EBCDIC (Denmark-Norway)',
	'edIBM EBCDIC (Finland-Sweden)': 'IBM EBCDIC (Finland-Sweden)',
	'edIBM EBCDIC (Italy)': 'IBM EBCDIC (Italy)',
	'edIBM EBCDIC (Spain)': 'IBM EBCDIC (Spain)',
	'edIBM EBCDIC (UK)': 'IBM EBCDIC (UK)',
	'edIBM EBCDIC (Japanese katakana)': 'IBM EBCDIC (Japanese katakana)',
	'edIBM EBCDIC (France)': 'IBM EBCDIC (France)',
	'edIBM EBCDIC (Arabic)': 'IBM EBCDIC (Arabic)',
	'edIBM EBCDIC (Greek)': 'IBM EBCDIC (Greek)',
	'edIBM EBCDIC (Hebrew)': 'IBM EBCDIC (Hebrew)',
	'edIBM EBCDIC (Korean Extended)': 'IBM EBCDIC (Korean Extended)',
	'edIBM EBCDIC (Thai)': 'IBM EBCDIC (Thai)',
	'edCyrillic (KOI8-R)': 'Cyrillic (KOI8-R)',
	'edIBM EBCDIC (Icelandic)': 'IBM EBCDIC (Icelandic)',
	'edIBM EBCDIC (Cyrillic Russian)': 'IBM EBCDIC (Cyrillic Russian)',
	'edIBM EBCDIC (Turkish)': 'IBM EBCDIC (Turkish)',
	'edJapanese (JIS 0208-1990 and 0212-1990)': 'Japanese (JIS 0208-1990 and 0212-1990)',
	'edChinese Simplified (GB2312-80)': 'Chinese Simplified (GB2312-80)',
	'edKorean Wansung': 'Korean Wansung',
	'edIBM EBCDIC (Cyrillic Serbian-Bulgarian)': 'IBM EBCDIC (Cyrillic Serbian-Bulgarian)',
	'edCyrillic (KOI8-U)': 'Cyrillic (KOI8-U)',
	'edWestern European (ISO)': 'Western European (ISO)',
	'edCentral European (ISO)': 'Central European (ISO)',
	'edLatin 3 (ISO)': 'Latin 3 (ISO)',
	'edBaltic (ISO)': 'Baltic (ISO)',
	'edCyrillic (ISO)': 'Cyrillic (ISO)',
	'edArabic (ISO)': 'Arabic (ISO)',
	'edGreek (ISO)': 'Greek (ISO)',
	'edHebrew (ISO-Visual)': 'Hebrew (ISO-Visual)',
	'edTurkish (ISO)': 'Turkish (ISO)',
	'edEstonian (ISO)': 'Estonian (ISO)',
	'edLatin 9 (ISO)': 'Latin 9 (ISO)',
	'edEuropa': 'Europa',
	'edHebrew (ISO-Logical)': 'Hebrew (ISO-Logical)',
	'edJapanese (JIS)': 'Japanese (JIS)',
	'edJapanese (JIS-Allow 1 byte Kana)': 'Japanese (JIS-Allow 1 byte Kana)',
	'edJapanese (JIS-Allow 1 byte Kana - SO/SI)': 'Japanese (JIS-Allow 1 byte Kana - SO/SI)',
	'edKorean (ISO)': 'Korean (ISO)',
	'edChinese Simplified (ISO-2022)': 'Chinese Simplified (ISO-2022)',
	'edJapanese (EUC)': 'Japanese (EUC)',
	'edChinese Simplified (EUC)': 'Chinese Simplified (EUC)',
	'edKorean (EUC)': 'Korean (EUC)',
	'edChinese Simplified (HZ)': 'Chinese Simplified (HZ)',
	'edChinese Simplified (GB18030)': 'Chinese Simplified (GB18030)',
	'edISCII Devanagari': 'ISCII Devanagari',
	'edISCII Bengali': 'ISCII Bengali',
	'edISCII Tamil': 'ISCII Tamil',
	'edISCII Telugu': 'ISCII Telugu',
	'edISCII Assamese': 'ISCII Assamese',
	'edISCII Oriya': 'ISCII Oriya',
	'edISCII Kannada': 'ISCII Kannada',
	'edISCII Malayalam': 'ISCII Malayalam',
	'edISCII Gujarati': 'ISCII Gujarati',
	'edISCII Punjabi': 'ISCII Punjabi',
	'edUnicode (UTF-7)': 'Unicode (UTF-7)',
	'edUnicode (UTF-8)': 'Unicode (UTF-8)',
	edPaperSize: 'PaperSize',
	'edLetter': 'Letter',
	'edLetterSmall': 'LetterSmall',
	'edTabloid': 'Tabloid',
	'edLedger': 'Ledger',
	'edLegal': 'Legal',
	'edStatement': 'Statement',
	'edExecutive': 'Executive',
	'edA3': 'A3',
	'edA4': 'A4',
	'edA4Small': 'A4Small',
	'edA5': 'A5',
	'edB4': 'B4',
	'edB5': 'B5',
	'edFolio': 'Folio',
	'edQuarto': 'Quarto',
	'edStandard10x14': 'Standard10x14',
	'edStandard11x17': 'Standard11x17',
	'edNote': 'Note',
	'edNumber9Envelope': 'Number9Envelope',
	'edNumber10Envelope': 'Number10Envelope',
	'edNumber11Envelope': 'Number11Envelope',
	'edNumber12Envelope': 'Number12Envelope',
	'edNumber14Envelope': 'Number14Envelope',
	'edCSheet': 'CSheet',
	'edDSheet': 'DSheet',
	'edESheet': 'ESheet',
	'edDLEnvelope': 'DLEnvelope',
	'edC5Envelope': 'C5Envelope',
	'edC3Envelope': 'C3Envelope',
	'edC4Envelope': 'C4Envelope',
	'edC6Envelope': 'C6Envelope',
	'edC65Envelope': 'C65Envelope',
	'edB4Envelope': 'B4Envelope',
	'edB5Envelope': 'B5Envelope',
	'edB6Envelope': 'B6Envelope',
	'edItalyEnvelope': 'ItalyEnvelope',
	'edMonarchEnvelope': 'MonarchEnvelope',
	'edPersonalEnvelope': 'PersonalEnvelope',
	'edUSStandardFanfold': 'USStandardFanfold',
	'edGermanStandardFanfold': 'GermanStandardFanfold',
	'edGermanLegalFanfold': 'GermanLegalFanfold',
	'edIsoB4': 'IsoB4',
	'edJapanesePostcard': 'JapanesePostcard',
	'edStandard9x11': 'Standard9x11',
	'edStandard10x11': 'Standard10x11',
	'edStandard15x11': 'Standard15x11',
	'edInviteEnvelope': 'InviteEnvelope',
	'edLetterExtra': 'LetterExtra',
	'edLegalExtra': 'LegalExtra',
	'edTabloidExtra': 'TabloidExtra',
	'edA4Extra': 'A4Extra',
	'edLetterTransverse': 'LetterTransverse',
	'edA4Transverse': 'A4Transverse',
	'edLetterExtraTransverse': 'LetterExtraTransverse',
	'edAPlus': 'APlus',
	'edBPlus': 'BPlus',
	'edLetterPlus': 'LetterPlus',
	'edA4Plus': 'A4Plus',
	'edA5Transverse': 'A5Transverse',
	'edB5Transverse': 'B5Transverse',
	'edA3Extra': 'A3Extra',
	'edA5Extra': 'A5Extra',
	'edB5Extra': 'B5Extra',
	'edA2': 'A2',
	'edA3Transverse': 'A3Transverse',
	'edA3ExtraTransverse': 'A3ExtraTransverse',
	'edJapaneseDoublePostcard': 'JapaneseDoublePostcard',
	'edA6': 'A6',
	'edJapaneseEnvelopeKakuNumber2': 'JapaneseEnvelopeKakuNumber2',
	'edJapaneseEnvelopeKakuNumber3': 'JapaneseEnvelopeKakuNumber3',
	'edJapaneseEnvelopeChouNumber3': 'JapaneseEnvelopeChouNumber3',
	'edJapaneseEnvelopeChouNumber4': 'JapaneseEnvelopeChouNumber4',
	'edLetterRotated': 'LetterRotated',
	'edA3Rotated': 'A3Rotated',
	'edA4Rotated': 'A4Rotated',
	'edA5Rotated': 'A5Rotated',
	'edB4JisRotated': 'B4JisRotated',
	'edB5JisRotated': 'B5JisRotated',
	'edJapanesePostcardRotated': 'JapanesePostcardRotated',
	'edJapaneseDoublePostcardRotated': 'JapaneseDoublePostcardRotated',
	'edA6Rotated': 'A6Rotated',
	'edJapaneseEnvelopeKakuNumber2Rotated': 'JapaneseEnvelopeKakuNumber2Rotated',
	'edJapaneseEnvelopeKakuNumber3Rotated': 'JapaneseEnvelopeKakuNumber3Rotated',
	'edJapaneseEnvelopeChouNumber3Rotated': 'JapaneseEnvelopeChouNumber3Rotated',
	'edJapaneseEnvelopeChouNumber4Rotated': 'JapaneseEnvelopeChouNumber4Rotated',
	'edB6Jis': 'B6Jis',
	'edB6JisRotated': 'B6JisRotated',
	'edStandard12x11': 'Standard12x11',
	'edJapaneseEnvelopeYouNumber4': 'JapaneseEnvelopeYouNumber4',
	'edJapaneseEnvelopeYouNumber4Rotated': 'JapaneseEnvelopeYouNumber4Rotated',
	'edPrc16K': 'Prc16K',
	'edPrc32K': 'Prc32K',
	'edPrc32KBig': 'Prc32KBig',
	'edPrcEnvelopeNumber1': 'PrcEnvelopeNumber1',
	'edPrcEnvelopeNumber2': 'PrcEnvelopeNumber2',
	'edPrcEnvelopeNumber3': 'PrcEnvelopeNumber3',
	'edPrcEnvelopeNumber4': 'PrcEnvelopeNumber4',
	'edPrcEnvelopeNumber5': 'PrcEnvelopeNumber5',
	'edPrcEnvelopeNumber6': 'PrcEnvelopeNumber6',
	'edPrcEnvelopeNumber7': 'PrcEnvelopeNumber7',
	'edPrcEnvelopeNumber8': 'PrcEnvelopeNumber8',
	'edPrcEnvelopeNumber9': 'PrcEnvelopeNumber9',
	'edPrcEnvelopeNumber10': 'PrcEnvelopeNumber10',
	'edPrc16KRotated': 'Prc16KRotated',
	'edPrc32KRotated': 'Prc32KRotated',
	'edPrc32KBigRotated': 'Prc32KBigRotated',
	'edPrcEnvelopeNumber1Rotated': 'PrcEnvelopeNumber1Rotated',
	'edPrcEnvelopeNumber2Rotated': 'PrcEnvelopeNumber2Rotated',
	'edPrcEnvelopeNumber3Rotated': 'PrcEnvelopeNumber3Rotated',
	'edPrcEnvelopeNumber4Rotated': 'PrcEnvelopeNumber4Rotated',
	'edPrcEnvelopeNumber5Rotated': 'PrcEnvelopeNumber5Rotated',
	'edPrcEnvelopeNumber6Rotated': 'PrcEnvelopeNumber6Rotated',
	'edPrcEnvelopeNumber7Rotated': 'PrcEnvelopeNumber7Rotated',
	'edPrcEnvelopeNumber8Rotated': 'PrcEnvelopeNumber8Rotated',
	'edPrcEnvelopeNumber9Rotated': 'PrcEnvelopeNumber9Rotated',
	'edPrcEnvelopeNumber10Rotated': 'PrcEnvelopeNumber10Rotated',

	edWatermarkAngle: 'WatermarkAngle',
	edWatermarkColor: 'WatermarkColor',
	edWatermarkTitle: 'WatermarkTitle',
	edWatermarkFontFamily: 'WatermarkFontFamily',
	edWatermarkFontSize: 'WatermarkFontSize',
	edWatermarkFontBold: 'WatermarkFontBold',
	edWatermarkFontItalic: 'WatermarkFontItalic',
	edWatermarkFontStrikeout: 'WatermarkFontStrikeout',
	edWatermarkFontUnderline: 'WatermarkFontUnderline',
	edPrintLayoutMode: 'PrintLayoutMode',
	'edOneLogicalPageOnSinglePhysicalPage': 'OneLogicalPageOnSinglePhysicalPage',
	'edTwoLogicalPagesOnSinglePhysicalPage': 'TwoLogicalPagesOnSinglePhysicalPage',
	'edFourLogicalPagesOnSinglePhysicalPage': 'FourLogicalPagesOnSinglePhysicalPage',
	'edEightLogicalPagesOnSinglePhysicalPage': 'EightLogicalPagesOnSinglePhysicalPage',
	'edBookletMode': 'BookletMode',
	edSizeToFit: 'SizeToFit',
	edStartPage: 'StartPage',
	edOrientation: 'Orientation',
	'edPortrait': 'Portrait',
	'edLandscape': 'Landscape',
	edSaveSettings: 'Save Settings',
	edFontWeight: 'FontWeight',
	edFontHeight: 'FontHeight',

	// deployment
	delEditorHeader: 'Delivery',
	delEditorMenuEmail: 'Email',
	delEditorMenuLocal: 'Local Storage',
	delEditorMenuWFS: 'File Share',

	delEditorLocalStoreForever: 'Store forever',
	delEditorLocalStoreUntil: 'Store until...',
	delEditorLocalDeleteAfter: 'Expiry Duration...',
	delEditorLocalTextOnDayUnits: 'Day(s)',
	delEditorLocalAllowAnonymous: 'Allow anonymous',

	delEditorWFSLabelFileName: 'File Name',
	delEditorWFSLabelPath: 'Path',
	delEditorWFSLabelOverwrite: 'Overwrite existing',
	delEditorWFSLabelUser: 'User',
	delEditorWFSLabelPassword: 'Password',

	delEditorMailStoreForever: 'Store forever',
	delEditorMailStoreUntil: 'Store until...',
	delEditorMailDeleteAfter: 'Expiry Duration...',
	delEditorMailAllowAnonymous: 'Allow anonymous',

	deleteAfterUnitMinute: 'Minutes',
	deleteAfterUnitHour: 'Hours',
	deleteAfterUnitDay: 'Days',
	deleteAfterUnitWeek: 'Weeks',
	deleteAfterUnitMonth: 'Months',
	deleteAfterUnitYear: 'Years',

	delEditorMailLabelEmailTo: 'Email To',
	delEditorMailLabelInvalidDomainTip: 'Invalid Email Domain',
	delEditorMailLabelReplyTo: 'Reply To',
	delEditorMailLabelSubject: 'Subject',
	delEditorMailLabelBody: 'Body',
	delEditorMailLabelAttachmentType: 'Attachment Type',
	delEditorMailAttachmentFile: 'File Attachment',
	delEditorMailAttachmentLink: 'Download Link',
	delEditorMailAttachmentBody: 'Send Report as Body',
	delEditorMailChangeTextMode: 'Change Text Mode',
	delEditorMailUseRichText: 'Use Rich Text',
	delEditorMailUsePlainText: 'Use Plain Text',
	// ---------------------- //

	// -- Referenced Files -- //
	schNoReferencedFiles: 'no referenced documents',
	schName: 'Name',
	schCreator: 'Creator',
	// ---------------------- //

	// ------ Timezone ------ //
	taskExecutingTimezone: 'Executing Timezone',
	'timezone_Etc/GMT+11': '(UTC-11:00) Coordinated Universal Time-11',
	'timezone_America/Adak': '(UTC-10:00) Aleutian Islands',
	'timezone_Pacific/Honolulu': '(UTC-10:00) Hawaii',
	'timezone_Pacific/Marquesas': '(UTC-09:30) Marquesas Islands',
	'timezone_America/Anchorage': '(UTC-09:00) Alaska',
	'timezone_Etc/GMT+9': '(UTC-09:00) Coordinated Universal Time-09',
	'timezone_America/Tijuana': '(UTC-08:00) Baja California',
	'timezone_Etc/GMT+8': '(UTC-08:00) Coordinated Universal Time-08',
	'timezone_America/Los_Angeles': '(UTC-08:00) Pacific Time (US & Canada)',
	'timezone_America/Phoenix': '(UTC-07:00) Arizona',
	'timezone_America/Chihuahua': '(UTC-07:00) Chihuahua, La Paz, Mazatlan',
	'timezone_America/Denver': '(UTC-07:00) Mountain Time (US & Canada)',
	'timezone_America/Guatemala': '(UTC-06:00) Central America',
	'timezone_America/Chicago': '(UTC-06:00) Central Time (US & Canada)',
	'timezone_Pacific/Easter': '(UTC-06:00) Easter Island',
	'timezone_America/Mexico_City': '(UTC-06:00) Guadalajara, Mexico City, Monterrey',
	'timezone_America/Regina': '(UTC-06:00) Saskatchewan',
	'timezone_America/Bogota': '(UTC-05:00) Bogota, Lima, Quito, Rio Branco',
	'timezone_America/Cancun': '(UTC-05:00) Chetumal',
	'timezone_America/New_York': '(UTC-05:00) Eastern Time (US & Canada)',
	'timezone_America/Port-au-Prince': '(UTC-05:00) Haiti',
	'timezone_America/Havana': '(UTC-05:00) Havana',
	'timezone_America/Indiana/Indianapolis': '(UTC-05:00) Indiana (East)',
	'timezone_America/Grand_Turk': '(UTC-05:00) Turks and Caicos',
	'timezone_America/Asuncion': '(UTC-04:00) Asuncion',
	'timezone_America/Halifax': '(UTC-04:00) Atlantic Time (Canada)',
	'timezone_America/Caracas': '(UTC-04:00) Caracas',
	'timezone_America/Cuiaba': '(UTC-04:00) Cuiaba',
	'timezone_America/La_Paz': '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan',
	'timezone_America/Santiago': '(UTC-04:00) Santiago',
	'timezone_America/St_Johns': '(UTC-03:30) Newfoundland',
	'timezone_America/Araguaina': '(UTC-03:00) Araguaina',
	'timezone_America/Sao_Paulo': '(UTC-03:00) Brasilia',
	'timezone_America/Cayenne': '(UTC-03:00) Cayenne, Fortaleza',
	'timezone_America/Argentina/Buenos_Aires': '(UTC-03:00) City of Buenos Aires',
	'timezone_America/Godthab': '(UTC-03:00) Greenland',
	'timezone_America/Montevideo': '(UTC-03:00) Montevideo',
	'timezone_America/Punta_Arenas': '(UTC-03:00) Punta Arenas',
	'timezone_America/Miquelon': '(UTC-03:00) Saint Pierre and Miquelon',
	'timezone_America/Bahia': '(UTC-03:00) Salvador',
	'timezone_Etc/GMT+2': '(UTC-02:00) Coordinated Universal Time-02',
	'timezone_Atlantic/Azores': '(UTC-01:00) Azores',
	'timezone_Atlantic/Cape_Verde': '(UTC-01:00) Cabo Verde Is.',
	'timezone_Etc/UTC': '(UTC) Coordinated Universal Time',
	'timezone_Europe/London': '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
	'timezone_Atlantic/Reykjavik': '(UTC+00:00) Monrovia, Reykjavik',
	'timezone_Africa/Sao_Tome': '(UTC+00:00) Sao Tome',
	'timezone_Africa/Casablanca': '(UTC+01:00) Casablanca',
	'timezone_Europe/Berlin': '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
	'timezone_Europe/Budapest': '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
	'timezone_Europe/Paris': '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
	'timezone_Europe/Warsaw': '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
	'timezone_Africa/Lagos': '(UTC+01:00) West Central Africa',
	'timezone_Asia/Amman': '(UTC+02:00) Amman',
	'timezone_Europe/Bucharest': '(UTC+02:00) Athens, Bucharest',
	'timezone_Asia/Beirut': '(UTC+02:00) Beirut',
	'timezone_Africa/Cairo': '(UTC+02:00) Cairo',
	'timezone_Europe/Chisinau': '(UTC+02:00) Chisinau',
	'timezone_Asia/Damascus': '(UTC+02:00) Damascus',
	'timezone_Asia/Hebron': '(UTC+02:00) Gaza, Hebron',
	'timezone_Africa/Johannesburg': '(UTC+02:00) Harare, Pretoria',
	'timezone_Europe/Kiev': '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
	'timezone_Asia/Jerusalem': '(UTC+02:00) Jerusalem',
	'timezone_Europe/Kaliningrad': '(UTC+02:00) Kaliningrad',
	'timezone_Africa/Khartoum': '(UTC+02:00) Khartoum',
	'timezone_Africa/Tripoli': '(UTC+02:00) Tripoli',
	'timezone_Africa/Windhoek': '(UTC+02:00) Windhoek',
	'timezone_Asia/Baghdad': '(UTC+03:00) Baghdad',
	'timezone_Europe/Istanbul': '(UTC+03:00) Istanbul',
	'timezone_Asia/Riyadh': '(UTC+03:00) Kuwait, Riyadh',
	'timezone_Europe/Minsk': '(UTC+03:00) Minsk',
	'timezone_Europe/Moscow': '(UTC+03:00) Moscow, St. Petersburg',
	'timezone_Africa/Nairobi': '(UTC+03:00) Nairobi',
	'timezone_Asia/Tehran': '(UTC+03:30) Tehran',
	'timezone_Asia/Dubai': '(UTC+04:00) Abu Dhabi, Muscat',
	'timezone_Europe/Astrakhan': '(UTC+04:00) Astrakhan, Ulyanovsk',
	'timezone_Asia/Baku': '(UTC+04:00) Baku',
	'timezone_Europe/Samara': '(UTC+04:00) Izhevsk, Samara',
	'timezone_Indian/Mauritius': '(UTC+04:00) Port Louis',
	'timezone_Europe/Saratov': '(UTC+04:00) Saratov',
	'timezone_Asia/Tbilisi': '(UTC+04:00) Tbilisi',
	'timezone_Europe/Volgograd': '(UTC+04:00) Volgograd',
	'timezone_Asia/Yerevan': '(UTC+04:00) Yerevan',
	'timezone_Asia/Kabul': '(UTC+04:30) Kabul',
	'timezone_Asia/Tashkent': '(UTC+05:00) Ashgabat, Tashkent',
	'timezone_Asia/Yekaterinburg': '(UTC+05:00) Ekaterinburg',
	'timezone_Asia/Karachi': '(UTC+05:00) Islamabad, Karachi',
	'timezone_Asia/Qyzylorda': '(UTC+05:00) Qyzylorda',
	'timezone_Asia/Kolkata': '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
	'timezone_Asia/Colombo': '(UTC+05:30) Sri Jayawardenepura',
	'timezone_Asia/Kathmandu': '(UTC+05:45) Kathmandu',
	'timezone_Asia/Almaty': '(UTC+06:00) Astana',
	'timezone_Asia/Dhaka': '(UTC+06:00) Dhaka',
	'timezone_Asia/Omsk': '(UTC+06:00) Omsk',
	'timezone_Asia/Yangon': '(UTC+06:30) Yangon (Rangoon)',
	'timezone_Asia/Bangkok': '(UTC+07:00) Bangkok, Hanoi, Jakarta',
	'timezone_Asia/Barnaul': '(UTC+07:00) Barnaul, Gorno-Altaysk',
	'timezone_Asia/Hovd': '(UTC+07:00) Hovd',
	'timezone_Asia/Krasnoyarsk': '(UTC+07:00) Krasnoyarsk',
	'timezone_Asia/Novosibirsk': '(UTC+07:00) Novosibirsk',
	'timezone_Asia/Tomsk': '(UTC+07:00) Tomsk',
	'timezone_Asia/Shanghai': '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
	'timezone_Asia/Irkutsk': '(UTC+08:00) Irkutsk',
	'timezone_Asia/Singapore': '(UTC+08:00) Kuala Lumpur, Singapore',
	'timezone_Australia/Perth': '(UTC+08:00) Perth',
	'timezone_Asia/Taipei': '(UTC+08:00) Taipei',
	'timezone_Asia/Ulaanbaatar': '(UTC+08:00) Ulaanbaatar',
	'timezone_Australia/Eucla': '(UTC+08:45) Eucla',
	'timezone_Asia/Chita': '(UTC+09:00) Chita',
	'timezone_Asia/Tokyo': '(UTC+09:00) Osaka, Sapporo, Tokyo',
	'timezone_Asia/Pyongyang': '(UTC+09:00) Pyongyang',
	'timezone_Asia/Seoul': '(UTC+09:00) Seoul',
	'timezone_Asia/Yakutsk': '(UTC+09:00) Yakutsk',
	'timezone_Australia/Adelaide': '(UTC+09:30) Adelaide',
	'timezone_Australia/Darwin': '(UTC+09:30) Darwin',
	'timezone_Australia/Brisbane': '(UTC+10:00) Brisbane',
	'timezone_Australia/Sydney': '(UTC+10:00) Canberra, Melbourne, Sydney',
	'timezone_Pacific/Port_Moresby': '(UTC+10:00) Guam, Port Moresby',
	'timezone_Australia/Hobart': '(UTC+10:00) Hobart',
	'timezone_Asia/Vladivostok': '(UTC+10:00) Vladivostok',
	'timezone_Australia/Lord_Howe': '(UTC+10:30) Lord Howe Island',
	'timezone_Pacific/Bougainville': '(UTC+11:00) Bougainville Island',
	'timezone_Asia/Srednekolymsk': '(UTC+11:00) Chokurdakh',
	'timezone_Asia/Magadan': '(UTC+11:00) Magadan',
	'timezone_Pacific/Norfolk': '(UTC+11:00) Norfolk Island',
	'timezone_Asia/Sakhalin': '(UTC+11:00) Sakhalin',
	'timezone_Pacific/Guadalcanal': '(UTC+11:00) Solomon Is., New Caledonia',
	'timezone_Asia/Kamchatka': '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky',
	'timezone_Pacific/Auckland': '(UTC+12:00) Auckland, Wellington',
	'timezone_Etc/GMT-12': '(UTC+12:00) Coordinated Universal Time+12',
	'timezone_Pacific/Fiji': '(UTC+12:00) Fiji',
	'timezone_Pacific/Chatham': '(UTC+12:45) Chatham Islands',
	'timezone_Etc/GMT-13': '(UTC+13:00) Coordinated Universal Time+13',
	'timezone_Pacific/Tongatapu': "(UTC+13:00) Nuku'alofa",
	'timezone_Pacific/Apia': '(UTC+13:00) Samoa',
	'timezone_Pacific/Kiritimati': '(UTC+14:00) Kiritimati Island',
	// ---------------------- //

	// ------ Rich text tooltips ------ //
	'ql-header': 'Style',
	'ql-bold': 'Bold',
	'ql-italic': 'Italic',
	'ql-underline': 'Underline',
	'ql-strike': 'Strikethrough',
	'ql-blockquote': 'Blockquote',
	'ql-list-ordered': 'Numbered list',
	'ql-list-bullet': 'Bullet list',
	'ql-indent--1': 'Decrease indent',
	'ql-indent-+1': 'Increase indent',
	'ql-script-sub': 'Subscript',
	'ql-script-super': 'Superscript',
	'ql-color': 'Text color',
	'ql-background': 'Background color',
	'ql-size': 'Text size',
	'ql-font': 'Text font',
	'ql-align': 'Text align',
	'ql-image': 'Image',
	'ql-clean': 'Clear formatting',
	// ---------------------- //
};