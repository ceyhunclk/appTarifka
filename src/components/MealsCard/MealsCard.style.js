import {StyleSheet,Dimensions} from "react-native";
const devicesDim=Dimensions.get("window");
export default StyleSheet.create({
    container:{
margin:10,
borderRadius:30,
overflow:"hidden",
    },
image:{
    width:devicesDim.width-20,
    height:300,
    borderRadius:20
},
title:{
    position:"absolute",
    fontSize:30,
    bottom:0,
    textAlign:"right",
    backgroundColor:"#00000062",
    color:"white",
    padding:10,
    width:devicesDim.width-20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
}


})