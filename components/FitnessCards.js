import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import leg from '../data/leg'
import chest from '../data/chest'
import arm from '../data/arm'
import abs from '../data/abs'
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
  const FitnessData = fitness;
  const LegData = leg;
  const ChestData = chest;
  const ArmData = arm;
  const AbsData = abs;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("FullBody", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={styles.cardline} key={key}>

          <Image style={styles.card} source={{ uri: item.image }} />
        </Pressable>
      ))}

      {AbsData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Abs", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={styles.cardline} key={key}>

          <Image style={styles.card} source={{ uri: item.image }} />
        </Pressable>
      ))}

      {ArmData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Arm", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={styles.cardline} key={key}>

          <Image style={styles.card} source={{ uri: item.image }} />
        </Pressable>
      ))}

      {ChestData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Chest", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={styles.cardline} key={key}>

          <Image style={styles.card} source={{ uri: item.image }} />
        </Pressable>
      ))}

      {LegData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Leg", {
            image: item.image,
            excersises: item.excersises,
            id: item.id,
          })}
          style={styles.cardline} key={key}>

          <Image style={styles.card} source={{ uri: item.image }} />
        </Pressable>
      ))}
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 160,
    borderRadius: 7,
  },

  cardline: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

})