import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { Text, TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AppStackParamList, AppStackScreenProps } from "./navigation";
import { COLORS } from "../theme/color"
import { SPACING } from "../theme/spacing"
import RouterNames from "./router_names"
import { ProductsTab } from "../screens/home/products_tab/view"
import { StatusTab } from "../screens/home/status_tab/view"
import { HistoryTab } from "../screens/home/history_tab/view"
import { OtherTab } from "../screens/home/other_tab/view"
export type HomeTabParamList = {
    OrderTab: { queryIndex?: string; itemIndex?: string }
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
>

const HomeTab = createBottomTabNavigator<HomeTabParamList>()

export const HomeNavigator = () => {
    const { bottom } = useSafeAreaInsets();
    return (
        <HomeTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: [$tabBar, { height: bottom + 70 }],
                // tabBarActiveTintColor: colors.text,
                // tabBarInactiveTintColor: colors.text,
                tabBarLabelStyle: $tabBarLabel,
                tabBarItemStyle: $tabBarItem,
            }}
        >
            <HomeTab.Screen
                name={RouterNames.HOME_TAB_PRODUCT as keyof HomeTabParamList}
                component={ProductsTab}
                options={{
                    // tabBarLabel: translate("demoNavigator.componentsTab"),
                    tabBarLabel: "Product",
                    tabBarIcon: ({ focused }) => (
                        <></>
                        // <Icon icon="components" color={(focused && colors.tint) ? colors.tint : undefined} size={30} />
                    ),
                }}
            />

            <HomeTab.Screen
                name={RouterNames.HOME_TAB_STATUS as keyof HomeTabParamList}
                component={StatusTab}
                options={{
                    // tabBarLabel: translate("demoNavigator.componentsTab"),
                    tabBarLabel: "Status",
                    tabBarIcon: ({ focused }) => (
                        <></>
                        // <Icon icon="components" color={(focused && colors.tint) ? colors.tint : undefined} size={30} />
                    ),
                }}
            />

            <HomeTab.Screen
                name={RouterNames.HOME_TAB_HISTORY as keyof HomeTabParamList}
                component={HistoryTab}
                options={{
                    // tabBarLabel: translate("demoNavigator.componentsTab"),
                    tabBarLabel: "History",
                    tabBarIcon: ({ focused }) => (
                        <></>
                        // <Icon icon="components" color={(focused && colors.tint) ? colors.tint : undefined} size={30} />
                    ),
                }}
            />
            <HomeTab.Screen
                name={RouterNames.HOME_TAB_OTHER as keyof HomeTabParamList}
                component={OtherTab}
                options={{
                    // tabBarLabel: translate("demoNavigator.componentsTab"),
                    tabBarLabel: "Other",
                    tabBarIcon: ({ focused }) => (
                        <></>
                        // <Icon icon="components" color={(focused && colors.tint) ? colors.tint : undefined} size={30} />
                    ),
                }}
            />

        </HomeTab.Navigator>
    );
}

const $tabBar: ViewStyle = {
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.transparent,
}

const $tabBarItem: ViewStyle = {
    paddingTop: SPACING.space_10,
}

const $tabBarLabel: TextStyle = {
    fontSize: 12,
    // fontFamily: typography.primary.medium,
    lineHeight: 16,
    flex: 1,
}

