import { StyleSheet, Text, View } from "react-native";

import { BaseTwo, CoinIllustration, MoneyIllustration } from "@/src/assets";

export function Header() {
    return (
        <View style={styles.header}>
            <MoneyIllustration
            width={179} 
            height={212}
            style={styles.illustration}
            />

            <View style={{ position: 'relative', alignItems: 'center' }}>
            <BaseTwo style={{ marginTop: -160 }} />

            <View style={{ position: 'absolute', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 42 }}>
                <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>AGROM</Text>
                <Text style={styles.subtitle}>O futuro das negociações {'\n'} acontece aqui</Text>
                </View>

                <CoinIllustration />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: '15%',
        alignItems: 'center',
    },
    illustration: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        color: '#18181B',
        fontFamily: 'PlusJakartaSans-Bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'PlusJakartaSans-Regular',
    },
})