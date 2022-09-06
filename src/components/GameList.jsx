/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

export default function GameList () {
  return (
    <>
      <div className="mt-1">
        <div className="row mt-1">
          <div className="col p-5">
            <div className="text-center pb-4">
              <h3>Game List</h3>
            </div>
            <div className="text-center" style={{ paddingBottom: 23 }}>
              <Image
                src="/rps.png"
                alt="rock paper scissors img"
                width={200}
                height={200}
              />
            </div>

            <div className="pt-3 d-grid">
              <Link href="/rps">
                <Button variant="primary">PLAY GAME</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
