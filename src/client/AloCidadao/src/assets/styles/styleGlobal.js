import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    marginTop: hp(1),
    width: wp(30),
    height: hp(16),
    alignSelf: 'center',
    borderRadius: hp('21%'),
  },
  photo: {
    height: hp(21),
    width: wp(38),
    alignItems: 'center',
    borderRadius: hp(3),
    margin: hp(1),
    justifyContent: 'center'
  },
  containerPhoto: {
    flexDirection: 'row',
  },
  textMenu: {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontSize:  RFValue(24),
    alignItems: "center",
    textAlign: "center",
  },
});