import React, { useState}from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";
import StepIndicator from "react-native-step-indicator";
import Swiper from "react-native-swiper";
import PhotoGallery from "./PhotoGallery";
import styleGlobal from '../assets/styles/styleGlobal';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import Cep from "../services/Cep";
import Description from './Description';



export default function RegisterOccurrence(props) {
  const [textTitle, setTextTiltle] = useState(null);
  const [textDescription, setTextDescription] = useState(null);
  const [imageSelected, setimageSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isEditable, setisEditable] = useState(true);
  const [cep, setCep] = useState("");
  const [Logradouro, setLogradouro] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Localidade, setLocalidade] = useState("");
  const [UF, setUF] = useState("");

  const updateState = () => {
    setBairro("");
    setCep("");
    setLocalidade("");
    setLogradouro("");
    setUF("");
};

  const PAGES = [
                  <PhotoGallery onChange={handleChange}/>, 
                  <Description onChange={handleChangeDescription}/>,
                   <Cep isEditable={isEditable} onChange={handleChangeLocation}/>
                ];

  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: "#5F97CB",
    separatorFinishedColor: "#6FBAFF",
    separatorUnFinishedColor: "#6FBAFF",
    stepIndicatorFinishedColor: "#6FBAFF",
    stepIndicatorUnFinishedColor: "#5F97CB",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 15,
    currentStepLabelColor: "#6FBAFF",
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: "#000000",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
    labelSize: 12
  };
  

  const onStepPress = (position) => {
    setCurrentPage(position);
  };


  const renderLabel = ({
    position,
    label,
    currentPosition,
  }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    );
  };

  function handleChange(newValue) {
    // here we get the new value
    setimageSelected(newValue);
  }

  function handleChangeDescription(title, description) {
    // here we get the new value
    setTextTiltle(title);
    setTextDescription(description);
  }

  function handleChangeLocation(cep, rua, bairro, cidade, uf) {
    // here we get the new value
    setCep(cep);
    setLogradouro(rua);
    setBairro(bairro);
    setLocalidade(cidade);
    setUF(uf);
  }

  const getBodyContainer = () => {
    let container = <></>

    if (currentPage === 2 || currentPage === 3) {
      container = (
        <View style={styleGlobal.switch}>
          <Text style={styleGlobal.textMenu}>Localização do ocorrido</Text>
          <Text>Usar minha Localização</Text>
          <Switch value={isEditable} onValueChange={setisEditable} onChange={updateState} trackColor={{ false: "#6FBAFF", true: "#6FBAFF" }} thumbColor={isEditable ? "#5F97CB" : "#f4f3f4"} />
        </View>)
    } else {
      container = (
        <>
          <Image
            style={styleGlobal.image}
            source={require('../assets/images/icon.png')}
            resizeMode={"cover"}
          />
          <Text style={styleGlobal.textMenu}>Preencha as informações com os dados do ocorrido</Text>
        </>
      )
    }
    return container;
  }

  const renderViewPagerPage = (data) => {
    return (

      <View key={data} style={styles.page}>
        <Text>{data}</Text>
      </View>
    );
  };

  return (

    <View style={styles.container}>
      {getBodyContainer()}
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Enviar fotos', 'Descrição', 'Localização']}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>
      <Swiper
        style={{ flexGrow: 1 }}
        loop={false}
        index={currentPage}
        showsPagination={false}
        autoplay={false}
        showsButtons={true}
        onIndexChanged={(page) => {
          setCurrentPage(page);
        }}
      >
        {PAGES.map((page) => renderViewPagerPage(page))}
      </Swiper>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: hp(2),
  },
  page: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: hp(2),
    justifyContent: 'center',
    backgroundColor: '#ecf7ff',
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
  },
  stepLabel: {
    fontSize: RFValue(12),
    textAlign: 'center',
    fontWeight: '500',
    color: '#5F97CB',
  },
  stepLabelSelected: {
    fontSize: RFValue(12),
    textAlign: 'center',
    fontWeight: '500',
    color: '#6FBAFF',
  },
});

