import { HiChevronLeft, HiChevronRight, HiUserCircle } from "react-icons/hi";
import "./css/menu.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDataContext_user } from "../dataProvider/user";
import { useDataContext } from "../dataProvider/context";
export default function Navbar() {
  const { getUserInfos, user_infos } = useDataContext_user();
  const {localisation,userInfos}=useDataContext()
  const {id}=useParams()
  const token = localStorage.getItem("token_hg"); // Getting token from local storage
  const [isLogin, setIsLogin] = useState(false);
  const backHistory = () => {
    history.back();
  };
  const nextHistry = () => {
    history.forward();
  };

  const pathname = useLocation();
  

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const checkLoginStatus = () => {
      setIsLogin(localStorage.getItem("token_hg") !== null);
    };

    // Appeler getUserInfos au montage
    getUserInfos();
    userInfos()

    // Vérifier le statut de connexion au montage et à chaque changement de token
    checkLoginStatus();

    // Déclarer un intervalle pour effectuer des tâches répétitives si nécessaire
    const interval = setInterval(() => {
      checkLoginStatus();
    }, 5000); // exécuter toutes les 5 secondes

    // Retourner une fonction de nettoyage pour clearInterval
    return () => {
      clearInterval(interval);
    };
  }, [token]); // Surveillance des changements du token
  return (
    <>
      <div
        id="main-menu"
        className={
          localisation(pathname)
            ? "none"
            : "item-bg"
        }
      >
        <div className="left-main-menu">
          <HiChevronLeft className="icons" onClick={backHistory} />
          <HiChevronRight className="icons" onClick={nextHistry} />
        </div>
        {user_infos && isLogin ? (
          user_infos.map((data, index) => (
            <Link to={"/profile"} key={index}>
              <div className="right-main-menu">
                <img className="profile" src={data.profile} alt="" />
              </div>
            </Link>
          ))
        ) : (
          <>
            <Link to={"/Login"}>
              <div className="right-main-menu">
                <HiUserCircle id="user" />
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
