import { useState, useEffect } from "react";
import Loader from "../../ui/Loader";
import Select from "react-select";
import PageTitle from "../Shared/PageTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import DataTable from "react-data-table-component";

import toast from "react-hot-toast";
import { useFormik } from "formik";

export default function AddGRN() {
  const [loading, setLoading] = useState(false);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [allPOs, setAllPOs] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);

  // load department, Client, sub-organization
  useEffect(() => {
    const controller = new AbortController();
    let isMount = true;
    (async function () {
      try {
        const { data } = await axios.get(
          `/pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        console.log({ data });
        setAllPOs(data?.results);
        const poOptions = data?.results.map((poOpt) => ({
          label: poOpt?.po_id,
          value: poOpt?.id,
        }));

        setPurchaseOrders(poOptions || []);

        // const allVendors = data?.results?.map((po) => po?.vendor);
        // setVendors(allVendors);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [axios, orgId]);

  // form submit
  const { setFieldValue, values, handleSubmit } = useFormik({
    initialValues: {
      po: null,
      org: orgId,
      vendor: null,
      // vendor: selectedvendor?.id,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          po: values?.po?.value,
          org: orgId,
          vendor: values?.vendor?.value,
        };
        console.log({
          payload,
        });

        const { data } = await axios.post(`/inventory/grn/create/`, payload);
        console.log({ data });
        toast.success("GRN Created", { duration: 2000 });
        resetForm();
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(error?.msg || "Couldn't Create The GRN", {
          duration: 2000,
        });
      }
    },
  });

  useEffect(() => {
    if (values.po) {
      const poId = values.po?.value;
      const selectedPO = allPOs.find((po) => po?.id === poId);
      const PoVendor = selectedPO?.vendor;
      const selectedParts = selectedPO?.parts;
      const option = {
        label: PoVendor?.company_name,
        value: PoVendor?.id,
      };
      setFieldValue("vendor", option);
      setSelectedParts(selectedParts);
    }
  }, [values.po]);

  console.log({ selectedParts });

  // columns for table
  const columns = [
    {
      name: "Part Number",
      selector: (row) => row?.parts_no,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row?.price,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row?.quantity,
      sortable: true,
    },
    {
      name: "Net Price",
      selector: (row) => row?.quantity * row?.price,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row?.short_description,
      sortable: true,
    },
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="Add GRN" />
          {/* <SectionTitle heading="Add GR" /> */}
          <form className="mb-4" onSubmit={handleSubmit}>
            {/* FIELDS */}
            <div className="row">
              {/* Sales Sales Order */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Purchase Order
                </label>
                <Select
                  name="po"
                  options={purchaseOrders}
                  value={values.po}
                  placeholder="Select PO No"
                  isSearchable
                  className="text-start"
                  onChange={(option) => setFieldValue("po", option)}
                />
              </div>
              {/* add Inv Date input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Vendor</label>
                <Select
                  name="vendor"
                  value={values.vendor}
                  placeholder="Select Vendor No"
                  className="text-start"
                />
              </div>
            </div>

            <button className="btn btn-primary rounded-1" type="submit">
              Create GRN
            </button>
          </form>
          {selectedParts.length > 0 ? (
            <div className="card">
              <div className="card-body">
                <DataTable
                  data={selectedParts || []}
                  columns={columns}
                  customStyles={{
                    rows: {
                      style: {
                        fontSize: "16px",
                      },
                    },
                    headCells: {
                      style: {
                        fontSize: "19px",
                        width: "170px",
                      },
                    },
                  }}
                  noContextMenu
                  fixedHeader
                  fixedHeaderScrollHeight="550px"
                  pagination
                  striped
                  highlightOnHover
                  subHeader
                />
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
