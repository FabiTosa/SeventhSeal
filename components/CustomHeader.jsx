import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CustomHeader() {
    const router = useRouter();

    return (
        <View style={styles.header}>
            {/* Logo */}
            <View style={styles.imageNav}>
                <Image source={require('../assets/images/sealtext.png')} style={styles.logo} />
            </View>

            {/* Navigatiebalk */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => router.push('/screens/uppertabs/home')}>
                    <Text style={styles.link}>???</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/screens/uppertabs/stock')}>
                    <Text style={styles.link}>IN STOCK</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('screens/uppertabs/newarrivals')}>
                    <Text style={styles.link}>NEW ARRIVALS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/screens/uppertabs/inspo')}>
                    <Text style={styles.link}>INSPO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageNav: {
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
    },
    header: {
        backgroundColor: '#fff',
        paddingBottom: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    logo: {
        width: 120,
        height: 80,
        resizeMode: 'contain',
    },
    navbar: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 20,
    },
    link: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        fontFamily: 'Anton-Regular'
    },
});