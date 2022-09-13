import { handleHeaderConfig } from "../Utilities/HeaderConfig/handleHeaderConfig";
import axios from "axios";
import { useEffect, useState } from "react";

const usePublisher = () => {
  const [publisherList, setPublisherList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pub/get", handleHeaderConfig)
      .then((res) => {
        // console.log(res.data);
        setPublisherList(res.data);
      });
  }, []);

  return [publisherList, setPublisherList];
};

export default usePublisher;
