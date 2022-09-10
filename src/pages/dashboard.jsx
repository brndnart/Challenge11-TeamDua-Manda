import React from 'react'
import { Container } from 'react-bootstrap'
import Profile from '../components/Profile'
import GameList from '../components/GameList'
import Nav from '../components/Nav'

export default function Dashboard() {
    return (
        <>
            <Container className='mt-3'>
                <Nav />
                <div className='row'>
                    <div className='col-6'>
                        <Profile />
                    </div>
                    <div className='col-6'>
                        <GameList />
                    </div>
                </div>
                <iframe
                    style={{ position: 'relative', left: '2%', top: '80%' }}
                    width='500'
                    height='280'
                    src='https://www.youtube.com/embed/uji9mJuGLo8'
                ></iframe>
            </Container>
        </>
    )
}
