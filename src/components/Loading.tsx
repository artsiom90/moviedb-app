import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = () => {
    const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return <Spin indicator={spinner} />
}

export default Loading
