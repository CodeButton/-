import * as React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { Tile, Text, Button } from 'react-native-elements';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text h2>성대모사 달인되기 🎉</Text>
                <Tile imageSrc={require('./assets/oscars.png')} containerStyle={{ height: 500 }}>
                    <Button
                        large
                        title="시작하기"
                        onPress={() => {
                            Linking.openURL('https://masterhiddenvoice.ga');
                        }}
                    />
                </Tile>
            </View>
        );
    }
}