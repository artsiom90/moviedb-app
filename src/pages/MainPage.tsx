import { Layout, PageHeader, Row } from "antd"
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import MovieItem from "../components/MovieItem"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { results, total_pages } = useTypedSelector(state => state.movies.movies)
    const { search } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovies(currentPage, search))
        setCurrentPage(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const changePageHandler = (pageNumber: number) => {
        dispatch(MoviesActionCreators.getMovies(pageNumber, search))
        setCurrentPage(pageNumber)
    }

    return (
        <Layout>
            <Row justify='center'>
                <SearchInput />
            </Row>
            {!results
                ? <Row justify='center' style={{ paddingTop: '10px' }}>
                    <Loading />
                </Row>
                : <>
                    {isLoading
                        ? <Row justify='center'>
                            <Loading />
                        </Row>
                        : <>
                            <Row justify='center'>
                                <PageHeader
                                    className="site-page-header"
                                    title={!search ? 'Popular films' : 'Search result'}
                                />
                            </Row>
                            <Row justify='space-between'>
                                {results.map(movie => {
                                    return <MovieItem key={movie.id} movie={movie} />
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
                </>}
        </Layout>
    )
}

export default MainPage
