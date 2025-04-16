import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import clothing from "../../clothing.js";

const HomeScreen = () => {
    const handleItemClick = (item) => {
        console.log('Item clicked:', item);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>STEAL</Text>
                <View style={styles.navbar}>
                    <Text style={[styles.navItem, styles.activeNav]}>HOME</Text>
                    <Text style={styles.navItem}>IN STOCK</Text>
                    <Text style={styles.navItem}>NEW ARRIVALS</Text>
                    <Text style={styles.navItem}>INSPO PAGE</Text>
                </View>
            </View>

            {/* Welcome Text */}
            <Text style={styles.welcome}>WELCOME, USER.</Text>

            {/* Sale Banner */}
            <View style={styles.saleBanner}>
                <Text style={styles.saleText}>FRIDAY SALE</Text>
                <Text style={styles.saleSubtext}>ALL PIECES 15% OFF</Text>
            </View>

            {/* Recently Viewed */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>RECENTLY VIEWED</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {clothing.slice(0, 4).map((item, index) => (
                        <TouchableOpacity key={index} style={styles.productCard} onPress={() => handleItemClick(item)}>
                            <Image source={item.image} style={styles.productImage} />
                            <Text style={styles.productPrice}>{item.price}</Text>
                            <Text style={styles.productName}>{item.desc}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Upcoming Drops Section */}
            <View style={styles.upcomingDropsContainer}>
                {/* Background Text Layer */}
                <View style={styles.textOverlayContainer}>
                    {Array(6).fill().map((_, index) => (
                        <Text key={index} style={[styles.upcomingText, index % 2 === 0 ? styles.mirroredText : null]}>
                            UPCOMING DROPS UPCOMING DROPS UPCOMING DROPS UPCOMING DROPS
                        </Text>
                    ))}
                </View>
                {/* Main Content Layer */}
                <View style={styles.upcomingDrops}>
                    <Image source={require('../../../assets/images/hoodie1.png')} style={styles.upcomingImage} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { padding: 20, backgroundColor: '#000', alignItems: 'center' },
    logo: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
    navbar: { flexDirection: 'row', marginTop: 10 },
    navItem: { color: '#bbb', marginHorizontal: 10, fontSize: 16 },
    activeNav: { color: '#fff', fontWeight: 'bold' },
    welcome: { fontSize: 22, fontWeight: 'bold', padding: 20 },
    saleBanner: { backgroundColor: 'red', padding: 20, alignItems: 'center' },
    saleText: { fontSize: 30, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
    saleSubtext: { fontSize: 18, color: '#fff' },
    section: { padding: 20 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold' },
    productCard: { width: 150, marginRight: 15 },
    productImage: { width: '100%', height: 120, borderRadius: 10 },
    productPrice: { fontSize: 16, fontWeight: 'bold' },
    productName: { fontSize: 14, color: '#555' },
    upcomingDropsContainer: { 
        padding: 20, 
        backgroundColor: 'red', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden'
    },
    textOverlayContainer: { 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    upcomingText: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        color: 'black', 
        opacity: 1, 
        transform: [{ rotate: '0deg' }],
    },
    mirroredText: {
        transform: [{ scaleX: 1 }],
    },
    upcomingDrops: { alignItems: 'center', padding: 20, zIndex: 1 },
    upcomingImage: { width: 200, height: 200, borderRadius: 100 },
});

export default HomeScreen;
