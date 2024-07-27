import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

type TItem = {
 id: number;
 text: string;
};

export default function HomeScreen() {
 const [modalVisibility, setModalVisibility] = useState(false);
 const [goalItem, setGoalItem] = useState<TItem | null>(null);
 const [goals, setGoals] = useState<TItem[]>([]);

 const goalInputHandler = (text: string) => {
  setGoalItem({
   id: Date.now(),
   text,
  });
 };

 const addGoalHandler = () => {
  goalItem && setGoals((pre) => [...pre, goalItem]);
  setGoalItem(null);
  setModalVisibility(false);
 };

 const deleteHandler = (id: number) => {
  setGoals((pre) => pre.filter((item) => item.id != id));
 };

 return (
  <View style={styles.appContainer}>
   <Button
    title='افزودن هدف جدید'
    color='#5e0acc'
    onPress={() => setModalVisibility(true)}
   />
   <GoalInput
    goalItem={goalItem}
    modalVisibility={modalVisibility}
    onAddGoal={addGoalHandler}
    onClose={() => setModalVisibility(false)}
    onGoalInputHandler={goalInputHandler}
   />
   <View style={styles.goalsContainer}>
    <FlatList
     data={goals}
     renderItem={({ index, item }) => (
      <GoalItem index={index} item={item} onDelete={deleteHandler} />
     )}
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
