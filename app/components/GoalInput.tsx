import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

type TItem = {
 id: number;
 text: string;
};

type TProps = {
 goalItem: TItem | null;
 modalVisibility: boolean;
 onGoalInputHandler: (text: string) => void;
 onAddGoal: () => void;
 onClose: () => void;
};

const GoalInput = ({
 goalItem,
 modalVisibility,
 onAddGoal,
 onClose,
 onGoalInputHandler,
}: TProps) => {
 return (
  <Modal visible={modalVisibility} animationType='slide'>
   <View style={styles.inputContainer}>
    <TextInput
     textAlign='right'
     value={goalItem ? goalItem.text : ''}
     style={styles.textInput}
     placeholder='هدف شما !'
     onChangeText={onGoalInputHandler}
    />
    <View style={styles.buttonContainer}>
     <View style={styles.button}>
      <Button title='افزودن' onPress={onAddGoal} disabled={!goalItem} />
     </View>
     <View style={styles.button}>
      <Button title='بستن' onPress={onClose} />
     </View>
    </View>
   </View>
  </Modal>
 );
};

const styles = StyleSheet.create({
 inputContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 8,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#cccccc',
  marginBottom: 8,
 },
 textInput: {
  width: '100%',
  borderWidth: 1,
  borderColor: '#cccccc',
  borderRadius: 4,
  marginBottom: 16,
  padding: 8,
 },
 buttonContainer: {
  flexDirection: 'row',
 },
 button: {
  width: 100,
  marginHorizontal: 8,
 },
});

export default GoalInput;
