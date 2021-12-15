import { DownOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Button, Space } from 'antd'
import { FC, memo } from "react"

interface DropdownMenuProps {
    menuButton: string,
    menuItem1: string,
    menuItem2: string,
    menuItem3: string,
    onPopular: () => void,
    onTopRated: () => void,
    onUpcoming: () => void,
}

const DropdownMenu: FC<DropdownMenuProps> = memo(({ menuButton, onPopular, onTopRated, onUpcoming, menuItem1, menuItem2, menuItem3 }) => {
    const menu = (
        <Menu>
            <Menu.Item onClick={onPopular}>{menuItem1}</Menu.Item>
            <Menu.Item onClick={onTopRated}>{menuItem2}</Menu.Item>
            <Menu.Item onClick={onUpcoming}>{menuItem3}</Menu.Item>
        </Menu>
    )

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown
                    overlay={menu}
                    placement="bottomCenter"
                >
                    <Button>{menuButton}<DownOutlined /></Button>
                </Dropdown>
            </Space>
        </Space>
    )
})

export default DropdownMenu
