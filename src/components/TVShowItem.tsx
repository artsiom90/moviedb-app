import { Button, Card, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { useHistory } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { TVShow } from "../redux/reducers/movies/types"

interface TVShowItemProps {
    tvShow: TVShow
}

const TVShowItem: FC<TVShowItemProps> = ({ tvShow }) => {
    const history = useHistory()

    return (
        <Card
            style={{ width: 240, margin: '10px', textAlign: 'center' }}
            cover={<img
                alt="img"
                src={`${IMG_BASE_URL}w500${tvShow.poster_path}`}
            />}
        >
            <Meta title={tvShow.name} />
            <Meta description={`Release date: ${tvShow.first_air_date}`} />
            <Row justify='center' style={{ paddingTop: 15 }}>
                <Button onClick={() => history.push(`/show/${tvShow.id}`)}>More info</Button>
            </Row>
        </Card>
    )
}

export default TVShowItem
