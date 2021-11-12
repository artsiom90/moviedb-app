import { Layout, Row } from "antd"
import { FC } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import MovieItem from "../components/MovieItem"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import { TVShowsActionCreators } from "../redux/reducers/TVShows/actionCreators"

const MainPage: FC = () => {
    const { results, total_results } = useTypedSelector(state => state.movies.movies)
    const { search, currentPage } = useTypedSelector(state => state.movies)
    const { titleMovie, titleTV } = useTypedSelector(state => state.dropdown)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    const changePageHandler = (pageNumber: number) => {
        if (titleMovie === 'Top rated films') {
            dispatch(MoviesActionCreators.getTopRatedMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleMovie === 'Upcoming films') {
            dispatch(MoviesActionCreators.getUpcomingMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleMovie === 'Popular films') {
            dispatch(MoviesActionCreators.getPopularMovies(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else if (titleTV === 'Popular TV shows') {
            dispatch(TVShowsActionCreators.getPopularTVShows(pageNumber))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        } else {
            dispatch(MoviesActionCreators.getSearchedMovies(pageNumber, search))
            dispatch(MoviesActionCreators.setCurrentPage(pageNumber))
        }
    }

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
