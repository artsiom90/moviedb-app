import { Layout, Menu, Row } from "antd"
import { FC } from "react"

const Navbar: FC = () => {
    const isAuth = true

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ? <Menu
                        theme='dark'
                        mode='horizontal'
                        selectable={false}
                    >
                        <Menu.Item>Logout</Menu.Item>
                    </Menu>
                    : <Menu
                        theme='dark'
                        selectable={false}
                    >
                        <Menu.Item>Login</Menu.Item>
                    </Menu>}
            </Row>
        </Layout.Header>
    )
}

export default Navbar
