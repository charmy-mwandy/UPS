import {TailwindProvider} from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from '@react-navigation/native';
import Rootnavigator from "./navigator/Rootnavigator";

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Rootnavigator/>
      </NavigationContainer>   
    </TailwindProvider>
  );
}
