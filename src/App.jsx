import CardUser from './components/cardUser/CardUser';
import Container from './components/container/Container';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Container>
<CardUser></CardUser>
			</Container>
		</div>
	);
};

export default App;
