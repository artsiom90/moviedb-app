import { Card, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { IMG_URL } from "../api/api"
import Loading from "../components/Loading"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const { results } = useTypedSelector(state => state.movies.movies)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovies())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <SearchInput />
            {!results
                ? <Row justify='center'>
                    <Loading />
                </Row>
                : (isLoading
                    ? <Row justify='center'>
                        <Loading />
                    </Row>
                    : <Row justify='space-between'>
                        {results.map(movie => {
                            return (
                                <Card
                                    style={{ width: 240, margin: '10px' }}
                                    key={movie.id}
                                    cover={<img
                                        alt="img"
                                        src={`${IMG_URL}${movie.poster_path}`}
                                    />}
                                >
                                    <Meta title={movie.title} />
                                    <Meta description={`Popularity: ${movie.popularity}`} />
                                </Card>
                            )
                        })}
                    </Row>)}
        </Layout>
    )
}

export default MainPage
