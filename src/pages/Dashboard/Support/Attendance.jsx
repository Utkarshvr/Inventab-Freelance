/* eslint-disable no-unused-vars */
import Select from "react-select";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { useEffect, useState } from "react";
import PageTitle from "../../../components/Shared/PageTitle";
import SectionTitle from "../../../components/Shared/SectionTitle";
import "./Attendance.css";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { generateCustomClassNames } from "../../../utils/utilityFunc/utilityFunc";
import AttendanceModal from "./AttendanceModal";

const Attendance = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId, userId } = auth;
console.log({userId})
  // STATES
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [weeklyOffs, setWeeklyOffs] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [allowedList, setAllowedList] = useState({});
  const [ownLeaves, setOwnLeaves] = useState([]);
  const [customDaysClassName, setCustomDaysClassName] = useState([]);
  const [isReporty, setIsReporty] = useState(false);

  const handleToggle = () => {
    setIsReporty(!isReporty);
  };
  // LOGS
  // console.log({ ownLeaves });

  // EFFECTS
  useEffect(() => {
    (async () => {
      try {
        // weeklyOffs
        const { data: weeklyOffsData } = await axios.get(
          `/org/get/weeklyoff/?org_id=${orgId}`
        );
        setWeeklyOffs(weeklyOffsData?.results[0]?.weekly_off_day);

        // Get Holidaylist
        const { data: holidaysListData } = await axios.get(
          `org/get/holidaylist/?org_id=${orgId}`
        );
        setHolidays(holidaysListData?.results[0]?.holiday_date);

        // Get AllowedList
        const { data: allowedListData } = await axios.get(
          `org/get/allowedleaves/?org_id=${orgId}`
        );
        setAllowedList({
          sick: allowedListData?.results[0]?.sick,
          casual: allowedListData?.results[0]?.casual,
        });

        // Get  Own LeaveStatus
        const { data: ownLeavesData } = await axios.get(
          `org/get/ownleavestatus/?user_id=${userId}`
        );
        setOwnLeaves(ownLeavesData?.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios, orgId]);

  useEffect(() => {
    // Create the array for custom class names
    const arr = generateCustomClassNames(holidays, ownLeaves);
    setCustomDaysClassName(arr);
  }, [weeklyOffs, holidays, ownLeaves]);

  useEffect(() => {
    if (isReporty) {
      (async () => {
        try {
          // Get Reporting_Manager Users Reports
          const { data: Reporting_ManagersData } = await axios.get(
            `/org/get/user/report/?reporting_manager={reporting_manager_uuid}`
          );
          console.log(Reporting_ManagersData);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isReporty]);
  return (
    <div>
      <PageTitle title="Attendance Page" />
      <SectionTitle title="Attendance Page" />
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h1>Attendance Page</h1>

            {/* Self Or Reportees SWITCH */}

            <div
              style={{
                display: "flex",
                gap: "1em",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1em",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5em 1em",
                }}
              >
                <h6 style={{ margin: "auto" }}>Self</h6>
                <div
                  className={`sliding-toggle-switch ${
                    isReporty ? "active" : ""
                  }`}
                  onClick={handleToggle}
                >
                  <div className="toggle-dot"></div>
                </div>
                <h6 style={{ margin: "auto" }}>Reportees</h6>
              </div>

              {/* <!-- Button trigger modal --> */}
              {isReporty ? (
                <Select
                  placeholder="Select Employee"
                  isSearchable
                  isClearable
                  name="empoyee"
                  className="p-2"
                  // options={soStatus}
                  // value={values.so_status}
                  // onChange={(option) => setFieldValue("so_status", option)}
                />
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-common rounded-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Leave Application
                </button>
              )}
            </div>
          </div>

          <section>
            <div className="row">
              <section className="col-md-6">
                <div className="border border-dark mb-3 p-2 rounded-2">
                  <p className="text-dark fs-4">
                    Total Leaves:{" "}
                    {/* {ownLeaves?.forEach((ownLeave) => {
                      if (ownLeave.status === "New") return 0;
                      else return ownLeaves?.length;
                    })} */}
                    0 / {allowedList?.casual + allowedList?.sick}
                  </p>
                  <p className="text-dark fs-4">
                    Casual Leaves: 0 / {allowedList?.casual}
                  </p>
                  <p className="text-dark fs-4">
                    Sick: 0 / {allowedList?.sick}
                  </p>
                </div>
                <div className="border border-dark mb-3 rounded-2">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-dark fs-4">
                          Leave Type
                        </th>
                        <th scope="col" className="text-dark fs-4">
                          Applied Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-dark fs-4">
                          From – To (No of days)
                        </td>
                        <td className="text-dark fs-4">Status</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border border-dark mb-3 rounded-2">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-dark fs-4" scope="col">
                          Leave Type
                        </th>
                        <th className="text-dark fs-4" scope="col">
                          Applied Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-dark fs-4">
                          From – To (No of days)
                        </td>
                        <td className="text-dark fs-4">Status</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="col-md-6">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Calendar
                    value={selectedDayRange}
                    onChange={setSelectedDayRange}
                    customDaysClassName={customDaysClassName}
                    shouldHighlightWeekends
                    calendarClassName="custom-calendar"
                    calendarTodayClassName="custom-today-day"
                    renderFooter={() => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "1rem 2rem",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedDayRange({
                              from: null,
                              to: null,
                            });
                          }}
                          style={{
                            background: "red",
                            fontSize: "15px",
                            border: "#0fbcf9",
                            color: "#fff",
                            borderRadius: "0.5rem",
                            padding: "1rem 2rem",
                          }}
                        >
                          Reset Value!
                        </button>
                      </div>
                    )}
                  />
                </div>
              </section>
            </div>

            {/* modal section */}
            <div>
              {/* <!-- Modal --> */}
              <AttendanceModal />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
