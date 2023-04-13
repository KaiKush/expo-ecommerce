import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface MyOrderScreenProps {
  title: string;
  onPress?: () => void;
}

const MyOrderScreen: React.FC<MyOrderScreenProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onPress && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0099ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
