// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button title="Test" onPress={() => navigation.navigate("Test")} />
    <Button title="Games" onPress={() => navigation.navigate("Games")} />
    <Button title="HomeSide" onPress={() => navigation.navigate("HomeSide")} />
    <Button title="Balloon" onPress={() => navigation.navigate("Balloon")} />
    <Button title="Register" onPress={() => navigation.navigate("Register")} />
    <Button title="Therapy" onPress={() => navigation.navigate("Therapy")} />
    <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    <Button title="Progress" onPress={() => navigation.navigate("Progress")} />
    <Button title="QuizGame" onPress={() => navigation.navigate("QuizGame")} />
    <Button title="Sentence" onPress={() => navigation.navigate("Sentence")} />
    <Button title="Idioms" onPress={() => navigation.navigate("Idioms")} />
    <Button title="AgeTherapy" onPress={() => navigation.navigate("AgeTherapy")} />
    {/* <Button title="MirrorTherapy" onPress={() => navigation.navigate("MirrorTherapy")} /> */}
    <Button
      title="TongueTwister"
      onPress={() => navigation.navigate("TongueTwisterGame")}
    />
    <Button
      title="ArticulationMaze"
      onPress={() => navigation.navigate("ArticulationMaze")}
    />
    <Button
      title="IntroPage"
      onPress={() => navigation.navigate("IntroPage")}
    />
  </View>
);

export default HomeScreen;
