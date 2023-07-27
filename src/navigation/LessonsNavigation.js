import { createStackNavigator } from "@react-navigation/stack";
import { ChallengeView, ChallengesViews, LessonPathView, LessonView } from "../views";

const Stack = createStackNavigator();

export function LessonsNavigation() {
  return (
    <Stack.Navigator initialRouteName="Lecciones segundario">
      <Stack.Screen
        name="Lecciones segundario"
        component={LessonPathView}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Leccion"
        component={LessonView}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Challenges"
        component={ChallengesViews}
        options={{
          headerTitle: "Challenges",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Challenge"
        component={ChallengeView}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
