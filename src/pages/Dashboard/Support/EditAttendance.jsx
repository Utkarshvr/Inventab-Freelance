import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import InputText from "../../../components/Form/InputText";
import Select from "react-select";

const initialDate = { id: "", date: "", day: "", status: "" };

export default function EditAttendance({
  isReporty,
  editModalData,
  setIsEditModalOpen,
  isEditModalOpen,
  setFetchLeavesToggle,
}) {
  const axios = useAxiosPrivate();
  const userId = editModalData?.ownLeave?.user;
  const leaveId = editModalData?.ownLeave?.id;

  const [formData, setFormData] = useState([initialDate]);
  const [isInitialStateSetupDone, setIsInitialStateSetupDone] = useState(false);

  // console.log({ leaveId, userId, editModalData });
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = formData.some((form) => {
      return form.date !== "" || form.day !== "";
    });
    if (userId && isValid) {
      try {
        console.log({ FORM_TO_BE_SUBMITTED: formData });
        const payload = {
          user: userId,
          leave_dates: formData.map((form) => ({
            id: form.id,
            date: form.date,
            type: form.day?.value,
            status: form.status?.label,
          })),
        };
        console.log(payload);
        const { data } = await axios.put(
          `/org/update/leaveapplnstatus/${leaveId}/`,
          payload
        );
        setIsEditModalOpen(false);
        setFetchLeavesToggle((prev) => !prev);
        console.log({ data, payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (editModalData && editModalData?.ownLeave && !isInitialStateSetupDone) {
      let day;
      setFormData(
        editModalData?.ownLeave?.leave_dates?.map((leaveDate) => {
          if (leaveDate?.type === "Secondhalf") {
            day = { label: "Second Half", value: "Secondhalf" };
          } else if (leaveDate?.type === "Firsthalf") {
            day = { label: "First Half", value: "Firsthalf" };
          } else if (leaveDate?.type === "Full") {
            day = { label: "Full Day", value: "Full" };
          }
          return {
            date: leaveDate?.date,
            day,
            status:
              leaveDate?.status === "Applied"
                ? null
                : {
                    label: leaveDate?.status,
                    value: leaveDate?.status === "Approved" ? true : false,
                  },
          };
        })
      );
      setIsInitialStateSetupDone(true);
    }
  }, [isReporty, editModalData]);

  if (isEditModalOpen)
    return (
      <div
        className="modal fade show"
        id="editAttendance"
        style={{
          display: "block",
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="editAttendanceLabel">
                Leave Application
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsEditModalOpen(false)}
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  {/* left */}
                  <div className="col-md-6 col-sm-12 mb-3">
                    <p className="text-dark fs-5">
                      Total Leaves: Taken / Available
                    </p>
                    <p className="text-dark fs-5">
                      Casual Leaves: Taken / Available
                    </p>
                    <p className="text-dark fs-5">Sick: Taken / Available</p>
                  </div>
                  {/* right */}
                  <div className="col-md-6 col-sm-12 mb-3">
                    <Select
                      placeholder="Select Appln Status"
                      name="appln_status"
                      options={[
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                      ]}
                    />
                  </div>
                </div>

                {/* Date */}
                <h4>Applied Leaves</h4>

                {formData.map((form, index) => {
                  return (
                    <div key={index} className="row mb-2">
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className={`${
                          isReporty ? " col-md-4 " : "col-md-6"
                        } col-sm-12 `}
                      >
                        <InputText
                          value={form?.date}
                          type="date"
                          placeholder="Select date"
                          readOnly={isReporty}
                          onChange={(e) =>
                            !isReporty
                              ? setFormData((prev) => {
                                  const newArray = [...prev];
                                  newArray[index] = {
                                    ...newArray[index], // Copy the previous object at the specified index
                                    date: e.target.value.toString(), // Update the date property
                                  };
                                  // console.log(newArray);
                                  return newArray;
                                })
                              : null
                          }
                        />
                      </div>

                      {/* Half or Full Day select */}
                      <div
                        className={`${
                          isReporty ? " col-md-4 " : "col-md-6"
                        } col-sm-12 `}
                      >
                        <Select
                          placeholder="Select Day"
                          options={[
                            { label: "First Half", value: "Firsthalf" },
                            { label: "Second Half", value: "Secondhalf" },
                            { label: "Full Day", value: "Full" },
                          ]}
                          value={form.day}
                          readOnly={isReporty}
                          onChange={(e) =>
                            !isReporty
                              ? setFormData((prev) => {
                                  const newArray = [...prev];
                                  newArray[index] = {
                                    ...newArray[index], // Copy the previous object at the specified index
                                    day: e, // Update the date property
                                  };
                                  // console.log(newArray);
                                  return newArray;
                                })
                              : null
                          }
                        />
                      </div>

                      {/* select status */}
                      {isReporty ? (
                        <div className={`col-md-4 col-sm-12 `}>
                          <Select
                            placeholder="Select Status"
                            name="user"
                            options={[
                              { label: "Approved", value: true },
                              { label: "Disapproved", value: false },
                            ]}
                            value={form.status}
                            onChange={(e) =>
                              isReporty
                                ? setFormData((prev) => {
                                    const newArray = [...prev];
                                    newArray[index] = {
                                      ...newArray[index], // Copy the previous object at the specified index
                                      status: e, // Update the date property
                                    };
                                    // console.log(newArray);
                                    return newArray;
                                  })
                                : null
                            }
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary rounded-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <InputText
                  type="submit"
                  value="Edit"
                  className="btn btn-primary rounded-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
