import { handleHeaderConfig } from "../Utilities/HeaderConfig/handleHeaderConfig";
import axios from "axios";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/get", handleHeaderConfig)
      .then((res) => {
        setCategoryList(res.data);
      });
  }, []);

  return [categoryList, setCategoryList];
};

export default useCategory;
