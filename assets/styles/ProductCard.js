import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
    backgroundColor: "#000000ff",
    borderRadius: 8,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    width: 300,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        fontSize: 20,
    },
    studentName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    studentClass: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    studentAge: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    content:{
        marginBottom: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        gap: 30,
    },
    
});

export default styles;