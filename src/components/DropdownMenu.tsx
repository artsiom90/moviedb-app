import { DownOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button, Space } from 'antd'
import { FC } from "react"

interface DropdownMenuProps {
    menuButton: string,
    onPopular: () => void,
    onTopRated: () => void,
    onUpcoming: () => void,
}

const DropdownMenu: FC<DropdownMenuProps> = ({ menuButton, onPopular, onTopRated, onUpcoming }) => {
    const menu = (
        <Menu>
            <Menu.Item onClick={onPopular}>Popular</Menu.Item>
            <Menu.Item onClick={onTopRated}>Top rated</Menu.Item>
            <Menu.Item onClick={onUpcoming}>Upcoming</Menu.Item>
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
