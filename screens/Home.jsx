import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { BankCard } from "../components/BankCard";
import { useState, useEffect } from "react";
import { getBanks } from "../api/getBanks";

export const Home = () => {
  const [banksData, setBanksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      const data = await getBanks();
      setBanksData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching banks data:", error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchBanks();
    setRefreshing(false);
  };

  const renderBankCard = (item) => <BankCard bank={item} />;

  return (
    <View style={styles.safeArea}>

      <View style={styles.title}>
        <Text style={styles.text}>Banks App</Text>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={banksData}
          renderItem={renderBankCard}
          keyExtractor={(item) => item.bankName}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#000",
    padding: 7,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
  },
  listView: {
    padding: 7,
  }
});
