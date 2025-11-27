import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { datasource } from "./Data.js";

function Add({navigation}) {

    const [letter, setLetter] = useState("");

    const [letterType, setLetterType] = useState("Vowels");

    return (
        <View style={{ padding: 20 }}>
            <Text>Letter:</Text>

            <TextInput
                style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
                maxLength={1}
                onChangeText={(value) => setLetter(value)}
            />

            <Text>Letter Type:</Text>

            <Picker
                selectedValue={letterType}
                onValueChange={(value) => setLetterType(value)}
                style={{ borderWidth: 1, marginBottom: 20 }}
            >
                <Picker.Item label="Vowels" value="Vowels" />
                <Picker.Item label="Consonants" value="Consonants" />
            </Picker>

            <Button title="Submit" onPress={()=>{
                let item = {key:letter};
                let indexnum = 1;
                if (letterType ==="Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home")
            }} />
        </View>
    );
}

export default Add;
