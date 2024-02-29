
import { Text, View, StyleSheet, StyleProp } from "react-native"

interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_24: number;
    size_30: number;
    size_32: number;

}

export const FONTSIZE: FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_30: 30,
    size_32: 32,
};



export interface TextStyle {
    largeTitle: StyleProp<any>;
    mediumTitle: StyleProp<any>;
    smallTitle: StyleProp<any>;
    largeHeadline: StyleProp<any>;
    mediumHeadline: StyleProp<any>;
    smallHeadline: StyleProp<any>;
    largeBody: StyleProp<any>;
    mediumBody: StyleProp<any>;
    smallBody: StyleProp<any>;
    largeLabel: StyleProp<any>;
    mediumLabel: StyleProp<any>;
    smallLabel: StyleProp<any>;
}

///use: TextStyle.largeTitle nhé <3
export const TEXT_STYLE: TextStyle =
{
    largeTitle: {
        fontSize: FONTSIZE.size_32,
        fontWeight: 'bold',
    },
    mediumTitle: {
        fontSize: FONTSIZE.size_24,
        fontWeight: 'bold',
    },
    smallTitle: {
        fontSize: FONTSIZE.size_18,
        fontWeight: 'bold',
    },
    largeHeadline: {
        fontSize: FONTSIZE.size_18,
        fontWeight: 'bold',
    },
    mediumHeadline: {
        fontSize: FONTSIZE.size_20,
    },
    smallHeadline: {
        fontSize: FONTSIZE.size_16,
        fontWeight: 'bold',
    },
    largeBody: {
        fontSize: FONTSIZE.size_18,
    },
    mediumBody: {
        fontSize: FONTSIZE.size_16,
    },
    smallBody: {
        fontSize: FONTSIZE.size_14,
    },
    largeLabel: {
        fontSize: FONTSIZE.size_16,
    },
    mediumLabel: {
        fontSize: FONTSIZE.size_14,
    },
    smallLabel: {
        fontSize: FONTSIZE.size_12,
    },
};