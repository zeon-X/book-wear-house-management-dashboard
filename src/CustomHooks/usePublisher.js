import { useEffect, useState } from "react";
import axiosInstance from "../Utilities/axiosInstance/axiosInstance";

const usePublisher = () => {
  const [publisherList, setPublisherList] = useState([]);
  useEffect(() => {
    axiosInstance.get("pub/get").then((res) => {
      setPublisherList(res.data);
    });
  }, []);

  return [publisherList, setPublisherList];
};

export default usePublisher;
