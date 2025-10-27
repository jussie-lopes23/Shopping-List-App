import { TouchableOpacity, TouchableOpacityProps, Text  } from "react-native";
import {styles} from "./styles"

type Props = TouchableOpacityProps &{
    title: string,
    fontSize?: number
}

export function Button({title, fontSize, ...rest}: Props){
    return (
       <TouchableOpacity style={styles.container} {...rest}>
            <Text style={[styles.title, {fontSize}]}>{title}</Text>
       </TouchableOpacity>
    );
}