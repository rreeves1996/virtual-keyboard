import Container from './components/Container';
import Navbar from './Navbar';
import TextArea from './TextArea';

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<header>
					<code>Type anything using the virtual keyboard</code>
					<code>(or your own keyboard)</code>
				</header>
				<TextArea />
			</main>
		</>
	);
}
