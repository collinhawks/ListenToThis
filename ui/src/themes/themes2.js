import { makeStyles } from "@material-ui/core";

const houseCol = {
  primary: '#344767',
  secondary: '#ffffff',
  accent: '#f7f8f9',
  text: '#2b2b2b',
  textAlt: '#5c5c5c',
  icon: '#7928ca',
  link: '#f90283',
  border: '#c4c4c4',
}

export default {
  themeName: 'House Light',
  palette: {
    primary: {
      main: houseCol['primary'],
    },
    secondary: {
      main: houseCol['secondary'],
    },
    background: {
      default: houseCol['accent'],
    },
    text: {
      primary: houseCol['text'],
      secondary: houseCol['textAlt'],
    },
    type: 'light',
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
  },
  overrides: {
    makeStyles: {
      cover: {
        borderRadius: 22
      },
    },
    MuiTypography: {
      root: {
        color: houseCol['text'],
      },
      colorPrimary: {
        color: houseCol['text'],
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: houseCol['secondary'],
        borderRadius: 4,
      },
      rounded: {
        borderRadius: '34px',
      },
    },
    MuiFormGroup: {
      root: {
        color: houseCol['text'],
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '24px',
      },
      // notchedOutline: {
      //   borderColor: houseCol['border'],
      //   borderRadius: 24,
      // },
      // input: {
      //   borderRadius: 24,
      // },
    },
    NDAlbumGridView: {
      albumContainer: {
        backgroundColor: houseCol['accent'],
        borderRadius: 22,
        padding: '.75rem',
        transition: 'background-color .3s ease',
        '&:hover': {
          backgroundColor: '#e0efff',
        },
      },
      albumName: {
        marginTop: '0.5rem',
        fontWeight: 700,
        textTransform: 'none',
        color: houseCol['text'],
      },
      albumSubtitle: {
        color: houseCol['textAlt'],
      },
      link: {
        borderRadius: 122,
      }
    },
    MuiAppBar: {
      colorSecondary: {
        color: houseCol['text'],
      },
      positionFixed: {
        backgroundColor: houseCol['primary'],
        backgroundImage: 'linear-gradient(310deg, #7928ca, #f90283)',
        boxShadow:
          'rgba(52, 52, 52, 0.25) 0px 4px 6px, rgba(52, 52, 52, 0.1) 0px 5px 7px',
      },
    },
    MuiButton: {
      root: {
        border: '1px solid transparent',
        '&:hover': {
          backgroundColor: houseCol['accent'],
        },
      },
      label: {
        color: houseCol['text'],
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: houseCol['accent'],
      },
      label: {
        color: houseCol['icon'],
      },
    },
    RaLink: {
      link: {
        color: houseCol['link'],
        borderRadius: 122,
      },
    },
    RaList: {
      root: {
        borderRadius: 22,
      },
    },
    MuiTableContainer: {
      root: {
        borderRadius: 22,
      },
    },
    MuiTableRow: {
      root: {
        borderRadius: 22,
      },
    },
    MuiTableCell: {
      root: {
        borderRadius: 22,
        borderBottom: 'none',
        color: houseCol['text'],
        padding: '10px !important',
      },
      head: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        backgroundColor: houseCol['accent'],
        color: houseCol['text'],
      },
      body: {
        color: houseCol['text'],
      },
    },
    MuiInput: {
      root: {
        color: houseCol['text'],
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: houseCol['text'],
          fontWeight: 'bold',
        },
      },
    },
    MuiIconButton: {
      label: {
        color: houseCol['icon'],
      },
    },
    MuiList: {
      root: {
        borderRadius: 22,
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 22,
      },
    },
    MuiListItemIcon: {
      root: {
        color: houseCol['icon'],
      },
    },
    MuiSelect: {
      icon: {
        color: houseCol['icon'],
      },
    },
    MuiSvgIcon: {
      root: {
        color: houseCol['icon'],
      },
      colorDisabled: {
        color: houseCol['icon'],
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&$checked + $track': {
          backgroundColor: '#e0d1f9',
        },
      },
      track: {
        backgroundColor: '#bdbdbd',
      },
    },
    RaButton: {
      smallIcon: {
        color: houseCol['icon'],
      },
    },
    RaDatagrid: {
      headerCell: {
        backgroundColor: houseCol['accent'],
      },
    },
    NDLogin: {
      systemNameLink: {
        color: houseCol['text'],
      },
      card: {
        minWidth: 300,
        backgroundColor: houseCol['secondary'],
        borderRadius: 22,
      },
      button: {
        boxShadow: '3px 3px 5px #0000001a',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background:
          'linear-gradient(to bottom, rgba(255 255 255 / 72%), rgb(220 220 220))!important',
        borderRadius: 22,
      },
    },
  },
  player: {
    theme: 'light',
  },
};