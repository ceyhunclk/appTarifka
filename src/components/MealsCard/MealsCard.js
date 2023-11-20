import React from "react";
import { Image, SafeAreaView, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./MealsCard.style";
const MealsCard = ({item,onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri:item.strMealThumb}}/>
            <Text style={styles.title}>{item.strMeal}</Text>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        
    )
}
export default MealsCard;