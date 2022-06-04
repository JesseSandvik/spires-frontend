import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import useRefreshToken from '../hooks/useRefreshToken';
// import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const refresh = useRefreshToken();
  // const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        // await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading((isLoading) => (isLoading = false));
      }
    };

    // !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    // console.log(`auth: ${JSON.stringify(auth?.accessToken)}`)
  }, [isLoading]);

  return <Fragment>{isLoading ? <p>Loading...</p> : <Outlet />}</Fragment>;
};

export default PersistLogin;
