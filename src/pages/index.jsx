/* eslint-disable */
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div
      className="d-flex vh-100"
      style={{
        backgroundImage: "url(RockPap.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "#61481C",
      }}
    >
      <div>
        <Link href="/login">
          <Button
            variant="warning"
            style={{
              textDecoration: "none",
              color: "#3B2A0F",
              fontFamily: "comic sans ms",
              fontSize: "30px",
              fontWeight: "bolder",
              letterSpacing: "1px",
              position: "fixed",
              left: "45%",
              top : "40%",
              borderColor:'black',
              borderWidth: '2px'
            }}
          >
            login
          </Button>
        </Link>
      </div>
      <br />
      <br />
      <div>
        <Link href="/register">
          <Button
            variant="warning"
            style={{
              textDecoration: "none",
              color: "#3B2A0F",
              fontFamily: "comic sans ms",
              fontSize: "30px",
              fontWeight: "bolder",
              letterSpacing: "1px",
              position: "fixed",
              left: "43%",
              top : "52%",
              borderColor:'black',
              borderWidth: '2px'
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}