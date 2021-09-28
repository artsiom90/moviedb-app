import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = () => {
    const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return (
        <div>
            <Spin indicator={spinner} />
        </div>
    )
}

export default Loading
