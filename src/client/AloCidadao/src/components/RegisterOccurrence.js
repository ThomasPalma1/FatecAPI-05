import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import StepIndicator from "react-native-step-indicator";
import Swiper from "react-native-swiper";
import PhotoGallery from "./PhotoGallery";
import styleGlobal from '../assets/styles/styleGlobal';


export default function RegisterOccurrence(props) {
  const [currentPage, setCurrentPage] = React.useState(0);

  const PAGES = [<PhotoGallery />, "Page 2", "Page 3", "Page 4"];

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

  const renderViewPagerPage = (data) => {
    return (
      <View key={data} style={styles.page}>
        <Text>{data}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styleGlobal.image}
        source={require('../assets/images/icon.png')}
        resizeMode={"cover"}
        />
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={4}
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Enviar fotos', 'Descrição', 'Localização', 'Concluir']}
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
    marginVertical: 50,
  },
  page: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF7FF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#5F97CB',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#6FBAFF',
  },
});

