import {
  Page,
  Text,
  Image,
  Document,
  View,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
  });

const PdfFile = () => {
  return (
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed></Text>
      <Text style={styles.text}>
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores similique fuga, placeat culpa, doloribus omnis voluptatibus voluptates, error suscipit illum unde sed qui officiis accusamus non expedita dicta mollitia."
      </Text>
    </Page>
  </Document>
  );
};

export default PdfFile;
