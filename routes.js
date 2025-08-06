import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuthStore from "./src/Stores/auth";

import Login from "./src/Screens/Login/Login";
import Cadastro from "./src/Screens/Cadastro/Cadastro"


const Stack = createNativeStackNavigator();

function PrivateRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  return user ? children : <Login />;
}

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Rotas públicas */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
  );
}
