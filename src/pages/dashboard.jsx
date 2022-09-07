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
                <iframe
                    width='1100'
                    height='190'
                    src='https://www.youtube.com/embed/uji9mJuGLo8'
                ></iframe>
                <div className='row'>
                    <div className='col-6'>
                        <Profile />
                    </div>
                    <div className='col-6'>
                        <GameList />
                    </div>
                </div>
            </Container>
        </>
    )
}
