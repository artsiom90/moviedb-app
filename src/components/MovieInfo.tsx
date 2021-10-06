import { Card, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { IMG_BACKDROP_URL } from "../api/api"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import Loading from "./Loading"

interface ParamsType {
    id: string
}

const MovieInfo: FC = () => {
    const { movieInfo } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)
    console.log(movieInfo)

    const params = useParams<ParamsType>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovie(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            {isLoading
                ? <Loading />
                : <Card>
                    <Row justify='center' style={{ paddingBottom: 20 }}>
                        <Meta title={movieInfo.title} />
                    </Row>
                    <Row justify='start'>
                        <img src={`${IMG_BACKDROP_URL}${movieInfo.backdrop_path}`} alt="img" />
                    </Row>
                </Card>}
        </Layout>
    )
}

export default MovieInfo
