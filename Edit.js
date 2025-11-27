import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { datasource } from "./Data";

function Edit({ navigation, route }) {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View>
            <Text>Letter:</Text>

            <TextInput
                style={{ borderWidth: 1, padding: 5}}
                maxLength={1}
                value={letter}
                onChangeText={(val) => setLetter(val)}
            />

            <View style={{flexDirection: "row"}}>
                <View style={{margin:10, flex:1}}>
                <Button title="Save" onPress={() => {
                    let indexnum = 1
                    if (route.params.type=="Vowels") {
                        indexnum = 0;
                    }
                    datasource[indexnum].data[route.params.index].key=letter;
                    navigation.navigate("Home")
                }}/>
                </View>
                <View style={{margin:10, flex:1}}>
                <Button title="Delete" onPress={() => {
                    let indexnum = 1
                    if (route.params.type=="Vowels") {
                        indexnum = 0;
                    }
                    Alert.alert("Are you sure?", '',[{
                        text: "Yes", onPress: () => {
                            datasource[indexnum].data.splice(route.params.index,1);
                            navigation.navigate("Home")
                        }},
                        {text: "No"}])
                    }
                }/>
                </View>
            </View>
        </View>
    );
}

export default Edit;
