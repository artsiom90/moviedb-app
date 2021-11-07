import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { IMG_BASE_URL } from "../api/api"
import { Cast } from "../redux/reducers/movies/types"
import noImage from "../source/noimage.png"

interface CastPropsType {
    castItem: Cast
}

const CastItem: FC<CastPropsType> = ({ castItem }) => {
    return (
        <Card
            style={{ width: 200, margin: '15px' }}
            cover={castItem.profile_path
                ? <img
                    alt="img"
                    src={`${IMG_BASE_URL}w500${castItem.profile_path}`}
                />
                : <img
                    alt="img"
                    src={noImage}
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
