import Vue from "vue"
import rawLog from 'electron-log'

const log = rawLog.scope('AppEvent')

export enum AppEvent {
  menuClick = 'menu-click',
  settingsChanged = "sc-refresh",
  menuStyleChanged = 'mc-style',
  newTab = 'nt',
  closeTab = 'ct',
  closeAllTabs = 'close_all_tabs',
  disconnect = 'dc',
  beekeeperAdded = 'bkadd',
  openExternally = 'oe',
  toggleSidebar = 'ts',
  beginExport = 'be',
  beginImport = 'beginImport',
  createTable = 'new_table',
  openTableProperties = 'loadTableProperties',
  loadTable = 'loadTable',
  quickSearch = 'quickSearch',
  promptLogin = 'cloud_signin',
  promptQueryImport = 'cloud_q_import',
  promptQueryImportFromComputer = "q_import_from_computer",
  promptQueryExport = 'q_export',
  promptConnectionImport = 'cloud_c_import',
  promptSqlFilesImport = 'q_files_import',
  enterLicense = 'enter_license',
  hideEntity = 'hideEntity',
  hideSchema = 'hideSchema',
  toggleHideEntity = 'toggleHideEntity',
  toggleHideSchema = 'toggleHideSchema',
  deleteDatabaseElement = 'deleteDatabaseElement',
  exportTables = 'exportTables',
  dropDatabaseElement = 'dropDatabaseElement',
  duplicateDatabaseTable = 'duplicateDatabaseTable',
  backupDatabase = 'backupDatabase',
  restoreDatabase = 'restoreDatabase',
  upgradeModal = 'upgradeModal',
  toggleExpandTableList = 'toggleExpandTableList',
  togglePinTableList = 'togglePinTableList',
  dropzoneEnter = 'dropzoneEnter',
  dropzoneDrop = 'dropzoneDrop',
}

export interface RootBinding {
  event: string
  handler(arg: any): void
}


export const AppEventMixin = Vue.extend({
  methods:  {
    registerHandlers(bindings: RootBinding[]) {
      bindings.forEach(({ event, handler }) => {
        this.$root.$on(event, handler)
      })
    },
    unregisterHandlers(bindings: RootBinding[]) {
      bindings.forEach(({ event, handler }) => {
        this.$root.$off(event, handler)
      })
    },
    trigger(event: AppEvent, ...args: any) {
      log.debug('trigger', event, args)
      this.$root.$emit(event.toString(), ...args)
    }
  }

})
