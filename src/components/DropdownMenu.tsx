import { DownOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button, Space } from 'antd'
import { FC } from "react"

interface DropdownMenuProps {
    menuButton: string,
    onClick: () => void,
}

const DropdownMenu: FC<DropdownMenuProps> = ({ menuButton, onClick }) => {
    const menu = (
        <Menu>
            <Menu.Item onClick={onClick}>Popular</Menu.Item>
            <Menu.Item>Top rated</Menu.Item>
            <Menu.Item>Upcoming</Menu.Item>
        </Menu>
    )

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <Button>{menuButton}<DownOutlined /></Button>
                </Dropdown>
            </Space>
        </Space>
    )
}

export default DropdownMenu
