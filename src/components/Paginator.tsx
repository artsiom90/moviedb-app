import { Pagination } from "antd"
import { FC, memo } from "react"

interface PaginatorProps {
    defaultCurrent: number
    onChange: (pageNumber: number) => void
    total: number
}

const Paginator: FC<PaginatorProps> = memo(({ defaultCurrent, onChange, total }) => {
    return <Pagination
        showSizeChanger={false}
        defaultPageSize={20}
        defaultCurrent={defaultCurrent}
        onChange={onChange}
        total={total}
    />
})

export default Paginator
