import { useEffect } from "react";
import { xml2json } from "xml-js";

import Header from "../../Components/Header";
import ImagesViewContainer from "../../Containers/ImagesViewContainer";

import "./style.scss";

export default function Home() {
    useEffect(() => {
        const api = async () => {
            const response = await fetch(
                "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1fa1ad581283d237f293fd30527181fb"
            );
            const xmlResponse = await response.text();
            const json = xml2json(xmlResponse, { spaces: 2, compact: true });
            console.log(json);
        };
        api();
    }, []);
    return (
        <main className="container">
            <Header />
            <ImagesViewContainer />
        </main>
    );
}
