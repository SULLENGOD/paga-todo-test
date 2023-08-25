import { View, StyleSheet} from "react-native";
import { ImageViewer } from "./ImageViewer";
import { InfoBank } from "./InfoBank";

export const BankCard = ({ bank }) => {
  return (


        <View style={styles.cardContainer}>
        <ImageViewer PlaceholderImage={bank.item.url} />
        <InfoBank bank={bank} />
      </View>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    padding: 7,
    margin: 5,
    backgroundColor: "#232323",
    borderWidth: 0.5,
    borderColor: "#fff",
  },
});
