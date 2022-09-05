import {
  Page,
  Text,
  Image,
  Document,
  View,
  StyleSheet,
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
    paddingBottom: 5,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 50,
    fontFamily: "Times-Roman",
    marginBottom: 20,
    textAlign: "center",
    color: "green",
  },
});

const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Game Rules
        </Text>
        <View>
          <Text style={styles.text}>
            1. This game version (1.00) only consist of one human player and one
            CPU rivaling each other, human player on the left side and CPU on
            others.
          </Text>
          <Text style={styles.text}>
            2. Both human player and CPU has three option of choosing, ROCK
            PAPER and SCISSOR.
          </Text>
          <Text style={styles.text}>
            3. The mechanism is like loop, ROCK beat the SCISSOR, SCISSOR beat
            the PAPER, but PAPER can beat ROCK and vice versa.
          </Text>
          <Text style={styles.text}>
            4. When human player choose between the three, the CPU will choose
            too.
          </Text>
          <Text style={styles.text}>
            5. The result will compare which one is the winner by obeying the
            number 3 rule.
          </Text>
          <Text style={styles.text}>6. Have fun playing...</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
