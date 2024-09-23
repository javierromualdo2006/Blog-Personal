import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import { Post } from "./components/Post";
import  MainContent  from "./components/MainContent";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseclient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) console.log(error);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const { data: {subscription} } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            break;
          case "SIGNED_OUT":
            setUser(null);
            break;
          default:
            console.log("Evento no controlado:", event);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {user ? (
        <div>
          <h2>Bienvenido, {user.email}</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión con Github</button>
      )}
      <Header />
      <Post
        Titulo="Titulo Ejemplo"
        Descripcion="Descripcion Ejemplo"
        Link="Blog/public/img/Heaven and Hell.jpeg"
        Parrafo="Aqui va el parrafo de la foto"
      >
        <button onClick={handleLogin}>Inicio sesión con Github</button>
      </Post>
      <Footer />
    </>
  );
}
