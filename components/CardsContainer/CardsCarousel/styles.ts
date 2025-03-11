import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    list: {
        paddingLeft: 16,
        paddingRight: 8,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.border,
    },
    paginationDotActive: {
        backgroundColor: COLORS.primary,
        width: 16,
    },
    expandButton: {
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: COLORS.card,
        marginTop: 12,
    },
    expandText: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 14,
    },
    expandedContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.background,
        zIndex: 10
    },
    expandedList: {
        padding: 16,
        paddingTop: 60,
    },
    expandedItemContainer: {
        marginBottom: 16,
    },
    collapseButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.card,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    }
});
