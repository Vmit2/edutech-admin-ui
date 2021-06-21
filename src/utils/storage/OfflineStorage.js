export default class OfflineStorage {
  constructor(storageType) {
    this.storage = window[storageType]
  }

  load(key) {
    try {
      return this.storage.getItem(key)
    } catch (err) {
      return null
    }
  }

  loadJson(key) {
    try {
      return JSON.parse(this.load(key))
    } catch (err) {
      return null
    }
  }

  save(key, value) {
    try {
      this.storage.setItem(key, value)

      return true
    } catch (err) {
      return false
    }
  }

  saveJson(key, value) {
    try {
      this.save(key, JSON.stringify(value))

      return true
    } catch (err) {
      return false
    }
  }

  remove(key) {
    try {
      this.storage.removeItem(key)

      return true
    } catch (err) {
      return false
    }
  }
}
