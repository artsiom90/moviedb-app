import { Card, Col, Layout, List, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import CastItem from "./CastItem"
import Loading from "./Loading"

interface ParamsType {
    id: string
}

const MovieInfo: FC = () => {
    const { movieInfo } = useTypedSelector(state => state.movies)
    const { credits } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)

    const params = useParams<ParamsType>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getMovie(params.id))
        dispatch(MoviesActionCreators.getCredits(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            {!credits.cast || isLoading
                ? <Loading />
                : <>
                    <div style={{ textAlign: 'center', margin: '20px 0 25px 0', fontSize: 18 }}>
                        <h1 style={{ fontSize: '35px' }}>{movieInfo.title}</h1>
                        <Meta description={movieInfo.overview} />
                    </div>
                    <Row justify='space-around' style={{ paddingBottom: 20 }}>
                        <Card style={{ width: 1480, fontSize: 20 }}>
                            <img src={`${IMG_BASE_URL}w1280${movieInfo.backdrop_path}`} alt="img" />
                            <h1>Additional information:</h1>
                            <Meta description={`Release date: ${movieInfo.release_date}`} />
                            <Meta description={`Runtime: ${movieInfo.runtime} minutes`} />
                            <Meta description={`Budget: ${movieInfo.budget}$`} />
                            <Meta description={`Revenue: ${movieInfo.revenue}$`} />
                            <Meta description={`Vote average: ${movieInfo.vote_average}`} />
                        </Card>
                    </Row>
                    <h1 style={{ fontSize: '35px', textAlign: 'center', marginTop: '20px' }}>Actors</h1>
                    <Row justify='center'>
                        {credits.cast.map(castItem => {
                            return (
                                <CastItem
                                    key={castItem.credit_id}
                                    castItem={castItem}
                                />
                            )
                        })}
                    </Row>
                    <h1 style={{ fontSize: '35px', textAlign: 'center', marginTop: '20px' }}>Crew</h1>
                    <Row >
                        <List
                            grid={{ gutter: 16, column: 6 }}
                            dataSource={credits.crew}
                            renderItem={item => (
                                <List.Item>
                                    <Card style={{ height: 150 }} title={item.name}>{item.job}</Card>
                                </List.Item>
                            )}
                        />
                    </Row>
                </>}
        </Layout>
    )
}

export default MovieInfo
