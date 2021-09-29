import { Row, Space } from "antd"
import Search from "antd/lib/input/Search"
import { useState } from "react"

const SearchInput = () => {
    const [search, setSearch] = useState('')

    const onSearch = () => {
        console.log('search')
    }

    return (
        <Row justify='center'>
            <Space >
                <Search
                    style={{ width: 500, marginTop: '10px' }}
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    allowClear
                    onSearch={onSearch}
                />
            </Space>
        </Row>
    )
}

export default SearchInput
