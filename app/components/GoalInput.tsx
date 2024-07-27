import { View, TextInput, Button, StyleSheet } from 'react-native';

type TItem = {
 id: number;
 text: string;
};

type TProps = {
 goalText: TItem | null;
 onGoalInputHandler: (text: string) => void;
 onAddGoalHandler: () => void;
};

const GoalInput = ({
 goalText,
 onAddGoalHandler,
 onGoalInputHandler,
}: TProps) => {
 return (
  <View style={styles.inputContainer}>
   <TextInput
    textAlign='right'
    value={goalText ? goalText.text : ''}
    style={styles.textInput}
    placeholder='هدف شما !'
    onChangeText={onGoalInputHandler}
   />
   <Button title='افزودن' onPress={onAddGoalHandler} />
  </View>
 );
};

const styles = StyleSheet.create({
 inputContainer: {
  flex: 1,
  flexDirection: 'row-reverse',
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
  marginStart: 8,
  padding: 8,
 },
});

export default GoalInput;
