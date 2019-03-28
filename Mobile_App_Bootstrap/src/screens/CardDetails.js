import * as React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    WebView
} from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';

export default class CardDetails extends React.Component {
    render() {
        console.log(this.props.navigation.state.params.uri)
        if (Platform.OS === 'android') {
            return (
                <View style={styles.container}>
                    <WebView
                        source={{uri: this.props.navigation.state.params.uri}}
                        style={styles.webview}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <WKWebView
                        source={{uri: this.props.navigation.state.params.uri}}
                        style={styles.webview}
                    />
                </View>
            );
        }
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
