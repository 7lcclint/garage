import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigateTo = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigateTo('/login');
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if(!isLoggedIn){
    navigateTo('/login');
  }else{
    navigateTo('/');
  }

  return (
    <div>
      Home Page
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default HomePage
