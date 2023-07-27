import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { HomeView } from "../views";
import { LessonsNavigation } from "./LessonsNavigation";

const BottomTab = createBottomTabNavigator();

export function Navigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Inicio"
        component={HomeView}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Favoritos"
        component={Componente}
      />
      <BottomTab.Screen
        name="Lecciones"
        component={LessonsNavigation}
        // options={{ headerShown: false, }}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            // console.log("*******Route Name: ", getFocusedRouteNameFromRoute(route))
            if (routeName === 'Challenge' || routeName === 'Leccion') {
              return { display: "none" }
            }
            return
          })(route),
          headerShown: false,
        })}
      />
      <BottomTab.Screen name="Medallas" component={Componente} />
      <BottomTab.Screen name="Cuenta" component={Componente} />
    </BottomTab.Navigator>
  );
}

function Componente() {
  return (
    <View>
      <Text>Hola este soy yo</Text>
    </View>
  );
}
