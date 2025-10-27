import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
     container: {
        flexDirection: "row", // Alinha os itens na horizontal
        alignItems: "center",
        height: 50,
        width: 361,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#919191",
        backgroundColor: "#fff"
    },
    icon:{
        marginRight: 5,
        color: "#919191",
    },
    input:{
        flex: 1,
        height: "100%",
        color: "#919191",
        fontSize: 14
    }
})