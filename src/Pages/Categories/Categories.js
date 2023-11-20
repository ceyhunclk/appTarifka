import React, { useState } from "react";
import { SafeAreaView, Text,FlatList,View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import Config from "react-native-config";
import CategoryCard from "../../components/CategoryCard";
import styles from "./Categories.style"
import Loading from "../../components/Loading";
const Categories = ({navigation}) => {
const {Data,loading,error} = useFetch(`${Config.API_URL}/categories.php`);
console.log(error);
const naviPage=(id)=>{
    navigation.navigate("Meals",{id});
}


const renderData=({item})=><CategoryCard data={item} onPress={()=>naviPage(item.strCategory)}/>

if(!loading){return <Loading></Loading>}

    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList data={Data.categories} renderItem={renderData}/> 
        </SafeAreaView>
      
    )
}
export default Categories;