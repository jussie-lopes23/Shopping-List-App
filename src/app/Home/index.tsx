import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";
import {itemsStorage, ItemStorage} from "@/storage/itemsStorage"

import { Filterstatus } from "@/types/FilterStatus";
import { styles } from "./styles";


const FILTER_STATUS: Filterstatus[] = [ Filterstatus.PEDDING, Filterstatus.DONE];

export function Home(){
    const [filter, setFilter] = useState(Filterstatus.PEDDING)
    const [description, setDescription] = useState("")
    const [items, setItems] = useState<ItemStorage[]>([])

    async function handleAdd(){
        if(!description.trim()){
            return Alert.alert("Adicionar", "informe a descrição para adicionar")
        }

        const newItem = {
            id: Math.random().toString(36).substring(2),
            description,
            status: Filterstatus.PEDDING,

        }

        await itemsStorage.add(newItem)
        await itemBystatus()

        setFilter(Filterstatus.PEDDING)
        Alert.alert("Adicionado", `Adicionado ${description}`)
        setDescription("")
    }

    async function handleRemove(id: string){
        try {
            await itemsStorage.remove(id)
            await itemBystatus()
        } catch (error) {
            console.log(error)
            Alert.alert("Remover", "Não foi possível remover.")
        }
    }

    async function itemBystatus(){
        try {
            const response = await itemsStorage.getByStatus(filter)
            setItems(response)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível filtrar os itens.")

        }
    }

    function handleClear(){
        Alert.alert("Limpar", "Deseja remover todos?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => onClear() },
        ])
    }

    async function onClear(){
        try {
            await itemsStorage.clear()
            setItems([])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível remover todos os itens.")
        }
    }

    async function handleToggleItemStatus(id: string){
        try {
            await itemsStorage.toggleStatus(id)
            await itemBystatus()
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível atualizar o status.")
        }
    }

    useEffect(() => {Alert.alert("Bem vindo Chefe", "Vamos detonar hoje")}, [])

    useEffect(() => {
        itemBystatus()
    }, [filter])

    //exemplos para usar o useEffect para  persistir os dados
    //useEffect(() => {
    //    itemsStorage.get().then((response) => console.log(response))
    //}, [])

    return(
        <View style={styles.container} >
            <View>
                <Image source={require('@/assets/logoCompra.png')} style={styles.logo}/>

            </View>

            <View style={styles.form}>
                <Input 
                    placeholder="O que você precisa comprar ?"
                    onChangeText={setDescription}
                    value={description}   
                />

                <Button title="Adicionar" activeOpacity={0.7} fontSize={19.92} onPress={handleAdd}/>
            </View>

            <View style ={styles.content}>
                <View style={styles.header}>
                    {FILTER_STATUS.map((status) => (
                        <Filter 
                        key={status}
                        status={status} 
                        isActivite={status === filter}
                        onPress={() => setFilter(status) }
                        />
                    ))}

                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Text style={styles.clearText} >Limpar</Text>
                    </TouchableOpacity>   
                </View>
                
                  
                <FlatList
                    data={items} 
                    keyExtractor={(item)=>item.id}
                    renderItem={({item}) => (
                        <Item
                            data={item} 
                            onStatus={() => handleToggleItemStatus(item.id)}
                            onRemove={() => handleRemove(item.id)}
                        />
                    )}

                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={()=> <View style={styles.separator}/>}
                    contentContainerStyle={styles.listcontent}
                    ListEmptyComponent={()=> <Text style={styles.empty}>Nenhum item na lista</Text>}


                />
                
            </View>
        </View>
    );
}