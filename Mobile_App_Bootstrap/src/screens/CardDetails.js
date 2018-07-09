import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView,
    WebViewUriSource
} from 'react-native';

export default class CardDetails extends React.Component<> {
    public render() {
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
