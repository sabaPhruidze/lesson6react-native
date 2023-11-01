import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: 1 },
    { name: "yoshi", id: 2 },
    { name: "mario", id: 3 },
    { name: "luigi", id: 4 },
    { name: "peach", id: 5 },
    { name: "toad", id: 6 },
    { name: "bowser", id: 7 },
    { name: "aaron", id: 8 },
    { name: "specter", id: 9 },
    { name: "lit", id: 10 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id} // this will become the key
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
