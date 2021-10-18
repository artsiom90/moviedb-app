import { Card, Col, Layout, Row } from "antd"
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
                : <>
                    <div style={{ textAlign: 'center', margin: '15px 0 15px 0', fontSize: 18 }}>
                        <h1>{movieInfo.title}</h1>
                        <Meta description={movieInfo.overview} />
                    </div>
                    <Row justify='space-around' style={{ paddingBottom: 20 }}>
                        <Col>
                            <img src={`${IMG_BACKDROP_URL}${movieInfo.backdrop_path}`} alt="img" />
                        </Col>
                        <Card style={{ width: 400, fontSize: 20 }}>
                            <h1>Additional information:</h1>
                            <p>
                                <Meta description={`Release date: ${movieInfo.release_date}`} />
                            </p>
                            <p>
                                <Meta description={`Runtime: ${movieInfo.runtime} minutes`} />
                            </p>
                            <p>
                                <Meta description={`Budget: ${movieInfo.budget}$`} />
                            </p>
                            <p>
                                <Meta description={`Revenue: ${movieInfo.revenue}$`} />
                            </p>
                            <p>
                                <Meta description={`Vote average: ${movieInfo.vote_average}`} />
                            </p>
                        </Card>
                    </Row>
                </>}
        </Layout>
    )
}

export default MovieInfo
