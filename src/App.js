import "./App.css";
import Profile from "./component/profile/Profile";

function App() {
  const alerthandleName = (fullName) => alert(fullName);

  return (
    <div className="App">
      <Profile
        fullName="Seif"
        alerthandleName={alerthandleName}
        bio=" a web developper"
        profession="developper"
      >
        <img src="/logo192.png" alt="logo" />
      </Profile>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "seif",
};

export default App;

