


const palette = {
    neutral100: "#FFFFFF",
    neutral200: "#F4F2F1",
    neutral300: "#D7CEC9",
    neutral400: "#B6ACA6",
    neutral500: "#978F8A",
    neutral600: "#564E4A",
    neutral700: "#3C3836",
    neutral800: "#191015",
    neutral900: "#000000",

    primary100: "#F4E0D9",
    primary200: "#E8C1B4",
    primary300: "#DDA28E",
    primary400: "#D28468",
    primary500: "#C76542",
    primary600: "#A54F31",

    secondary100: "#DCDDE9",
    secondary200: "#BCC0D6",
    secondary300: "#9196B9",
    secondary400: "#626894",
    secondary500: "#41476E",

    accent100: "#FFEED4",
    accent200: "#FFE1B2",
    accent300: "#FDD495",
    accent400: "#FBC878",
    accent500: "#FFBB50",

    angry100: "#F2D6CD",
    angry500: "#C03403",

    overlay20: "rgba(25, 16, 21, 0.2)",
    overlay50: "rgba(25, 16, 21, 0.5)",
} as const

interface Color {
    Primary: string,
    Secondary: string,
    Tertiary: string,
    Background: string,
    Error: string,
    Success: string,
    Info: string,
    Border: string,
    Black: string;
    Orange: string;
    OrangeRGBA0: string;
    Grey: string;
    DarkGrey: string;
    Yellow: string;
    White: string;
    WhiteRGBA75: string;
    WhiteRGBA50: string;
    WhiteRGBA32: string;
    WhiteRGBA15: string;
    transparent: string;
    background: string;
}

export const COLORS: Color = {
    ...palette,
    transparent: "rgba(0, 0, 0, 0)",
    background: palette.neutral200,
    Primary: "#17C4D3",
    Secondary: "#17C4D3",
    Tertiary: "#17C4D3",
    Background: '#FFFFFF',
    Black: '#000000',
    Orange: '#FF5524',
    Border: "#E5E9ED",
    OrangeRGBA0: 'rgba(255,85,36,0)',
    Grey: '#333333',
    DarkGrey: '#0b0b0b',
    Yellow: '#E1CD17',
    White: '#FFFFFF',
    WhiteRGBA75: 'rgba(255,255,255,0.75)',
    WhiteRGBA50: 'rgba(255,255,255,0.50)',
    WhiteRGBA32: 'rgba(255,255,255,0.32)',
    WhiteRGBA15: 'rgba(255,255,255,0.15)',
    Error: "#ff1a1a",
    Success: "#5cd65c",
    Info: "#66a3ff"
};