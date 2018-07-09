import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class Viz2 extends React.Component<> {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: 'https://public.tableau.com/views/10_0ClinicAnalytics/ClinicAnalytics?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no'}}
                    style={styles.webview}
                />
            </View>
        );
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