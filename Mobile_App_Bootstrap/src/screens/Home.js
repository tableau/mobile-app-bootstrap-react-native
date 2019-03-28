import * as React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Card } from 'react-native-elements';

export default class Home extends React.Component {
    onCardPress = (webViewUri, title) => {
        this.props.navigation.navigate('Details', {uri: webViewUri, headerTitle: title});
    };

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.onCardPress(item.webViewUri, item.title)}>
                <Card
                    title={item.title}
                    image={item.imageUri}
                    containerStyle={styles.container}
                    wrapperStyle={styles.wrapper}
                    titleStyle={styles.title}
                >
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                </Card>
            </TouchableOpacity>
        );
    };

    keyExtractor = (item, index) => item.title + '-' + index;

    render() {
        const cards = [
            {
                title: 'Help',
                imageUri: require('../../assets/HelpViz.png'),
                description: 'Leverage the Developer Portal for help.',
                webViewUri: 'https://developer.tableau.com',
            }, {
                title: 'Reference',
                imageUri: require('../../assets/JavaScriptLogo.png'),
                description: 'Learn about the Tableau Javascript API.',
                webViewUri: 'https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm',
            }, {
                title: 'Stories',
                imageUri: require('../../assets/StoriesViz.png'),
                description: 'Discover how people are using Tableau.',
                webViewUri: 'https://www.tableau.com/stories',
            }, {
                title: 'Download',
                imageUri: require('../../assets/Download.png'),
                description: 'Download Tableau Mobile.',
                webViewUri: 'https://www.tableau.com/products/mobile',
            }, {
                title: 'Explore',
                imageUri: require('../../assets/ExploreViz.png'),
                description: 'Read about other Tableau Products.',
                webViewUri: 'https://www.tableau.com/products',
            }, {
                title: 'Learn',
                imageUri: require('../../assets/ReactNativeLogo.png'),
                description: 'Learn React Native.',
                webViewUri: 'https://facebook.github.io/react-native/',
            },
        ];

        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={3}
                    data={cards}
                    style={styles.flatList}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 4,
    },
    wrapper: {
        flex: 1,
    },
    flatList: {
        paddingLeft: 1,
        paddingRight: 1,
    },
    item: {
        flex: 0.33,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 4
    },
    title: {
        marginTop: 0,
        marginBottom: 0,
        padding: 7,
        backgroundColor:'#F5F5F5',
        fontWeight: 'normal',
        textAlign: 'left'
    },
    description: {
        fontWeight: '200',
    }
});
