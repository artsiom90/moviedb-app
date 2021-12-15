import { Button, Card, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { useHistory } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { Cast } from "../redux/reducers/movies/types"
import noImage from "../source/noimage.png"

interface CastPropsType {
    castItem: Cast
}

const CastItem: FC<CastPropsType> = ({ castItem }) => {
    const history = useHistory()

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
            <Row justify='center' style={{ paddingTop: 15 }}>
                <Button onClick={() => history.push(`/person/${castItem.id}`)}>More info</Button>
            </Row>
        </Card>
    )
}

export default CastItem
