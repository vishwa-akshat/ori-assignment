import { AutoComplete, Input } from "antd";

import { useStore } from "../../store/global";

import "./style.scss";

const { Search } = Input;

export default function SearchInput() {
    const setSearchInput = useStore((state) => state.setSearchInput);
    const suggestions = useStore((state) => state.suggestions);
    const setSuggestions = useStore((state) => state.setSuggestions);
    const emptyImageData = useStore((state) => state.emptyImageData);

    const onSearch = (value: string) => {
        if (value === "") {
            setSearchInput(null);
            emptyImageData();
            return;
        }
        setSearchInput(value);
        setSuggestions(value);
        emptyImageData();
    };

    const renderItem = (title: string) => ({
        value: title,
        label: <div>{title}</div>,
    });

    const options =
        suggestions.length === 0
            ? []
            : [
                  {
                      label: "Previous Searches",
                      options: suggestions.map((suggestion) =>
                          renderItem(suggestion)
                      ),
                  },
              ];

    return (
        <AutoComplete options={options} className="search-input">
            <Search
                placeholder="Search Your Desired Image"
                allowClear
                onSearch={onSearch}
            />
        </AutoComplete>
    );
}
