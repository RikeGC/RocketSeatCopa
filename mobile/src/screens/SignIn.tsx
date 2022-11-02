import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from "native-base";
import { THEME } from '../styles/theme';

export function SignIn(){
    return(
        <NativeBaseProvider theme={THEME}>
        <Center flex={1} bgColor="gray.900"> 
          <Text color="white" fontSize={24}>SignIn</Text>
          <StatusBar style="auto" />
        </Center>
        </NativeBaseProvider>
    )
}