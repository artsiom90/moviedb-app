import { Col, Layout, Menu, Row } from "antd"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { AuthActionCreators } from "../redux/reducers/auth/actionCreators"
import { DropdownMenuItemActionCreators } from "../redux/reducers/dropDownMenuItem/actionCreators"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import { TVShowsActionCreators } from "../redux/reducers/TVShows/actionCreators"
import { RouteNames } from "../router/router"
import logo from "../source/logo.svg"
import DropdownMenu from "./DropdownMenu"

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const { isAuth } = useTypedSelector(state => state.auth)
    const { titleMovie, titleTV, menuMovie, menuTV } = useTypedSelector(state => state.dropdown)
    const { search, currentPage } = useTypedSelector(state => state.movies)
    const history = useHistory()

    useEffect(() => {
        getMovies(MoviesActionCreators.getPopularMovies(1))
        dispatch(DropdownMenuItemActionCreators.setDropdownMovieTitle('Popular films'))
        dispatch(DropdownMenuItemActionCreators.setDropdownMovieMenu('Films'))
        dispatch(DropdownMenuItemActionCreators.setDropdownTVMenu('TV shows'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    useEffect(() => {
        switch (titleMovie) {
            case 'Popular films':
                getMovies(MoviesActionCreators.getPopularMovies(1))
                break
            case 'Top rated films':
                getMovies(MoviesActionCreators.getTopRatedMovies(1))
                break
            case 'Upcoming films':
                getMovies(MoviesActionCreators.getUpcomingMovies(1))
                break
            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titleMovie, menuMovie])

    useEffect(() => {
        switch (titleTV) {
            case 'Popular TV shows':
                getMovies(TVShowsActionCreators.getPopularTVShows(1))
                break
            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titleTV, menuTV])

    const getMovies = (action: any) => {
        if (!search) {
            dispatch(action)
            dispatch(MoviesActionCreators.setCurrentPage(1))
        }
        dispatch(MoviesActionCreators.getSearchedMovies(currentPage, search))
        dispatch(MoviesActionCreators.setCurrentPage(1))
    }

    const onSetMoviesMenu = (titleInfo: string, menuInfo: string) => {
        history.push(RouteNames.MAIN_PAGE)
        dispatch(MoviesActionCreators.setSearch(''))
        dispatch(DropdownMenuItemActionCreators.setDropdownMovieTitle(titleInfo))
        dispatch(DropdownMenuItemActionCreators.setDropdownMovieMenu(menuInfo))
    }

    const onSetTVShowsMenu = (titleInfo: string, menuInfo: string) => {
        history.push(RouteNames.MAIN_PAGE)
        dispatch(MoviesActionCreators.setSearch(''))
        dispatch(DropdownMenuItemActionCreators.setDropdownTVTitle(titleInfo))
        dispatch(DropdownMenuItemActionCreators.setDropdownTVMenu(menuInfo))
    }

    return (
        <Layout.Header style={{ position: 'sticky', top: '0px', zIndex: 1 }}>
            <Row justify='space-between'>
                <Col span={4}>
                    <Link to={RouteNames.MAIN_PAGE} >
                        <img src={logo} alt="img" />
                    </Link>
                </Col>
                <Col span={2}>
                    <DropdownMenu
                        onPopular={() => onSetMoviesMenu('Popular films', 'Popular')}
                        onTopRated={() => onSetMoviesMenu('Top rated films', 'Top rated')}
                        onUpcoming={() => onSetMoviesMenu('Upcoming films', 'Upcoming')}
                        menuButton={menuMovie}
                    />
                </Col>
                <Col span={2}>
                    <DropdownMenu
                        onPopular={() => onSetTVShowsMenu('Popular TV shows', 'Popular')}
                        onTopRated={() => onSetTVShowsMenu('Top rated TV shows', 'Top rated')}
                        onUpcoming={() => onSetTVShowsMenu('Latest TV shows', 'Upcoming')}
                        menuButton={menuTV}
                    />
                </Col>
                <Col span={2} offset={12}>
                    {isAuth
                        ? <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={false}
                        >
                            <Menu.Item onClick={() => dispatch(AuthActionCreators.setIsAuth(false))}>Logout</Menu.Item>
                        </Menu>
                        : <Menu
                            theme='dark'
                            selectable={false}
                        >
                            <div>MovieDB</div>
                        </Menu>}
                </Col>
            </Row>
        </Layout.Header >
    )
}

export default Navbar
