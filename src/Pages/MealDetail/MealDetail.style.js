import {StyleSheet, Dimensions} from "react-native";

const deviceDim=Dimensions.get("window");
export default StyleSheet.create({
    container:{
margin:10,
    },
    shadowProp: {
        elevation:22,
        shadowColor: "black",
    },

    image:{
width:deviceDim.width-20,
height:deviceDim.width/2,
resizeMode:"cover",

borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    title:{
        paddingTop:10,
        paddingLeft:20,
        backgroundColor:"#dddddd66",
        color:"#A52A2A",
        fontWeight:"bold",
        fontSize:26,
    },
    country:{
        paddingBottom:10,
        paddingLeft:20,
        backgroundColor:"#dddddd66",
        color:"#A52A2A",
        fontWeight:"bold",
        fontSize:20,
        borderBottomWidth:3,
        borderColor:"#ccc",
        paddingBottom:10
    },
    nstructions:{
        textAlign:"justify",
        padding:20,
        backgroundColor:"#dddddd66",
        color:"#111",
        fontWeight:"600",
  
    },
    youtube:{
        padding:20,
      borderRadius:10,
        backgroundColor:"#FF0000",
        marginBottom:20
    },
    youtubetext:{
          textAlign:"center",
          color:"white",
          fontWeight:"bold",
          fontSize:15
    },
    resource:{
        flexDirection:"row",
    },
    restext:{
        width:(deviceDim.width/2)-25,
        margin:3,
        backgroundColor:"#99999911",
        padding:5,
        alignItems:"center",
        borderRadius:5,
        color:"black"
    },
    resourcecont:{
        padding:10,
        backgroundColor:"#dddddd66"
    }
})