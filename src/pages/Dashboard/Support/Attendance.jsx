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
import {
  generateCustomClassNames,
  statusColor,
} from "../../../utils/utilityFunc/utilityFunc";
import AddAttendance from "./AddAttendance";
import Loader from "../../../ui/Loader";
import { BsPencilSquare } from "react-icons/bs";
import EditAttendance from "./EditAttendance";

const Attendance = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId, userId } = auth;
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
  const [reportees, setReportees] = useState([]);
  const [reporteesOption, setReporteesOption] = useState([]);
  const [selectedManager, setSelectedManager] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(userId);
  const [loading, setLoading] = useState(true);

  const [editModalData, setEditModalData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  console.log(ownLeaves);
  // EFFECTS
  useEffect(() => {
    (async () => {
      setLoading(true);
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
          `org/get/ownleavestatus/?user_id=${selectedUserId}`
        );
        setOwnLeaves(ownLeavesData?.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [axios, selectedUserId, orgId]);

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
          const { data: ReporteesData } = await axios.get(
            `/org/get/user/report/?reporting_manager=${userId}`
          );
          const results = ReporteesData?.results;
          const options = results?.map((manager) => ({
            label: `${manager?.first_name} ${manager?.last_name}`,
            value: manager?.id,
          }));

          setReportees(results);
          setReporteesOption(options);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setSelectedManager(null);
      setSelectedUserId(userId);
    }
  }, [isReporty]);

  useEffect(() => {
    if (selectedManager) setSelectedUserId(selectedManager?.value);
    else setSelectedUserId(userId);
  }, [selectedManager]);

  if (loading) return <Loader />;
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
                  onClick={() => setIsReporty(!isReporty)}
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
                  options={reporteesOption}
                  value={selectedManager}
                  onChange={(option) => setSelectedManager(option)}
                />
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-common rounded-1"
                  onClick={() => setIsAddModalOpen(true)}
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
                {ownLeaves.map((leave, index) => (
                  <div className="border border-dark mb-3 rounded-2">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="text-dark fs-4">
                            Leave Date
                          </th>
                          <th scope="col" className="text-dark fs-4">
                            Leave Type
                          </th>
                          <th scope="col" className="text-dark fs-4">
                            Status
                          </th>
                        </tr>
                      </thead>
                      {leave?.leave_dates?.map((date) => (
                        <tbody>
                          <tr>
                            <td className="text-dark fs-4">{date?.date}</td>
                            <td className="text-dark fs-4">{date?.type}</td>
                            <td
                              style={{
                                color: statusColor(date?.status),
                              }}
                              className="fs-4"
                            >
                              {date?.status}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        width: "100%",
                        padding: "1em",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setIsEditModalOpen(true);
                        setEditModalData({
                          ownLeave: ownLeaves[index],
                        });
                      }}
                    >
                      <BsPencilSquare size={28} />
                    </div>
                  </div>
                ))}
              </section>
              <section className="col-md-6">
                <div className="d-flex align-items-start justify-content-center h-100">
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
              {isAddModalOpen ? (
                <AddAttendance
                  isAddModalOpen={isAddModalOpen}
                  setIsAddModalOpen={setIsAddModalOpen}
                />
              ) : null}
            </div>
            <div>
              {/* <!-- Modal --> */}
              {isEditModalOpen ? (
                <EditAttendance
                  isReporty={isReporty}
                  editModalData={editModalData}
                  setIsEditModalOpen={setIsEditModalOpen}
                  isEditModalOpen={isEditModalOpen}
                />
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
