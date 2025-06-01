import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MonthlyBarChart({
  data = [],
  ano = 2025,
  onPrev,
  onNext,
}) {
  const alturaMaxima = 80;
  const mesAtual = "mai.";

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Pressable onPress={onPrev}>
          <FontAwesome name="chevron-left" size={20} color="#000" />
        </Pressable>
        <View style={styles.headerCentro}>
          <Text style={styles.ano}>{ano}</Text>
          <Text style={styles.subtitulo}>Vezes concluída</Text>
        </View>
        <Pressable onPress={onNext}>
          <FontAwesome name="chevron-right" size={20} color="#000" />
        </Pressable>
      </View>

      <View style={styles.graficoArea}>
        {data.map((item, index) => {
          const altura = (item.valor / 10) * alturaMaxima;
          return (
            <View key={index} style={styles.coluna}>
              <Text style={styles.valorTexto}>
                {item.valor > 0 ? item.valor : ""}
              </Text>
              <View
                style={[
                  styles.barra,
                  { height: altura },
                  item.mes === mesAtual && styles.barraAtual,
                ]}
              />
              <Text
                style={[
                  styles.mesTexto,
                  item.mes === mesAtual && styles.mesAtual,
                ]}
              >
                {item.mes}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.linhaInferior} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 13,
    color: "#333",
  },
  graficoArea: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    height: 120,
    paddingHorizontal: 4,
  },
  coluna: {
    alignItems: "center",
    width: 24,
  },
  valorTexto: {
    fontSize: 11,
    color: "#333",
    marginBottom: 4,
  },
  barra: {
    width: 16,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
  barraAtual: {
    backgroundColor: "navy",
  },
  mesTexto: {
    fontSize: 11,
    color: "#ccc",
    marginTop: 4,
    textAlign: "center",
  },
  mesAtual: {
    color: "#000",
    fontWeight: "bold",
  },
  linhaInferior: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 8,
    width: "100%",
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
  ano: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
