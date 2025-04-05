// components/DashboardHeader.js
import FilterBar from '@components/FilterBar/FilterBar';
import PulseCard from '@components/PulseCard/PulseCard';
import SummaryCard from '@components/SummaryCard/SummaryCard';
import React from 'react';
import { View, StyleSheet } from 'react-native';


const OperationsTopPart = ({ expenses = 0, income = 0 }) => {
  return (
    <View style={styles.container}>
      <FilterBar />
      <View style={styles.summaryRow}>
        <SummaryCard type="expenses" amount={expenses} />
        <SummaryCard type="income" amount={income} />
      </View>
      <PulseCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default OperationsTopPart;
