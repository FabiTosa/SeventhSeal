import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>7TH SEAL</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View styles={styles.profileBox}>
          <View style={styles.profileImage}></View>
          <TouchableOpacity style={styles.editPicBtn}>
            <Text style={styles.editPicText}>Edit picture</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <Text style={styles.username}>USERNAME</Text>
          <Text style={styles.subText}>Premium member since 00/00/0000</Text>
          <View style={styles.positionButton}>
            <TouchableOpacity style={styles.logoutBtn}>
              <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Profile Section */}
      <Text style={styles.sectionTitle}>PROFILE</Text>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.box}>
        <Text style={styles.boxText}>€  My purchases</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.boxText}>↩  My returns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.boxText}>?  Help</Text>
      </TouchableOpacity>

      {/* Personal Section */}
      <Text style={styles.sectionTitle}>PERSONAL</Text>
      <View style={styles.divider} />

      <View style={styles.personalBox}>
        <Text style={styles.infoText}>Full name: Name and surname</Text>
        <Text style={styles.infoText}>Address: Random street name 12, 1234 AB</Text>
        <Text style={styles.infoText}>Currency: (€) Euro</Text>
        <Text style={styles.infoText}>E-mail: thisisoneemail@gmail.com</Text>
        <Text style={styles.infoText}>Phone number: 06 12 34 56 78</Text>
      </View>
      <TouchableOpacity style={styles.editPersonalBtn}>
        <Text style={styles.logoutText}>Edit personal info</Text>
      </TouchableOpacity>

      {/* Footer Buttons */}
      <TouchableOpacity style={styles.footerBtn}>
        <Text style={styles.footerText}>Switch to <Text style={{ fontWeight: 'bold' }}>premium</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerBtn}>
        <Text style={styles.footerText}>Settings</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.aboutContainer}>
        <Text style={styles.titleAbout}> About 7THSEAL</Text>
        <Text style={styles.aboutText}>
          7THSEAL offers streetwear and baggy styles designed for comfort and individuality. From bold looks to casual fits, we bring you the best of street culture.
        </Text>
        <View style={styles.imageContainer}>
          <Image style={{ width: 190, height: 150 }} source={require('../../../assets/images/seventhseal.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171616',
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  profileCard: {
    flex: '1',
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 2
  },

  profileImage: {
    height: 100,
    width: 100
  },
  column: {
    display: 1,
    flexDirection: 'column',
    marginLeft: 20
  },
  username: {
    bottom: 15,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subText: {
    bottom: 15,
    color: '#aaa',
    fontSize: 12,
  },
  editPicBtn: {
    marginBottom: 10,
  },
  editPicText: {
    color: '#bbb',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  positionButton: {
    position: 'absolute',
    right: 0,
    marginTop: 60
  },
  logoutBtn: {
    backgroundColor: '#000',
    width: 90,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 20,
  },
  box: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  boxText: {
    color: '#fff',
    fontSize: 14,
  },
  personalBox: {
    marginBottom: 15,
  },
  infoText: {
    color: '#ccc',
    marginBottom: 4,
  },
  editPersonalBtn: {
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  titleAbout: {
    color: "white",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 10,
  },
  aboutText: {
    color: "white",
    textAlign: "center",
    marginBottom: 30
  },
  imageContainer: {
    marginLeft: 30
  },
  footerBtn: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Profile;
