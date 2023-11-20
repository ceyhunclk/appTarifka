import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import useFetch from "../../Hooks/useFetch";
import Config from "react-native-config";
import MealsCard from "../../components/MealsCard";
const Meals = ({route,navigation}) => {
const {Data,loading,error}=useFetch(Config.API_URL+"/filter.php?c="+route.params.id);

const naviDetail=(idMeal)=>{
    navigation.navigate("MealDetail",{idMeal});

}

const getMeals=({item})=><MealsCard item={item} onPress={()=>naviDetail(item.idMeal)}/>

    return (
        <SafeAreaView>
            <FlatList data={Data.meals} renderItem={getMeals}></FlatList>
        </SafeAreaView>
    )
}
export default Meals;