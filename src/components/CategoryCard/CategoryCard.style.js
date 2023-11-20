import {StyleSheet,Dimensions} from "react-native";

const device=Dimensions.get("window");
export default StyleSheet.create({
    title:{fontSize:22,
        fontWeight:"bold",
        color:"black"
    },
image:{
    marginLeft:10,
    width:device.width/3,
    height:100,
    resizeMode:"contain"
},
container:{
    overflow:"hidden",
    paddingRight:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#eee",
    margin:5,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
}



})