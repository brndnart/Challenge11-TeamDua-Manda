import { render, screen } from '@testing-library/react'
import GameList from '../src/components/GameList'
import '@testing-library/jest-dom'

describe('Game List', () => {
    it('renders game list component', () => {
        render(<GameList />)

        expect(
            screen.getByRole('heading', { name: /Game List/i })
        ).toBeInTheDocument()
    })

    it('renders game list image', () => {
        render(<GameList />)
        expect(
            screen.getByRole('img', {
                name: /rock paper scissors img/i,
            })
        ).toBeInTheDocument()
    })

    it('renders game list button', () => {
        render(<GameList />)
        expect(
            screen.getByRole('button', { name: /PLAY GAME/i })
        ).toBeInTheDocument()
    })
})
