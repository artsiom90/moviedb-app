import { Layout } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import { FC } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Footer/>
    </Layout>
  )
}

export default App
