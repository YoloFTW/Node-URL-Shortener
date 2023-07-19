import URLForm from "./Components/URLForm";
import URLShow from "./Components/URLShow";
import ErrorShow from "./Components/ErrorShow"


import { useState } from 'react'

function App() {

	//use states for data
	const [Url, setUrl] = useState("");

	const [ShortenedUrl, setShortUrl] = useState("");

	const [Error, setError] = useState("");

	const SubUrl = async (Url) => {

		setShortUrl("");

		if(Url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g)){

			const res = await fetch("http://localhost:3001/shorten", {method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify({Url:Url})});

			const data = await res.json();

			setError("");

			setShortUrl(data.ShortenedUrl);

		}else{

			setError("Please Submit A Valid Url");

		}

    }


	return (
		<div className="container">

			{Error.length > 0 ? <ErrorShow Error={Error} /> : ""}

			<div className="form-div">
				<URLForm SubUrl={SubUrl} SetUrl={setUrl} Url={Url}/>
			</div>

			{ShortenedUrl.length > 0 ? <URLShow ShortenedUrl={ShortenedUrl}/> : ""}


		</div>
	);
}

export default App;
