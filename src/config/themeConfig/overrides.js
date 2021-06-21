export const defaultOverrides = {
  MuiChip: {
    root: {
      backgroundColor: 'rgba(0,0,0,0.075)',
    },
  },
  MuiCircularProgress: {
    root: {
      display: 'block',
    },
  },
  MuiLinearProgress: {
    root: {
      borderRadius: 3,
      overflow: 'hidden',
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: 32,
    },
  },
  MuiStepIcon: {
    root: {
      '&$completed': {
        color: 'rgba(0,0,0,0.38)',
      },
    },
  },
}
