import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function ExemploFlatList() { 

    const dados = [
        { id: '1', nome: 'Item 1' },
        { id: '2', nome: 'Item 2' },
        { id: '3', nome: 'Item 3' },
        { id: '4', nome: 'Item 4' },
        { id: '5', nome: 'Item 5' },
    ];

    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.texto}>{item.nome}</Text>
                </View>
            )}
        />
    );
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1c1fe8',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    texto: {
        color: '#fff',
    },
});