import { Card, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const { movies } = useTypedSelector(state => state.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovies())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <Row justify='space-between'>
                {movies.map(movie => {
                    return (
                        <Card
                            style={{ width: 240 }}
                            key={movie.id}
                            cover={<img
                                alt="img"
                                src={movie.backdrop_path}
                            />}
                        >
                            <Meta title={movie.title} />
                        </Card>
                    )
                })}
            </Row>
        </Layout>
    )
}

export default MainPage
