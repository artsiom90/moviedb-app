import { Space } from "antd"
import Search from "antd/lib/input/Search"
import { ChangeEvent, FC, useState } from "react"
import { useDispatch } from "react-redux"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const SearchInput: FC = () => {
    const [search, setSearch] = useState<string>('')
    const dispatch = useDispatch()

    const onSearch = () => {
        dispatch(MoviesActionCreators.setSearch(search))
        setSearch('')
    }

    return (
        <Space >
            <Search
                style={{ width: 500, marginTop: '10px' }}
                placeholder="Search"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                allowClear
                onSearch={onSearch}
            />
        </Space>
    )
}

export default SearchInput
