import { xml2json } from "xml-js";

export const fetcher = (url: RequestInfo | URL) =>
    fetch(url)
        .then((response) => response.text())
        .then((xmlResponse) =>
            xml2json(xmlResponse, { spaces: 2, compact: true })
        );
