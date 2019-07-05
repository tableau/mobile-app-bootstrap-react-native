import * as React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import WebView from 'react-native-webview';

export default class CardDetails extends React.Component {
    render() {
        console.log(this.props.navigation.state.params.uri)
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: this.props.navigation.state.params.uri}}
                    style={styles.webview}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    }
});
