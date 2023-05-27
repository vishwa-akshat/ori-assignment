import Header from "../../Components/Header";
import ImagesViewContainer from "../../Containers/ImagesViewContainer";

import "./style.scss";

export default function Home() {
    return (
        <main className="container">
            <Header />
            <ImagesViewContainer />
        </main>
    );
}
