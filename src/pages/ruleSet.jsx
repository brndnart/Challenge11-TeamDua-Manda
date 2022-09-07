import { BlobProvider } from '@react-pdf/renderer'
import PdfFile from '../components/gameRules'

const LihatPdf = () => {
    return (
        <div>
            <BlobProvider document={<PdfFile />}>
                {({ url }) => (
                    <iframe
                        src={url}
                        frameBorder='0'
                        scrolling='yes'
                        seamless='seamless'
                        style={{
                            width: '100%',
                            height: '100vh',
                            display: 'block',
                        }}
                    />
                )}
            </BlobProvider>
        </div>
    )
}

export default LihatPdf
