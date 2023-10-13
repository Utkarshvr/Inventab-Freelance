

// import React, { useEffect, useState } from 'react';
// import PageTitle from '../Shared/PageTitle';
// import { Link } from 'react-router-dom';
// import { BsArrowLeft } from 'react-icons/bs';
// import Select from 'react-select';
// import { useFormik } from 'formik';
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
// import { useAuth } from '../../hooks/useAuth';
// import { format } from 'date-fns';

// const EmployeeTimeSheet = () => {
//   const axios = useAxiosPrivate();
//   const { auth } = useAuth();
//   const { orgId } = auth;
//   const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   const [loading, setLoading] = useState(false);
//   const [projects, setProjects] = useState([]);
//   const [backlogs, setBacklogs] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [selectedBacklog, setSelectedBacklog] = useState(null);
//   const [selectedDays, setSelectedDays] = useState({
//     Mon: false,
//     Tue: false,
//     Wed: false,
//     Thu: false,
//     Fri: false,
//     Sat: false,
//     Sun: false,
//   });
//   const [tableData, setTableData] = useState([]);
//   const [selectedRole, setSelectedRole] = useState('Employee');

//   const toggleRole = () => {
//     setSelectedRole(selectedRole === 'Employee' ? 'PM' : 'Employee');
//   };

//   const handleDayHoursChange = (day, projectOrBacklog, index, value) => {
//     const updatedTableData = [...tableData];
//     updatedTableData[index][day][projectOrBacklog] = value;
//     setTableData(updatedTableData);
//   };

//   const calculateColumnTotal = (day, projectOrBacklog) => {
//     // Calculate the total hours for the specified day and project/backlog based on text inputs
//     return tableData.reduce((total, rowData) => {
//       return total + parseFloat(rowData[day][projectOrBacklog] || 0);
//     }, 0);
//   };

//   const handleRemoveRow = (index) => {
//     const updatedTableData = [...tableData];
//     updatedTableData.splice(index, 1);
//     setTableData(updatedTableData);
//   };

//   // Form Submit
//   const formik = useFormik({
//     initialValues: {
//       project: null,
//       backlog: null,
//     },
//     onSubmit: async (values, { resetForm }) => {
//       // Handle the submit action here
//       console.log("Selected Project:", values.project);
//       console.log("Selected Backlog:", values.backlog);


//       setSelectedDays({
//         Mon: false,
//         Tue: false,
//         Wed: false,
//         Thu: false,
//         Fri: false,
//         Sat: false,
//         Sun: false,
//       });

//       resetForm({
//         values: {
//           ...values,
//           project: null,
//           backlog: null,
//         },
//       });

//       // Update table data
//       const newRow = {
//         Project: values.project ? values.project.label : '-',
//         Backlog: values.backlog ? values.backlog.label : '-',
//         Mon: {},
//         Tue: {},
//         Wed: {},
//         Thu: {},
//         Fri: {},
//         Sat: {},
//         Sun: {},
//       };
//       setTableData((prevTableData) => [...prevTableData, newRow]);
//     },
//   });

//   useEffect(() => {
//     let isMount = true;
//     const controller = new AbortController();

//     // Project
//     (async function () {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(
//           `projects/get/projects/?org_id=${orgId}`,
//           {
//             signal: controller.signal,
//           }
//         );
//         setLoading(false);

//         const projectArr = data?.results?.map((project) => ({
//           label: project?.project_name,
//           value: project?.id,
//         }));
//         const processedProjects = projectArr || [];

//         if (isMount) {
//           setProjects(processedProjects);
//         }
//       } catch (error) {
//         setLoading(false);
//         console.error(error);
//       }
//     })();

//     return () => {
//       isMount = false;
//       controller.abort();
//     };
//   }, [axios, orgId]);

//   useEffect(() => {
//     let isMount = true;
//     const controller = new AbortController();

//     // Backlog (Replace this with your actual backlog API call)
//     (async function () {
//       try {
//         if (selectedProject) {
//           setLoading(true);
//           const projectId = selectedProject.value;
//           const { data } = await axios.get(
//             `/projects/get/project/backlog/?project_id=${projectId}`
//           ); // Replace with your actual backlog API endpoint
//           setLoading(false);

//           const backlogArr = data?.results?.map((backlog) => ({
//             label: backlog.backlog_id, // Display backlog ID
//             value: backlog.id, // Use backlog ID as the value
//           }));
//           const processedBacklogs = backlogArr || [];

//           if (isMount) {
//             setBacklogs(processedBacklogs);
//           }
//         }
//       } catch (error) {
//         setLoading(false);
//         console.error(error);
//       }
//     })();

//     return () => {
//       isMount = false;
//       controller.abort();
//     };
//   }, [axios, selectedProject]);

//   return (
//     <div>
//       <PageTitle title="Add Backlog" />
//       <div className="d-flex justify-content-end me-5 mb-4">
//         <Link
//           to="/dashboard/eng-backlog"
//           className="btn btn-primary rounded-1 border-0 text-white"
//         >
//           <BsArrowLeft className="me-2" />
//           Back
//         </Link>
//       </div>
//       <div className="card">

//         <div className="card-header flex">
//           <h4 className="card-title">Employee Timesheet</h4>
//         </div>
//         <div className="card-body">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="row">
//               <div className="mb-3 col-md-4">
//                 <label className="mb-2 text-dark text-capitalize">
//                   Project
//                 </label>
//                 <Select
//                   title="Project"
//                   isLoading={loading}
//                   placeholder="Select Project"
//                   name="project"
//                   options={projects}
//                   value={formik.values.project}
//                   onChange={(selectOption) => {
//                     formik.setFieldValue("project", selectOption);
//                     setSelectedProject(selectOption); // Update the selected project
//                   }}
//                   isClearable
//                   isSearchable

//                 />
//               </div>
//               <div className="mb-3 col-md-4">
//                 <label className="mb-2 text-dark text-capitalize">
//                   Backlog
//                 </label>
//                 <Select
//                   title="Backlog"
//                   isLoading={loading}
//                   placeholder="Select Backlog"
//                   name="backlog"
//                   options={backlogs}
//                   value={formik.values.backlog}
//                   onChange={(selectOption) => {
//                     formik.setFieldValue("backlog", selectOption);
//                     setSelectedBacklog(selectOption);
//                   }
//                   }
//                   isClearable
//                   isSearchable

//                 />
//               </div>
//               <div className="mb-3 col-md-4">
//                 <div className="justify-content-end my-4 ms-2">
//                   <input
//                     className="btn btn-primary btn-common rounded-1"
//                     type="submit"
//                     value="Add"
//                   />
//                 </div>
//               </div>
//             </div>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Project</th>
//                   <th>Backlog</th>
//                   {daysOfWeek.map((day) => (
//                     <th key={day}>{day}</th>
//                   ))}
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((row, index) => (
//                   <tr key={index}>
//                     <td>{row.Project}</td>
//                     <td>{row.Backlog}</td>
//                     {daysOfWeek.map((day) => (
//                       <td>
//                         <input
//                           className='new_input_class'
//                           type="number"
//                           // value={row[day]?.[row.Project] || ''}
//                           onChange={(e) => {
//                             handleDayHoursChange(day, 'Project', index, e.target.value);
//                           }}
//                           placeholder="Hours"
//                         />
//                       </td>
//                     ))}
//                     <td>
//                       <button
//                         type='button'
//                         className='btn btn-danger btn-sm'
//                         onClick={() => handleRemoveRow(index)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td></td>
//                   <td>Total Hr.</td>
//                   {daysOfWeek.map((day) => (
//                     <td key={day}>{calculateColumnTotal(day, 'Project')}</td>
//                   ))}
//                   <td></td>
//                   <td></td>
//                 </tr>
//               </tfoot>
//             </table>
//             <div className='d-flex justify-content-end my-4'>
//               <input
//                 className='btn btn-primary btn-common rounded-1'
//                 type='submit'
//                 value='Add Employee TimeSheet'
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTimeSheet;



import React, { useEffect, useState } from 'react';
import PageTitle from '../../../components/Shared/PageTitle';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Select from 'react-select';
import { useFormik } from 'formik'; // Import useFormik from Formik
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useAuth } from '../../../hooks/useAuth';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const EmployeeTimeSheet = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [backlogs, setBacklogs] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBacklog, setSelectedBacklog] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [selectedRole, setSelectedRole] = useState('Employee');
  const [codeOptions, setCodeOptions] = useState([])
  const [employee, setEmployee] = useState([]);
  const [selectedProjectUserId, setSelectedProjectUserId] = useState(null);
  const currentDate = new Date();
  const currentWeek = getWeekNumber(currentDate);

  const hoverStyle = {
    position: 'relative',
    cursor: 'pointer',
  };

  const tooltipStyle = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    zIndex: '1',
    top: '0',
    left: '100%',
    transform: 'translateX(8px)', 
    whiteSpace: 'nowrap',
    display: 'none',
  };


  const handleCellHover = (index) => {
    const tooltip = document.getElementById(`tooltip-${index}`);
    if (tooltip) {
      tooltip.style.display = 'block';
    }
  };

  const handleCellHoverOut = (index) => {
    const tooltip = document.getElementById(`tooltip-${index}`);
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  };


  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    // Project
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const projectArr = data?.results?.map((project) => ({
          label: `${project?.project_name} (${project?.project_id})`,
          value: project?.id,
        }));
        const processedProjects = projectArr || [];

        if (isMount) {
          setProjects(processedProjects);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    return () => {
      isMount = false;
      controller.abort();
    };
  }, [axios, orgId]);


  //Backlog

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    if (selectedProject) {
      // Backlog (Replace this with your actual backlog API call)
      (async function () {
        try {
          setLoading(true);
          const projectId = selectedProject.value;
          const { data } = await axios.get(
            `/projects/get/project/backlog/?project_id=${projectId}`
          ); // Replace with your actual backlog API endpoint
          const selectedUserId = data?.results?.[0]?.user?.id || null;

          setLoading(false);

          const backlogArr = data?.results?.map((backlog) => ({
            label: backlog.backlog_id,
            value: backlog.id,
          }));
          const processedBacklogs = backlogArr || [];

          if (isMount) {
            setBacklogs(processedBacklogs);

            setSelectedProjectUserId(selectedUserId);
          }
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      })();
    }

    return () => {
      isMount = false;
      controller.abort();
    };
  }, [axios, selectedProject]);


  const handleDayHoursChange = (day, index, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][day] = parseFloat(value) || 0;
    setTableData(updatedTableData);
  };

  const calculateColumnTotal = (day) => {
    return tableData.reduce((total, rowData) => {
      return total + parseFloat(rowData[day]) || 0;
    }, 0);
  };

  const handleRemoveRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };


  // Define your form using useFormik
  const formik = useFormik({
    initialValues: {
      project: null,
      backlog: null,
    },
    onSubmit: async (values, { resetForm }) => {
      // Handle the submit action here
      console.log("Selected Project:", values.project);
      console.log("Selected Backlog:", values.backlog);

      const postData = {
        // project: values.project ? values.project.value : null,
        project: null,
        task: null,
        user: selectedProjectUserId,
        week: currentWeek,
        mon: null,
        tue: null,
        wed: null,
        thu: null,
        fri: null,
        sat: null,
        sun: null,
      };

      try {
        // Make a POST request to the API endpoint
        const response = await axios.post(
          `/employee_timesheet/new/`, 
            JSON.stringify(postData)
        );
        // Handle the response as needed
        console.log("API Response:", response);

        if (response?.status === 201) {
          resetForm({vaues: ''});
          toast.success('Employee Timesheet added successfully');
        }
      } catch (error) {
        // Handle any API request errors
        toast.error(error?.message, { autoClose: false });
        console.error("API Error:", error);
      }
    },
  });

  const handleAddRow = (e) => {
    e.preventDefault();

    if (selectedProject && selectedBacklog) {
      const newRow = {
        BacklogId: selectedBacklog.label,
        ProjectName: selectedProject.label,
        ProjectId: selectedProject.label,
        Project: selectedProject.label,
        Backlog: selectedBacklog.label,
        Mon: {},
        Tue: {},
        Wed: {},
        Thu: {},
        Fri: {},
        Sat: {},
        Sun: {},
      };
      setTableData((prevTableData) => [...prevTableData, newRow]);

      // Clear selected project and backlog
      formik.setFieldValue("project", null);
      formik.setFieldValue("backlog", null);
      setSelectedProject(null);
      setSelectedBacklog(null);
    }
  };

  function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNumber;
  }

  return (
    <div>
      <PageTitle title="Add Backlog" />
      <div className="d-flex justify-content-end me-5 mb-4">
        <Link
          to="/dashboard/eng-backlog"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Employee Timesheet</h4>
        </div>
        <div className="card-body">
          {/* Use formik.form */}
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-4">
                <label className="mb-2 text-dark text-capitalize">
                  Project
                </label>
                <Select
                  title="Project"
                  isLoading={loading}
                  placeholder="Select Project"
                  name="project"
                  options={projects}
                  value={formik.values.project}
                  onChange={(selectOption) => {
                    formik.setFieldValue("project", selectOption);
                    setSelectedProject(selectOption); // Update the selected project
                  }}
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-4">
                <label className="mb-2 text-dark text-capitalize">
                  Backlog
                </label>
                <Select
                  title="Backlog"
                  isLoading={loading}
                  placeholder="Select Backlog"
                  name="backlog"
                  options={backlogs}
                  value={formik.values.backlog}
                  onChange={(selectOption) => {
                    formik.setFieldValue("backlog", selectOption);
                    setSelectedBacklog(selectOption);
                  }}
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-4">
                <div className="justify-content-end my-4 ms-2">
                  <button
                    className="btn btn-primary btn-common rounded-1"
                    onClick={handleAddRow}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>

                  <th>Backlog</th>
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div
                        style={hoverStyle}
                        onMouseOver={() => handleCellHover(index)}
                        onMouseOut={() => handleCellHoverOut(index)}
                      >
                        {row.Backlog}
                        {/* Tooltip */}
                        <div
                          id={`tooltip-${index}`}
                          style={tooltipStyle}
                        >
                        <div><strong>Backlog ID:</strong> {row.BacklogId}</div>
                        <div><strong>Project Name:</strong> {row.ProjectName}</div>
                        <div><strong>Project ID:</strong> {row.ProjectId}</div>
                        </div>
                      </div>
                    </td>
                    {daysOfWeek.map((day) => (
                      <td key={day}>
                        <input
                          className="new_input_class"
                          type="number"
                          onChange={(e) => {
                            handleDayHoursChange(
                              day,

                              index,
                              e.target.value
                            );
                          }}
                          placeholder="Hours"
                        />
                      </td>
                    ))}
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveRow(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total Hr.</td>
                  {daysOfWeek.map((day) => (
                    <td key={day}>
                      {calculateColumnTotal(day, 'Project')}
                    </td>
                  ))}
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <div className="d-flex justify-content-end my-4">
              <input
                className="btn btn-primary btn-common rounded-1"
                type="submit"
                value="Add Employee TimeSheet"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTimeSheet;
