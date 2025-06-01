import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CircularProgress from "../components/CircularProgress";
import MonthlyBarChart from "../components/MonthlyBarProgress";
import DailyProgress from "../components/DailyProgress";

const MOCK_DATA_MENSAL = {
  2025: [
    { mes: "jan.", valor: 9 },
    { mes: "fev.", valor: 0 },
    { mes: "mar.", valor: 8 },
    { mes: "abr.", valor: 8 },
    { mes: "mai.", valor: 8 },
    { mes: "jun.", valor: 0 },
    { mes: "jul.", valor: 0 },
    { mes: "ago.", valor: 0 },
    { mes: "set.", valor: 0 },
    { mes: "out.", valor: 0 },
    { mes: "nov.", valor: 0 },
    { mes: "dez.", valor: 0 },
  ],
  2024: [
    { mes: "jan.", valor: 9 },
    { mes: "fev.", valor: 0 },
    { mes: "mar.", valor: 8 },
    { mes: "abr.", valor: 8 },
    { mes: "mai.", valor: 8 },
    { mes: "jun.", valor: 0 },
    { mes: "jul.", valor: 0 },
    { mes: "ago.", valor: 0 },
    { mes: "set.", valor: 0 },
    { mes: "out.", valor: 0 },
    { mes: "nov.", valor: 0 },
    { mes: "dez.", valor: 0 },
  ],
  2023: [
    { mes: "jan.", valor: 10 },
    { mes: "fev.", valor: 0 },
    { mes: "mar.", valor: 2 },
    { mes: "abr.", valor: 10 },
    { mes: "mai.", valor: 10 },
    { mes: "jun.", valor: 0 },
    { mes: "jul.", valor: 0 },
    { mes: "ago.", valor: 0 },
    { mes: "set.", valor: 0 },
    { mes: "out.", valor: 0 },
    { mes: "nov.", valor: 0 },
    { mes: "dez.", valor: 0 },
  ],
};

const MOCK_DATA = {
  "2025-04": [
    { dia: 2, status: "done" },
    { dia: 3, status: "done" },
    { dia: 5, status: "fail" },
  ],
  "2025-05": [
    { dia: 5, status: "done" },
    { dia: 6, status: "done" },
    { dia: 7, status: "done" },
    { dia: 8, status: "fail" },
  ],
  "2025-06": [
    { dia: 1, status: "done" },
    { dia: 2, status: "fail" },
  ],
};

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const ReportScreen = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const [month, setMonth] = useState(currentMonth);
  const [monthlyReportYear, setMonthlyReportYear] = useState(currentYear);
  const [reportYear, setReportYear] = useState(currentYear);

  const currentKey = `${monthlyReportYear}-${String(month + 1).padStart(
    2,
    "0"
  )}`;

  const dadosMensais = MOCK_DATA_MENSAL[reportYear] || [];

  const diasStatus = MOCK_DATA[currentKey] || [];

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setMonthlyReportYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setMonthlyReportYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const handlePrevYear = () => {
    setReportYear((prev) => prev - 1);
  };

  const handleNextYear = () => {
    setReportYear((prev) => prev + 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CircularProgress value={5} max={10} />
        <DailyProgress
          mes={monthNames[month]}
          ano={monthlyReportYear}
          diasStatus={diasStatus}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <MonthlyBarChart
          data={dadosMensais}
          ano={reportYear}
          onPrev={handlePrevYear}
          onNext={handleNextYear}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ReportScreen;
