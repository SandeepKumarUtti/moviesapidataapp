import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = (props) => {
  // const { data } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
    // props.getData();
  }, []);
  const data = useSelector((state) => state.data.results);
  console.log(data);
  if (data === undefined) return false;
  return (
    <View style={styles.board}>
      <Text>Movies</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.cardTitle}>{item.title}</Text>

              <Text style={styles.cardText}>
                {item.overview.slice(0, 70)}...
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center"
  },
  cardTitle: {
    fontSize: 15,
    width: 200,
    marginBottom: 5
  },
  cardText: {
    fontSize: 9,
    width: 200
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 10
  },
  movieList: {
    flex: 1,
    flexWrap: "wrap"
  },
  movieCard: {
    fonWeight: 100,
    width: "45",
    color: "#12263b",
    flex: 1,
    flexDirection: "row",
    aligItems: "center",
    flexGrow: 3,
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#5BC0F8",
    margin: "10px",
    background: "#a9c4e0"
  },
  button: {
    alignItems: "center",
    width: 150,
    padding: 15,
    position: "absolute",
    backgroundColor: "#742dd2",
    borderRadius: 100,
    shadowColor: "#ffffff",
    shadowOffset: { width: -70, height: -70 },
    shadowOpacity: 0.3,
    shadowRadius: 50
  },
  board: {
    color: "#ffffff",
    background: "#12263b",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: 400
  }
});

export default HomeScreen;
