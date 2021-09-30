import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `http://localhost:5000/star?name=${this.props.navigation.getParam(
        "star_name"
      )}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  setDetails = starDetails => {
    const star_name = starDetails.name;
     this.setState({
      details: starDetails,
    
    });
  };

  render() {
    const { details } = this.state;
    if (details.name) {
      return (
        <View style={styles.container}>
          <Card
            title={details.name}
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance : ${details.distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Mass : ${details.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Radius : ${details.radius}`}</Text>
            </View>
            <View style={[styles.cardItem, { flexDirection: "column" }]}>
              {details.name.map((item, index) => (
                <Text key={index.toString()} style={{ marginLeft: 50 }}>
                  {item}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});