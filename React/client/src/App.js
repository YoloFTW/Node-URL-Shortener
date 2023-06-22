import URLForm from "./Components/URLForm";
import URLShow from "./Components/URLShow"

import { useState } from 'react'

function App() {

	//use states for data
	const [Url, setUrl] = useState("");

	const [ShortenedUrl, setShortUrl] = useState("");

	const SubUrl = async (Url) => {
		console.log(JSON.stringify(Url))

		const res = await fetch("http://localhost:3001/shorten", {method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify({Url:Url})});

		const data = await res.json();

		setShortUrl(data.ShortenedUrl)

		console.log(ShortenedUrl)
    }


	return (
		<div className="container">
			<div className="form-div">
				<URLForm SubUrl={SubUrl} SetUrl={setUrl} Url={Url}/>
			</div>

			<URLShow ShortenedUrl={ShortenedUrl}/>

		</div>
	);
}

export default App;
