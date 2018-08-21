# Mobile App Bootstrap: React Native
[![Community Supported](https://img.shields.io/badge/Support%20Level-Community%20Supported-457387.svg)](https://www.tableau.com/support-levels-it-and-developer-tools)

Provides a look at example code for how to embed Tableau vizzes inside of a React Native app that runs on iOS and Android.


## Installation

Mac:

1. Download the code for the app from this [repository](https://github.com/tableau/mobile-app-bootstrap)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
  * VS Code is the main IDE we use for React Native development; it's where you'll do most of your editing.
2. Install Xcode for creating iOS builds
3. Install Android Studio for creating Android builds
  * You might need these added to your `~/.bash_profile`:
    `export ANDROID_HOME=$HOME/Library/Android/sdk`
    `export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools"`
4. Install [homebrew](https://brew.sh/)
5. `brew install node@8`
  * This uses homebrew to install node
  * We've run into some problems with node 10, so enjoy node 8
6. `brew install watchman`
  * watchman enables some fun auto-reload-on-file-change capabilities in React Native


Windows:

1. Download the code for the app from this [repository](https://github.com/tableau/mobile-app-bootstrap)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
  * VS Code is the main IDE we use; it's where you'll do most of your editing.
3. Follow Step 1 and Step 2 in these excellent [Windows installation instructions](https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65)

Note that we've run into problems running watchman on Windows, so the auto-reload functionality won't be available. Also note that iOS building/running is only possible on a Mac. We do almost all of our mobile development using Macs.


## Download Modules
From the `Mobile_App_Bootstrap` directory, run `npm install`
  * This installs the various modules needed into a `node_modules` directory.

## Starting the sample app

iOS
* `react-native run-ios` runs the iOS build in the default simulator.
  * `react-native run-ios --simulator="MySimulatorName"` will run the iOS build using the simulator you specify. 
    * More details on [specifying simulators](https://facebook.github.io/react-native/docs/running-on-simulator-ios.html)
    * List of available simulators: `xcrun simctl list`
    * Example to create your own named simulator for an iPad Air 2 running iOS 11.3: `xcrun simctl create MySimulatorName com.apple.CoreSimulator.SimDeviceType.iPad-Air-2 com.apple.CoreSimulator.SimRuntime.iOS-11-3`
* ⌘-d in the iOS simulator brings up the [React Native debug menu](https://facebook.github.io/react-native/docs/debugging.html).

Android
* Run an AVD (Android Virtual Device) emulator. This could be started via Android Studio (Tools -> AVD Manager) or [the command line](https://developer.android.com/studio/run/emulator-commandline)
* `react-native run-android` runs the Android build
* ⌘-m in the Android emulator brings up the [React Native debug menu](https://facebook.github.io/react-native/docs/debugging.html).


For running on a physical iOS/Android device, [take a look at the docs for the subtleties involved](https://facebook.github.io/react-native/docs/running-on-device).

## Debugging

React Native has some great [debugging documentation](https://facebook.github.io/react-native/docs/debugging.html), it's well worth reading through. A common setup for us is to have the standalone [React Developer Tools](https://github.com/facebook/react-devtools/tree/master/packages/react-devtools) running and the simulator with Live Reload and Hot Reloading turned on.

# Project Layout

The main app files you'll want to edit are in `src`. The app uses [React Navigation](https://reactnavigation.org/) to provide the bottom tab navigation.

The core of this project was created using `create-react-native-app`, as outlined in the [React Native Getting Started docs](https://facebook.github.io/react-native/docs/getting-started.html). After the app was made, it was "[ejected](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#ejecting-from-create-react-native-app)" and modified.

## Customization Points

* `Home.js` shows the Home tab. A tap on one of the cards opens a CardDetails object, displaying the provided URL in a webview.
* `Viz1.js`, `Viz2.js`, `Viz3.js` show the three viz tabs. They open the hard-coded URLs provided. Note that WKWebView is used on iOS, while the default WebView is used on Android. You'll want to change these URLs to point to your own vizzes.
* `router.js` configures the bottom tabs using [React Navigation](https://reactnavigation.org/).


# Support

This collection is supported by the community and not officially 'blessed' by Tableau Engineering or Support. What does that mean? We didn't have a QA team test it. It's a tool for learning how to embed vizzes inside a mobile application. You should not expect that there are 0 bugs.

If you have problems getting it to work, feel free to email us with questions, but we can't promise quick responses. The [Tableau Developer Community](developer.tableau.com) is also a great resource if you need help.

A standard disclaimer: mobile-app-bootstrap is made available AS-IS with no support and no warranty whatsoever. Despite efforts to write good and useful code there may be bugs that cause unexpected and undesirable behavior. The software is strictly “use at your own risk.”

The good news: This is intended to be a self-service tool. You are free to modify it in any way to meet your needs.

