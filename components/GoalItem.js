import {Pressable, StyleSheet, Text, View} from 'react-native';

export const GoalItem = (props) => {
    const {itemList, id, onDeleteGoalHandle} = props;
    return (
        <Pressable
            android_ripple={{color:'#210644'}}
            onPress={onDeleteGoalHandle.bind(this, id)}
            style={({pressed})=> pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemList}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5
    }
})