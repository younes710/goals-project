import {
 View,
 TextInput,
 Button,
 StyleSheet,
 Modal,
 Image,
} from 'react-native';

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
    <Image
     source={require('../../assets/images/goal.png')}
     style={styles.image}
    />
    <TextInput
     textAlign='right'
     value={goalItem ? goalItem.text : ''}
     style={styles.textInput}
     placeholder='هدف شما !'
     onChangeText={onGoalInputHandler}
    />
    <View style={styles.buttonContainer}>
     <View style={styles.button}>
      <Button
       title='افزودن'
       onPress={onAddGoal}
       disabled={!goalItem?.text}
       color='#b180f0'
      />
     </View>
     <View style={styles.button}>
      <Button title='بستن' onPress={onClose} color='#f31282' />
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
  paddingHorizontal: 16,
  backgroundColor: '#311b6b',
 },
 textInput: {
  width: '100%',
  backgroundColor: '#e4ddff',
  color: '#120438',
  borderRadius: 4,
  marginBottom: 16,
  padding: 16,
 },
 image: {
  width: 100,
  height: 100,
  margin: 20,
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
