import { useState, useEffect } from "react";
import useSWR from "swr";
import { xml2json } from "xml-js";

import Header from "../../Components/Header";
import ImagesViewContainer from "../../Containers/ImagesViewContainer";

import "./style.scss";

const fetcher = (url: RequestInfo | URL) =>
    fetch(url)
        .then((response) => response.text())
        .then((xmlResponse) =>
            xml2json(xmlResponse, { spaces: 2, compact: true })
        );

export default function Home() {
    const [imageData, setImageData] = useState();

    const { data, error } = useSWR(
        "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1fa1ad581283d237f293fd30527181fb&page=1&per_page=10",
        fetcher
    );

    useEffect(() => {
        setImageData(JSON.parse(data)?.rsp?.photos?.photo);
    }, [data]);

    return (
        <main className="container">
            <Header />
            <ImagesViewContainer imageData={imageData} />
        </main>
    );
}
