import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import questionData from '../constants/question.data'
import timer from 'react-native-timer';

const GameScreen = () => {
    let index = 0

    const ref = useRef()

    useEffect(() => {
        ref.current.focus()
    })

    const nextQuestion = () => {
        index = index + 1
    }

    const onChangeText = (text) => {
        if(String(text).length == String(questionData[index].jawaban).length) {
            nextQuestion()
        }

        console.log(String(questionData[index].jawaban).length)
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 30}}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{questionData[index].soal}</Text>
            <TextInput 
                ref={ref}
                onChangeText={onChangeText} />
        </View>
    )
}

export default GameScreen