import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function DailyProgress({
  diasStatus = [],
  mes = "Maio",
  ano = 2025,
  onPrev,
  onNext,
}) {
  const dias = Array.from({ length: 11 }, (_, i) => {
    const dia = i + 1;

    const diaData = diasStatus.find((d) => d.dia === dia);
    return {
      dia,
      status: diaData?.status || null,
    };
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Pressable onPress={onPrev}>
          <FontAwesome name="chevron-left" size={20} color="#000" />
        </Pressable>
        <View style={styles.headerCentro}>
          <Text style={styles.mes}>{mes}</Text>
          <Text style={styles.ano}>{ano}</Text>
        </View>
        <Pressable onPress={onNext}>
          <FontAwesome name="chevron-right" size={20} color="#000" />
        </Pressable>
      </View>
      <View style={styles.diasContainer}>
        {dias.map((item, index) => (
          <View key={index} style={styles.diaItem}>
            <View style={styles.iconeWrapper}>
              {item.status === "done" && (
                <View
                  style={[styles.iconeBolha, { backgroundColor: "#d1f5d3" }]}
                >
                  <FontAwesome name="check" size={14} color="green" />
                </View>
              )}
              {item.status === "fail" && (
                <View
                  style={[styles.iconeBolha, { backgroundColor: "#f5d1d1" }]}
                >
                  <FontAwesome name="close" size={14} color="darkred" />
                </View>
              )}
            </View>
            <View style={styles.ponto} />
            <Text style={styles.diaTexto}>{item.dia}</Text>
          </View>
        ))}
      </View>
      <View style={styles.linhaInferior} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 16,
  },
  headerCentro: {
    alignItems: "center",
  },
  mes: {
    fontWeight: "bold",
    fontSize: 16,
  },
  ano: {
    fontSize: 13,
    color: "#333",
  },
  diasContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    paddingHorizontal: 4,
  },
  diaItem: {
    alignItems: "center",
    width: 26,
  },
  iconeBolha: {
    borderRadius: 8,
    padding: 3,
    marginBottom: 2,
  },
  ponto: {
    width: 8,
    height: 8,
    backgroundColor: "#999",
    borderRadius: 4,
    marginVertical: 2,
  },
  diaTexto: {
    fontSize: 11,
    color: "#555",
    marginTop: 2,
  },
  linhaInferior: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginTop: 10,
  },
  iconeWrapper: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
