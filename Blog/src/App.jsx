import { Header } from"./components/Header"
import { Footer } from"./components/Footer"
import { Post } from"./components/Post"
import { MainContent } from"./components/MainContent"
import { useState } from "react"
import supabase from "./lib/helper/supabaseclient"

export default function app() {
  const [user, setUser] = useState(null)

  useEffect(() => {
   const getSession = async () => {
    //destructuracion
    const {data, error} = await supabase.auth.getSession();
    if (error) {
      console.log(error);
    }else {
      setUser(data?.session?.user)
    }

    }
    getSession();

  }, user)
const handleLogin = async () => {
  const {error, data} = await supabase.auth.signInwith({
    provider: "github",
  });
}
  return 
    <>
   <Header></Header>
   <Post>
    <button onClick={handleLogin}>inicio sesion github</button>
    Titulo=("Titulo Ejemplo")
    Descripcion=("Descripcion Ejemplo")
    Link=("Blog/public/img/Heaven and Hell.jpeg")
    Parrafo=("Aqui va el parrafo de la foto")
   </Post>
   <Footer></Footer>  
    </>
}

