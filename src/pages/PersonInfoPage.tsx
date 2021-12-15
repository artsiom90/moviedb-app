import { Card, Col, Layout, Row } from "antd"
import Meta from "antd/lib/card/Meta"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { IMG_BASE_URL } from "../api/api"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MoviesActionCreators } from "../redux/reducers/movies/actionCreators"
import Loading from "../components/Loading"

interface ParamsType {
  id: string
}

const PersonInfoPage: FC = () => {
  const { person } = useTypedSelector((state) => state.movies)
  const { isLoading } = useTypedSelector((state) => state.loading)

  const params = useParams<ParamsType>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MoviesActionCreators.getPerson(params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      {!person || isLoading ?
        <Loading /> :
        <>
          <Row justify="space-around">
            <Col>
              <Card
                style={{ width: 240, marginTop: 30 }}
                cover={
                  <img
                    src={`${IMG_BASE_URL}w500${person.profile_path}`}
                    alt="img"
                  />
                }
              />
            </Col>
            <Col>
              <h1 style={{ fontSize: 35, marginTop: 30 }}>Additional information</h1>
              <div style={{ fontSize: 20 }}>
                <Meta description={`Name: ${person.name}`} />
                <Meta description={`Place of birth: ${person.place_of_birth}`} />
                <Meta description={`Birthday: ${person.birthday}$`} />
                <Meta description={`Death day: ${person.deathday}`} />
                <Meta description={`Popularity: ${person.popularity}`} />
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <h1 style={{ fontSize: 35, marginTop: 30, textAlign: "center" }}>Biography</h1>
              <div style={{ fontSize: 20, margin: '0px 30px 30px 30px' }}>
                <Meta description={person.biography} />
              </div>
            </Col>
          </Row>
        </>
      }
    </Layout>
  )
}

export default PersonInfoPage
