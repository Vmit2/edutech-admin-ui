export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
export const API_V1_BASE_PATH = process.env.REACT_APP_API_V1_BASE_PATH

export const APP_BAR_HEIGHT_DESKTOP = 70
export const APP_BAR_HEIGHT_MOBILE = 64
export const SIDE_DRAWER_WIDTH_DESKTOP = 256
export const SIDE_DRAWER_WIDTH_MOBILE = 256
export const MAX_DESCRIPTION_LENGTH = 1000

export const DEFAULT_LOCATION_PHOTO = '/static/images/essex.png'

export const Themes = {
  LIGHT: 'LIGHT',
  ONE_DARK: 'ONE_DARK',
  UNICORN: 'UNICORN',
}

export const CustomRoomOption = { custom: true, id: 'custom' }

export const DaysOfWeek = {
  monday: {
    sort: 0,
    name: 'monday',
    name_abbreviated: 'Mon',
    name_short: 'M',
  },
  tuesday: {
    sort: 1,
    name: 'tuesday',
    name_abbreviated: 'Tue',
    name_short: 'T',
  },
  wednesday: {
    sort: 2,
    name: 'wednesday',
    name_abbreviated: 'Wed',
    name_short: 'W',
  },
  thursday: {
    sort: 3,
    name: 'thursday',
    name_abbreviated: 'Thu',
    name_short: 'Th',
  },
  friday: {
    sort: 4,
    name: 'friday',
    name_abbreviated: 'Fri',
    name_short: 'F',
  },
  saturday: {
    sort: 5,
    name: 'saturday',
    name_abbreviated: 'Sat',
    name_short: 'Sa',
  },
  sunday: {
    sort: 6,
    name: 'sunday',
    name_abbreviated: 'Sun',
    name_short: 'Su',
  },
}

export const SubmitActions = {
  SAVE: 'save',
  SAVE_AND_CONTINUE: 'save_and_continue',
}

export const SortDirection = {
  ASCENDING: 'asc',
  DESCENDING: 'desc',
}

export const MediaType = {
  IMAGE: 'image',
  VIDEO: 'video',
}

/* ===== Misc. ===== */
export const InstanceType = {
  CLASS: 'class',
  ENROLLMENT: 'enrollment',
}
export const InstanceTypeValues = Object.values(InstanceType)
Object.freeze(InstanceType)

export const ActiveStatus = {
  BOTH: 'both',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}
export const ActiveStatusValues = Object.values(ActiveStatus)
Object.freeze(ActiveStatus)

export const OnlineBooking = {
  EVERYONE: 'everyone',
  MEMBERS_ONLY: 'members_only',
  NOBODY: 'nobody',
}
