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
    marginTop: hp(0.5),
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
    fontSize: RFValue(24),
    alignItems: "center",
    textAlign: "center",
    color: 'black',
    marginBottom: hp(2),
  },
  textDescription: {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontSize: RFValue(12),
    alignItems: "center",
    textAlign: "center",
    color: 'black',
    marginBottom: hp(2),
  },
  input: {
    width: wp(80),
    height: hp(5),
    marginTop: hp(1),
    marginBottom: hp(1),
    borderWidth: 1,
    padding: hp(1),
    color: "black",
    backgroundColor: '#ffffff',
    borderRadius: hp(2),
    borderColor: "#6FBAFF",
    placeholderTextColor: 'black',
    fontSize: RFValue(14),
  },
  center: {
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  switch: {
    marginTop: hp(2),
    alignItems: "center",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: RFValue(18),
    margin: hp(1),
    textAlign: 'center',
    display: 'flex',
  },
});