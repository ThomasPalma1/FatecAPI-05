import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ButtonPost from '../components/ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';

export default function Termos({route}) {
    const [isSelected, setSelection] = useState(false);
    const [admin, setAdmin] = useState(false);
    const navigation = useNavigation();
    const [objeto, setObjeto] = useState(false);
    const [objetoText, setObjetoText] = useState();
    const [aceitacao, setAceitacao] = useState(false);
    const [aceitacaoText, setAceitacaoText] = useState();
    const [acessoUser, setAcessoUser] = useState(false);
    const [acessoUserText, setAcessoUserText] = useState();
    const [cadastro, setCadastro] = useState(false);
    const [cadastroText, setCadastroText] = useState();
    const [servico, setServico] = useState(false);
    const [servicoText, setServicoText] = useState();
    const [preco, setPreco] = useState(false);
    const [precoText, setPrecoText] = useState();
    const [cancelamento, setCancelamento] = useState(false);
    const [cancelamentoText, setCancelamentoText] = useState();
    const [suporte, setSuporte] = useState(false);
    const [suporteText, setSuporteText] = useState();
    const [responsabilidade, setResponsabilidade] = useState(false);
    const [responsabilidadeText, setResponsabilidadeText] = useState();
    const [direitosAutorais, setDireitosAutorais] = useState(false);
    const [direitosAutoraisText, setDireitosAutoraisText] = useState();
    const [sancoes, setSancoes] = useState(false);
    const [sancoesText, setSancoesText] = useState();
    const [rescisao, setRescisao] = useState(false);
    const [rescisaoText, setRescisaoText] = useState();
    const [alteracoes, setAlteracoes] = useState(false);
    const [alteracoesText, setAlteracoesText] = useState();
    const [politicaPrivacidade, setPoliticaPrivacidade] = useState(false);
    const [politicaPrivacidadeText, setPoliticaPrivacidadeText] = useState();
    const [foro, setForo] = useState(false);
    const [foroText, setForoText] = useState();
    const [idTermo, setIdTermo] = useState();

    useEffect(() => {
      PuxarTermo();
    }, []);

    async function PuxarTermo(){
        await fetch(`${Config.AUTH}/termos/${route.params.id}`, {
          method:'GET'
          })
       .then(function(res) {return res.json();})
       .then((data)=> { 
        console.log(data)
        setObjetoText(data.termo.objeto)
        setAceitacaoText(data.termo.aceitacao)
        setAcessoUserText(data.termo.acessoUser)
        setAlteracoesText(data.termo.alteracoes)
        setCadastroText(data.termo.cadastro)
        setCancelamentoText(data.termo.cancelamento)
        setDireitosAutoraisText(data.termo.direitorAutorais)
        setForoText(data.termo.foro)
        setPoliticaPrivacidadeText(data.termo.politicaPrivacidade)
        setPrecoText(data.termo.preco)
        setRescisaoText(data.termo.rescisao)
        setResponsabilidadeText(data.termo.responsabilidade)
        setSancoesText(data.termo.sancoes)
        setServicoText(data.termo.servico)
        setSuporteText(data.termo.suporte)
        setIdTermo(data.termo.id)
       })
       .catch(function(error) {
          console.log(error.message);
          throw error;
        }); 
       }


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Termos e condi????es gerais de uso do aplicativo Al?? Cidad??o
        </Text>
        <Text style={styles.text}>
          Os servi??os do Al?? Cidad??o s??o fornecidos pela Faculdade de Tecnologia
          de S??o Jos?? dos Campos- Prof. Jessen Vidal, sendo a propriedade
          intelectual sobre software de livre acesso e altera????o.
        </Text>

        <Text style={styles.topico}>1. Do objeto</Text>

        <Text style={styles.text}>
         {objetoText}
        </Text>

        <Text style={styles.topico}>2. Da aceita????o</Text>
        <Text style={styles.text}>
         {aceitacaoText}
        </Text>
       

        <Text style={styles.topico}>3. Do acesso dos usu??rios</Text>
        <Text style={styles.text}>
        {acessoUserText}
        </Text>

        <Text style={styles.topico}>4. Do cadastro</Text>
      

        <Text style={styles.text}>
        {cadastroText}
        </Text>



        <Text style={styles.topico}>5. Dos servi??os</Text>
        <Text style={styles.text}>
        {servicoText}
        </Text>

      
        <Text style={styles.topico}>6. Dos pre??os</Text>
        <Text style={styles.text}>
        {precoText}
        </Text>


      

        <Text style={styles.topico}>7. Do cancelamento</Text>
        <Text style={styles.text}>
        {cancelamentoText}
        </Text>

      
        <Text style={styles.topico}>8. Do suporte</Text>
        <Text style={styles.text}>
        {suporteText}
        </Text>


        <Text style={styles.topico}>9. Das responsabilidades</Text>
        <Text style={styles.text}>
        {responsabilidadeText}
        </Text>

        <Text style={styles.topico}>10. Dos direitos autorais</Text>
       
        <Text style={styles.text}>
        {direitosAutoraisText}
        </Text>

        <Text style={styles.topico}>11. Das san????es</Text>
        <Text style={styles.text}>
        {sancoesText}
        </Text>

        <Text style={styles.topico}>12. Da rescis??o</Text>
        <Text style={styles.text}>
        {rescisaoText}
        </Text>

        <Text style={styles.topico}>13. Das altera????es</Text>
        <Text style={styles.text}>
        {alteracoesText}
        </Text>

        <Text style={styles.topico}>14. Da pol??tica de privacidade</Text>
      
        <Text style={styles.text}>
        {politicaPrivacidadeText}
        </Text>

        <Text style={styles.topico}>15. Do foro</Text>
        <Text style={styles.text}>
        {foroText}
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf7ff',
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'center',
  },
  title: {
    marginTop: 60,
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  topico: {
    marginTop: 10,
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    textAlign: 'center',
    fontSize: 17
  },
  button:{
    textAlign: 'center',
    alignSelf: "center",
  }
});
