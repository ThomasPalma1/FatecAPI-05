import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ButtonPost from '../components/ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';

export default function Termos({route}) {
    const [isSelected, setSelection] = useState(false);
 
    const navigation = useNavigation();


    async function SalvarCadastro(){
        await fetch(`${Config.AUTH}/signup`, {
            method:'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nome:route.params.nome,
              email:route.params.email,
              cpf:route.params.cpf,
              senha:route.params.senha,
              termos: isSelected
            })
         })
         .then(function(res) {return res.json();})
         .then((data)=> { 
            console.log(data)
            console.log(data.data)
            if(data.data==true){
                Alert.alert(
                    "Sucesso!",
                    "Sua conta foi criada!",
                    [
                      { text: "OK", onPress: () => navigation.navigate('Login') }
                    ]
                  )
            }
            else if(data.data==false)
            {
                Alert.alert(
                    "Erro!",
                    data.message,
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  ) 
            }
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
          Termos e condições gerais de uso do aplicativo Alô Cidadão
        </Text>
        <Text style={styles.text}>
          Os serviços do Alô Cidadão são fornecidos pela Faculdade de Tecnologia
          de São José dos Campos- Prof. Jessen Vidal, sendo a propriedade
          intelectual sobre software de livre acesso e alteração.
        </Text>

        <Text style={styles.topico}>1. Do objeto</Text>

        <Text style={styles.text}>
          A plataforma visa licenciar o uso de seu aplicativo e demais ativos,
          fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus
          usuários nas solicitações e visualizações de obras e manutenções do
          município de São José dos Campos.
        </Text>

        <Text style={styles.topico}>2. Da aceitação</Text>
        <Text style={styles.text}>
          O presente Termo estabelece obrigações contratadas de livre e
          espontânea vontade, por tempo indeterminado, entre a plataforma e as
          pessoas físicas ou jurídicas, usuárias do aplicativo.
        </Text>

        <Text style={styles.text}>
          Ao utilizar a plataforma o usuário aceita integralmente as presentes
          normas e compromete-se a observá-las, sob o risco de aplicação das
          penalidades cabíveis.
        </Text>

        <Text style={styles.text}>
          A aceitação do presente instrumento é imprescindível para o acesso e
          para a utilização de quaisquer serviços fornecidos pelo Alô Cidadão.
          Caso não concorde com as disposições deste instrumento, o usuário não
          poderá utilizá-los.{' '}
        </Text>

        <Text style={styles.topico}>3. Do acesso dos usuários</Text>
        <Text style={styles.text}>
          Serão utilizadas todas as soluções técnicas à disposição do
          responsável pela plataforma para permitir o acesso ao serviço 24
          (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto,
          a navegação na plataforma ou em alguma de suas páginas poderá ser
          interrompida, limitada ou suspensa para atualizações, modificações ou
          qualquer ação necessária ao seu bom funcionamento. A plataforma
          necessita de acesso à internet para o seu funcionamento adequado.
        </Text>

        <Text style={styles.topico}>4. Do cadastro</Text>
        <Text style={styles.text}>
          O acesso às funcionalidades da plataforma exigirá a realização de um
          cadastro prévio com o mínimo de dados para identificação e
          certificação da existência do usuário.
        </Text>

        <Text style={styles.text}>
          Ao se cadastrar o usuário deverá informar dados completos, recentes e
          válidos, sendo de sua exclusiva responsabilidade manter referidos
          dados atualizados, bem como o usuário se compromete com a veracidade
          dos dados fornecidos.
        </Text>

        <Text style={styles.text}>
          O usuário se compromete a não informar seus dados cadastrais e/ou de
          acesso à plataforma a terceiros, responsabilizando-se integralmente
          pelo uso que deles seja feito.
        </Text>

        <Text style={styles.text}>
          Menores de 18 anos e aqueles que não possuírem plena capacidade civil
          deverão obter previamente o consentimento expresso de seus
          responsáveis legais para utilização da plataforma e dos serviços ou
          produtos, sendo de responsabilidade exclusiva dos mesmos o eventual
          acesso por menores de idade e por aqueles que não possuem plena
          capacidade civil sem a prévia autorização.
        </Text>

        <Text style={styles.text}>
          Mediante a realização do cadastro o usuário declara e garante
          expressamente ser plenamente capaz, podendo exercer e usufruir
          livremente dos serviços.
        </Text>

        <Text style={styles.text}>
          O usuário deverá fornecer um endereço de e-mail válido, através do
          qual o site realizará todas as comunicações necessárias. Também será
          solicitado CPF para garantia da autenticidade do usuário.
        </Text>

        <Text style={styles.text}>
          Após a confirmação do cadastro, o usuário possuirá um login e uma
          senha pessoal, a qual assegura ao usuário o acesso individual à mesma.
          Desta forma, compete ao usuário exclusivamente a manutenção de
          referida senha de maneira confidencial e segura, evitando o acesso
          indevido às informações pessoais.
        </Text>

        <Text style={styles.text}>
          Toda e qualquer atividade realizada com o uso da senha será de
          responsabilidade do usuário, que deverá informar prontamente a
          plataforma em caso de uso indevido da respectiva senha.
        </Text>

        <Text style={styles.text}>
          Não será permitido ceder, vender, alugar ou transferir, de qualquer
          forma, a conta, que é pessoal e intransferível.
        </Text>

        <Text style={styles.text}>
          Caberá ao usuário assegurar que o seu equipamento seja compatível com
          as características técnicas que viabilize a utilização da plataforma e
          dos serviços.
        </Text>

        <Text style={styles.text}>
          O usuário poderá, a qualquer tempo, requerer o cancelamento de seu
          cadastro junto ao aplicativo Alô Cidadão, desta forma, cancelando o
          acesso ao Alô Cidadão. O seu descadastramento será realizado o mais
          rapidamente possível.
        </Text>
        <Text style={styles.text}>
          O usuário, ao aceitar os Termos e Política de Privacidade, autoriza
          expressamente a plataforma a coletar, usar, armazenar, tratar, ceder
          ou utilizar as informações derivadas do uso dos serviços, do site e
          quaisquer plataformas, incluindo todas as informações preenchidas pelo
          usuário quando realizar ou atualizar seu cadastro, além de outras
          expressamente descritas na Política de Privacidade que deverá ser
          autorizada pelo usuário.
        </Text>

        <Text style={styles.topico}>5. Dos serviços</Text>
        <Text style={styles.text}>
          A plataforma poderá disponibilizar para o usuário um conjunto
          específico de funcionalidades e ferramentas para otimizar o uso dos
          serviços e produtos.
        </Text>

        <Text style={styles.text}>
          Na plataforma os serviços ou produtos oferecidos estão descritos e
          apresentados com o maior grau de exatidão, contendo informações sobre
          suas características e funcionalidades.{' '}
        </Text>

        <Text style={styles.topico}>6. Dos preços</Text>
        <Text style={styles.text}>
          A plataforma é de acesso gratuito, não existindo cobrança para uso em
          nenhuma de suas funcionalidades.
        </Text>

        <Text style={styles.topico}>7. Do cancelamento</Text>
        <Text style={styles.text}>
          O serviço poderá ser cancelado por: a) parte do usuário: nessas
          condições os serviços cessarão, interrompendo o acesso a plataforma;
          b) violação dos Termos de Uso: os serviços serão cessados
          imediatamente.
        </Text>

        <Text style={styles.topico}>8. Do suporte</Text>
        <Text style={styles.text}>
          Em caso de qualquer dúvida, sugestão ou problema com a utilização da
          plataforma, o usuário poderá consultar o chatbot Urbanitas.
        </Text>

        <Text style={styles.topico}>9. Das responsabilidades</Text>
        <Text style={styles.text}>
          É de responsabilidade do usuário: a) defeitos ou vícios técnicos
          originados no próprio sistema do usuário; b) a correta utilização da
          plataforma, dos serviços oferecidos, prezando pela boa convivência,
          pelo respeito e cordialidade; c) pelo cumprimento e respeito ao
          conjunto de regras disposto nesse Termo de Condições Geral de Uso, na
          respectiva Política de Privacidade e na legislação nacional e
          internacional; d) pela proteção aos dados de acesso à sua conta/perfil
          (login e senha). É de responsabilidade da plataforma Alô Cidadão: a)
          indicar as características do serviço ou produto; b) os defeitos e
          vícios encontrados no serviço ou produto oferecido desde que lhe tenha
          dado causa; c) as informações que foram por ele divulgadas, sendo que
          os comentários ou informações divulgadas por usuários são de inteira
          responsabilidade dos próprios usuários; d) os conteúdos ou atividades
          ilícitas praticadas através da sua plataforma.
        </Text>

        <Text style={styles.text}>
          A plataforma não se responsabiliza por links externos contidos em seu
          sistema que possam redirecionar o usuário à ambiente externo a sua
          rede.
        </Text>

        <Text style={styles.text}>
          Não poderão ser incluídos links externos ou páginas que sirvam para
          fins comerciais ou publicitários ou quaisquer informações ilícitas,
          violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou
          ofensivas.
        </Text>

        <Text style={styles.topico}>10. Dos direitos autorais</Text>
        <Text style={styles.text}>
          O presente Termo de Uso concede aos usuários uma licença não
          exclusiva, não transferível e não sublicenciável, para acessar e fazer
          uso da plataforma e dos serviços e produtos por ela disponibilizados.
        </Text>
        <Text style={styles.text}>
          A estrutura do aplicativo, as marcas, logotipos, nomes comerciais,
          layouts, gráficos e design de interface, imagens, ilustrações,
          fotografias, apresentações, vídeos, conteúdos escritos e de som e
          áudio, programas de computador, banco de dados, arquivos de
          transmissão e quaisquer outras informações podem ser utilizadas e
          modificadas, devido à natureza de software livre, claramente, sem o
          fornecimento de dados pessoais inseridos na plataforma.
        </Text>
        <Text style={styles.text}>
          Este Termos de Uso não cede ou transfere ao usuário qualquer direito,
          de modo que o acesso não gera qualquer direito de propriedade
          intelectual ao usuário, exceto pela licença limitada ora concedida.
        </Text>

        <Text style={styles.topico}>11. Das sanções</Text>
        <Text style={styles.text}>
          Sem prejuízo das demais medidas legais cabíveis, o Alô Cidadão poderá,
          a qualquer momento, advertir, suspender ou cancelar a conta do
          usuário: a) que violar qualquer dispositivo do presente Termo; b) que
          descumprir os seus deveres de usuário; c) que tiver qualquer
          comportamento fraudulento, doloso ou que ofenda a terceiros.
        </Text>

        <Text style={styles.topico}>12. Da rescisão</Text>
        <Text style={styles.text}>
          A não observância das obrigações pactuadas neste Termo de Uso ou da
          legislação aplicável poderá, sem prévio aviso, ensejar a imediata
          rescisão unilateral por parte do Alô Cidadão e o bloqueio de todos os
          serviços prestados ao usuário.
        </Text>

        <Text style={styles.topico}>13. Das alterações</Text>
        <Text style={styles.text}>
          Os itens descritos no presente instrumento poderão sofrer alterações,
          unilateralmente e a qualquer tempo, por parte do Alô Cidadão para
          adequar ou modificar os serviços, bem como para atender novas
          exigências legais. As alterações serão veiculadas pelo aplicativo Alô
          Cidadão e o usuário poderá optar por aceitar o novo conteúdo ou por
          cancelar o uso dos serviços, cancelando acesso ao aplicativo.
        </Text>

        <Text style={styles.topico}>14. Da política de privacidade</Text>
        <Text style={styles.text}>
          Os dados pessoais coletados no cadastro do usuário serão utilizados
          para identificação e autenticidade do usuário, descaracterizando uso
          comercial ou para veiculação de propagandas.
        </Text>

        <Text style={styles.text}>
          O CPF não será exposto à terceiros na plataforma e em caso de
          descasdastramento, este será removido da plataforma.
        </Text>
        <Text style={styles.text}>
          O nome poderá ser informado em registros na plataforma realizados por
          parte do usuário, com anuência do usuário. Caso o usuário não deseje
          expor seu nome, poderá optar por registros em modo anônimo.
        </Text>
        <Text style={styles.text}>
          Será coletado logs de uso do aplicativo a fim de atender às
          solicitações legais da ANPD –Autoridade Nacional de Proteção de Dados.
        </Text>

        <Text style={styles.topico}>15. Do foro</Text>
        <Text style={styles.text}>
          Para a solução de controvérsias decorrentes do presente instrumento
          será aplicado integralmente o Direito brasileiro.
        </Text>

        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Eu li e concordo com os termos de uso</Text>

        <ButtonPost color={"#6FBAFF"} title={'Salvar'} style={styles.button} onPressFunction = {() => SalvarCadastro()} />

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
