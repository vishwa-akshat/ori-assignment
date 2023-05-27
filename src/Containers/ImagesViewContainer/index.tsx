import { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { Layout, Row, Col, Spin, Image } from "antd";

import "./style.scss";
import ImageLoading from "../../Components/ImageLoading";

const { Content } = Layout;

export default function ImagesViewContainer() {
    const [imageData, setImageData] = useState([]);
    const [page, setPage] = useState(1);

    async function loadPhotos() {
        const response = await fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1fa1ad581283d237f293fd30527181fb&page=${page}&per_page=10&format=json&nojsoncallback=1`
        );
        const json = await response.json();
        const datap = await json.photos;
        const photo = await datap.photo;
        setImageData([...imageData, ...photo]);
    }

    useEffect(() => {
        loadPhotos();
    }, [page]);

    function handleLoadMore() {
        setPage((page) => page + 1);
    }

    if (!imageData) return <Spin />;

    return (
        <Content className="image-view-container">
            <InfiniteScroll
                dataLength={imageData.length}
                next={() => handleLoadMore()}
                hasMore={page < 100}
                loader={<ImageLoading />}
            >
                <Row
                    align="middle"
                    justify="center"
                    gutter={[
                        { xs: 8, sm: 16, md: 24, lg: 32 },
                        { xs: 8, sm: 16, md: 24, lg: 32 },
                    ]}
                >
                    {imageData?.map((image) => {
                        const imgSrc = `https://live.staticflickr.com/${image?.server}/${image?.id}_${image?.secret}.jpg`;

                        return (
                            <Col
                                key={image?.id}
                                className="image-wrapper"
                                xs={32}
                                sm={24}
                                md={16}
                                lg={8}
                            >
                                <Image className="image" src={imgSrc} />
                            </Col>
                        );
                    })}
                </Row>
            </InfiniteScroll>
        </Content>
    );
}
