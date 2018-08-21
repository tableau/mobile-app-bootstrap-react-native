import * as React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    WebView
} from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';

export default class Viz2 extends React.Component {
    render() {
        if (Platform.OS === 'android') {
            return (
                <View style={styles.container}>
                    <WebView
                        source={{uri: 'https://public.tableau.com/views/10_0ClinicAnalytics/ClinicAnalytics?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no'}}
                        style={styles.webview}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <WKWebView
                        source={{uri: 'https://public.tableau.com/views/10_0ClinicAnalytics/ClinicAnalytics?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no'}}
                        style={styles.webview}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
    },
    webview: {
        flex: 1,
    }
});