import { View, Text, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

export default function CircularProgress({ value = 3, max = 10 }) {
  const radius = 90;
  const strokeWidth = 17;
  const size = (radius + strokeWidth) * 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Svg width={size} height={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={"navy"}
            strokeWidth={strokeWidth}
            strokeDasharray={`${progress}, ${circumference}`}
            strokeLinecap="round"
            fill="none"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  text: {
    position: "absolute",
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
  },
});
