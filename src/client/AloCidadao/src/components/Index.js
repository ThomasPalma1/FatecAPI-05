import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import Menu from "./Menu";
import styleGlobal from '../assets/styles/styleGlobal';


export default function RegisterOccurrence(props) {
  const [currentPage, setCurrentPage] = React.useState(0);

  const PAGES = [<Menu />];


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

      <Swiper
        style={{ flexGrow: 1, marginTop: 50}}
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

