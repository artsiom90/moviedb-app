import { Card, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const { movies } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()
    console.log(movies);
    

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovies())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            {isLoading
                ? <Row justify='center'>
                    <Loading />
                </Row>
                : <>
                    <Row justify='space-between'>
                    {movies.map(movie => {
                        return (
                            <Card
                                style={{ width: 240, margin: '10px' }}
                                key={movie.id}
                                cover={<img
                                    alt="img"
                                    src={movie.backdrop_path}
                                />}
                            >
                                <Meta title={movie.title} />
                                <Meta title='Popularity' description={movie.popularity}/>
                                <Meta title='Runtime' description={movie.runtime}/>
                            </Card>
                        )
                    })}
                </Row>
                </>}
        </Layout>
    )
}

export default MainPage
