import StorageService from './storage/StorageService';

const SETTINGS_STORAGE_KEY = 'user_settings'

function load() {
  return StorageService.loadJson(SETTINGS_STORAGE_KEY)
}

function save(data) {
  return StorageService.saveJson(SETTINGS_STORAGE_KEY, data)
}

export default {
  load,
  save,
}
