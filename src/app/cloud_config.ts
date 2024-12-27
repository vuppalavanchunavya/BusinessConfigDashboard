export const referenceCloudConfig = [
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
        "defaultName": "API Refresher Time Interval"
    },
    {
        "name": "isEnableAutoLabelPrint",
        "type": "select",
        "required": true,
        "description": "Enable to make transactions online",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Auto Label Print"
    },
    {
        "name": "apiTransDataRefresherTimeInterval",
        "type": "number",
        "required": true,
        "description": "Interval (in minutes) for auto-refresh of transactional data",
        "defaultName": "API Trans Data Refresher Time Interval"
    },
    {
        "name": "invOrgId",
        "type": "number",
        "required": true,
        "description": "Stores the inventory organization Id",
        "defaultName": "Inv Org Id"
    },
    {
        "name": "orgId",
        "type": "number",
        "required": true,
        "description": "Stores the organization Id",
        "defaultName": "Org Id"
    },
    {
        "name": "employeeId",
        "type": "number",
        "required": true,
        "description": "Stores employeeId",
        "defaultName": "Employee Id"
    },
    {
        "name": "serverOffsetTime",
        "type": "number",
        "required": true,
        "description": "Time difference between the server and local time",
        "defaultName": "Server OffSet Time"
    },
    {
        "name": "soldtoLegalEntity",
        "type": "text",
        "required": true,
        "description": "",
        "defaultName": "Sold To Legal Entity"
    },
    {
        "name": "listOfResp",
        "type": "select",
        "required": true,
        "description": "stores the list of responsiblities",
        "options": [
            "OPERATING_UNIT: Operating Unit",
            "INV_ORG: Inventory Organization",
            "SUB_INV: Sub Inventory",
            "RESTRICTED_SUB_INV: Restricted Sub Inventory",
            "LOCATORS: Locators",
            "RESTRICTED_LOCATORS: Restricted Locators",
            "ITEM: Item",
            "ITEM_ON_HAND: Item On Hand",
            "ACCOUNT: Account",
            "LOT_NUMBER: Lot Number",
            "SERIAL_NUMBER: Serial Number",
            "MAT_SUB_INV: Material Sub Inventory",
            "MAT_LOCATORS: Material Locators",
            "WIP_COMPLETE_LPN: Work-In-Progress Complete LPN",
            "SO_PACK_LPN: Sales Order Pack LPN",
            "PACK_LPN: Pack LPN",
            "ON_HAND_QUANTITIES: On-Hand Quantities",
            "GOODS_RECEIPTS: Goods Receipts",
            "PO_INSPECTION: Purchase Order Inspection",
            "MOVE_ORDERS: Move Orders",
            "PO_RETURNS: Purchase Order Returns",
            "CYCLE_COUNTS: Cycle Counts",
            "CYCLE_COUNT_SEQUENCE: Cycle Count Sequence",
            "MAT_ISSUE_WO: Material Issue Work Order",
            "MAT_RETURN_WO: Material Return Work Order",
            "SUB_INV_TRANS: Sub Inventory Transfer",
            "DIRECT_ORG_TRANSFER: Direct Organization Transfer",
            "WIP_COMPLETION: Work-In-Progress Completion",
            "PUT_AWAY: Put Away",
            "PACK_CONFIRM: Pack Confirm",
            "SHIP_CONFIRM: Ship Confirm",
            "SHIP_UPDATE: Ship Update",
            "PICK_RELEASE: Pick Release",
            "WIP_ISSUE: Work-In-Progress Issue",
            "WIP_RETURN: Work-In-Progress Return",
            "WIP_NEGATIVE_ISSUE: Work-In-Progress Negative Issue",
            "WIP_NEGATIVE_RETURN: Work-In-Progress Negative Return",
            "WIP_ASSEMBLY_AND_MOVE_TRANSACTIONS: Work-In-Progress Assembly and Move Transactions",
            "LPN: License Plate Number",
            "LPN_CONTEXT_1: LPN Context 1",
            "LPN_CONTEXT_5: LPN Context 5",
            "WIP_LPN: Work-In-Progress LPN",
            "LPN_LIST: LPN List",
            "MISC_ISSUE: Miscellaneous Issue",
            "MISC_ISSUE_FROM_PROJECT: Miscellaneous Issue From Project",
            "MISC_RECEIPT: Miscellaneous Receipt",
            "MISC_RECEIPT_TO_PROJECT: Miscellaneous Receipt To Project",
            "PARTS_RECEIPT: Parts Receipt",
            "SCRAP_RECEIPT: Scrap Receipt",
            "PARTS_ISSUE: Parts Issue",
            "PROOF_OF_DELIVERY: Proof of Delivery",
            "REASON: Reason",
            "GL_PERIODS: General Ledger Periods",
            "INVENTORY_PERIODS: Inventory Periods",
            "UNPACK_LPN: Unpack LPN",
            "ALL_WMS_TASKS: All WMS Tasks",
            "CYCLE_COUNT_TASKS: Cycle Count Tasks",
            "MOVE_COMPLETION_PACK: Move Completion Pack",
            "CLOSED_WO_OVER_COMPLETION: Closed Work Order Over Completion",
            "RECEIVING_LPN: Receiving LPN",
            "QUALITY_CODES: Quality Codes",
            "LPN_INQUIRY: LPN Inquiry",
            "PHYSICAL_COUNTS: Physical Counts",
            "ITEM_INQUIRY: Item Inquiry",
            "LPN_SPLIT: LPN Split",
            "PROJECTS: Projects",
            "PROJECTS_CHILD_TASKS: Projects Child Tasks",
            "EXPENDITURE_TYPES: Expenditure Types",
            "PROJECT_ORG_LOV: Project Organization List of Values",
            "INVENTORY_TRANSACTION_TYPES: Inventory Transaction Types",
            "LPN_MERGE: LPN Merge",
            "ASSET_TRANSFER: Asset Transfer",
            "EMPLOYEE: Employee",
            "LOCATION: Location",
            "LOT_SPLIT: Lot Split",
            "LOT_MERGE: Lot Merge",
            "RMA_TRACKING: Return Material Authorization Tracking",
            "ORDER_TRACKING: Order Tracking",
            "RETURN_REASONS: Return Reasons",
            "PURCHASE_REQUISITION: Purchase Requisition",
            "SALES_ORDER: Sales Order",
            "SERVICE_ORDER: Service Order",
            "PLANNING_REPORT: Planning Report",
            "RECEIVABLE_INVOICE: Receivable Invoice",
            "CREATE_REQUISITION: Create Requisition",
            "ACCOUNT_ALIAS_ISSUE: Account Alias Issue",
            "ACCOUNT_ALIAS_RECEIPT: Account Alias Receipt",
            "ACCOUNT_ALIAS: Account Alias",
            "PURCHASING_PERIODS: Purchasing Periods",
            "VENDOR_RECEIPT_NUMBER: Vendor Receipt Number",
            "PICK_CONFIRM: Pick Confirm",
            "QUALITY_PLAN: Quality Plan",
            "UOM_CONVERSION: Unit of Measure Conversion",
            "ITEM_REVISION: Item Revision",
            "CHARGE_RESOURCES_TO_OPERATIONS: Charge Resources to Operations",
            "WIP_OPERATIONS: Work-In-Progress Operations",
            "FROM_OPERATION: From Operation",
            "WIP_ASSEMBLY_MOVE: Work-In-Progress Assembly Move",
            "LOCATORS_WITH_SEGMENTS: Locators With Segments",
            "ITEM_TRANSACTION_DEFAULT: Item Transaction Default",
            "LOCATOR_INQUIRY: Locator Inquiry",
            "ON_HAND_QUANTITIES: On-Hand Quantities",
            "ASSET_MOVE: Asset Move",
            "ASSET_INSTALL: Asset Install",
            "ASSET_ITEM_INSTANCE: Asset Item Instance",
            "ASSET_ITEM_INSTANCE_STATUS: Asset Item Instance Status",
            "ASSET_ITEM_INSTANCE_LOCATION: Asset Item Instance Location",
            "ASSET_RETIRE: Asset Retirement",
            "ASSET_UNINSTALL: Asset Uninstall",
            "ASSET_PUT_INTO_SERVICE: Asset Put Into Service",
            "ASSET_TRACKING: Asset Tracking",
            "ASSET_TAKE_OUT_OF_SERVICE: Asset Take Out of Service",
            "NEW_ITEM_ONHAND: New Item On Hand",
            "PAR_REPLENISHMENT: Periodic Replenishment",
            "RECEIPT_CORRECTION: Receipt Correction",
            "PO_QUALITY_PLAN: Purchase Order Quality Plan",
            "WORK_ORDER_NOTES: Work Order Notes",
            "ITEM_CROSS_REFERENCE: Item Cross Reference",
            "QC_ADMIN: Quality Control Admin",
            "PRIMARY_PURCHASE_ORDER: Primary Purchase Order",
            "SECONDARY_PURCHASE_ORDER: Secondary Purchase Order",
            "TOTE: Tote",
            "SERIAL_INQUIRY: Serial Inquiry",
            "MASTER_API: Master API",
            "CONFIG_API: Configuration API",
            "ASSEMBLY_SERIALS: Assembly Serials",
            "SHIP_LANE_UPDATE_CONFIRM: Ship Lane Update Confirm",
            "ADD_ASSET: Add Asset",
            "INVENTORY_MANAGER: Inventory Manager",
            "RECEIVING_AGENT: Receiving Agent",
            "SHIPPING_AGENT: Shipping Agent",
            "PROJECT_TRANSFER: Project Transfer",
            "SHIPPING_COST_TYPES: Shipping Cost Types",
            "BACK_ORDER_REASONS: Back Order Reasons",
            "ADMIN: Administrator"
        ],
        "defaultName": "List of Responsibilities"
    },
    {
        "name": "basicAuth",
        "type": "text",
        "required": true,
        "description": "Stores the basic authentication credentials",
        "defaultName": "Basic Auth"
    },
    {
        "name": "cloudUrl",
        "type": "text",
        "required": true,
        "description": "base URL for cloud services",
        "defaultName": "Cloud URL"
    },
    {
        "name": "apiBatchSize",
        "type": "number",
        "required": true,
        "description": "Sets the batch size for API requests",
        "defaultName": "API Batch Size"
    },
    {
        "name": "apiBatchSizeCrossReference",
        "type": "number",
        "required": true,
        "description": "Defines the batch size for item cross-reference API requests",
        "defaultName": "API Batch Size Cross Reference"
    },
    {
        "name": "apiBatchSizeForItemDefaults",
        "type": "number",
        "required": true,
        "description": "Sets the batch size for item transaction defaults API requests",
        "defaultName": "API Batch Size For Item Defaults"
    },
    {
        "name": "lotApiBatchSize",
        "type": "number",
        "required": true,
        "description": "Batch size for fetching lot data via the API",
        "defaultName": "Lot API Batch Size"
    },
    {
        "name": "maxArraySizePerQuery",
        "type": "number",
        "required": true,
        "description": "Sets the maximum items per API query",
        "defaultName": "Max Array Size Per Query"
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
        "defaultName": "Enable Receive Field"
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
        "defaultName": "Enable UOM Conversion Field"
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
        "defaultName": "Enable Manual Mode"
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
        "defaultName": "Enable Multi-Lot and Serial"
    },
    {
        "name": "initialAPILoadInterval",
        "type": "number",
        "required": true,
        "description": "API load interval in days",
        "defaultName": "Initial API Load Interval"
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
        "defaultName": "Enable Back Direct Org Transfer"
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
        "defaultName": "Enable FIFO Suggestion"
    },
    {
        "name": "apiResponseTimeOut",
        "type": "number",
        "required": true,
        "description": "API call timeout in milliseconds.",
        "defaultName": "API Response Time Out"
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
        "defaultName": "App Idle Alert Time"
    },
    {
        "name": "lastSyncTimeAdjustment",
        "type": "number",
        "required": true,
        "description": "Adjusts the server sync time in minutes",
        "defaultName": "Last Sync Time Adjustment"
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
        "defaultName": "Autofocus Needed at Login"
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
        "defaultName": "Show Selected Serials"
    },
    {
        "name": "isAWSCognitoLoginNeeded",
        "type": "select",
        "required": true,
        "description": "Determines if AWS Cognito login is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "AWS Cognito Login Needed"
    },
    {
        "name": "awsCognitoDetails",
        "type": "select",
        "required": true,
        "defaultValue": "",
        "currentValue": "",
        "description": "Stores AWS Cognito UserPoolId and ClientId",
        "options": [
            "UserPoolId: us-east-1_IaeuFPF6P",
            "ClientId: 7ovtblmsi055u0q692334ki607"
        ],
        "defaultName": "AWS Cognito Details"
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
        "name": "isSkipScanningForOneItem",
        "type": "select",
        "required": true,
        "description": "Enable if you want to skip the Scanning for one item in all 3 Page Modules",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Skip Scanning for One Item"
    },
    {
        "name": "isConsolidateReceipts",
        "type": "select",
        "required": true,
        "description": "Enable If you need Consolidate Receipt in Goods Receipt",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Consolidate Receipt"
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
        "defaultName": "Enable SSO Login"
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
        "defaultName": "Enable URL Change"
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
        "defaultName": "Load All Inventory Org"
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
        "defaultName": "Enable Label Copy"
    },
    {
        "name": "isBlindCountingNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if blind counting is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Blind Counting"
    },
    {
        "name": "isManualCountingNeeded",
        "type": "select",
        "required": true,
        "description": "Determines if manual counting is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enable Manual Counting"
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
        "defaultName": "Enable Zebra Scanning"
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
        "defaultName": "Sub Inventory Reverse Enable"
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
        "name": "isEditableItemInquiry",
        "type": "select",
        "required": true,
        "description": "Determines if the item inquiry is editable",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Editable Item Inquiry"
    },
    {
        "name": "isQualityPlanNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if a quality plan is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Quality Plan Needed"
    },
    {
        "name": "displayManualItems",
        "type": "select",
        "required": true,
        "description": "Determines if manual items should be displayed",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Display Manual Items"
    },
    {
        "name": "isReviewRequired",
        "type": "select",
        "required": true,
        "description": "Indicates if review is required before completing counting",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Review Required"
    },
    {
        "name": "isProjectEnabled",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Project Enabled"
    },
    {
        "name": "isMassMiscIssueReceiptsNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if mass miscellaneous issue receipts are needed",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Mass Misc Issue Receipts Needed"
    },
    {
        "name": "isMassSubInvTransferNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if mass sub-inventory transfers are required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Mass Sub Inv Transfer Needed"
    },
    {
        "name": "ShipApiBatchSize",
        "type": "number",
        "required": true,
        "description": "Sets the batch size for shipping API requests",
        "defaultName": "Ship API Batch Size"
    },
    {
        "name": "isQRCodeScanning",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "QR Code Scanning"
    },
    {
        "name": "isReceiptsFilterNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if a receipts filter is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Receipts Filter Needed"
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
        "name": "isMultiplelabelPrintNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if multiple label printing is required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Multiple Label Print Needed"
    },
    {
        "name": "qrcodeSpliterSymbol",
        "type": "text",
        "required": true,
        "description": "Symbol used to split QR code data",
        "defaultName": "Qrcode Spliter Symbol"
    },
    {
        "name": "openKeypadAutomatically",
        "type": "select",
        "required": true,
        "description": "Controls if the keypad opens automatically",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Open Keypad Automatically"
    },
    {
        "name": "isShowAllSerials",
        "type": "select",
        "required": true,
        "description": "",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Show All Serials"
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
        "name": "isContinuedItemScanningMode",
        "type": "select",
        "required": true,
        "description": "Determines if continued item scanning mode is active",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Continued Item Scanning Mode"
    },
    {
        "name": "isFreightCostNeeded",
        "type": "select",
        "required": true,
        "description": "Indicates if freight cost details are required",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Freight Cost Needed"
    },
    {
        "name": "isChargeResourceQTYReadonly",
        "type": "select",
        "required": true,
        "description": "Indicating if charge quantity is read-only",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Charge Resource QTY Readonly"
    },
    {
        "name": "isEnabledRealTimeSyncOnDemand",
        "type": "select",
        "required": true,
        "description": "Determines if real-time sync on demand is enabled in the system",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Enabled Real Time Sync On Demand"
    },
    {
        "name": "isCycleCountEnabledFlag",
        "type": "select",
        "required": true,
        "description": "Indicates if cycle counting is enabled",
        "options": [
            "true",
            "false"
        ],
        "defaultName": "Cycle Count Enabled Flag"
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
    }
]