import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "../Input/styles";

type Props = TextInputProps

export function Input({...rest}:Props){
    return (
        <View style={styles.container}>
             <TextInput style={styles.input} {...rest} />
        </View>
        
    )
}