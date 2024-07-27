import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

type TItem = {
 id: number;
 text: string;
};

export default function HomeScreen() {
 const [goalText, setGoalText] = useState<TItem | null>(null);
 const [goals, setGoals] = useState<TItem[]>([]);

 const goalInputHandler = (text: string) => {
  setGoalText({
   id: Date.now(),
   text,
  });
 };

 const addGoalHandler = () => {
  goalText && setGoals((pre) => [...pre, goalText]);
  setGoalText(null);
 };

 return (
  <View style={styles.appContainer}>
   <GoalInput
    goalText={goalText}
    onAddGoalHandler={addGoalHandler}
    onGoalInputHandler={goalInputHandler}
   />
   <View style={styles.goalsContainer}>
    <FlatList
     data={goals}
     renderItem={({ index, item }) => <GoalItem index={index} item={item} />}
    />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
 },
 goalsContainer: {
  flex: 7,
 },
});
