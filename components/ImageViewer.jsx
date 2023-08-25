import { Image, StyleSheet } from "react-native";

export const ImageViewer = ({ PlaceholderImage }) => {
  return (
    <Image
      style={styles.bankImage}
      source={{
        uri: PlaceholderImage,
      }}
    />
  );
};

const styles = StyleSheet.create({
  bankImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 15,
  },
});
