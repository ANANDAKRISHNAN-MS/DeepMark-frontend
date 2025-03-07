import { Stack } from "expo-router";

import "~/global.css"
import AuthProvider from "~/src/providers/AuthProvider";

export default function RootLayout(){
    <AuthProvider>
          return < Stack screenOptions={{headerShown: false}}/> 
    </AuthProvider>

}