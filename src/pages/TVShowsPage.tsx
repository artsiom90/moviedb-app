import { Layout, Row } from "antd"
import { FC } from "react"
import { useDispatch } from "react-redux"
import Loading from "../components/Loading"
import Paginator from "../components/Paginator"
import SearchInput from "../components/SearchInput"
import TVShowItem from "../components/TVShowItem"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"

const TVShowsPage: FC = () => {
    const { results, total_results } = useTypedSelector(state => state.movies.tvShows)
    const { search, currentPage } = useTypedSelector(state => state.movies)
    const { titleTV } = useTypedSelector(state => state.dropdown)
    const { isLoading } = useTypedSelector(state => state.loading)
    const dispatch = useDispatch()

    const changePageHandler = (pageNumber: number) => {
        if (titleTV === 'Popular TV shows') {
            dispatch(MoviesActionCreators.getPopularTVShows(pageNumber))
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
                                    <h1>{titleTV}</h1>
                                </div>
                                : <div style={{ fontSize: 35, marginTop: 15 }}>
                                    <h1>Search result</h1>
                                </div>}
                        </div>
                    </Row>
                    <Row justify='space-between'>
                        {results.map(tvShow => {
                            return (
                                <TVShowItem
                                    key={tvShow.id}
                                    tvShow={tvShow}
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

export default TVShowsPage
