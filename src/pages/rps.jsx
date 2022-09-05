import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import Handler from "../components/Handler";
import PdfFile from "../components/gameRules";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// const defaultLayoutPluginInstance = defaultLayoutPlugin();

export default function Rps() {
  return (
    <>
      <Container className="mt-5">
        <Nav />

        <div className="text-center pt-5">
          <h5>Game : Rock Paper Scissors</h5>
        </div>

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
