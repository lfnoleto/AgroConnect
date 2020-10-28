import React,{useState}from 'react';
import { ScrollView, Text, TextInput,StatusBar} from 'react-native';
//import { Feather } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles'
import DatePicker from 'react-native-datepicker'
//import DateTimePicker from '@react-native-community/datetimepicker'; <DatePicker format='DD/MM/YYYY' date={date} style={styles.data}/>


export default function OrphanageData() {
 
    const [date, setDate] = useState(new Date())


 

  

  return (

    <>
         <StatusBar backgroundColor="#15c3d6"/>
    
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        
            <Text style={styles.title}>Compras</Text>
            

            <Text style={styles.label}> ID - Brinco</Text>
            <TextInput
                style={styles.input}
            />

            <Text style={styles.label}>Finalidade</Text>
            <TextInput 
                
                style={styles.input}
                keyboardType={'numeric'}
            
            />

          

            <RectButton style={styles.nextButton} onPress={() => {}}>
                <Text style={styles.nextButtonText}>Cadastrar</Text>
            </RectButton>
        </ScrollView>
    </>
  )
}
