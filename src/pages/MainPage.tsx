import { Col, Layout, PageHeader, Row } from "antd"
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import DropdownMenu from "../components/DropdownMenu"
import Loading from "../components/Loading"
import MovieItem from "../components/MovieItem"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

interface headerInfoType {
    title: string,
    menu: string,
}

const MainPage: FC = () => {
    const [headerInfo, setHeaderInfo] = useState<headerInfoType>({
        title: '',
        menu: '',
    })
    const [topRated, setTopRated] = useState<boolean>(false)
    const [upcoming, setUpcoming] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { results, total_pages } = useTypedSelector(state => state.movies.movies)
    console.log(results)

    const { search } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        getPopular()
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

    const getPopular = () => {
        setHeaderInfo({ ...headerInfo, title: 'Popular films', menu: 'Popular' })
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
        setHeaderInfo({ ...headerInfo, title: 'Top rated films', menu: 'Top rated' })
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
        setHeaderInfo({ ...headerInfo, title: 'Upcoming films', menu: 'Upcoming' })
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
            <Row justify='center'>
                <SearchInput />
            </Row>
            {!results
                ? <Row
                    justify='center'
                    style={{ paddingTop: '10px' }}
                >
                    <Loading />
                </Row>
                : <>
                    {isLoading
                        ? <Row justify='center'>
                            <Loading />
                        </Row>
                        : <>
                            <Row justify='space-around'>
                                <Col span={4}>
                                    {!search
                                        ? <div style={{ marginTop: 23 }}>
                                            <DropdownMenu
                                                onPopular={getPopular}
                                                onTopRated={getTopRated}
                                                onUpcoming={getUpcoming}
                                                menuButton={headerInfo.menu}
                                            />
                                        </div>
                                        : null}
                                </Col>
                                <Col span={18}>
                                    <div className="site-page-header">
                                        {!search
                                            ? <div style={{ fontSize: 35, paddingLeft: 243, marginTop: 20 }}>
                                                <h1>{headerInfo.title}</h1>
                                            </div>
                                            : <div style={{ fontSize: 35, paddingLeft: 243, marginTop: 20 }}>
                                                <h1>'Search result'</h1>
                                            </div>}
                                    </div>
                                </Col>
                            </Row>
                            <Row justify='space-between'>
                                {results.map(movie => {
                                    return <MovieItem
                                        key={movie.id}
                                        movie={movie}
                                    />
                                })}
                            </Row>
                            <Row
                                justify='center'
                                style={{ marginBottom: 20 }}
                            >
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
