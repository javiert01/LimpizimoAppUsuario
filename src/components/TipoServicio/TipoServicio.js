import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
//==============================================
// INICIO ESCOBA
//==============================================

function BroomWithe(props) {
  return (
    <Image
      source={require('../../assets/broomPruple.png')}
      style={styles.limpiezaNImage}
      resizeMode="contain"
    />
  );
}

function BroomGreen(props) {
  return (
    <Image
      source={require('../../assets/broomGreen.png')}
      style={styles.limpiezaNImage}
      resizeMode="contain"
    />
  );
}
//==============================================
// INICIO ESCOBA
//==============================================

//==============================================
// INICIO BALDE
//==============================================
function BucketWhite(props) {
  return (
    <Image
      source={require('../../assets/bucketPurple.png')}
      style={styles.limpiezaNImage}
    />
  );
}
function BucketGreen(props) {
  return (
    <Image
      source={require('../../assets/bucketGreen.png')}
      style={styles.limpiezaNImage}
    />
  );
}

//==============================================
// INICIO BALDE
//==============================================

function Bromm(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <BroomWithe />;
  }
  return <BroomGreen />;
}

function Bucket(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <BucketWhite />;
  }
  return <BucketGreen />;
}

export default function(props) {
  const [btn, setCahngeColor] = useState(1);
  return (
    <View>
      <View style={styles.viewContainerTitulo}>
        <Text style={styles.tituloText}>¿Qué servicio necesitas?</Text>
        <Text style={styles.subtituloText}>Elige el tipo de limpieza</Text>
      </View>
      <View style={styles.viewContainer}>
        <TouchableHighlight
          onPress={() => {
            // console.log('Btn 1');
            setCahngeColor(1);
          }}>
          <Bromm isLoggedIn={btn === 1 ? false : true} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            // console.log('Btn 2');
            setCahngeColor(2);
          }}>
          <Bucket isLoggedIn={btn === 2 ? false : true} />
        </TouchableHighlight>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.descripcionText}>
          {props.tipoServicio[0].descripcion}
        </Text>
        <Text style={styles.descripcionText}>
          {props.tipoServicio[1].descripcion}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#672D91',
  },
  viewContainerTitulo: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#672D91',
  },
  limpiezaNImage: {
    marginRight: 30,
    marginLeft: 10,
    height: 50,
    width: 50,
    padding: 50,
    //backgroundColor: '#756984',
  },
  limpiezaPImage: {
    marginRight: 10,
    height: 50,
    width: 50,
    padding: 50,
  },
  tituloText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  subtituloText: {
    color: 'white',
    padding: 10,
  },
  descripcionText: {
    color: 'white',
    padding: 5,
    marginRight: 10,
  },
});

// export default tipoServicio;
