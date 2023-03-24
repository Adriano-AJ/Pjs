import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA63DF"
    },
    containerBox: {
      justifyContent:"center",
    flex:1,
    },
    textMain:{
      fontFamily: "poppins",
      fontWeight:"700",
      fontSize:30,
      marginBottom:30
    },
    textLabel:{
      marginBottom:5
    },
    inputEntrada:{
      backgroundColor:"#FFFFFF",
      width:350,
      height:50,
      borderRadius:10,
      marginBottom:10
    },
    button:{
      backgroundColor:"#000",
      width:350,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 10,
      marginBottom:200
    },
    textButton:{
      color:"#ffffff",
      fontWeight:"600",
      fontSize:16
    },
    textAlert:{
      fontWeight:"500",
      alignSelf:"flex-end",
      marginBottom:40
    },
    textFinal:{
      alignSelf:"center",
      marginBottom:-200
    }
    })