import {useState} from "react";
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {GoalItem} from "./components/GoalItem";
import {GoalInput} from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";


export default function App() {
    const [goal, setGoal] = useState('')
    const [listOfGoals, setListOfGoals] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    }

    const closeModalHandler = () => {
        setOpenModal(false);
    }

    const goalInputHandler = (enteredText) => {
        setGoal(enteredText)
    }

    const addGoalHandler = () => {
        setListOfGoals((currentList) => [...currentList, {text: goal, id: Math.random().toString()}])
        setGoal('');
        setOpenModal(false);
    }

    const deleteGoalHandle = (id) => {
        setListOfGoals((currentList) => currentList.filter(item => item.id !== id))
    }

    return (
        <>
            <StatusBar style={'light'}/>
            <View style={styles.appContainer}>
                <Button title={'Add New Goal'} color={'#a065ec'} onPress={openModalHandler}/>
                <GoalInput onGoalInputHandler={goalInputHandler}
                           onAddGoalHandler={addGoalHandler}
                           onCloseModalHandler={closeModalHandler}
                           goal={goal}
                           openModal={openModal}/>
                <View style={styles.goalsContainer}>
                    <FlatList data={listOfGoals} renderItem={itemData => {
                        return (
                            <GoalItem itemList={itemData.item.text}
                                      id={itemData.item.id}
                                      onDeleteGoalHandle={deleteGoalHandle}/>
                        )
                    }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
                        return item.id
                    }}/>
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        flex: 1,
    },
    goalsContainer: {
        flex: 4
    }
});
