import { Redirect, Route, Switch } from "react-router"
import { privateRoutes, publicRoutes, RouteNames } from "../router/router"

const AppRouter = () => {
    const isAuth = true

    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    )
                })}
                <Redirect to={RouteNames.MAIN_PAGE} />
            </Switch>
            : <Switch>
                {publicRoutes.map(route => {
                    return (
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    )
                })}
                <Redirect to={RouteNames.LOGIN} />
            </Switch>
    )
}

export default AppRouter
