import React from 'react';
import { Player } from 'video-react';
import { Container } from "react-bootstrap";
import Profile from "../components/Profile";
import GameList from "../components/GameList";
import Nav from "../components/Nav";

export default function Dashboard() {
  return (
    <>
      <Player
      playsInline
      poster="/public/gunting.png"
      src="https://www.youtube.com/watch?v=uji9mJuGLo8"/>
      <Container className="mt-5">
        <Nav />
        <div className="row">
          <div className="col-6">
            <Profile />
          </div>
          <div className="col-6">
            <GameList />
          </div>
        </div>
      </Container>
    </>
  );
}
