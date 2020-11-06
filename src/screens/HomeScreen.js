import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={[styles.heading]}>Count Faster</Text>

            <Text style={styles.txtLevel}>Level : Easy</Text>

            <View>
                <Button title='Start Game' onPress={() => navigation.navigate('GameScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold"
    },
    txtLevel: {
        fontSize: 18,
        marginTop: 40
    }
});

export default HomeScreen