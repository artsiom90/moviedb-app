import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { IMG_POSTER_URL } from "../api/api"
import { Cast } from "../redux/reducers/movies/types"

interface CastPropsType {
    castItem: Cast
}

const CastItem: FC<CastPropsType> = ({ castItem }) => {
    return (
        <Card
            style={{ width: 300, margin: '15px' }}
            cover={<img
                alt="img"
                src={`${IMG_POSTER_URL}${castItem.profile_path}`}
            />}
        >
            <Meta
                title={castItem.name}
                description={castItem.character}
            />
        </Card>
    )
}

export default CastItem
