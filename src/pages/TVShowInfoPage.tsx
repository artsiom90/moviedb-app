import { Card, Col, Layout, List, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { DropdownMenuItemActionCreators } from "../redux/reducers/dropDownMenuItem/actionCreators"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import CastItem from "../components/CastItem"
import Loading from "../components/Loading"

interface ParamsType {
    id: string
}

const TVShowInfoPage: FC = () => {
    const { tvShowsInfo } = useTypedSelector(state => state.movies)
    const { credits } = useTypedSelector(state => state.movies)
    const { isLoading } = useTypedSelector(state => state.loading)

    const params = useParams<ParamsType>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(MoviesActionCreators.getTvShow(params.id))
        dispatch(MoviesActionCreators.getTvShowCredits(params.id))
        dispatch(DropdownMenuItemActionCreators.setDropdownMovieMenu('Films'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            {!credits.cast || isLoading
                ? <Loading />
                : <>
                    <Row justify='center' style={{ paddingBottom: 20 }}>
                        <div style={{ textAlign: 'center', margin: '20px 0 25px 0', fontSize: 18, maxWidth: 1280 }}>
                            <h1 style={{ fontSize: '35px' }}>{tvShowsInfo.name}</h1>
                            <Meta description={tvShowsInfo.overview} />
                        </div>
                        <Card
                            style={{ width: 1280, fontSize: 20 }}
                            cover={<img
                                src={`${IMG_BASE_URL}w1280${tvShowsInfo.backdrop_path}`}
                                alt="img"
                            />}
                        />
                    </Row>
                    <Row justify='space-around'>
                        <Col>
                            <Card
                                style={{ width: 240 }}
                                cover={<img
                                    src={`${IMG_BASE_URL}w500${tvShowsInfo.poster_path}`}
                                    alt="img"
                                />}
                            />
                        </Col>
                        <Col >
                            <h1 style={{ fontSize: 35 }}>Additional information:</h1>
                            <div style={{ fontSize: 30 }}>
                                <Meta description={`First air date: ${tvShowsInfo.first_air_date}`} />
                                <Meta description={`Last air date: ${tvShowsInfo.last_air_date}`} />
                                <Meta description={`Episode runtime: ${tvShowsInfo.episode_run_time} minutes`} />
                                <Meta description={`${tvShowsInfo.in_production}` ? `In production: yes` : `In production: no`} />
                                <Meta description={`Number of episodes: ${tvShowsInfo.number_of_episodes}`} />
                                <Meta description={`Number of seasons: ${tvShowsInfo.number_of_seasons}`} />
                                <Meta description={`Vote average: ${tvShowsInfo.vote_average}`} />
                            </div>
                        </Col>
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
                    <Row style={{ margin: 20 }}>
                        <List
                            grid={{ gutter: 16, column: 6 }}
                            dataSource={credits.crew}
                            renderItem={item => (
                                <List.Item>
                                    <Card
                                        style={{ height: 150 }}
                                        title={item.name}>{item.job}
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Row>
                </>}
        </Layout>
    )
}

export default TVShowInfoPage
