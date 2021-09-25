import { Layout, Menu, Row } from "antd"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { AuthActionCreators } from "../redux/reducers/auth/actioncreators"

const Navbar: FC = () => {
    const dispatch = useDispatch()
    const { isAuth } = useTypedSelector(state => state.auth)


    return (
        <Layout.Header>
            <Row justify='end'>
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
            </Row>
        </Layout.Header>
    )
}

export default Navbar
