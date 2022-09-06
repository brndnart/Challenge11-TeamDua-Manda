import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import Handler from "../components/Handler";
import PdfFile from "../components/gameRules";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Link from "next/link";

export default function Rps () {
  return (
    <>
      <Container className="mt-5">
        <Nav />
        <div className="text-center pt-5">
          <h5>Game : Rock Paper Scissors</h5>
        </div>
        <div>
          <Link href="/ruleSet">
            <a target="_blank">
              <button>View Rules Here</button>
            </a>
          </Link>
        </div>
        <p>OR</p>
        <div>
          <PDFDownloadLink
            document={<PdfFile />}
            fileName="Rock Paper Scissor Rules"
          >
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download Rules Here</button>
              )
            }
          </PDFDownloadLink>
        </div>

        <Handler />
      </Container>
    </>
  );
}
