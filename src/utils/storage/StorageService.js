import { hasStorage } from './hasStorage'
import OfflineStorage from './OfflineStorage'

const StorageService = hasStorage('localStorage')
  ? new OfflineStorage('localStorage')
  : new OfflineStorage('sessionStorage')

export default StorageService
