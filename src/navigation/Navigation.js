import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, useNavigationState } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { assets } from "../assets";
import { HomeView } from "../views";
import { LessonsNavigation } from "./LessonsNavigation";

const BottomTab = createBottomTabNavigator();

export function Navigation() {
  const navigationState = useNavigationState((state) => state);
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "pink",
      }}
    >
      <BottomTab.Screen
        name="Inicio"
        component={HomeView}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favoritos"
        component={Componente}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Lecciones"
        component={LessonsNavigation}
        // options={{ headerShown: false, }}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          const isLeccionesRoute = (routeName === "Leccion" || routeName === "Challenge");

          const currentRoute = navigationState?.routes[navigationState.index];
          const routeMain = currentRoute?.name;
          const isLeccionesMain = routeMain === "Lecciones";

          return {
            tabBarStyle: isLeccionesRoute ? { display: "none" } : {},
            headerShown: false,
            tabBarIcon: () => (
              <RenderIcon isFocused={isLeccionesMain}  />
            ),
            tabBarActiveBackgroundColor: 'pink',
            tabBarActiveTintColor: "white",
          };
        }}
      />
      <BottomTab.Screen
        name="Medallas"
        component={Componente}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="trophy" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cuenta"
        component={Componente}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
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

function RenderIcon({isFocused}) {
  if (isFocused) {
    return (
      <Image
      source={assets["icon-active"]}
      style={{ width: 35, height: 35, top: 3 }}
    />
    );
  }

  return (
    <Image
      source={assets["icon-inactive"]}
      style={{ width: 35, height: 35, top: 3 }}
    />
  );
}
