export const referenceConfig = [
    {
        "name": "isEnableRealTimeSync",
        "type": "select",
        "required": true,
        "description": "Enable real-time transactions",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Real Time Sync"
    },
    {
        "name": "isEnableDebugMode",
        "type": "select",
        "required": true,
        "description": "Enable debug mode for the application",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Debug Mode"
    },
    {
        "name": "apiRefresherTimeInterval",
        "type": "number",
        "required": true,
        "description": "Time interval for real-time sync (in minutes)",
        "defaultName": "Refresher Time Interval"
    },
    {
        "name": "apiTransDataRefresherTimeInterval",
        "type": "number",
        "required": true,
        "description": "Interval (in minutes) for auto-refresh of transactional data",
        "defaultName": "Transaction Data Refresher Time Interval"
    },
    {
        "name": "isEnableReceiveField",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Receive Field Enabled"
    },
    {
        "name": "isEnableUOMConversionField",
        "type": "select",
        "required": true,
        "description": "Enable UOM conversion field",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "UOM Conversion Field Enabled"
    },
    {
        "name": "isManualMode",
        "type": "select",
        "required": true,
        "description": "Enable manual scanning",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Manual Mode"

    },
    {
        "name": "isEnableMultiLotsSerial",
        "type": "select",
        "required": true,
        "description": "Enable multi-lot and serial management",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Multi Lots Serial Enabled"
    },
    {
        "name": "initialAPILoadInterval",
        "type": "number",
        "required": true,
        "description": "API load interval in days",
        "defaultName": "Api Load Interval"
    },
    {
        "name": "isEnableBackDirectOrgTransfer",
        "type": "select",
        "required": true,
        "description": "Enable back direct org transfer",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Back Direct Org Transfer Enabled"
    },
    {
        "name": "isEnableFIFOSuggestion",
        "type": "select",
        "required": true,
        "description": "Enable FIFO serial suggestions",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Fifo Suggestion Enabled"
    },
    {
        "name": "isLocatorControlled",
        "type": "select",
        "required": true,
        "description": "Enable locator-controlled inventory",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "locator Controlled"
    },
    {
        "name": "apiResponseTimeOut",
        "type": "number",
        "required": true,
        "description": "API call timeout in milliseconds",
        "defaultName": "Api Response Time Out"
    },
    {
        "name": "isIdleFeatureNeeded",
        "type": "select",
        "required": true,
        "description": "Enable app idle alert",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Idle Feature Needed"
    },
    {
        "name": "appIdleTime",
        "type": "number",
        "required": true,
        "description": "App Idle Time (in min.)",
        "defaultName": "App Idle Time"
    },
    {
        "name": "appIdleAlertTime",
        "type": "number",
        "required": true,
        "description": "App Idle Alert Time (in min.)",
        "defaultName": "Idle Alert Time"
    },
    {
        "name": "isSerialsShowSelected",
        "type": "select",
        "required": true,
        "description": "Show only selected/scanned serial item",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Serials Show Selected"
    },
    {
        "name": "isPrintShipReport",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Print Ship Report"
    },
    {
        "name": "isAutofocusNeededAtLogin",
        "type": "select",
        "required": true,
        "description": "Enable QR scan at login",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Auto Focus Login"
    },
    {
        "name": "isSkipScanningForOneItem",
        "type": "select",
        "required": true,
        "description": "Skip scanning for one item in modules",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Skip Single Item Scan"
    },
    {
        "name": "isConsolidateReceipts",
        "type": "select",
        "required": true,
        "description": "Enable receipt consolidation in goods receipt",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Consolidate Receipts"
    },
    {
        "name": "isSSOLogin",
        "type": "select",
        "required": true,
        "description": "Enable SSO for production login",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "SSO Login"
    },
    {
        "name": "isURLChangeNeeded",
        "type": "select",
        "required": true,
        "description": "Enable base URL change",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Url Change Needed"
    },
    {
        "name": "loadAllInvOrg",
        "type": "select",
        "required": true,
        "description": "Loads all inventory organizations",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Load All InvOrg"
    },
    {
        "name": "isEnableLabelCopy",
        "type": "select",
        "required": true,
        "description": "Enables label copy printing",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Label Copy Enabled"
    },
    {
        "name": "isEnableZebraScanning",
        "type": "select",
        "required": true,
        "description": "Enables Zebra scanning",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Zebra Scanning Enabled"
    },
    {
        "name": "isSubInvReverseEnable",
        "type": "select",
        "required": true,
        "description": "Enables sub-inventory reversal",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "SubInventory Reverse Enabled"
    },
    {
        "name": "isCrossReferenceRequired",
        "type": "select",
        "required": true,
        "description": "Enables cross-reference data usage",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Cross Reference Required"
    },
    {
        "name": "isEnableAccessTokenInAPI",
        "type": "select",
        "required": true,
        "description": "Enable access token for APIs",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Access Token In API"
    },
    {
        "name": "isUnlockItemNeeded",
        "type": "select",
        "required": true,
        "description": "Enable item unlocking",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Item Unlock Enabled"
    },
    {
        "name": "txnDeletionDay",
        "type": "number",
        "required": true,
        "description": "Transaction deletion period (in days)",
        "defaultName": "txn Deletion Day"
    },
    {
        "name": "isPickConsolidation",
        "type": "select",
        "required": true,
        "description": "Enables pick consolidation",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Pick Consolidation"
    },
    {
        "name": "disableLogs",
        "type": "select",
        "required": true,
        "description": "Disable logging",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Disable Logs"
    },
    {
        "name": "isVersionCheckRequired",
        "type": "select",
        "required": true,
        "description": "Enable app version check",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Version Check Required"
    },
    {
        "name": "isEnablePullDownRefresh",
        "type": "select",
        "required": true,
        "description": "Enables pull-down refresh",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Pull Down Refresh"
    },
    {
        "name": "isKeyboardRequiredOnInputTap",
        "type": "select",
        "required": true,
        "description": "Enable keyboard visibility on input tap",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Keyboard Required On Input Tap"
    },
    {
        "name": "queryLimitSize",
        "type": "number",
        "required": true,
        "description": "Maximum number of query results",
        "defaultName": "Query Limit"
    },
    {
        "name": "isEnableListView",
        "type": "select",
        "required": true,
        "description": "Enables the list view feature",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable List View"
    },
    {
        "name": "isNeededPeriodValidations",
        "type": "select",
        "required": true,
        "description": "Enable period validation",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Needed Period Validations"
    },
    {
        "name": "isTransactionHistoryDeleting",
        "type": "select",
        "required": true,
        "description": "Enable transaction history deletion",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Transaction History Deleting"
    },
    {
        "name": "isEnableAppStarter",
        "type": "select",
        "required": true,
        "description": "Initialize app root page",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable App Starter"
    },
    {
        "name": "isApkChangeLogsPageAvailable",
        "type": "select",
        "required": true,
        "description": "Enable viewing APK version logs",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Apk Change Logs Page Available"
    },
    {
        "name": "isEncryptedDb",
        "type": "select",
        "required": true,
        "description": "Enable encrypted database",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Encrypted Db"
    },
    {
        "name": "encryptKey",
        "type": "text",
        "required": true,
        "description": "Key for data encryption",
        "defaultName": "Encrypt Key"
    },
    {
        "name": "isEnableSSLpinning",
        "type": "select",
        "required": true,
        "description": "Enable SSL certificate pinning",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable SSL Pinning"
    },
    {
        "name": "isDebugMode",
        "type": "select",
        "required": true,
        "description": "Enable debug logging for API requests",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Debug Mode"
    },
    {
        "name": "checkRootedAndroidDevice",
        "type": "select",
        "required": true,
        "description": "Enable root device check",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Check Rooted Android Device"
    },
    {
        "name": "csvPrimaryKeySperator",
        "type": "text",
        "required": true,
        "description": "Separator for CSV key formatting",
        "defaultName": "CSV PrimaryKey Seperator"
    },
    {
        "name": "changeLanguageOptionsAvailable",
        "type": "select",
        "required": true,
        "description": "Shows if language change options are available",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Change Language Options Available"
    },
    {
        "name": "defaultAppLanguage",
        "type": "text",
        "required": true,
        "description": "Specifies the default language for the app",
        "defaultName": "Default App Language"
    },
    {
        "name": "isStayLastPage",
        "type": "select",
        "required": true,
        "description": "Controls staying on the current page based on conditions",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Stay Last Page"
    },
    {
        "name": "isPackingDoneBeforePicking",
        "type": "select",
        "required": true,
        "description": "Determines whether to call `getSalesOrdersForPacking` (false) or `getSalesOrdersForPicking` (true) in the SO PACK tile",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Packing Done Before Picking"
    },
    {
        "name": "useFrontEgg",
        "type": "select",
        "required": true,
        "description": "To use front-egg for authenticating, instead of EBS",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Use Front Egg"
    },
    {
        "name": "encryptSecurityKey",
        "type": "text",
        "required": true,
        "description": "Key used for encrypting data",
        "defaultName": "Encrypt Security Key"
    },
    {
        "name": "enableSecurity",
        "type": "select",
        "required": true,
        "description": "Enables security features like encryption",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Security"
    },
    {
        "name": "enableCompleteSerialValidationForShipLPN",
        "type": "select",
        "required": true,
        "description": "To do 100% serial-validation in SHIP_LPN",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Complete Serial Validation For ShipLPN"
    },
    {
        "name": "enableSerialValidationForPackTile",
        "type": "select",
        "required": true,
        "description": "Enables serial validation at the DeliveryId level",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Serial Validation For PackTile"
    },
    {
        "name": "enableSerialValidationForPackTileAtDeliveryLevel",
        "type": "select",
        "required": true,
        "description": "Enables serial validation at the DeliveryLineId level",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Serial Validation For PackTile At DeliveryLevel"
    },
    {
        "name": "loadUnscheduledFromItemsTable",
        "type": "select",
        "required": true,
        "description": "Controls loading unscheduled items",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Load Unscheduled From ItemsTable"
    },
    {
        "name": "copyReqId",
        "type": "select",
        "required": true,
        "description": "Enables serial validation at the DeliveryLineId level",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Copy ReqId"
    },
    {
        "name": "reqIdDelimiter",
        "type": "text",
        "required": true,
        "description": "Delimiter used to separate the message and request ID",
        "defaultName": "ReqId Delimiter"

    },
    {
        "name": "enableSuccessLogMode",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Success Log Mode"
    }
]
