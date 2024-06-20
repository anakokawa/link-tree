import { Image, StyleSheet, Platform, View, Text } from 'react-native';

const imggato=require("../../assets/images/gato.jpg")

export default function HomeScreen() {
  return (
    <View style={{display: 'flex'}}>
    <View style={{justifyContent:'center', alignItems:'center', }}>
    <Image source={imggato} resizeMode='cover' style={{width:400, height: 200,}}></Image></View>

    <Text style={{top:35, textAlign:'center', fontSize:25, fontWeight:'bold'}}>Bem-vindo ao Nosso Portal de Descobertas!</Text>
    <View style={{top:150, alignItems:'center',}}>
      <Text style={{ fontSize:15, fontWeight:'bold', margin:10, paddingHorizontal:10, textAlign:"justify"}}>


Explore um mundo de possibilidades através dos nossos botões que te levam a lugares incríveis na web. Aqui, cada clique é uma porta aberta para novas experiências, informações e entretenimento. Navegue com facilidade e descubra tudo o que a internet tem de melhor, com apenas um toque.

Seja bem-vindo à sua jornada digital. Comece a explorar agora mesmo!</Text>
    </View>
    </View>

  
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
