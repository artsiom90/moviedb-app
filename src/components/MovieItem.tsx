import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC } from "react"
import { IMG_URL } from "../api/api"
import { Movie } from "../redux/reducers/movies/types"

interface MovieItemProps {
    movie: Movie
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    return (
        <Card
            style={{ width: 240, margin: '10px' }}
            cover={<img
                alt="img"
                src={`${IMG_URL}${movie.poster_path}`}
            />}
        >
            <Meta title={movie.title} />
            <Meta description={`Popularity: ${movie.popularity}`} />
        </Card>
    )
}

export default MovieItem
