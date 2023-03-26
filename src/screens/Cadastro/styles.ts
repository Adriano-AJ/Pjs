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
    header:{
        width:"100%",
        padding:10
    },
    logo:{
        width: 225,
        height: 225,
        borderRadius:100,
        alignSelf:"center",
        marginBottom:20
      },
        textMain:{
        fontWeight:"700",
        fontSize:30,
        marginBottom:30,
        alignSelf:"flex-start"
        
    },
    formInput:{
        paddingLeft:20,
        paddingRight:20,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    inputEntrada:{
        flexGrow:1,
        backgroundColor:"#FFFFFF",
        width:230,
        height:50,
        borderRadius:10,
        padding:10
    },
    imgButton:{
        backgroundColor:"#FFFFFF",
        width:20,
        height:20,
        marginLeft:-40
      },
    button:{
        backgroundColor:"#000",
        width:350,
        height:56,
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
    textFinal:{
        alignSelf:"center",
        marginBottom:-200
    },
    buttonBack:{
        width:30,
        height:30,
        marginTop:-80,
        marginBottom:80
    },
    iconButtonBack:{
        width:20,
        height:20
    }
    })