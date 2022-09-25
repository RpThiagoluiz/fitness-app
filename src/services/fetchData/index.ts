import Axios, { AxiosInstance } from 'axios';
import { makeUseAxios } from 'axios-hooks';

const axiosTest: AxiosInstance = Axios.create();

axiosTest.interceptors.response.use(
  (response) => {
    console.log('response - TEST', response);
    return Promise.resolve(response);
  },
  (error) => {
    console.log('error', error);
    if (error.response.status === 401) {
      console.log('response - TEST(401)', error.response);
    }
    return Promise.reject(error);
  }
);

export const useAxios = makeUseAxios({
  axios: axiosTest,
});

// useEffect(() => {
//   let isMounted = true

//   const fetchaData = async () => {
//     try {
//       const { data } = await _fetchData()
//       if (!isMounted) return

//       setData(data.data)
//     } catch (err) {
//       if (isMounted) notification.error(listApiKeysNotifications.getDefaultError())
//     }
//   }

//   fetchaData()

//   return () => {
//     isMounted = false
//   }
// }, [_fetchApiKeys])
