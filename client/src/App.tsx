import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { Main } from './components/pages';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
	);
}

export default App;
