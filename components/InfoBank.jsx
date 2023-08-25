import { Text, View, StyleSheet } from "react-native";

export const InfoBank = ({ bank }) => {
  const { bankName, description, age } = bank.item;

  return (
    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>{bankName}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}> Edad: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 2,
    flex: 1,
  },
  text: {
    color: "#fff",
    marginTop: 3,
  },
  textTitle: {
    color: "#fff",
    fontSize: 20,
  },
});
