import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFEB3B"
    },
    logo:{
        width: 180,
        height: 120,
        resizeMode: "contain", 
        marginTop: 20,
    },
    form:{
        gap: 9,
        paddingHorizontal: 24,
        width: "100%",
        color: "#fff"
    },
    content: {
       flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 24,
        paddingTop: 32,
        marginTop: 20,
    },
    header:{
        width: "100%", 
        flexDirection: "row",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E4E6EC",
        paddingBottom: 12
    },
    clearButton: {
        marginLeft: "auto",
    },
    clearText:{
        fontSize: 12,
        color: "#828282",
        fontWeight: 600,

    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#EEF0F5",
        marginVertical: 16,
    },
    listcontent:{
        paddingTop: 24,
        paddingBottom: 62,
    },
    empty: {
        fontSize: 14,
        color: "#808080",
        textAlign: "center",
    }
    
});