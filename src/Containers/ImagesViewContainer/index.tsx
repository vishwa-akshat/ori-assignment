import { useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { Layout, Row, Col, Spin, Image } from "antd";

import "./style.scss";
import ImageLoading from "../../Components/ImageLoading";

import { useStore } from "../../store/global";

const { Content } = Layout;

export default function ImagesViewContainer() {
    const imageData = useStore((state) => state.imageData);
    const loadPhotos = useStore((state) => state.loadPhotos);
    const page = useStore((state) => state.page);
    const setPage = useStore((state) => state.setPage);

    useEffect(() => {
        loadPhotos();
    }, [page]);

    function handleLoadMore() {
        setPage(page + 1);
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
