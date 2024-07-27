import { View, Text, StyleSheet } from 'react-native';

type TItem = {
 id: number;
 text: string;
};

type TProps = {
 item: TItem;
 index: number;
};

const GoalItem = ({ index, item }: TProps) => {
 return (
  <View style={index % 2 ? styles.oddGoalItem : styles.evenGoalItem}>
   <Text style={styles.goalItem}>
    {index + 1} - {item.text}
   </Text>
  </View>
 );
};

const styles = StyleSheet.create({
 evenGoalItem: {
  padding: 16,
  marginBottom: 16,
  borderRadius: 8,
  backgroundColor: 'blue',
 },
 oddGoalItem: {
  padding: 16,
  marginBottom: 16,
  borderRadius: 8,
  backgroundColor: 'red',
 },
 goalItem: {
  color: '#fff',
 },
});

export default GoalItem;
