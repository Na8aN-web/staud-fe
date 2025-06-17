import { Icon } from "./assets/icons/Icon";
import { Button } from "./components/Button";
import { AuthInput, TextInput } from "./components/inputs";


function App() {
  return (
    <div className="p-12 text-red-500 bg-slate-800 h-screen">
      <Button
      onClick={()=> console.log('olajide')}
        leftIcon={<Icon sort="location" />}
        rightIcon={<Icon sort="location" />}
        label="My button"
        bgVariant="grey"
      />

      <TextInput type="password" label="Full name" placeholder="Johndoe"  />
      <AuthInput type="password"  placeholder="Johndoe"  />
      
    </div>
  );
}

export default App;
