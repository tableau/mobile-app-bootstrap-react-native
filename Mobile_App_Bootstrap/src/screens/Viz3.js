import * as React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import WebView from 'react-native-webview';

export default class Viz3 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: 'https://public.tableau.com/views/10_0SuperstoreSales/Overview?:embed=y&:tooltip=n&:toolbar=n&:showVizHome=no&:mobile=y&:showAppBanner=n'}}
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