import { Layout, Row } from "antd"
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import MovieItem from "../components/MovieItem"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { DropdownMenuItemActionCreators } from "../redux/reducers/dropDownMenuItem/actionCreators"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const MainPage: FC = () => {
    const [topRated, setTopRated] = useState<boolean>(false)
    const [upcoming, setUpcoming] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { results, total_results } = useTypedSelector(state => state.movies.movies)

    const { search } = useTypedSelector(state => state.movies)
    const { title } = useTypedSelector(state => state.dropdown)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        getPopular()
        dispatch(DropdownMenuItemActionCreators.setDropdownTitle('Popular films'))
        dispatch(DropdownMenuItemActionCreators.setDropdownMenu('Films'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const changePageHandler = (pageNumber: number) => {
        if (topRated) {
            dispatch(MoviesActionCreators.getTopRatedMovies(pageNumber))
            setCurrentPage(pageNumber)
        } else if (upcoming) {
            dispatch(MoviesActionCreators.getUpcomingMovies(pageNumber))
            setCurrentPage(pageNumber)
        } else if (!search) {
            dispatch(MoviesActionCreators.getPopularMovies(pageNumber))
            setCurrentPage(pageNumber)
        } else {
            dispatch(MoviesActionCreators.getSearchedMovies(pageNumber, search))
            setCurrentPage(pageNumber)
        }
    }

    useEffect(() => {
        if (title === 'Popular films') {
            getPopular()
        } else if (title === 'Top rated films') {
            getTopRated()
        } else if (title === 'Upcoming films') {
            getUpcoming()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    const getPopular = () => {
        setUpcoming(false)
        setTopRated(false)
        if (!search) {
            dispatch(MoviesActionCreators.getPopularMovies(1))
            setCurrentPage(1)
        }
        dispatch(MoviesActionCreators.getSearchedMovies(currentPage, search))
        setCurrentPage(1)
    }

    const getTopRated = () => {
        setTopRated(true)
        setUpcoming(false)
        if (!search) {
            dispatch(MoviesActionCreators.getTopRatedMovies(1))
            setCurrentPage(1)
        }
        dispatch(MoviesActionCreators.getSearchedMovies(currentPage, search))
        setCurrentPage(1)
    }

    const getUpcoming = () => {
        setUpcoming(true)
        setTopRated(false)
        if (!search) {
            dispatch(MoviesActionCreators.getUpcomingMovies(1))
            setCurrentPage(1)
        }
        dispatch(MoviesActionCreators.getSearchedMovies(currentPage, search))
        setCurrentPage(1)
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
                                    <h1>{title}</h1>
                                </div>
                                : <div style={{ fontSize: 35, marginTop: 15 }}>
                                    <h1>'Search result'</h1>
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
