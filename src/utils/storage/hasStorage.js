export const hasStorage = (storageType) => {
  try {
    const storage = window[storageType]
    const test = '__test__'

    storage.setItem(test, test)
    storage.removeItem(test)

    return true
  } catch (err) {
    return false
  }
}
