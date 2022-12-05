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
        await fetch(`${Config.AUTH}/termos/get`, {
          method:'GET'
          })
       .then(function(res) {return res.json();})
       .then((data)=> { 

        setObjetoText(data.termos[0].objeto)
        setAceitacaoText(data.termos[0].aceitacao)
        setAcessoUserText(data.termos[0].acessoUser)
        setAlteracoesText(data.termos[0].alteracoes)
        setCadastroText(data.termos[0].cadastro)
        setCancelamentoText(data.termos[0].cancelamento)
        setDireitosAutoraisText(data.termos[0].direitorAutorais)
        setForoText(data.termos[0].foro)
        setPoliticaPrivacidadeText(data.termos[0].politicaPrivacidade)
        setPrecoText(data.termos[0].preco)
        setRescisaoText(data.termos[0].rescisao)
        setResponsabilidadeText(data.termos[0].responsabilidade)
        setSancoesText(data.termos[0].sancoes)
        setServicoText(data.termos[0].servico)
        setSuporteText(data.termos[0].suporte)
        setIdTermo(data.termos[0].id)
       })
       .catch(function(error) {
          console.log(error.message);
          throw error;
        }); 
       }

       async function CadastroUserTermo (){
        await fetch(`${Config.AUTH}/termosUser`, {
            method:'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              objeto:objeto,
              aceitacao:aceitacao,
              acessoUser:acessoUser,
              cadastro:cadastro,
              servico:servico,
              preco:preco,
              cancelamento:cancelamento,
              suporte:suporte,
              responsabilidade:responsabilidade,
              direitorAutorais:direitosAutorais,
              sancoes:sancoes,
              rescisao:rescisao,
              alteracoes:alteracoes,
              politicaPrivacidade:politicaPrivacidade,
              foro:foro,
              termos_id:idTermo,
              user_id: route.params.id
            })
         })
         .then(function(){
          fetch(`${Config.AUTH}/updateUser/${route.params.id}`, {
            method:'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              termos: true
            })
         })
         .then(()=> { 
              console.log("Ok")
              Alert.alert(
                "Sucesso!",
                "Termos salvo com sucesso!",
                [
                  { text: "OK", onPress: () =>  navigation.navigate('Menu', {id: route.params.id, email: route.params.email, cpf: route.params.cpf, nome: route.params.nome, admin: route.params.admin, termos: route.params.termos})
                }
                ]
              )
         })
         .catch(function(error) {
            console.log(error.message);
            throw error;
          }); 
         }

        )
         .catch(function(error) {
            console.log(error.message);
            throw error;
          });
    }


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Termos e condições gerais de uso do aplicativo Alô Cidadão
        </Text>
        <Text style={styles.text}>
          Os serviços do Alô Cidadão são fornecidos pela Faculdade de Tecnologia
          de São José dos Campos- Prof. Jessen Vidal, sendo a propriedade
          intelectual sobre software de livre acesso e alteração.
        </Text>

        <Text style={styles.topico}>1. Do objeto</Text>

        <Text style={styles.text}>
         {objetoText}
        </Text>

        <CheckBox
          value={objeto}
          onValueChange={setObjeto}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>


        <Text style={styles.topico}>2. Da aceitação</Text>
        <Text style={styles.text}>
         {aceitacaoText}
        </Text>
        <CheckBox
          value={aceitacao}
          onValueChange={setAceitacao}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>3. Do acesso dos usuários</Text>
        <Text style={styles.text}>
        {acessoUserText}
        </Text>

        <CheckBox
          value={acessoUser}
          onValueChange={setAcessoUser}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>4. Do cadastro</Text>
      

        <Text style={styles.text}>
        {cadastroText}
        </Text>


        <CheckBox
          value={cadastro}
          onValueChange={setCadastro}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>5. Dos serviços</Text>
        <Text style={styles.text}>
        {servicoText}
        </Text>

        <CheckBox
          value={servico}
          onValueChange={setServico}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>6. Dos preços</Text>
        <Text style={styles.text}>
        {precoText}
        </Text>


        <CheckBox
          value={preco}
          onValueChange={setPreco}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>
        

        <Text style={styles.topico}>7. Do cancelamento</Text>
        <Text style={styles.text}>
        {cancelamentoText}
        </Text>

        <CheckBox
          value={cancelamento}
          onValueChange={setCancelamento}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>8. Do suporte</Text>
        <Text style={styles.text}>
        {suporteText}
        </Text>


        <CheckBox
          value={suporte}
          onValueChange={setSuporte}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>9. Das responsabilidades</Text>
        <Text style={styles.text}>
        {responsabilidadeText}
        </Text>

        <CheckBox
          value={responsabilidade}
          onValueChange={setResponsabilidade}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>10. Dos direitos autorais</Text>
       
        <Text style={styles.text}>
        {direitosAutoraisText}
        </Text>
      
        <CheckBox
          value={direitosAutorais}
          onValueChange={setDireitosAutorais}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>


        <Text style={styles.topico}>11. Das sanções</Text>
        <Text style={styles.text}>
        {sancoesText}
        </Text>


        <CheckBox
          value={sancoes}
          onValueChange={setSancoes}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>12. Da rescisão</Text>
        <Text style={styles.text}>
        {rescisaoText}
        </Text>

        <CheckBox
          value={rescisao}
          onValueChange={setRescisao}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>13. Das alterações</Text>
        <Text style={styles.text}>
        {alteracoesText}
        </Text>

        <CheckBox
          value={alteracoes}
          onValueChange={setAlteracoes}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>14. Da política de privacidade</Text>
      
        <Text style={styles.text}>
        {politicaPrivacidadeText}
        </Text>


        <CheckBox
          value={politicaPrivacidade}
          onValueChange={setPoliticaPrivacidade}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>

        <Text style={styles.topico}>15. Do foro</Text>
        <Text style={styles.text}>
        {foroText}
        </Text>


        <CheckBox
          value={foro}
          onValueChange={setForo}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Aceito</Text>



        <Text style={styles.topico}>
          Aceitar todos os termos de uso.
        </Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Eu li e concordo com os termos de uso</Text>

        <ButtonPost 
        color={"#6FBAFF"} 
        title={'Salvar'}  
        style={styles.button} 
        onPressFunction = {() => CadastroUserTermo()} />

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
    textAlign: 'justify',
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
