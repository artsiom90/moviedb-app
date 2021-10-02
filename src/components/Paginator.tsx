import { Pagination } from "antd"
import { FC } from "react"

interface PaginatorProps {
    defaultCurrent: number
    onChange: (pageNumber: number) => void
    total: number
}

const Paginator: FC<PaginatorProps> = ({ defaultCurrent, onChange, total }) => {
    return <Pagination
        defaultCurrent={defaultCurrent}
        onChange={onChange}
        total={total}
    />
}

export default Paginator
