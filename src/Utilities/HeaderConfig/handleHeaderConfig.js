const handleHeaderConfig = {
  headers: {
    authorization: `${localStorage.getItem("authorization")}`,
  },
};

export { handleHeaderConfig };
