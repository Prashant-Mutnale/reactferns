import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    // scrollview: {
    //     flex: 1,
    //     paddingTop: 50
    // },
    // scrollviewContentContainer: {
    //     paddingBottom: 50
    // },
    exampleContainer: {
        marginBottom: 30
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 25
    },
    sliderContentContainer: {
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    wrapper: {
    },
    commanText : {
      color: '#fff',
      marginTop: 5,
      color: '#000'
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 15,
      backgroundColor: 'transparent'
    },
    button: {
      marginRight: 10
    },
    card: {
      width: 300
    },
    fitImage: {
      borderRadius: 20,
    },
    fitImageWithSize: {
      height: 100,
      width: 30,
    },
});
