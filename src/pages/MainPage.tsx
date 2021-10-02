import { Card, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { IMG_URL } from "../api/api"
import Loading from "../components/Loading"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { results, total_pages } = useTypedSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovies())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changePageHandler = (pageNumber: number) => {
        dispatch(MoviesActionCreators.getMovies(pageNumber))
        setCurrentPage(pageNumber)
    }

    return (
        <Layout>
            <SearchInput />
            {!results
                ? <Row justify='center'>
                    <Loading />
                </Row>
                : <>
                    <Row justify='space-between'>
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
                    </Row>
                    <Row justify='center'>
                        <Paginator
                            defaultCurrent={currentPage}
                            onChange={changePageHandler}
                            total={total_pages}
                        />
                    </Row>
                </>}
        </Layout>
    )
}

export default MainPage
