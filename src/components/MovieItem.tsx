import { Button, Card, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { useHistory } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { Movie } from "../redux/reducers/movies/types"

interface MovieItemProps {
    movie: Movie
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    const history = useHistory()

    return (
        <Card
            style={{ width: 240, margin: '10px', textAlign: 'center' }}
            cover={<img
                alt="img"
                src={`${IMG_BASE_URL}w500${movie.poster_path}`}
            />}
        >
            <Meta title={movie.title} />
            <Meta description={`Release date: ${movie.release_date}`} />
            <Row justify='center' style={{ paddingTop: 15 }}>
                <Button onClick={() => history.push(`/movie/${movie.id}`)}>More info</Button>
            </Row>
        </Card>
    )
}

export default MovieItem
