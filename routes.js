import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppLayout} from "./src/Layout/AppLayout";
import useAuthStore from "./src/Stores/auth";

import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import Home from "./src/Screens/Home";

const Stack = createNativeStackNavigator();

function PrivateRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  return user ? children : <Login />;
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Rotas públicas */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

        {/* Rota privada */}
        <Stack.Screen
          name="Home"
          children={() => (
            <PrivateRoute>
              <AppLayout>
                <Home />
              </AppLayout>
            </PrivateRoute>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
