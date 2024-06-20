
import { StyleSheet, Image, View, Text,TouchableOpacity,Linking,ScrollView} from 'react-native';


const imgmel=require("../../assets/images/eu.jpeg")

export default function TabTwoScreen() {

  const GitHubLink = async () => {
    const githubUrl = "https://github.com/anakookwa"; // Substitua com o URL do seu repositório
    const supported = await Linking.canOpenURL(githubUrl);
    if (supported) {
      await Linking.openURL(githubUrl);
    } else {
      console.error(`Não é possível abrir o URL: ${githubUrl}`);
    }
  };

  const LinkedInlink = async () => {
    // Exemplo de uso
    const profileId = "ana-laura-8a7953314"; // Substitua pelo ID do perfil desejado
    try {
      const linkedInUrl = `linkedin://profile/${profileId}`;
      const isInstalled = await Linking.canOpenURL(linkedInUrl);

      if (isInstalled) {
        await Linking.openURL(linkedInUrl);
      } else {
        // Se o aplicativo não estiver instalado, redirecione para o perfil na web
        const webUrl = `https://www.linkedin.com/in/${profileId}`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error("Erro ao abrir o perfil do LinkedIn:", error);
    }
  };

  const fazerChamada = async () => {
    // Exemplo de uso
    const numero = "18936189244"; // Substitua pelo número desejado
    const url = `tel:${numero}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir o cliente de telefone:", error);
    }
  };

  const PinterestLink = async () => {
    const pinterestProfileUrl = 'https://www.pinterest.com/analaura510251';
    try {
      await Linking.openURL(pinterestProfileUrl);
    } catch (error) {
      console.error('Erro ao abrir o perfil no Pinterest:', error);
    }
  };

  const InstagramLink = async () => {
    const instagramUrl = "instagram://user?username=ana_kookwa";
    try {
      await Linking.openURL(instagramUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Instagram:", error);
    }
  };

  const WhatsAppLink = async () => {
    const phoneNumber = "5518936189244"; // Substitua pelo número de telefone no formato internacional
    const message = "Oi"; // Substitua pela mensagem que deseja enviar
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported) {
      await Linking.openURL(whatsappUrl);
    } else {
      console.error(`Não é possível abrir o URL do WhatsApp: ${whatsappUrl}`);
    }
  };

  return (
    <View style={styles.container}>
    {/* Imagem de fundo que se move em paralelo */}
    <Image
        source={require('../../assets/images/pinterest.jpg')}
        style={styles.imagemFundo}
        resizeMode="cover"
    />

<View style={{display: 'flex'}}>
      <View style={{justifyContent:'center', alignItems:'center', }}>
      <Image source={imgmel} resizeMode='cover' style={{width:150, height: 150, borderRadius:80, top:100,}}></Image></View>
      </View>

      <View style={{top:200, alignItems:'center',}}>
    <TouchableOpacity onPress={GitHubLink} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 0, elevation: 10, alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>GitHub</Text></TouchableOpacity>
    <TouchableOpacity onPress={LinkedInlink} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 10, elevation: 10,alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>Linkedin</Text></TouchableOpacity>
    <TouchableOpacity onPress={fazerChamada} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 20, elevation: 10,alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>Telefone</Text></TouchableOpacity>
    <TouchableOpacity onPress={WhatsAppLink} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 30, elevation: 10,alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>WhatsApp</Text></TouchableOpacity>
    <TouchableOpacity onPress={InstagramLink} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 40, elevation: 10,alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>Instagram</Text></TouchableOpacity>
    <TouchableOpacity onPress={PinterestLink} style={{backgroundColor:'#87CEFA', width:250, height:40, borderRadius:50,top: 50, elevation: 10,alignItems:'center'}}><Text style={{alignItems:'center', textAlign:'center', top:10}}>Pinterest</Text></TouchableOpacity>
</View>


      
      </View>
      


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
},
imagemFundo: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  opacity: 0.6, // Opacidade da imagem de fundo para não sobrecarregar o conteúdo
},


});
