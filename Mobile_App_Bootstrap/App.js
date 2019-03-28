import { createAppContainer } from 'react-navigation';
import { RootNavigator } from './src/router';

const App = createAppContainer(RootNavigator);
export default App;
