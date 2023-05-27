import { Input } from "antd";

import "./style.scss";

type Props = {};

const { Search } = Input;

export default function SearchInput({}: Props) {
    const onSearch = (value: string) => console.log(value);

    return (
        <Search
            className="search-input"
            placeholder="Search Your Desired Image"
            allowClear
            onSearch={onSearch}
        />
    );
}
