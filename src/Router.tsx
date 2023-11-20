import React from "react";
import  {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./Pages/Categories";
import Meals from "./Pages/Meals";
import MealDetail from "./Pages/MealDetail";

const Stack=createNativeStackNavigator();

const App= ()=>{
return(
<NavigationContainer>
  <Stack.Navigator>
<Stack.Screen name="Categories"  component={Categories}
options={{
  headerTitleStyle:{color:"orange"},
  headerTitleAlign:"center"
}
 
}
></Stack.Screen>
<Stack.Screen name="Meals"  component={Meals}
options={{
  headerTitleStyle:{color:"orange"},
  headerTitleAlign:"center"
}
 
}
></Stack.Screen>
<Stack.Screen name="MealDetail"  component={MealDetail}
options={{
  headerTitleStyle:{color:"orange"},
  headerTitleAlign:"center"
}
 
}
></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>



)

}
export default App;