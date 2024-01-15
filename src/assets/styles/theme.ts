export const theme = {
  colors: {
    initialColor: "#f9f9f9",
    white: "#FFFFFF",
    lightGrey: "#CDC9C3",
    darkGrey: "#284153",
    middleGrey: "#AEBAAA",
    pastelTeal: "#D9E4DD",
    pastelWhite: "#FBF7F0",
    contrastLinkColor: "#4C8BF5",
    black: "#000",
    success: "#8FCB81",
    error: "#FF8383",
    warning: "#E1D888",
  },
  fontSize: {
    desktop: "64px",
    xxxl: "44px",
    xxl: "34px",
    xl: "26px",
    l: "20px",
    m: "16px",
    s: "14px",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const BRAKEPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
  bigDevicesMin: 2200,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BRAKEPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BRAKEPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BRAKEPOINTS.desktopMin / 16}rem)`,
  bigDevicesAndUp: `(min-width: ${BRAKEPOINTS.bigDevicesMin / 16}rem)`,
};
