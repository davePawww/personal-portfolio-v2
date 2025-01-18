import "./App.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Connect from "./components/Connect"
import Now from "./components/Now"
import Creations from "./components/Creations"
import PastExperience from "./components/PastExperience"

function App() {
	useGSAP(() => {
		gsap.set([".name", ".main", ".creations", ".now", ".connect", ".footer"], {
			opacity: 0,
		})

		gsap.to([".name", ".main", ".creations", ".now", ".connect", ".footer"], {
			ease: "power4.in",
			duration: 0.6,
			opacity: 1,
			stagger: 0.1,
		})
	})

	return (
		<main>
			<Header />
			<div className='container'>
				<PastExperience />
				<Creations />
				<Now />
				<Connect />
			</div>
			<Footer />
		</main>
	)
}

export default App
