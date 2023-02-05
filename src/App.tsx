import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import './assets/style/style.css';

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
