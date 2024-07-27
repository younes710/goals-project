import { View, Text, StyleSheet, Pressable } from 'react-native';

type TItem = {
 id: number;
 text: string;
};

type TProps = {
 item: TItem;
 index: number;
 onDelete: (id: number) => void;
};

const GoalItem = ({ index, item, onDelete }: TProps) => {
 return (
  <View style={styles.goalItem}>
   <Pressable
    android_ripple={{ color: '#dddddd' }}
    onPress={() => onDelete(item.id)}
    // * for IOS
    // style={({ pressed }) => pressed && styles.pressedItem}
   >
    <Text style={styles.goalText}>
     {index + 1} - {item.text}
    </Text>
   </Pressable>
  </View>
 );
};

const styles = StyleSheet.create({
 goalItem: {
  margin: 8,
  borderRadius: 8,
  backgroundColor: '#5e0acc',
 },
 goalText: {
  color: '#fff',
  padding: 16,
 },
});

export default GoalItem;
