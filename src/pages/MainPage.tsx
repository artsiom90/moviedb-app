import { Layout, Row } from "antd"
import { FC, useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import MovieItem from "../components/MovieItem"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { DropdownMenuItemActionCreators } from "../redux/reducers/dropDownMenuItem/actionCreators"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const { results, total_results } = useTypedSelector(state => state.movies.movies)
    const { search, currentPage } = useTypedSelector(state => state.movies)
    const { titleMovie } = useTypedSelector(state => state.dropdown)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(DropdownMenuItemActionCreators.setDropdownTVMenu('TV shows'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changePageHandler = useCallback((pageNumber: number) => {
        if (search) {
            dispatch(MoviesActionCreators.getSearchedMovies(pageNumber, search))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleMovie === 'Top rated films') {
            dispatch(MoviesActionCreators.getTopRatedMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleMovie === 'Upcoming films') {
            dispatch(MoviesActionCreators.getUpcomingMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleMovie === 'Popular films') {
            dispatch(MoviesActionCreators.getPopularMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        }
    }, [dispatch, search, titleMovie])

    return (
        <Layout>
            <Row
                style={{ marginTop: 15 }}
                justify='center'
            >
                <SearchInput />
            </Row>
            {!results || isLoading
                ? <Row justify='center'>
                    <Loading />
                </Row>
                : <>
                    <Row justify='center'>
                        <div className="site-page-header">
                            {!search
                                ? <div style={{ fontSize: 35, marginTop: 15 }}>
                                    <h1>{titleMovie}</h1>
                                </div>
                                : <div style={{ fontSize: 35, marginTop: 15 }}>
                                    <h1>Search result</h1>
                                </div>}
                        </div>
                    </Row>
                    <Row justify='space-between'>
                        {results.map(movie => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                />
                            )
                        })}
                    </Row>
                    <Row
                        justify='center'
                        style={{ marginBottom: 20 }}
                    >
                        <Paginator
                            defaultCurrent={currentPage}
                            onChange={changePageHandler}
                            total={total_results}
                        />
                    </Row>
                </>}
        </Layout>
    )
}

export default MainPage
