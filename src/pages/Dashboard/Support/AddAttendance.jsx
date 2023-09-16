import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import InputText from "../../../components/Form/InputText";
import Select from "react-select";

const initialDate = { date: "", day: "", status: "" };

export default function AddAttendance({ isAddModalOpen, setIsAddModalOpen }) {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { userId } = auth;

  const [formData, setFormData] = useState([initialDate]);
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = formData.some((form) => {
      return form.date !== "" || form.day !== "";
    });
    if (userId && isValid) {
      try {
        const payload = {
          user: userId,
          leave_dates: formData.map((form) => ({
            date: form.date,
            type: form.day?.value,
            status: "Applied",
          })),
        };
        const { data } = await axios.post(`/org/create/leave-appln/`, payload);
        console.log({ payload, data });
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isAddModalOpen)
    return (
      <div
        className="modal fade show"
        id="exampleModal"
        style={{
          display: "block",
          background: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Leave Application
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setFormData([initialDate]);
                  setIsAddModalOpen(false);
                }}
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
                {formData.map((form, index) => {
                  return (
                    <div key={index} className="row mb-2">
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="col-md-4 col-sm-12"
                      >
                        <InputText
                          value={form?.date}
                          type="date"
                          onChange={(e) =>
                            setFormData((prev) => {
                              const newArray = [...prev];
                              newArray[index] = {
                                ...newArray[index], // Copy the previous object at the specified index
                                date: e.target.value.toString(), // Update the date property
                              };
                              // console.log(newArray);
                              return newArray;
                            })
                          }
                          name="from"
                          placeholder="Select date"
                        />
                      </div>

                      {/* Half or Full Day select */}
                      <div className="col-md-4 col-sm-12 ">
                        <Select
                          placeholder="Select Day"
                          name="user"
                          options={[
                            { label: "First Half", value: "Firsthalf" },
                            { label: "Second Half", value: "Secondhalf" },
                            { label: "Full Day", value: "Full" },
                          ]}
                          value={form.day}
                          onChange={(e) => {
                            setFormData((prev) => {
                              const newArray = [...prev]; // Create a new array with a copy of the previous values
                              newArray[index] = {
                                ...newArray[index], // Copy the previous object at the specified index
                                day: e, // Update the day property
                              };
                              return newArray;
                            });
                          }}
                        />
                      </div>

                      {/* select status */}
                      {/* <div className="col-md-4 col-sm-12 ">
                      <Select
                        placeholder="Select Status"
                        name="user"
                        options={[
                          { label: "Approve", value: true },
                          { label: "Dissaprove", value: false },
                        ]}
                        value={form.status}
                        onChange={(e) =>
                          setFormData((prev) => {
                            const newArray = [...prev];
                            newArray[index] = {
                              ...newArray[index], // Copy the previous object at the specified index
                              status: e, // Update the date property
                            };
                            // console.log(newArray);
                            return newArray;
                          })
                        }
                        readOnly
                      />
                    </div> */}
                      <div
                        className="col-md-4 col-sm-12 "
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "4px",
                        }}
                      >
                        {index === 0 ? null : (
                          <button
                            onClick={() => {
                              setFormData((prev) =>
                                prev.filter((_, i) => i !== index)
                              );
                            }}
                            disabled={index === 0}
                            type="button"
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="btn btn-danger rounded-1"
                          >
                            {"-"}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => {
                      setFormData((prev) => [...prev, initialDate]);
                    }}
                    disabled={formData.some((form) => {
                      return form.date === "" || form.day === "";
                    })}
                    type="button"
                    className="mt-4 btn btn-primary rounded-1"
                  >
                    Add Date
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary rounded-1"
                  onClick={() => {
                    setFormData([initialDate]);
                    setIsAddModalOpen(false);
                  }}
                >
                  Close
                </button>
                <InputText
                  type="submit"
                  value="Submit"
                  className="btn btn-primary rounded-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

const example = {
  user: "b0dc311b-2231-4875-bb11-d98a8c2e3f3b",
  status: "New",
  leave_dates: [
    {
      date: "2023-08-15",
      type: "Firsthalf/Secondhalf/Full",
      status: "Applied",
    },
    {
      date: "2023-08-23",
      type: "Firsthalf",
      status: "Applied",
    },
  ],
};
