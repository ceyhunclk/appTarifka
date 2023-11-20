import React from "react";
import { SafeAreaView, Text,Image, TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryCard.style"
const CategoryCard = ({data,onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri:data.strCategoryThumb}} />
            <Text style={styles.title}>{data.strCategory}</Text>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
export default CategoryCard;