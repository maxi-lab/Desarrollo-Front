import { UserProvider } from "./Context/UserContext";
import AppRouter from "./Router/AppRouter";
export default function App() {
  return (  
    <UserProvider>
      <AppRouter/>
    </UserProvider>
    
  );
}
