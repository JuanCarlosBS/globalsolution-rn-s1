import { StatusBar } from 'expo-status-bar';
import React, { version } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';

const list = [{
  id: 1,
  name: "IBIS Styles São Paulo Anhembi",
  stars: 2,
  street: "Av. Cruzeiro do Sul, 1709 - Santana, São Paulo - SP, 02031-000",
  phone: "(11) 3336-5400",
  price: 170,
  image: 'http://cidadedorio.com/wp-content/uploads/2015/01/ibis-Styles-SP-Anhembi-fachada-1024x678.jpg'
},
{
  id: 2,
  name: "Comfort Ibirapuera",
  stars: 3,
  street: "Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001",
  phone: "(11) 4673-0255",
  price: 192,
  image: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/10/45/104541_v2.jpeg'
},
{
  id: 3,
  name: "Blue Tree Premium Morumbi",
  stars: 4,
  street: "Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000",
  phone: "(11) 5187-1200",
  price: 260,
  image: 'http://cdn4.hotelopia.com/giata/bigger/05/052770/052770a_hb_a_001.jpg'
}
]

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mostrarDetalhes: false,
      hotel: {}
    }
  }

  renderList() {
    return (
      <View>
        <Text style={styles.title}>Hotéis</Text>
        <FlatList
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => this.setState({ mostrarDetalhes: true, hotel: item })}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`R$ ${item.price}`}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }

  renderDetails() {
    const { hotel } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.detailTitle}>
          <Text style={[styles.detailName, { fontSize: 20 }]}>{hotel.name}</Text>
          <Text style={styles.detailName}>{`${hotel.stars} estrelas`}</Text>
        </View>
        <Image source={{ uri: hotel.image }} style={styles.image} />

        <View style={{ flexDirection: "row", marginBottom: 10, paddingHorizontal: 10 }}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Endereço: </Text>
          <Text style={{ flex: 4 }}>{hotel.street}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10, paddingHorizontal: 10 }}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Telefone: </Text>
          <Text style={{ flex: 4 }}>{hotel.phone}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10, paddingHorizontal: 10 }}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Preço: </Text>
          <Text style={{ flex: 4 }}>{`R$ ${hotel.price.toFixed(2)}`}</Text>
        </View>
        <View></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.setState({ mostrarDetalhes: false })}>
            <Text style={styles.button}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { mostrarDetalhes } = this.state
    return (
      <SafeAreaView style={styles.container}>
        {!mostrarDetalhes ? this.renderList() : this.renderDetails()}
        <StatusBar barStyle="default" />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    height: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center'
  },

  nameText: {
    flex: 1,
    fontSize: 18,
  },
  priceText: {
    fontSize: 18
  },
  detailTitle: {
    height: 50,
    backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
  },
  detailName: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  image: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 50
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 10
  }

})