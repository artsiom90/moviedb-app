import { Button, Checkbox, Form, Input } from "antd"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { AuthActionCreators } from "../redux/reducers/auth/actionCreators"

const LoginForm: FC = () => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(AuthActionCreators.setIsAuth(true))
    }

    return (
        <Form
            initialValues={{ remember: true }}
            onFinish={onSubmit}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='Username' />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder='Password' />
            </Form.Item>
            <Form.Item name="remember">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item >
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Login
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
