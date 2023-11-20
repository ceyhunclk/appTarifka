import React from "react";
import { SafeAreaView, Text, Image, ScrollView, TouchableOpacity, Linking, View } from "react-native";
import useFetch from "../../Hooks/useFetch";
import Config from "react-native-config";
import styles from "./MealDetail.style";
import Loading from "../../components/Loading";
const MealDetail = ({route}) => {
const {Data,loading,error}=useFetch(Config.API_URL+"/lookup.php?i="+route.params.idMeal);
console.log()

if(!loading) return <Loading></Loading>;

const openLink=(link)=>{
    Linking.openURL( link );
}

const resource=[];
for(let x=1;x<=20;x++)
{
   if(Data.meals[0]["strIngredient"+x]!="")
resource.push(<View style={styles.resource} key={x}>
<Text style={styles.restext}>{Data.meals[0]["strIngredient"+x]}</Text><Text style={styles.restext}>{Data.meals[0]["strMeasure"+x]}</Text>
</View>)
}




    return (
        <SafeAreaView style={styles.container }>
            <ScrollView style={styles.shadowProp}>

<Image style={styles.image} source={{uri:Data.meals[0].strMealThumb}}/>
            <Text style={styles.title}>{Data.meals[0].strMeal}</Text>
            <Text style={styles.country}>{Data.meals[0].strArea}</Text>
            <Text style={styles.nstructions}>{Data.meals[0].strInstructions }</Text>
            <Text style={styles.title}>Ingredients  List</Text>
            <View style={styles.resourcecont}>{resource}</View>
            <TouchableOpacity style={styles.youtube} onPress={()=>openLink(Data.meals[0].strYoutube)}><Text style={styles.youtubetext}>Watch on Youtube</Text></TouchableOpacity>
       
            </ScrollView>
</SafeAreaView >
)
}
export default MealDetail;