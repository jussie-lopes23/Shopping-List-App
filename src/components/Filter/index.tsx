import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { styles } from "./style";
import { Filterstatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";


type Props = TouchableOpacityProps &{
    status: Filterstatus
    isActivite: boolean
}

export function Filter({status, isActivite, ...rest }: Props) {
    return(
        <TouchableOpacity style = {[styles.container, {opacity: isActivite ? 1: 0.5 } ]} {...rest} activeOpacity={0.7}>
            
            <StatusIcon status={status} />

            <Text style = {styles.title}>
                {status === Filterstatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}