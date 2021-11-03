import { Col, Layout, Menu, Row } from "antd"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { AuthActionCreators } from "../redux/reducers/auth/actionCreators"
import { DropdownMenuItemActionCreators } from "../redux/reducers/dropDownMenuItem/actionCreators"
import { RouteNames } from "../router/router"
import logo from "../source/logo.svg"
import DropdownMenu from "./DropdownMenu"

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const { isAuth } = useTypedSelector(state => state.auth)
    const { menu } = useTypedSelector(state => state.dropdown)

    const onSetMenu = (titleInfo: string, menuInfo: string) => {
        dispatch(DropdownMenuItemActionCreators.setDropdownTitle(titleInfo))
        dispatch(DropdownMenuItemActionCreators.setDropdownMenu(menuInfo))
    }

    return (
        <Layout.Header style={{ position: 'sticky', top: '0px', zIndex: 1 }}>
            <Row justify='space-between'>
                <Col span={4}>
                    <Link to={RouteNames.MAIN_PAGE}>
                        <img src={logo} alt="img" />
                    </Link>
                </Col>
                <Col span={2}>
                    <DropdownMenu
                        onPopular={() => onSetMenu('Popular films', 'Popular')}
                        onTopRated={() => onSetMenu('Top rated films', 'Top rated')}
                        onUpcoming={() => onSetMenu('Upcoming films', 'Upcoming')}
                        menuButton={menu}
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
        </Layout.Header>
    )
}

export default Navbar
