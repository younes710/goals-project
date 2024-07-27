import { useState } from 'react';
import {
 Button,
 GestureResponderEvent,
 StyleSheet,
 Text,
 TextInput,
 View,
} from 'react-native';

export default function HomeScreen() {
 const [goalText, setGoalText] = useState('');
 const [goals, setGoals] = useState<string[]>([]);

 const goalInputHandler = (text: string) => {
  setGoalText(text);
 };

 const addGoalHandler = (e: GestureResponderEvent) => {
  goalText && setGoals((pre) => [...pre, goalText]);
  setGoalText('');
 };

 return (
  <View style={styles.appContainer}>
   <View style={styles.inputContainer}>
    <TextInput
     value={goalText}
     style={styles.textInput}
     placeholder='Your cours goal!'
     onChangeText={goalInputHandler}
    />
    <Button title='Add Goal' onPress={addGoalHandler} />
   </View>
   <View style={styles.goalsContainer}>
    {goals.map((goal, i) => (
     <Text key={i}>
      {i + 1}- {goal}
     </Text>
    ))}
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
 inputContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor: '#cccccc',
  marginBottom: 24,
 },
 textInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#cccccc',
  marginRight: 8,
  padding: 8,
 },
 goalsContainer: {
  flex: 7,
 },
});
