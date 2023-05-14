import { 
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View, 
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';



export default function Control({pause, togglePlayPauseBtn}) {



  return (
    <View style={styles.controlWrapper}>
      {pause ? (
      <TouchableOpacity onPress={togglePlayPauseBtn} style={styles.helpLink}>
        <MaterialIcons name="play-circle-filled" size={100} color="#7AEEBA" style={styles.outerCircle} />
      </TouchableOpacity>
      ) : (
      <TouchableOpacity onPress={togglePlayPauseBtn} style={styles.helpLink}>
        <MaterialIcons name="pause-circle-filled" size={100} color="#7AEEBA" style={styles.outerCircle} />
      </TouchableOpacity>
      )}
    </View>
  );
}



const styles = StyleSheet.create({
    controlWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },

    outerCircle: {
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderColor: '#efefef',
        borderWidth: 2
      },
})