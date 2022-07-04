import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";

export const GoalInput = (props) => {
    const {onGoalInputHandler, onAddGoalHandler, onCloseModalHandler, goal, openModal} = props;
    return (
        <Modal visible={openModal} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput placeholder={'Your course goal!'}
                           style={styles.textInput}
                           onChangeText={onGoalInputHandler}
                           value={goal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={'Add Goal'} onPress={onAddGoalHandler} color={'#b180f0'}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Cancel Goal'} onPress={onCloseModalHandler} color={'#f31282'}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#5e0acc',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '32%',
        marginHorizontal: 8,

    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})