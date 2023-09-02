// const axios = require('axios');

// async function Project() {
//   try {
//     const orgId = 'auth';
//     const apiUrl = `http://inventab.io/api/v1/projects/get/projects/?org_id=${orgId}`;

//     const response = await axios.get(apiUrl);
//     const data = response.data;

//     console.log(data); // Log the data in the console
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// Project();

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Project = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
};
// useEffect(() => {
//   const getLeads = async () => {
//     try {
//       const { data } = await axios.get("");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getLeads();
//   return () => {
//     (isMount = false), controller.abort();
//   };
// }, [axios, orgId]);

export default Project;
