import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('./images/logo.png')} style={{ width: 98, height: 22 }} />
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <MaterialIcons name="search" size={25} style={styles.navItem} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="account-circle" size={25} style={styles.navItem} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightNav: {
        flexDirection: 'row',
    },
    navItem: {
        marginLeft: 25,
    },
});
