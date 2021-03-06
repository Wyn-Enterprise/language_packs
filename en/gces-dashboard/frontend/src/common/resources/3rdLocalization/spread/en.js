/* eslint-disable */

const en = {
  //#region Spread Dialog
  title: "",
  defaultFont: "10pt Arial",
  ok: "OK",
  yes: "Yes",
  no: "No",
  apply: "Apply",
  cancel: "Cancel",
  close: "Close",

  customFormat: "Custom",
  generalFormat: "General",

  conditionalFormat: {
    highlightCellsRules: "Highlight Cells Rules",
    topBottomRules: "Top/Bottom Rules",
    dataBars: "Data Bars",
    colorScales: "Color Scales",
    iconSets: "Icon Sets",
    newRule: "New Rule...",
    clearRules: "Clear Rules...",
    manageRules: "Manage Rules...",

    greaterThan: "Greater Than...",
    lessThan: "Less Than...",
    between: "Between...",
    equalTo: "Equal To...",
    textThatContains: "Text that Contains...",
    aDateOccurring: "A Date Occurring...",
    duplicateValues: "Duplicate Values...",
    moreRules: "More Rules...",

    top10Items: "Top 10 Items...",
    bottom10Items: "Bottom 10 Items...",
    aboveAverage: "Above Average...",
    belowAverage: "Below Average...",

    gradientFill: "Gradient Fill",
    solidFill: "Solid Fill",
    directional: "Directional",
    shapes: "Shapes",
    indicators: "Indicators",
    ratings: "Ratings",

    clearRulesFromSelectedCells: "Clear Rules from Selected Cells",
    clearRulesFromEntireSheet: "Clear Rules from Entire Sheet"
  },

  conditionalFormatting: {
    common: {
      'with': "with",
      selectedRangeWith: "for the selected range with",
      and: "and"
    },
    greaterThan: {
      title: "Greater Than",
      description: "Format cells that are GREATER THAN:"
    },
    lessThan: {
      title: "Less Than",
      description: "Format cells that are LESS THAN:"
    },
    between: {
      title: "Between",
      description: "Format cells that are BETWEEN:"
    },
    equalTo: {
      title: "Equal To",
      description: "Format cells that are EQUAL TO:"
    },
    textThatCotains: {
      title: "Text That Contains",
      description: "Format cells that contain the text:"
    },
    dateOccurringFormat: {
      title: "Recurring Dates",
      description: "Format cells that contain a recurring date:",
      date: {
        yesterday: "Yesterday",
        today: "Today",
        tomorrow: "Tomorrow",
        last7days: "In the last 7 days",
        lastweek: "Last week",
        thisweek: "This week",
        nextweek: "Next week",
        lastmonth: "Last month",
        thismonth: "This month",
        nextmonth: "Next month"
      }
    },
    duplicateValuesFormat: {
      title: "Duplicate Values",
      description: "Format cells that contain:",
      type: {
        duplicate: "Duplicate",
        unique: "Unique"
      },
      valueswith: "values with"
    },
    top10items: {
      title: "Top 10 Items",
      description: "Format cells that rank in the TOP:"
    },
    bottom10items: {
      title: "Bottom 10 Items",
      description: "Format cells that rank in the BOTTOM:"
    },
    aboveAverage: {
      title: "Above Average",
      description: "Format cells that are ABOVE AVERAGE:"
    },
    belowAverage: {
      title: "Below Average",
      description: "Format cells that are BELOW AVERAGE:"
    },
    newFormattingRule: {
      title: "New Formatting Rule",
      title2: "Edit Formatting Rule",
      description1: "Select a Rule Type:",
      description2: "Edit the Rule Description:",
      ruleType: {
        formatOnValue: "►Format all cells based on their values",
        formatContain: "►Format only cells that contain",
        formatRankedValue: "►Format only top or bottom ranked values",
        formatAbove: "►Format only values that are above or below average",
        formatUnique: "►Format only unique or duplicate values",
        useFormula: "►Use a formula to determine which cells to format"
      },
      formatOnValue: {
        description: "Format all cells based on their values:",
        formatStyle: "Format style:",
        formatStyleSelector: {
          color2: "2-Color Scale",
          color3: "3-Color Scale",
          dataBar: "Data Bar",
          iconSets: "Icon Sets"
        },
        color2: {
          min: "Minimum",
          max: "Maximum",
          type: "Type:",
          value: "Value:",
          color: "Color:",
          preview: "Preview",
          minSelector: {
            lowest: "Lowest Value"
          },
          maxSelector: {
            highest: "Highest Value"
          }
        },
        color3: {
          mid: "MidPoint"
        },
        dataBar: {
          showBarOnly: "Show Bar Only",
          auto: "Automatic",
          description2: "Bar Appearance:",
          fill: "Fill",
          color: "Color",
          border: "Border",
          fillSelector: {
            solidFill: "Solid Fill",
            gradientFill: "Gradient Fill"
          },
          borderSelector: {
            noBorder: "No Border",
            solidBorder: "Solid Border"
          },
          negativeBtn: "Negative value and Axis...",
          barDirection: "Bar Direction:",
          barDirectionSelector: {
            l2r: "Left-to-Right",
            r2l: "Right-to-left"
          },
          preview: "Preview",
          negativeDialog: {
            title: "Negative Value and Axis Settings",
            group1: {
              title: "Negative bar fill color",
              fillColor: "Fill Color:",
              apply: "Apply the same fill color as the positive bar"
            },
            group2: {
              title: "Negative bar border color",
              borderColor: "Border Color:",
              apply: "Apply the same border color as the positive bar"
            },
            group3: {
              title: "Axis settings",
              description: "Select axis position in cell to change the appearance of bars for negative values",
              radio: {
                auto: "Automatic (display at variable positions based on negative values)",
                cell: "Cell midpoint",
                none: "None (show negative value bars in same direction as positive)"
              },
              axisColor: "Axis color:"
            }
          }
        },
        iconSets: {
          iconStyle: "Icon style:",
          showIconOnly: "Show Icon Only",
          reverseIconOrder: "Reverse Icon Order",
          display: "Display each icon according to these rules:",
          icon: "Icon",
          value: "Value",
          type: "Type",
          description1: "when value is",
          description2: "when < ",
          operator: {
            largeOrEqu: ">=",
            large: ">"
          }
        },
        commonSelector: {
          num: "Number",
          percent: "Percent",
          formula: "Formula",
          percentile: "Percentile"
        }
      },
      formatContain: {
        description: "Format only cells with:",
        type: {
          cellValue: "Cell Value",
          specificText: "Specific Text",
          dateOccurring: "Dates Occurring",
          blanks: "Blanks",
          noBlanks: "No Blanks",
          errors: "Errors",
          noErrors: "No Errors"
        },
        operator_cellValue: {
          between: "between",
          notBetween: "not between",
          equalTo: "equal to",
          notEqualTo: "not equal to",
          greaterThan: "greater than",
          lessThan: "less than",
          greaterThanOrEqu: "greater than or equal to",
          lessThanOrEqu: "less than or equal to"
        },
        operator_specificText: {
          containing: "containing",
          notContaining: "not Containing",
          beginningWith: "beginning with",
          endingWith: "ending with"
        }
      },
      formatRankedValue: {
        description: "Format cells that rank in the:",
        type: {
          top: "Top",
          bottom: "Bottom"
        }
      },
      formatAbove: {
        description: "Format cells that are:",
        type: {
          above: "above",
          below: "below",
          equalOrAbove: "equal or above",
          equalOrBelow: "equal or below",
          std1Above: "1 STD DEV above",
          std1Below: "1 STD DEV below",
          std2Above: "2 STD DEV above",
          std2Below: "2 STD DEV below",
          std3Above: "3 STD DEV above",
          std3Below: "3 STD DEV below"
        },
        description2: "the average for the selected range"
      },
      formatUnique: {
        description: "Format all:",
        type: {
          duplicate: "duplicate",
          unique: "unique"
        },
        description2: "values in the selected range"
      },
      useFormula: {
        description: "Format values where this formula is true:"
      },
      preview: {
        description: "Preview:",
        buttonText: "Format...",
        noFormat: "No Format Set",
        hasFormat: "AaBbCcYyZz"
      }
    },
    withStyle: {
      lightRedFill_DarkRedText: "Light Red Fill with Dark Red Text",
      yellowFill_DrakYellowText: "Yellow Fill with Dark Yellow Text",
      greenFill_DarkGreenText: "Green Fill with Dark Green Text",
      lightRedFill: "Light Red Fill",
      redText: "Red Text",
      redBorder: "Red Border",
      customFormat: "Custom Format..."
    },
    exceptions: {
      e1: "The value you entered is not a valid number, date, time, or string.",
      e2: "Enter a value.",
      e3: "Enter a whole number between 1 and 1000.",
      e4: "The value you entered cannot be empty.",
      e5: "This type of reference cannot be used in a Conditional Formatting formula.\nChange the reference to a single cell, or use the reference with a worksheet function, such as =SUM(A1:E5).",
      e6: "The source range of a formula rule can only be a single range!"
    }
  },

  formattingRulesManagerDialog: {
    title: "Conditional Formatting Rules Manager",
    rulesScopeLabel: "Formatting rules for this worksheet: ",
    rulesScopeForSelection: "Current Selection",
    rulesScopeForWorksheet: "This Worksheet",
    newRule: "New Rule...",
    editRule: "Edit Rule...",
    deleteRule: "Delete Rule...",
    gridTitleRule: "Rule (applied in order shown)",
    gridTitleFormat: "Format",
    gridTitleAppliesTo: "Applies to",
    gridTitleStopIfTrue: "Stop If True",
    ruleDescriptions: {
      valueBetween: 'Cell value between {0} and {1}',
      valueNotBetween: 'Cell value not between {0} and {1}',
      valueEquals: 'Cell value = {0}',
      valueNotEquals: 'Cell value <> {0}',
      valueGreateThan: 'Cell value > {0}',
      valueGreateThanOrEquals: 'Cell value >= {0}',
      valueLessThan: 'Cell value < {0}',
      valueLessThanOrEquals: 'Cell value <= {0}',
      valueContains: 'Cell value contains "{0}"',
      valueNotContains: 'Cell value does not contain "{0}"',
      valueBeginsWith: 'Cell value begins with "{0}"',
      valueEndsWith: 'Cell value ends with "{0}"',
      last7Days: 'Last 7 days',
      lastMonth: 'Last Month',
      lastWeek: 'Last Week',
      nextMonth: 'Next Month',
      nextWeek: 'Next Week',
      thisMonth: 'This Month',
      thisWeek: 'This Week',
      today: 'Today',
      tomorrow: 'Tomorrow',
      yesterday: 'Yesterday',
      duplicateValues: 'Duplicate Values',
      uniqueValues: 'Unique Values',
      top: 'Top {0}',
      bottom: 'Bottom {0}',
      above: 'Above Average',
      above1StdDev: '1 STD DEV above Average',
      above2StdDev: '2 STD DEV above Average',
      above3StdDev: '3 STD DEV above Average',
      below: 'Below Average',
      below1StdDev: '1 STD DEV below Average',
      below2StdDev: '2 STD DEV below Average',
      below3StdDev: '3 STD DEV below Average',
      equalOrAbove: 'Equal to or above Average',
      equalOrBelow: 'Equal to or below Average',
      dataBar: 'Data Bar',
      twoScale: 'Graded Color Scale',
      threeScale: 'Graded Color Scale',
      iconSet: 'Icon Set',
      formula: 'Formula: {0}'
    },
    previewText: 'AaBbCcYyZz'
  },

  formatDialog: {
    title: "Format Cells",
    fieldTitle: "Format Field",
    chartTitle: "Format Chart",
    number: 'Number',
    alignment: 'Alignment',
    font: 'Font',
    border: 'Border',
    fill: 'Fill',
    protection: 'Protection',
    category: 'Category:',
    backColor: 'Background Color',
    textAlignment: 'Text Alignment',
    horizontalAlignment: 'Horizontal:',
    verticalAlignment: 'Vertical:',
    indent: 'Indent:',
    textControl: 'Text control',
    wrapText: 'Wrap Text',
    shrink: 'Shrink to Fit',
    merge: 'Merge Cells',
    top: 'Top',
    bottom: 'Bottom',
    left: 'Left',
    right: 'Right',
    center: 'Center',
    general: 'General',
    sampleText: 'Text',
    cantMergeMessage: 'Cannot merge overlapping ranges.',
    lock: "Locked",
    lockComments: "Locking cells has no effect until you protect the worksheet(Review tab, Changes groups, Protect Sheet button).",
    backGroundColor: "Background Color:",
    moreColorsText: "More Colors",
    noFillText: "No Color",
    sample: "Sample",
    padding: "Padding",
  },

  borderDialog: {
    border: "Border",
    presets: "Presets",
    none: "None",
    outline: "Outline",
    inside: "Inside",
    line: "Line",
    text: "Text",
    comments: "The selected border style can be applied by clicking the presets, preview diagram, or the above buttons."
  },

  colorPicker: {
    themeColorsTitle: "Theme Colors",
    standardColorsTitle: "Standard Colors",
    noFillText: "No Color",
    moreColorsText: "More Colors...",
    colorDialogTitle: "Color",
    red: "Red: ",
    green: "Green: ",
    blue: "Blue: ",
    newLabel: "New",
    currentLabel: "Current",
  },
  fontPicker: {
    familyLabelText: 'Font:',
    styleLabelText: 'Font style:',
    sizeLabelText: 'Size:',
    weightLabelText: 'Weight:',
    colorLabelText: 'Color:',
    normalFontLabelText: 'Normal font',
    previewLabelText: 'Preview',
    previewText: 'AaBbCcYyZz',
    effects: "Effects",
    underline: "Underline",
    strikethrough: "Strikethrough",

    fontFamilies: {
      Arial: "Arial",
      'Arial Black': "Arial Black",
      Calibri: "Calibri",
      Cambria: "Cambria",
      Candara: "Candara",
      Century: "Century",
      'Courier New': "Courier New",
      'Comic Sans MS': "Comic Sans MS",
      Garamond: "Garamond",
      Georgia: "Georgia",
      'Malgun Gothic': "Malgun Gothic",
      Mangal: "Mangal",
      Tahoma: "Tahoma",
      Times: "Times",
      'Times New Roman': "Times New Roman",
      'Trebuchet MS': "Trebuchet MS",
      Verdana: "Verdana",
      Wingdings: "Wingdings",
      Meiryo: "Meiryo",
      'MS Gothic': "MS Gothic",
      'MS Mincho': "MS Mincho",
      'MS PGothic': "MS PGothic",
      'MS PMincho': "MS PMincho"
    },
    fontStyles: {
      normal: 'Normal',
      italic: 'Italic',
      oblique: 'Oblique'
    },
    fontWeights: {
      normal: 'Normal',
      bold: 'Bold',
      bolder: 'Bolder',
      lighter: 'Lighter'
    },
  },
  borderPicker: {
    lineStyleTitle: 'Style:',
    borderColorTitle: 'Color:',
  },
  categories: {
    general: "General",
    numbers: "Number",
    currency: "Currency",
    accounting: "Accounting",
    date: "Date",
    time: "Time",
    percentage: "Percentage",
    fraction: "Fraction",
    scientific: "Scientific",
    text: "Text",
    special: "Special",
    custom: "Custom"
  },

  formatNumberComments: {
    generalComments: "General format cells have no specific number format.",
    numberComments: "Number is used for general display of numbers. Currency and Accounting offer specialized formatting for monetary values.",
    currencyComments: "Currency formats are used for general monetary values. Use Accounting formats to align decimal points in a column.",
    accountingComments: "Accounting formats line up the currency symbols and decimal points in a column.",
    dateComments: "Date formats display date and time serial numbers as date values.",
    timeComments: "Time formats display date and time serial numbers as time values.",
    percentageComments: "Percentage formats multiply the cell value by 100 and display the result with a percent symbol.",
    textComments: "Text formatted cells are treated as text even when a number is in the cell. The cell is displayed exactly as entered.",
    specialComments: "Special formats are useful for tracking list and database values.",
    customComments: "Type the number format code using one of the existing codes as a starting point."
  },

  formatNumberPickerSetting: {
    type: "Type:",
    decimalPlaces: "Decimal places:",
    symbol: "Symbol:",
    negativeNumber: "Negative numbers:",
    separator: "Use 1000 Separator(,)",
    deleted: "Delete",
    locale: "locale (location):",
    calendar: "Calendar type:"
  },

  localeType: {
    en_us: "English(U.S.)",
    zh_cn: "China",
    
  },

  calendarType: {
    western: "Western",
    // JER: "Japanese Emperor Reign"
  },

  fractionFormats: [
    "# ?/?",
    "# ??/??",
    "# ???/???",
    "# ?/2",
    "# ?/4",
    "# ?/8",
    "# ??/16",
    "# ?/10",
    "# ??/100"
  ],

  numberFormats: [
    "0",
    "0;[Red]0",
    "0_);(0)",
    "0_);[Red](0)",
    "#,##0",
    "#,##0;[Red]#,##0",
    "#,##0_);(#,##0)",
    "#,##0_);[Red](#,##0)"
  ],

  dateFormats: [
    "m/d/yyyy",
    "[$-F800]dddd, mmmm dd, yyyy",
    "m/d;@",
    "m/d/yy;@",
    "mm/dd/yy;@",
    "[$-409]d-mmm;@",
    "[$-409]d-mmm-yy;@",
    "[$-409]dd-mmm-yy;@",
    "[$-409]mmm-yy;@",
    "[$-409]mmmm-yy;@",
    "[$-409]mmmm d, yyyy;@",
    "[$-409]m/d/yy h:mm AM/PM;@",
    "m/d/yy h:mm;@",
    "[$-409]mmmmm;@",
    "[$-409]mmmmm-yy;@",
    "m/d/yyyy;@",
    "[$-409]d-mmm-yyyy;@"
  ],

  chinaWesternDateFormat: [
    "yyyy-mm-dd;@",
    "[DBNum1][$-804]yyyy年m月d日;@",
    "[DBNum1][$-804]yyyy年m月;@",
    "[DBNum1][$-804]m月d日;@",
    "yyyy年m月d日;@",
    "yyyy年m月;@",
    "m月d日;@",
    "[$-804]aaaa;@",
    "[$-804]aaa;@",
    "yyyy/m/d;@",
    "[$-409]yyyy/m/d h:mm AM/PM;@",
    "yyyy/m/d h:mm;@",
    "m/d/yy;@",
    "m/d;@",
    "mm/dd/yy;@",
    "[$-409]d-mmm;@",
    "[$-409]d-mmm-yy;@",
    "[$-409]dd-mmm-yy;@",
    "[$-409]mmm-yy;@",
    "[$-409]mmmm-yy;@",
    "[$-409]mmmmm;@",
    "[$-409]mmmmm-yy;@"
  ],

  japanEmperorReignDateFormat: [
    "[$-411]ge.m.d;@",
    "[$-411]ggge'年'm'月'd'日';@"
  ],

  timeFormats: [
    "[$-F400]h:mm:ss AM/PM",
    "h:mm;@",
    "[$-409]h:mm AM/PM;@",
    "h:mm:ss;@",
    "[$-409]h:mm:ss AM/PM;@",
    "mm:ss.0;@",
    "[h]:mm:ss;@",
    "[$-409]m/d/yy h:mm AM/PM;@",
    "m/d/yy h:mm;@"
  ],

  chinaTimeFormats: [
    "h:mm;@",
    "[$-409]h:mm AM/PM;@",
    "h:mm:ss;@",
    "[$-409]h:mm:ss AM/PM;@",
    "上午/下午h时mm分;@",
    "上午/下午h时mm分ss秒;@",
    "[DBNum1][$-804]h时mm分;@",
    "[DBNum1][$-804]上午/下午h时mm分;@",
  ],

  textFormats: [
    "@"
  ],

  specialFormats: [
    "00000",
    "00000-0000",
    "[<=9999999]###-####;(###) ###-####",
    "000-00-0000"
  ],

  specialChinaFormats: [
    "000000",
    "[DBNum1][$-804]General",
    "[DBNum2][$-804]General"
  ],

  currencyFormats: [
    "#,##0",
    "#,##0;[Red]#,##0",
    "#,##0;-#,##0",
    "#,##0;[Red]-#,##0"
  ],

  percentageFormats: [
    "0%"
  ],

  scientificFormats: [
    "0E+00"
  ],

  accountingFormats: [
    "_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)"
  ],

  customFormats: [
    "General",
    "0",
    "0.00",
    "#,##0",
    "#,##0.00",
    "#,##0;(#,##0)",
    "#,##0;[Red](#,##0)",
    "#,##0.00;(#,##0.00)",
    "#,##0.00;[Red](#,##0.00)",
    "$#,##0;($#,##0)",
    "$#,##0;[Red]($#,##0)",
    "$#,##0.00;($#,##0.00)",
    "$#,##0.00;[Red]($#,##0.00)",
    "0%",
    "0.00%",
    "0.00E+00",
    "##0.0E+0",
    "# ?/?",
    "# ??/??",
    "m/d/yyyy",
    "d-mmm-yy",
    "d-mmm",
    "mmm-yy",
    "h:mm AM/PM",
    "h:mm:ss AM/PM",
    "hh:mm",
    "hh:mm:ss",
    "m/d/yyyy hh:mm",
    "mm:ss",
    "mm:ss.0",
    "@",
    "[h]:mm:ss",
    "$ #,##0;$ (#,##0);$ \"-\";@",
    " #,##0; (#,##0); \"-\";@",
    "$ #,##0.00;$ (#,##0.00);$ \"-\"??;@",
    " #,##0.00; (#,##0.00); \"-\"??;@",
    "hh:mm:ss",
    "00000",
    "# ???/???",
    "000-00-0000",
    "[$-4]dddd, mmmm dd, yyyy",
    "m/d;@",
    "[<=9999999]###-####;(###) ###-####",
    "# ?/8"
  ],

  accountingSymbol: [
    ["None", null, null],
    ["¥", "", "ja-JP"],
    ["$", "", "en-US"],
  ],

  specialType: [
    "Zip Code",
    "Zip Code + 4",
    "Phone Number",
    "Social Security Number"
  ],

  specialChinaType: [
    "邮政编码",
    "中文小写数字",
    "中文大写数字",
  ],

  fractionType: [
    "Up to one digit (1/4)",
    "Up to two digits (21/25)",
    "Up to three digits (312/943)",
    "As halves (1/2)",
    "As quarters (2/4)",
    "As eighths (4/8)",
    "As sixteenths (8/16)",
    "As tenths (3/10)",
    "As hundredths (30/100)"
  ],

  negativeNumbers: {
    "-1234.10": "-1234.10",
    "red:1234.10": "1234.10",
    "(1234.10)": "(1234.10)",
    "red:(1234.10)": "(1234.10)"
  },

  currencyNegativeNumbers: {
    "number1": "-1,234.10",
    "red:number2": "1,234.10",
    "number3": "-1,234.10",
    "red:number4": "-1,234.10"
  },

  insertFunctionDialog: {
    title: "Insert Function",
    functionCategory: "Function Category:",
    functionList: "Function List:",
    formula: "Formula:",
    functionCategorys: "All,Database,Date and Time,Engineering,Financial,Information,Logical,Lookup and Reference,Math and Trigonometry,Statistical,Text",
  },
  //#endregion
};

export default en;
