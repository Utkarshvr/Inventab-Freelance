import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

function convertString(inputString) {
  const words = inputString.split(" ");

  const transformedWords = words.map((word, index) => {
    if (index === 0) {
      // Capitalize the first word
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      // Leave other words as they are
      return word.toLowerCase();
    }
  });

  return transformedWords.join("");
}
export default function AttendanceModal() {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { userId } = auth;

  const [formData, setFormData] = useState({
    from: { date: "", day: "", status: "" },
    to: { date: "", day: "", status: "" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userId && formData) {
      try {
        const payload = {
          user: userId,
          status: "New",
          leave_dates: [
            {
              date: formData?.from?.date,
              type: convertString(formData?.from.day),
              status: "Applied",
            },
            {
              date: formData?.to?.date,
              type: convertString(formData?.to.day),
              status: "Applied",
            },
          ],
        };
        const { data } = await axios.post(`/org/create/leave-appln/`, payload);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
              data-bs-dismiss="modal"
              aria-label="Close"
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
                  <select className="w-100 h-25" name="appln-status">
                    <option disabled value="Select Appln Status" selected>
                      Select Appln Status
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              {/* From */}
              <div className="row">
                <label>From:</label>
                <div className="col-md-4 col-sm-12 ">
                  <input
                    value={formData?.from?.date}
                    type="date"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        from: {
                          ...prev.from,
                          date: e.target.value?.toString(),
                        },
                      }))
                    }
                    name="from"
                    placeholder="Select date"
                    id="from"
                    className="w-100 h-75 m-2 rounded-1"
                    tabindex="-1"
                  />
                </div>

                {/* Half or Full Day select */}
                <div className="col-md-4 col-sm-12 ">
                  <select
                    value={formData?.from?.day}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        from: {
                          ...prev.from,
                          day: e.target.value?.toString(),
                        },
                      }))
                    }
                    name="day"
                    className="w-100 h-75 m-2 rounded-1"
                  >
                    <option disabled value="Select Day" selected>
                      Select Day
                    </option>
                    <option value="First Half">First Half</option>
                    <option value="Second Half">Second Half</option>
                    <option value="Full Day">Full Day</option>
                  </select>
                </div>

                {/* select status */}
                <div className="col-md-4 col-sm-12 ">
                  <select
                    value={formData?.from?.status}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        from: {
                          ...prev.from,
                          status: e.target.value?.toString(),
                        },
                      }))
                    }
                    className="w-100 h-75 m-2 rounded-1"
                    name="status"
                  >
                    <option disabled value="Select Status" selected>
                      Select Status
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              {/* To */}
              <div className="row">
                <label>To:</label>
                <div className="col-md-4 col-sm-12 ">
                  <input
                    value={formData?.to?.date}
                    type="date"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        to: {
                          ...prev.to,
                          date: e.target.value?.toString(),
                        },
                      }))
                    }
                    name="to"
                    id="to"
                    className="w-100 h-75 m-2 rounded-1"
                    tabindex="-1"
                  />
                </div>

                {/* Half/Full Day select */}
                <div className="col-md-4 col-sm-12 ">
                  <select
                    value={formData?.to?.day}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        to: {
                          ...prev.to,
                          day: e.target.value?.toString(),
                        },
                      }))
                    }
                    name="day"
                    className="w-100 h-75 m-2 rounded-1"
                  >
                    <option disabled value="Select Day" selected>
                      Select Day
                    </option>
                    <option value="First Half">First Half</option>
                    <option value="Second Half">Second Half</option>
                    <option value="Full Day">Full Day</option>
                  </select>
                </div>

                {/* select status */}
                <div className="col-md-4 col-sm-12 ">
                  <select
                    value={formData?.to?.status}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        to: {
                          ...prev.to,
                          status: e.target.value?.toString(),
                        },
                      }))
                    }
                    className="w-100 h-75 m-2 rounded-1"
                    name="status"
                  >
                    <option disabled value="Select Status" selected>
                      Select Status
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <input
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
