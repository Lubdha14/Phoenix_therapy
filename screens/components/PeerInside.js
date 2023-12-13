import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Collapsible from "react-native-collapsible";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const PeerInside = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  
  // Define the drive link
  const driveLink =
    "https://drive.google.com/file/d/1LzJWk387DthQ9r_0pS9o6YfohDUHf6fI/view?usp=drive_link";

     const AppointmentForm =
       "https://docs.google.com/forms/d/e/1FAIpQLSeD3SqCezrTy-4K-7nUeTH62EXELIhTuQgw4sUhpkoyynESDQ/viewform";

  // Handle certification button press
  const handleCertificationButton = () => {
    // Open the driveLink in the default browser
    Linking.openURL(driveLink);
  };
  const handleAppointmentButton = () => {
    // Open the driveLink in the default browser
    Linking.openURL(AppointmentForm);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("LetsStart")}>
          <Image
            source={require("../../assets/homeicon.jpeg")}
            style={{
              width: 30,
              height: 30,
              alignContent: "flex-end",
              justifyContent: "flex-end",
              marginLeft: 278,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* Yellow box at the top with an image */}
      <View style={styles.yellowBox}>
        <Image
          source={require("../../assets/peerUp.png")}
          style={styles.yellowBoxImage}
        />
      </View>

      {/* Suggested Names of Therapist */}
      <Text style={styles.heading}>Certified Therapist</Text>

      {/* Light grey box with an image, name, and collapsible */}
      <Collapse
        isCollapsed={isCollapsed}
        onToggle={() => setCollapsed(!isCollapsed)}
      >
        <CollapseHeader>
          <View style={styles.greyBoxHeader}>
            {/* Left side with an image */}
            <Image
              source={require("../../assets/RajshriMam.png")}
              style={styles.image}
            />

            {/* Right side with name */}
            <View style={styles.textContainer}>
              <Text style={[styles.name, styles.underline]}>
                Ms. Rajshri Shantaram Wagh
              </Text>
              <Text style={styles.name1}>Speech Therapist</Text>
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {/* Collapsible content, replace with your actual collapsible component */}
          <View style={styles.dropdownContent}>
            <Text style={styles.fieldLabel}> Clinic Address:</Text>
            <Text>
              Infront of Dr. Babasaheb Ambedkar Garden Near Khwajamia
              Dargah,Ganesh Colony,Jalgaon, Maharashtra 425001
            </Text>
            <Text style={styles.fieldLabel}>Contact:</Text>
            <Text>Phone: +91 9096769868</Text>
          </View>
        </CollapseBody>
      </Collapse>

      {/* Certification button */}

      <TouchableOpacity
        style={styles.certificationButton}
        onPress={handleCertificationButton}
      >
        <Text style={styles.buttonText}>Certification</Text>
      </TouchableOpacity>

      {/* Appointment button */}
      <TouchableOpacity
        style={styles.AppointmentFormButton}
        onPress={handleAppointmentButton}
      >
        <Text style={styles.buttonText}>AppointmentForm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFBEF",
  },
  yellowBox: {
    height: 300,
    backgroundColor: "yellow",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  yellowBoxImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 700,
    textAlign: "center",
  },
  greyBoxHeader: {
    backgroundColor: "#D3D3D3",
    // borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  name1: {
    fontWeight: 400,
  },
  certificationButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  AppointmentFormButton: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  
  dropdownContent: {
    backgroundColor: "#D3D3D3",
    padding: 10,
    // borderRadius: 10,
  },
  fieldLabel: {
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default PeerInside;
