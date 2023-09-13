const daysLeftForSearchFunc = (targetDate) => {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate);
  
    // Calculate the difference in milliseconds between the two dates
    const differenceInMilliseconds = currentDate - targetDateTime;
  
    // Convert the difference to days
    const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
  
    // Round the number of days and return it
    let res = Math.ceil(differenceInDays);
  
    return res;
  };

const dueDate  = (row) => {
    let date = new Date(row?.invoice_date);
    if (row?.payment_term?.id === 1) {
      return date;
    }
    if (row?.payment_term?.id === 2) {
      return date;
    }
    if (row?.payment_term?.id === 3) {
      return new Date(date.getTime() + 15 * (24 * 60 * 60 * 1000));
    }
    if (row?.payment_term?.id === 4) {
      return new Date(date.getTime() + 30 * (24 * 60 * 60 * 1000));
    }
    if (row?.payment_term?.id === 5) {
      return new Date(date.getTime() + 45 * (24 * 60 * 60 * 1000));
    }
    if (row?.payment_term?.id === 6) {
      return new Date(date.getTime() + 60 * (24 * 60 * 60 * 1000));
    }
  };
const reports = [
  {
      "id": "a3eae040-f393-42c0-bd96-dec48029c4f8",
      "org": {
          "id": "3738c910-c338-49b4-8028-0205c86e97ec",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:35:12.890424+05:30",
          "modified": "2023-07-07T16:35:12.893877+05:30",
          "org_code": "100000485",
          "company_type": "proprietorship",
          "company_name": "SAIKRUPA MOTORS",
          "logo": null,
          "address": "Behind Prince Marbel Shop, Shop-02, Sr. No. 281, Near HP Petrol Pump, Sathe Wasti, D\" Dhanori Road, Lohgaon, Pune - 411047.",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "332be78a-fbbe-485e-ae7c-11750bb3538a",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "4edc082b-5eee-406d-a29c-6df76127bc10",
          "org": {
              "company_name": "SAIKRUPA MOTORS",
              "contact_person": null
          },
          "pincode": {
              "id": "332be78a-fbbe-485e-ae7c-11750bb3538a",
              "created": "2021-08-23T21:49:01.415865+05:30",
              "modified": "2021-08-23T21:49:01.417084+05:30",
              "pin_code": "411047",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:35:53.866796+05:30",
          "modified": "2023-07-07T16:35:53.866833+05:30",
          "address": "Behind Prince Marbel Shop, Shop-02, Sr. No. 281, Near HP Petrol Pump, Sathe Wasti, D\" Dhanori Road, Lohgaon, Pune - 411047",
          "gst_no": "27ABTPW3345C2Z9",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "4edc082b-5eee-406d-a29c-6df76127bc10",
          "org": {
              "company_name": "SAIKRUPA MOTORS",
              "contact_person": null
          },
          "pincode": {
              "id": "332be78a-fbbe-485e-ae7c-11750bb3538a",
              "created": "2021-08-23T21:49:01.415865+05:30",
              "modified": "2021-08-23T21:49:01.417084+05:30",
              "pin_code": "411047",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:35:53.866796+05:30",
          "modified": "2023-07-07T16:35:53.866833+05:30",
          "address": "Behind Prince Marbel Shop, Shop-02, Sr. No. 281, Near HP Petrol Pump, Sathe Wasti, D\" Dhanori Road, Lohgaon, Pune - 411047",
          "gst_no": "27ABTPW3345C2Z9",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "7d0edd0d-fa9c-446a-be7b-307101e87c82",
          "so_id": "SO-100000194-000034",
          "ref_po": null,
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "e96e2e8e-4d0d-45fa-91e1-82e78a4c96ca",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T17:27:22.730265+05:30",
              "modified": "2023-07-07T17:27:22.730292+05:30",
              "quantity": 1,
              "customer_part_no": "DONGLE REPAIRING CHARGES",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "a3eae040-f393-42c0-bd96-dec48029c4f8",
              "part": null
          }
      ],
      "created": "2023-07-07T17:26:52.896398+05:30",
      "modified": "2023-08-17T14:52:33.575261+05:30",
      "invoice_number": "INV-100000485-0000000001",
      "po_number": "VERBAL",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-04-15",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "b48c51d9-d522-45c1-9b34-3f3230c45542",
      "org": {
          "id": "48914c13-8374-45f6-a673-f3d309a31a22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-06T12:28:53.556311+05:30",
          "modified": "2023-07-14T18:31:53.841252+05:30",
          "org_code": "100000189",
          "company_type": "proprietorship",
          "company_name": "Kirloskar Oil Engines Ltd",
          "logo": "http://143.244.142.0/media/banner/Kirloskar.png",
          "address": "laxman rao kirloskar road khadaki",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "d992848a-e686-49c5-9030-1b9bcd4005b5",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "685f917b-9425-4687-8b63-ad54e12adf50",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "d992848a-e686-49c5-9030-1b9bcd4005b5",
              "created": "2021-08-23T21:49:01.320604+05:30",
              "modified": "2021-08-23T21:49:01.339196+05:30",
              "pin_code": "411003",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:41:41.490152+05:30",
          "modified": "2023-05-11T17:41:41.490180+05:30",
          "address": "KIRLOSKAR OIL ENGINES LTD. 13 L. K. ROAD, KHADKI, PUNE,Maharashtra INDIA",
          "gst_no": "27AADCK5714H1ZK",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "23eedb36-ce30-46f8-99ec-91686c7a29a7",
          "so_id": "SO-100000194-000018",
          "ref_po": "7023039567",
          "po_date": "2023-02-21",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "44c2449d-41d5-4c54-9ce6-a2c0cb5d6caa",
              "parts_no": {
                  "id": "eab1fcf0-53c6-46ad-ab96-e8245f65f4bc",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "e04bcbc6-0ea6-4b19-8cbc-5a7407bd0e1a",
                      "country_gst": [
                          {
                              "id": "948875f0-6351-447c-8039-bd1c80fefd1a",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84621011",
                      "description": "MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY FORGING, HAMMERING OR DIE-STAMPING; MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY BENDING, FOLDING, STRAIGHTENING, FLATTENING, SHEARING, PUNCHING OR NOTCHING; PRESSES FOR WORKING METAL OR METAL CARBIDES, NOT SPECIFIED ABOVE - FORGING OR DIE-STAMPING MACHINES (INCLUDING PRESSES) AND HAMMERS: HAMMERS: STEAM OR AIR, SINGLE FRAME"
                  },
                  "created": "2023-06-26T14:25:29.243496+05:30",
                  "modified": "2023-07-07T19:44:17.973355+05:30",
                  "internal_part_no": "1000000406",
                  "part_number": "9900050000 Parallel Flashing  Solution - for R550 & R1190 Lines",
                  "customer_part_number": "9900050000 Parallel Flashing  Solution - for R550 & R1190 Lines",
                  "bom": false,
                  "short_description": "9900050000 Parallel Flashing  Solution - for R550 & R1190 Lines",
                  "long_description": "( software license ,  VCI - ETHERNET , PC  Scanner etc.)",
                  "mrp": 972000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T19:56:15.165614+05:30",
              "modified": "2023-07-07T19:56:15.165646+05:30",
              "quantity": 2,
              "customer_part_no": "R550 & R1190 Lines",
              "price": 972000,
              "warranty": 12,
              "short_description": "9900050000 Parallel Flashing  Solution - for R550 & R1190 Lines",
              "invoice": "b48c51d9-d522-45c1-9b34-3f3230c45542",
              "part": null
          },
          {
              "id": "fa6c4d1b-b8bf-4090-ad3c-540329e97663",
              "parts_no": {
                  "id": "04241fa4-904c-4338-ab67-9dc6e9590f85",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "e04bcbc6-0ea6-4b19-8cbc-5a7407bd0e1a",
                      "country_gst": [
                          {
                              "id": "948875f0-6351-447c-8039-bd1c80fefd1a",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84621011",
                      "description": "MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY FORGING, HAMMERING OR DIE-STAMPING; MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY BENDING, FOLDING, STRAIGHTENING, FLATTENING, SHEARING, PUNCHING OR NOTCHING; PRESSES FOR WORKING METAL OR METAL CARBIDES, NOT SPECIFIED ABOVE - FORGING OR DIE-STAMPING MACHINES (INCLUDING PRESSES) AND HAMMERS: HAMMERS: STEAM OR AIR, SINGLE FRAME"
                  },
                  "created": "2023-06-26T14:28:20.324133+05:30",
                  "modified": "2023-07-07T19:45:40.862209+05:30",
                  "internal_part_no": "1000000407",
                  "part_number": "9900050000 Parallel Flashing  Solution - for R810 Lines",
                  "customer_part_number": "9900050000 Parallel Flashing  Solution - for R810 Lines",
                  "bom": false,
                  "short_description": "9900050000 Parallel Flashing  Solution - for R810 Lineso",
                  "long_description": "( Software Licenses , VCL - Ethernet , PC , Scanner, etc.)",
                  "mrp": 921000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T19:56:57.032432+05:30",
              "modified": "2023-07-07T19:56:57.032465+05:30",
              "quantity": 1,
              "customer_part_no": "R810 Lines",
              "price": 912000,
              "warranty": 12,
              "short_description": "9900050000 Parallel Flashing  Solution - for R810 Lineso",
              "invoice": "b48c51d9-d522-45c1-9b34-3f3230c45542",
              "part": null
          },
          {
              "id": "73211ea6-be1e-47b7-811f-918edaf8e4f9",
              "parts_no": {
                  "id": "2cb67cb5-897c-496d-bdf3-e31f606b956b",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "e04bcbc6-0ea6-4b19-8cbc-5a7407bd0e1a",
                      "country_gst": [
                          {
                              "id": "948875f0-6351-447c-8039-bd1c80fefd1a",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84621011",
                      "description": "MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY FORGING, HAMMERING OR DIE-STAMPING; MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY BENDING, FOLDING, STRAIGHTENING, FLATTENING, SHEARING, PUNCHING OR NOTCHING; PRESSES FOR WORKING METAL OR METAL CARBIDES, NOT SPECIFIED ABOVE - FORGING OR DIE-STAMPING MACHINES (INCLUDING PRESSES) AND HAMMERS: HAMMERS: STEAM OR AIR, SINGLE FRAME"
                  },
                  "created": "2023-06-26T14:30:55.569211+05:30",
                  "modified": "2023-07-07T19:58:38.541348+05:30",
                  "internal_part_no": "1000000408",
                  "part_number": "9900050000 Parallel Flashing  Solution - for DV Lines",
                  "customer_part_number": "9900050000 Parallel Flashing  Solution - for DV Lines",
                  "bom": false,
                  "short_description": "9900050000 Parallel Flashing  Solution - for DV Lines",
                  "long_description": "( Software licences , VCI - Ethernet ,PC, Scanner , etc.)",
                  "mrp": 932000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T19:59:08.166267+05:30",
              "modified": "2023-07-07T19:59:08.166296+05:30",
              "quantity": 1,
              "customer_part_no": "DV Lines",
              "price": 932000,
              "warranty": 12,
              "short_description": "9900050000 Parallel Flashing  Solution - for DV Lines",
              "invoice": "b48c51d9-d522-45c1-9b34-3f3230c45542",
              "part": null
          }
      ],
      "created": "2023-07-07T19:48:23.515533+05:30",
      "modified": "2023-07-07T19:48:23.522276+05:30",
      "invoice_number": "INV-100000189-0000000001",
      "po_number": "7023039567",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "791e15c5-e1c8-4e25-bf43-a772968f404a",
      "org": {
          "id": "61a76ea4-2448-4e92-878c-0467068467ee",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-18T18:52:45.810231+05:30",
          "modified": "2022-07-18T18:52:45.812332+05:30",
          "org_code": "100000243",
          "company_type": "pvt_ltd",
          "company_name": "BAXY",
          "logo": null,
          "address": "The Room, Central Park II, Sohna Road, Sector – 48 Gurugram, Haryana",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "ce73eed5-77c5-404d-87a3-de76940d6475",
          "contact_person": null,
          "payment_term": 3,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "6035da2e-0b19-4542-944f-a69248085a91",
          "org": {
              "company_name": "A.P.I. Motors (P) Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "7f03fe06-2b4a-46b5-8858-37dcbf6b73b9",
              "created": "2021-08-23T21:49:47.011833+05:30",
              "modified": "2021-08-23T21:49:47.013328+05:30",
              "pin_code": "247661",
              "state": null,
              "district": "68714a77-557e-4a45-a19a-06fec045807c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-24T21:14:54.416520+05:30",
          "modified": "2022-07-24T21:14:54.416545+05:30",
          "address": "Khasara No. 195, Industrial Area Raipur, Bhagwanpur, Tehsil Roorkee, Dist. Haridwar - 247661.",
          "gst_no": "05AAGCA1971K1ZN",
          "gst_cert": null,
          "address_type": 1
      },
      "shipping_address": {
          "id": "6035da2e-0b19-4542-944f-a69248085a91",
          "org": {
              "company_name": "A.P.I. Motors (P) Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "7f03fe06-2b4a-46b5-8858-37dcbf6b73b9",
              "created": "2021-08-23T21:49:47.011833+05:30",
              "modified": "2021-08-23T21:49:47.013328+05:30",
              "pin_code": "247661",
              "state": null,
              "district": "68714a77-557e-4a45-a19a-06fec045807c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-24T21:14:54.416520+05:30",
          "modified": "2022-07-24T21:14:54.416545+05:30",
          "address": "Khasara No. 195, Industrial Area Raipur, Bhagwanpur, Tehsil Roorkee, Dist. Haridwar - 247661.",
          "gst_no": "05AAGCA1971K1ZN",
          "gst_cert": null,
          "address_type": 1
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "448cc499-2295-4520-a6b6-d5bf4ff2da87",
          "so_id": "SO-100000194-000010",
          "ref_po": "NVS23-24-00062",
          "po_date": "2023-04-25",
          "contact_to": {
              "id": "b3c848b9-314c-4cd8-a746-44203383154b",
              "email": "sushil.patil@autopeepal.com",
              "mobile": "97642 17073",
              "first_name": "SUSHIL",
              "last_name": "PATIL",
              "created_at": "2023-02-01T17:48:22.763987+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "a107d251-6154-4680-b249-48213d701489",
              "parts_no": {
                  "id": "b5fb7eb5-a469-49dd-bb7e-184cabd047b0",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T15:07:29.456241+05:30",
                  "modified": "2023-07-07T21:25:07.748993+05:30",
                  "internal_part_no": "1000000415",
                  "part_number": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "customer_part_number": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "bom": false,
                  "short_description": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "long_description": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "mrp": 240000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTHS",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T17:21:47.712548+05:30",
              "modified": "2023-07-07T17:21:47.712575+05:30",
              "quantity": 1,
              "customer_part_no": "GECAPEX000004242",
              "price": 285000,
              "warranty": 12,
              "short_description": "GECAPEX000004242 -NEW PID UPDATION FOR OBDII A CNG ENGINE",
              "invoice": "791e15c5-e1c8-4e25-bf43-a772968f404a",
              "part": null
          }
      ],
      "created": "2023-06-26T15:45:56.624151+05:30",
      "modified": "2023-07-15T09:44:11.898206+05:30",
      "invoice_number": "INV-100000243-0000000001",
      "po_number": "NVS23-24-00062",
      "payment_date": "2023-06-26",
      "delivery_term": "delivered",
      "invoice_date": "2023-04-27",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "fcc644c1-9579-42d7-8f94-d6744ce8e72a",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "14a8b278-cbc2-432a-b4b8-6814a1d83eaf",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T17:33:54.951442+05:30",
              "modified": "2023-07-07T17:33:54.951476+05:30",
              "quantity": 150,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "fcc644c1-9579-42d7-8f94-d6744ce8e72a",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2023-07-03T17:58:44.934535+05:30",
      "modified": "2023-08-16T18:16:15.895287+05:30",
      "invoice_number": "INV-100000024-0000000010",
      "po_number": "1831123030",
      "payment_date": "2023-07-03",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-29",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 100,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "60e2f891-088d-4eaa-84c3-c980b29d22d9",
      "org": {
          "id": "9cb89f15-4b32-47b0-b499-c331093ac8ea",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-20T10:33:12.269771+05:30",
          "modified": "2023-07-14T18:29:15.913210+05:30",
          "org_code": "100000025",
          "company_type": "pvt_ltd",
          "company_name": "Bajaj Auto Ltd",
          "logo": "http://143.244.142.0/media/banner/Bajaj.png",
          "address": "Akurdi, Pune - 411035",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "66a48284-f132-4821-a3d6-fd400cdd748f",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 4,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "0c49b3dd-524f-4aff-bbcb-00232e0513a1",
          "so_id": "SO-100000194-000026",
          "ref_po": "5210043280",
          "po_date": "2023-04-19",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "d296b909-e310-4d14-8b70-b77c830ab3d9",
              "parts_no": {
                  "id": "cf1ddb4a-e0c9-4619-b5b4-cc86f0ddb723",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "2aa82fc0-6621-4cb7-95c4-bc6114bfa903",
                      "country_gst": [
                          {
                              "id": "2538093c-89e2-4cb4-9cd7-8f1540921fb7",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85443000",
                      "description": "INSULATED (INCLUDING ENAMELLED OR ANODISED) WIRE, CABLE (INCLUDING CO-AXIAL CABLE) AND OTHER INSULATED ELECTRIC CONDUCTORS, WHETHER OR NOT FITTED WITH CONNECTORS; OPTICAL FIBRE CABLES, MADE UP OF INDIVIDUALLY SHEATHED FIBRES, WHETHER OR NOT ASSEMBLED WITH ELECTRIC CONDUCTORS OR FITTED WITH CONNECTORS - IGNITION WIRING SETS AND OTHER WIRING SETS OF A KIND USED IN VEHICLES, AIRCRAFT OR SHIPS"
                  },
                  "created": "2023-06-26T15:09:41.812436+05:30",
                  "modified": "2023-07-10T19:33:14.574291+05:30",
                  "internal_part_no": "1000000416",
                  "part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "customer_part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "bom": false,
                  "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "long_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "mrp": 7000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 1,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-03T16:51:28.922306+05:30",
              "modified": "2023-07-11T10:19:41.292190+05:30",
              "quantity": 100,
              "customer_part_no": "36JY0360",
              "price": 7000,
              "warranty": 12,
              "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
              "invoice": "60e2f891-088d-4eaa-84c3-c980b29d22d9",
              "part": "ea848dec-0408-450b-bb00-c32dfa45fee5"
          }
      ],
      "created": "2023-07-03T16:29:42.123318+05:30",
      "modified": "2023-07-03T16:31:18.601079+05:30",
      "invoice_number": "INV-100000025-0000000001",
      "po_number": "5210043280",
      "payment_date": "2023-07-03",
      "delivery_term": "delivered",
      "invoice_date": "2023-04-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "49955b10-5644-4ed1-afb3-c65a74f9439e",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "e216cab9-1750-4156-8589-0f9d3e1133e4",
              "parts_no": {
                  "id": "db40dd77-8d96-4b16-b036-9aee0ff073cc",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": null,
                  "gst_itm": {
                      "id": "b539a670-c92f-4f49-b7be-64d95a26a338",
                      "country_gst": [
                          {
                              "id": "e6c6002b-fda2-4682-b72e-dc7b737d9d23",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85044090",
                      "description": "ELECTRICAL TRANSFORMERS, STATIC CONVERTERS (FOR EXAMPLE, RECTIFIERS) AND INDUCTORS -STATIC CONVERTERS: OTHER"
                  },
                  "created": "2022-07-02T19:34:55.400925+05:30",
                  "modified": "2022-07-02T19:34:55.400939+05:30",
                  "internal_part_no": "PN-INV-0000000160",
                  "part_number": "ST000072",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "long_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "mrp": 350,
                  "weight": "0.03",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-03T17:15:27.419335+05:30",
              "modified": "2023-07-03T17:15:27.419373+05:30",
              "quantity": 100,
              "customer_part_no": "ST000072",
              "price": 350,
              "warranty": 12,
              "short_description": "ST000072 - DA LITE USB CABLE-MINI",
              "invoice": "49955b10-5644-4ed1-afb3-c65a74f9439e",
              "part": "31ef8bef-4e0d-4ea4-a79a-f5b3e7ab6135"
          }
      ],
      "created": "2023-07-03T17:05:44.448903+05:30",
      "modified": "2023-07-03T17:14:54.040233+05:30",
      "invoice_number": "INV-100000024-0000000009",
      "po_number": "1831123030",
      "payment_date": "2023-07-03",
      "delivery_term": "delivered",
      "invoice_date": "2023-04-26",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "ae56f42f-40b5-4a36-ba1b-0030b28e2461",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "7fcb374c-c256-4ec8-8a87-e0623ee55df1",
              "parts_no": {
                  "id": "db40dd77-8d96-4b16-b036-9aee0ff073cc",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": null,
                  "gst_itm": {
                      "id": "b539a670-c92f-4f49-b7be-64d95a26a338",
                      "country_gst": [
                          {
                              "id": "e6c6002b-fda2-4682-b72e-dc7b737d9d23",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85044090",
                      "description": "ELECTRICAL TRANSFORMERS, STATIC CONVERTERS (FOR EXAMPLE, RECTIFIERS) AND INDUCTORS -STATIC CONVERTERS: OTHER"
                  },
                  "created": "2022-07-02T19:34:55.400925+05:30",
                  "modified": "2022-07-02T19:34:55.400939+05:30",
                  "internal_part_no": "PN-INV-0000000160",
                  "part_number": "ST000072",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "long_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "mrp": 350,
                  "weight": "0.03",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T17:29:39.838863+05:30",
              "modified": "2023-07-10T17:29:39.838892+05:30",
              "quantity": 100,
              "customer_part_no": "ST000072",
              "price": 350,
              "warranty": 12,
              "short_description": "ST000072 - DA LITE USB CABLE-MINI",
              "invoice": "ae56f42f-40b5-4a36-ba1b-0030b28e2461",
              "part": "31ef8bef-4e0d-4ea4-a79a-f5b3e7ab6135"
          }
      ],
      "created": "2023-07-03T17:59:37.816652+05:30",
      "modified": "2023-07-07T19:33:06.712404+05:30",
      "invoice_number": "INV-100000024-0000000011",
      "po_number": "1831123030",
      "payment_date": "2023-07-03",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-29",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "d7f4f765-f295-45b6-a88b-e4948285ba38",
      "org": {
          "id": "48914c13-8374-45f6-a673-f3d309a31a22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-06T12:28:53.556311+05:30",
          "modified": "2023-07-14T18:31:53.841252+05:30",
          "org_code": "100000189",
          "company_type": "proprietorship",
          "company_name": "Kirloskar Oil Engines Ltd",
          "logo": "http://143.244.142.0/media/banner/Kirloskar.png",
          "address": "laxman rao kirloskar road khadaki",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "d992848a-e686-49c5-9030-1b9bcd4005b5",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "685f917b-9425-4687-8b63-ad54e12adf50",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "d992848a-e686-49c5-9030-1b9bcd4005b5",
              "created": "2021-08-23T21:49:01.320604+05:30",
              "modified": "2021-08-23T21:49:01.339196+05:30",
              "pin_code": "411003",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:41:41.490152+05:30",
          "modified": "2023-05-11T17:41:41.490180+05:30",
          "address": "KIRLOSKAR OIL ENGINES LTD. 13 L. K. ROAD, KHADKI, PUNE,Maharashtra INDIA",
          "gst_no": "27AADCK5714H1ZK",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "2ea6b182-1516-4299-b0d7-c28b2189ec96",
          "so_id": "SO-100000194-000017",
          "ref_po": "7023032575",
          "po_date": "2022-12-30",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "7d7a2a4e-13b2-48af-911b-ad5e455ed603",
              "parts_no": {
                  "id": "5568d5ff-7035-4e49-9d89-01962fd39369",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-06-26T14:19:52.788080+05:30",
                  "modified": "2023-07-07T20:03:33.067586+05:30",
                  "internal_part_no": "1000000405",
                  "part_number": "9900050600 Diagnostics Runtime Android Application",
                  "customer_part_number": "9900050600 Diagnostics Runtime Android Application",
                  "bom": false,
                  "short_description": "9900050600 Diagnostics Runtime Android Application",
                  "long_description": "( Server Deployment, writing base parameters, routing tests ( except DV) EOL Application update)",
                  "mrp": 3750000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T20:06:57.188718+05:30",
              "modified": "2023-07-07T20:06:57.188755+05:30",
              "quantity": 25,
              "customer_part_no": "9900050600",
              "price": 37500,
              "warranty": 12,
              "short_description": "9900050600 Diagnostics Runtime Android Application",
              "invoice": "d7f4f765-f295-45b6-a88b-e4948285ba38",
              "part": null
          }
      ],
      "created": "2023-07-07T20:05:48.439605+05:30",
      "modified": "2023-07-07T20:05:48.443439+05:30",
      "invoice_number": "INV-100000189-0000000002",
      "po_number": "7023032575",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "e40a4402-e24a-4b12-bd63-01a2f0ba53eb",
      "org": {
          "id": "48914c13-8374-45f6-a673-f3d309a31a22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-06T12:28:53.556311+05:30",
          "modified": "2023-07-14T18:31:53.841252+05:30",
          "org_code": "100000189",
          "company_type": "proprietorship",
          "company_name": "Kirloskar Oil Engines Ltd",
          "logo": "http://143.244.142.0/media/banner/Kirloskar.png",
          "address": "laxman rao kirloskar road khadaki",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "d992848a-e686-49c5-9030-1b9bcd4005b5",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "2b8f14f7-fa91-4c73-bcc3-188a47076f9f",
          "so_id": "SO-100000194-000022",
          "ref_po": "7024005470",
          "po_date": "2023-05-17",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "a31d0ce2-06c7-4529-882f-86ee559d7a13",
              "parts_no": {
                  "id": "cfd642c7-a9be-45c0-9ca4-560eb81ff1be",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3ac227db-646b-4cc1-8e5a-d368bc11d979",
                      "country_gst": [
                          {
                              "id": "bb148540-b92d-474b-be0d-87b86939dcb9",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "39232100",
                      "description": "ARTICLES FOR THE CONVEYANCE OR PACKING OF GOODS, OF PLASTICS; STOPPERS, LIDS, CAPS AND OTHER CLOSURES, OF PLASTICS - SACKS AND BAGS (INCLUDING CONES)OF POLYMERS OF ETHYLENE"
                  },
                  "created": "2023-06-26T12:45:05.474176+05:30",
                  "modified": "2023-07-07T20:22:28.301676+05:30",
                  "internal_part_no": "1000000404",
                  "part_number": "5H.501.50.0.00-VCI COMPLETE ASSWMBLY",
                  "customer_part_number": "5H.501.50.0.00-VCI COMPLETE ASSWMBLY",
                  "bom": false,
                  "short_description": "5H.501.50.0.00-VCI COMPLETE ASSWMBLY",
                  "long_description": "(VCI Dongle with 9pin connector harness with OTG cable Set), Tester tool UDS Protocol,Autopeepal",
                  "mrp": 11000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 3,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T20:27:47.060577+05:30",
              "modified": "2023-07-09T08:47:43.023944+05:30",
              "quantity": 500,
              "customer_part_no": "VCI COMPLETE ASSEMBLY",
              "price": 11000,
              "warranty": 12,
              "short_description": "5H.501.50.0.00-VCI COMPLETE ASSWMBLY",
              "invoice": "e40a4402-e24a-4b12-bd63-01a2f0ba53eb",
              "part": null
          }
      ],
      "created": "2023-07-07T20:26:58.455917+05:30",
      "modified": "2023-07-07T20:26:58.459589+05:30",
      "invoice_number": "INV-100000189-0000000003",
      "po_number": "7024005470",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "94d289d0-a9ca-4fa1-af89-f3be77ffc982",
      "org": {
          "id": "5c97dde9-5aa3-418b-834e-9c2286443895",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-24T21:04:05.428948+05:30",
          "modified": "2022-07-24T21:04:05.432599+05:30",
          "org_code": "100000256",
          "company_type": "pvt_ltd",
          "company_name": "A.P.I. Motors (P) Ltd",
          "logo": null,
          "address": "Khasara No. 195, Industrial Area Raipur, Bhagwanpur, Tehsil Roorkee, Dist. Haridwar - 247661.",
          "pan_no": "AAGCA1971K",
          "pan_cert": null,
          "pincode": "7f03fe06-2b4a-46b5-8858-37dcbf6b73b9",
          "contact_person": null,
          "payment_term": 3,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "6035da2e-0b19-4542-944f-a69248085a91",
          "org": {
              "company_name": "A.P.I. Motors (P) Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "7f03fe06-2b4a-46b5-8858-37dcbf6b73b9",
              "created": "2021-08-23T21:49:47.011833+05:30",
              "modified": "2021-08-23T21:49:47.013328+05:30",
              "pin_code": "247661",
              "state": null,
              "district": "68714a77-557e-4a45-a19a-06fec045807c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-24T21:14:54.416520+05:30",
          "modified": "2022-07-24T21:14:54.416545+05:30",
          "address": "Khasara No. 195, Industrial Area Raipur, Bhagwanpur, Tehsil Roorkee, Dist. Haridwar - 247661.",
          "gst_no": "05AAGCA1971K1ZN",
          "gst_cert": null,
          "address_type": 1
      },
      "shipping_address": {
          "id": "6035da2e-0b19-4542-944f-a69248085a91",
          "org": {
              "company_name": "A.P.I. Motors (P) Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "7f03fe06-2b4a-46b5-8858-37dcbf6b73b9",
              "created": "2021-08-23T21:49:47.011833+05:30",
              "modified": "2021-08-23T21:49:47.013328+05:30",
              "pin_code": "247661",
              "state": null,
              "district": "68714a77-557e-4a45-a19a-06fec045807c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-24T21:14:54.416520+05:30",
          "modified": "2022-07-24T21:14:54.416545+05:30",
          "address": "Khasara No. 195, Industrial Area Raipur, Bhagwanpur, Tehsil Roorkee, Dist. Haridwar - 247661.",
          "gst_no": "05AAGCA1971K1ZN",
          "gst_cert": null,
          "address_type": 1
      },
      "payment_term": {
          "id": 2,
          "term": "On Proforma Invoice"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "9674aa78-e14f-4036-90aa-2a3029995e8b",
          "so_id": "SO-100000010-000013",
          "ref_po": "8013",
          "po_date": "2022-06-20",
          "contact_to": {
              "id": "7f052cef-e88c-4932-b9e1-62582503e902",
              "email": "nitin.sonmale@autopeepal.com",
              "mobile": "9075281570",
              "first_name": "Nitin",
              "last_name": "Sonmale",
              "created_at": "2021-08-21T15:32:39.379581+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "4fb283b7-8712-4ed0-b95a-26c13c1f07da",
              "parts_no": {
                  "id": "04c7e55a-76d8-4472-9cf9-963916518d70",
                  "part_type": {
                      "id": 4,
                      "created": "2021-08-10T07:30:19.933528+05:30",
                      "modified": "2021-10-07T15:33:16.539208+05:30",
                      "name": "Subscription"
                  },
                  "uom": null,
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2022-07-02T20:18:09.987507+05:30",
                  "modified": "2022-07-02T20:18:09.987524+05:30",
                  "internal_part_no": "PN-INV-0000000167",
                  "part_number": "TechbudAMC001",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "Techbud Annual Maintenance Contract",
                  "long_description": "Techbud Annual Maintenance Contract",
                  "mrp": null,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 4,
                  "sub_category": 19,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-24T21:28:40.484889+05:30",
              "modified": "2022-07-24T21:28:40.484926+05:30",
              "quantity": 1,
              "customer_part_no": "TechbudAMC001",
              "price": 550000,
              "warranty": 12,
              "short_description": "Techbud Annual Maintenance Contract",
              "invoice": "94d289d0-a9ca-4fa1-af89-f3be77ffc982",
              "part": "cae07b31-f500-49c9-970b-0c1e3fdf1875"
          }
      ],
      "created": "2022-07-24T21:28:05.343230+05:30",
      "modified": "2023-07-15T09:45:15.726878+05:30",
      "invoice_number": "INV-100000256-0000000001",
      "po_number": "8013",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-06-20",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "c1f7613a-da99-416e-8aca-6f26fff70ba4",
      "org": {
          "id": "3299ca59-f535-440e-a766-d9eb747c9e99",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-18T19:06:45.103539+05:30",
          "modified": "2023-08-17T14:44:30.665015+05:30",
          "org_code": "100000244",
          "company_type": "pvt_ltd",
          "company_name": "MLR Auto Limited",
          "logo": null,
          "address": "Sy. No. 354, Muppirreddy Pally, Toopran Mandal, Medak",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
          "contact_person": null,
          "payment_term": 3,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [
              5
          ],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "8f122c73-d370-4783-86b0-6480c1eb0590",
          "so_id": "SO-100000194-000036",
          "ref_po": "F.Y.2023-24/FY_2023-24_00005",
          "po_date": "2023-04-11",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "629cbae4-d9a1-47d6-a230-824a9aca3357",
              "parts_no": {
                  "id": "e07c91cd-9597-434e-9daf-eef660548de0",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "5e494d79-be71-489e-bcbe-f734b9db513d",
                      "country_gst": [
                          {
                              "id": "fd63fa9e-affd-4f27-9945-b15695efea14",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "1011010",
                      "description": "LIVE HORSES, ASSES, MULES AND HINNIES PURE-BRED BREEDING ANIMALS HORSES"
                  },
                  "created": "2023-06-26T14:35:07.220326+05:30",
                  "modified": "2023-07-07T20:43:35.489905+05:30",
                  "internal_part_no": "1000000409",
                  "part_number": "DIAGNOSTIC TOOL CNG OBD II",
                  "customer_part_number": "DIAGNOSTIC TOOL CNG OBD II",
                  "bom": false,
                  "short_description": "DIAGNOSTIC TOOL CNG OBD II",
                  "long_description": "DIAGNOSTIC TOOL CNG OBD II",
                  "mrp": 285000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T20:49:58.790418+05:30",
              "modified": "2023-07-07T20:49:58.790449+05:30",
              "quantity": 1,
              "customer_part_no": "DIAGNOSTIC TOOL CNG OBD II",
              "price": 285000,
              "warranty": 12,
              "short_description": "DIAGNOSTIC TOOL CNG OBD II",
              "invoice": "c1f7613a-da99-416e-8aca-6f26fff70ba4",
              "part": null
          }
      ],
      "created": "2023-07-07T20:48:45.183833+05:30",
      "modified": "2023-07-07T20:48:45.187765+05:30",
      "invoice_number": "INV-100000244-0000000002",
      "po_number": "F. Y. 2023-24/FY_23-24_00005",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "649ba268-3659-4d7c-866c-b179f5ab47e2",
      "org": {
          "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-08-09T11:10:23.069993+05:30",
          "modified": "2022-04-15T10:24:30.014366+05:30",
          "org_code": "100000010",
          "company_type": "proprietorship",
          "company_name": "Autopeepal Service Solutions",
          "logo": null,
          "address": "H202, Konark Exotica, Kesnand Road, Wagholi",
          "pan_no": "ASZPS4409E",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
          "payment_term": 2,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "f71a8877-8438-4a1d-b978-7e03de52bc76",
          "org": {
              "company_name": "Autopeepal Technologies Private Limited",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          },
          "pincode": {
              "id": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
              "created": "2021-08-12T10:17:36.169402+05:30",
              "modified": "2021-08-23T21:49:01.801948+05:30",
              "pin_code": "412207",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:53:05.234248+05:30",
          "modified": "2022-06-18T15:53:05.234283+05:30",
          "address": "No 11 & 12, 4th Floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "gst_no": "27AATCA4258N1ZW",
          "gst_cert": "http://143.244.142.0/media/organization/gst/AA270522043653C_RC_24052022_GST.pdf",
          "address_type": 2
      },
      "shipping_address": {
          "id": "f71a8877-8438-4a1d-b978-7e03de52bc76",
          "org": {
              "company_name": "Autopeepal Technologies Private Limited",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          },
          "pincode": {
              "id": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
              "created": "2021-08-12T10:17:36.169402+05:30",
              "modified": "2021-08-23T21:49:01.801948+05:30",
              "pin_code": "412207",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:53:05.234248+05:30",
          "modified": "2022-06-18T15:53:05.234283+05:30",
          "address": "No 11 & 12, 4th Floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "gst_no": "27AATCA4258N1ZW",
          "gst_cert": "http://143.244.142.0/media/organization/gst/AA270522043653C_RC_24052022_GST.pdf",
          "address_type": 2
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "eb3c3237-d490-4f49-9f89-a10d8ab201fa",
          "so_id": "SO-100000194-000035",
          "ref_po": "Verbal",
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "049af803-e611-4ac6-9bed-e4e867684319",
              "parts_no": {
                  "id": "72e677e3-76b6-40fa-ab1c-5f1b3cd51115",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T15:00:10.427159+05:30",
                  "modified": "2023-07-07T18:15:51.809543+05:30",
                  "internal_part_no": "1000000414",
                  "part_number": "MSCO6560 - ECU FLASHING SYSTEM for GCL",
                  "customer_part_number": "MSCO6560 - ECU FLASHING SYSTEM for GCL",
                  "bom": false,
                  "short_description": "MSCO6560 - ECU FLASHING SYSTEM for GCL",
                  "long_description": "MSCO6560 - ECU FLASHING SYSTEM for GCL",
                  "mrp": 2760165,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-10T16:52:16.272624+05:30",
              "modified": "2023-07-10T16:52:16.272661+05:30",
              "quantity": 1,
              "customer_part_no": "MSC06560",
              "price": 2760165,
              "warranty": 12,
              "short_description": "MSCO6560 - ECU FLASHING SYSTEM for GCL",
              "invoice": "649ba268-3659-4d7c-866c-b179f5ab47e2",
              "part": null
          },
          {
              "id": "c18f6f25-2651-437d-bada-82ece37727f0",
              "parts_no": {
                  "id": "cd69669b-37fd-48fb-bded-67d8fe4d0e92",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T14:55:12.289118+05:30",
                  "modified": "2023-07-07T18:11:36.510358+05:30",
                  "internal_part_no": "1000000412",
                  "part_number": "Diagnostic Tool Upgradation - CNG OBD II A for GCL",
                  "customer_part_number": "Diagnostic Tool Upgradation - CNG OBD II A for GCL",
                  "bom": false,
                  "short_description": "Diagnostic Tool Upgradation - CNG OBD II A for GCL",
                  "long_description": "Diagnostic Tool Upgradation - CNG OBD II A for GCL",
                  "mrp": 285000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-10T16:53:48.498711+05:30",
              "modified": "2023-07-10T16:53:48.498749+05:30",
              "quantity": 1,
              "customer_part_no": "CNG OBD II",
              "price": 285000,
              "warranty": 12,
              "short_description": "Diagnostic Tool Upgradation - CNG OBD II A for GCL",
              "invoice": "649ba268-3659-4d7c-866c-b179f5ab47e2",
              "part": null
          },
          {
              "id": "efe54247-6561-484a-bf54-93709fa975a1",
              "parts_no": {
                  "id": "cffefcd2-4a3a-4231-84fd-9c6cd569dd8f",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T14:57:37.945263+05:30",
                  "modified": "2023-07-07T18:17:03.692107+05:30",
                  "internal_part_no": "1000000413",
                  "part_number": "MSCO6561 - LIGIER ENGINE FLASHING SYSTEM for GCL",
                  "customer_part_number": "MSCO6561 - LIGIER ENGINE FLASHING SYSTEM for GCL",
                  "bom": false,
                  "short_description": "MSCO6561 - LIGIER ENGINE FLASHING SYSTEM for GCL",
                  "long_description": "MSCO6561 - LIGIER ENGINE FLASHING SYSTEM for GCL",
                  "mrp": 2190000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-10T16:54:33.233442+05:30",
              "modified": "2023-07-10T16:54:33.233469+05:30",
              "quantity": 1,
              "customer_part_no": "MSC06561",
              "price": 2190000,
              "warranty": 12,
              "short_description": "MSCO6561 - LIGIER ENGINE FLASHING SYSTEM for GCL",
              "invoice": "649ba268-3659-4d7c-866c-b179f5ab47e2",
              "part": null
          },
          {
              "id": "0f3c2fc9-3dff-44a7-976f-e84b70f0987a",
              "parts_no": {
                  "id": "fee3930e-d79b-4681-98f6-79c2073336af",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T14:51:56.208440+05:30",
                  "modified": "2023-07-10T17:08:01.970387+05:30",
                  "internal_part_no": "1000000411",
                  "part_number": "Diagnostic Tool Upgradation - HD501 OBDIIA for GCL",
                  "customer_part_number": "Diagnostic Tool Upgradation - HD501 OBDIIA for GCL",
                  "bom": false,
                  "short_description": "Diagnostic Tool Upgradation - HD501 OBDIIA for GCL",
                  "long_description": "Diagnostic Tool Upgradation - HD501 OBDIIA for GCL",
                  "mrp": 285000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-10T17:10:15.889638+05:30",
              "modified": "2023-07-10T17:10:15.889670+05:30",
              "quantity": 1,
              "customer_part_no": "HD501 OBD II",
              "price": 285000,
              "warranty": 12,
              "short_description": "Diagnostic Tool Upgradation - HD501 OBDIIA for GCL",
              "invoice": "649ba268-3659-4d7c-866c-b179f5ab47e2",
              "part": null
          }
      ],
      "created": "2023-07-07T18:01:01.432855+05:30",
      "modified": "2023-07-07T20:53:36.302494+05:30",
      "invoice_number": "INV-100000010-0000000003",
      "po_number": "VERBAL",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "604c65e3-52c3-4435-929d-d2f5eb6fe124",
      "org": {
          "id": "2017f5cc-6851-4315-91a8-53984f611c5c",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T12:27:48.215560+05:30",
          "modified": "2023-07-03T12:27:48.219116+05:30",
          "org_code": "100000478",
          "company_type": "pvt_ltd",
          "company_name": "J.S.Auto Pvt Ltd",
          "logo": null,
          "address": "\"C-7,Panki Site No.III, UPSIDC, Industrial Area, Kanpur-208022-(INDIA)\"",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "b7e2b999-d2b1-430f-9918-5b947e2d200e",
          "contact_person": null,
          "payment_term": 2,
          "marketplace": null,
          "meta_tags": [
              5
          ],
          "role": [
              "8a75ff00-e101-48bc-9a0c-494732bd3fd5"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ad6065f6-8f07-4bc6-9bcb-cfabff733ebc",
          "org": {
              "company_name": "J S Motors & Lubricants",
              "contact_person": null
          },
          "pincode": {
              "id": "b7e2b999-d2b1-430f-9918-5b947e2d200e",
              "created": "2021-08-23T21:49:43.108837+05:30",
              "modified": "2021-08-23T21:49:43.109996+05:30",
              "pin_code": "208022",
              "state": null,
              "district": "30631ced-c284-44e8-89b6-c0e2a4793bbd"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T12:50:57.098932+05:30",
          "modified": "2023-07-03T12:50:57.098961+05:30",
          "address": "\"C-7,Panki Site No.III, UPSIDC, Industrial Area, Kanpur-208022-(INDIA)\"",
          "gst_no": "09AAACJ3418Q1Z6",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ad6065f6-8f07-4bc6-9bcb-cfabff733ebc",
          "org": {
              "company_name": "J S Motors & Lubricants",
              "contact_person": null
          },
          "pincode": {
              "id": "b7e2b999-d2b1-430f-9918-5b947e2d200e",
              "created": "2021-08-23T21:49:43.108837+05:30",
              "modified": "2021-08-23T21:49:43.109996+05:30",
              "pin_code": "208022",
              "state": null,
              "district": "30631ced-c284-44e8-89b6-c0e2a4793bbd"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T12:50:57.098932+05:30",
          "modified": "2023-07-03T12:50:57.098961+05:30",
          "address": "\"C-7,Panki Site No.III, UPSIDC, Industrial Area, Kanpur-208022-(INDIA)\"",
          "gst_no": "09AAACJ3418Q1Z6",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "40b14c97-a878-4b74-b8ea-ba81c37667ef",
          "so_id": "SO-100000194-000027",
          "ref_po": "JSr2023-24/0855",
          "po_date": "2023-06-20",
          "contact_to": null
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "a4bd0e9b-4355-4f0d-9060-26a645972496",
              "parts_no": {
                  "id": "b5fb7eb5-a469-49dd-bb7e-184cabd047b0",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "3dcd37c9-a498-4ed2-80a3-4f2b4403f36b",
                      "country_gst": [
                          {
                              "id": "5416a80d-faef-4a83-be54-d55f9c225f01",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713090",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:OTHER"
                  },
                  "created": "2023-06-26T15:07:29.456241+05:30",
                  "modified": "2023-07-07T21:25:07.748993+05:30",
                  "internal_part_no": "1000000415",
                  "part_number": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "customer_part_number": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "bom": false,
                  "short_description": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "long_description": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
                  "mrp": 240000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTHS",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T21:27:58.010531+05:30",
              "modified": "2023-07-07T21:27:58.010571+05:30",
              "quantity": 1,
              "customer_part_no": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
              "price": 240000,
              "warranty": 12,
              "short_description": "NEW PID UPDATION FOR OBDII A CNG ENGINE",
              "invoice": "604c65e3-52c3-4435-929d-d2f5eb6fe124",
              "part": null
          }
      ],
      "created": "2023-07-07T21:06:27.760085+05:30",
      "modified": "2023-07-07T21:06:27.764673+05:30",
      "invoice_number": "INV-100000478-0000000001",
      "po_number": "JS/2023-24/0855",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-22",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "783ada84-b59a-4b0a-863a-40ea01b27443",
      "org": {
          "id": "bc2efec0-8ba2-4020-ae84-277f2bc10d80",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:02:44.093372+05:30",
          "modified": "2023-07-07T21:02:44.097569+05:30",
          "org_code": "100000486",
          "company_type": "proprietorship",
          "company_name": "SHAIL ENTERPRISES",
          "logo": null,
          "address": "Plot no.385, Khata No.76, Shail Enterprises, Bharat Mata Chowk, Ranchi, Ranchi, Jharkhand, 834001.",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "fd8d7381-07e3-462b-abb2-a3423971c26d",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "211b5a92-f08e-4097-a4ea-9cca4604a9fe",
          "org": {
              "company_name": "SHAIL ENTERPRISES",
              "contact_person": null
          },
          "pincode": {
              "id": "fd8d7381-07e3-462b-abb2-a3423971c26d",
              "created": "2021-08-23T21:48:39.805688+05:30",
              "modified": "2021-08-23T21:48:39.806744+05:30",
              "pin_code": "834001",
              "state": null,
              "district": "424fb407-8a4c-4e8a-8ae0-db8f61ccab19"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:11:28.928334+05:30",
          "modified": "2023-07-07T21:11:28.928376+05:30",
          "address": "Plot no.385, Khata No.76, Shail Enterprises, Bharat Mata Chowk, Ranchi, Ranchi, Jharkhand, 834001.",
          "gst_no": "20AEDFS4968N1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "211b5a92-f08e-4097-a4ea-9cca4604a9fe",
          "org": {
              "company_name": "SHAIL ENTERPRISES",
              "contact_person": null
          },
          "pincode": {
              "id": "fd8d7381-07e3-462b-abb2-a3423971c26d",
              "created": "2021-08-23T21:48:39.805688+05:30",
              "modified": "2021-08-23T21:48:39.806744+05:30",
              "pin_code": "834001",
              "state": null,
              "district": "424fb407-8a4c-4e8a-8ae0-db8f61ccab19"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:11:28.928334+05:30",
          "modified": "2023-07-07T21:11:28.928376+05:30",
          "address": "Plot no.385, Khata No.76, Shail Enterprises, Bharat Mata Chowk, Ranchi, Ranchi, Jharkhand, 834001.",
          "gst_no": "20AEDFS4968N1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "0af24edc-b871-450f-9ca4-f6052574875e",
          "so_id": "SO-100000194-000037",
          "ref_po": "Verbal",
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "1fd8dd6c-654d-426d-af39-8a46c584a548",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T21:36:04.319539+05:30",
              "modified": "2023-07-07T21:36:04.319572+05:30",
              "quantity": 2,
              "customer_part_no": "DONGLE REPAIRING CHARGES",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "783ada84-b59a-4b0a-863a-40ea01b27443",
              "part": null
          }
      ],
      "created": "2023-07-07T21:31:12.983607+05:30",
      "modified": "2023-07-07T21:31:12.988104+05:30",
      "invoice_number": "INV-100000486-0000000001",
      "po_number": "VERBAL",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-04",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "db38d512-91bc-443e-ab9f-1cbe24eea49c",
      "org": {
          "id": "101bac09-f9d1-478d-9976-0e7bee017899",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-08-23T08:33:43.510156+05:30",
          "modified": "2022-04-15T15:06:00.889946+05:30",
          "org_code": "100000023",
          "company_type": "pvt_ltd",
          "company_name": "Atul Auto Limited",
          "logo": null,
          "address": "Gujrat",
          "pan_no": "a",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 3,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "7a3a675e-51e6-4f45-acdf-3452a0ebe304",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "98ceaae6-09af-4468-99e4-943bfce07824",
              "created": "2021-08-23T21:48:33.167551+05:30",
              "modified": "2021-08-23T21:48:33.168785+05:30",
              "pin_code": "360024",
              "state": null,
              "district": "b00a1fdb-4be9-480a-b8a9-c964372fa97c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:42:06.090592+05:30",
          "modified": "2021-11-19T16:42:06.090620+05:30",
          "address": "8B, National Highway, Near Microwave Tower, Shapal (Veraval), District Rajkot",
          "gst_no": "24AACCA3018M1ZX",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "7a3a675e-51e6-4f45-acdf-3452a0ebe304",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "98ceaae6-09af-4468-99e4-943bfce07824",
              "created": "2021-08-23T21:48:33.167551+05:30",
              "modified": "2021-08-23T21:48:33.168785+05:30",
              "pin_code": "360024",
              "state": null,
              "district": "b00a1fdb-4be9-480a-b8a9-c964372fa97c"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:42:06.090592+05:30",
          "modified": "2021-11-19T16:42:06.090620+05:30",
          "address": "8B, National Highway, Near Microwave Tower, Shapal (Veraval), District Rajkot",
          "gst_no": "24AACCA3018M1ZX",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 3,
          "term": "15 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "a9f0a5e0-58de-47b4-bb5b-c1871ae87e19",
          "so_id": "SO-100000010-000011",
          "ref_po": "4500025011",
          "po_date": "2022-04-18",
          "contact_to": {
              "id": "c4d24bc4-a90b-409d-9e9d-70334ba5cc73",
              "email": "jbaidya@atulauto.co.in",
              "mobile": "7046268888",
              "first_name": "Jayanta",
              "last_name": "Baidya",
              "created_at": "2021-11-02T14:11:44.863504+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "d769f41b-9b4c-4890-8fe5-fe26d689c98f",
              "parts_no": {
                  "id": "e16e9f9f-f7b0-466d-bdaf-be574437aba0",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-02T20:24:55.514389+05:30",
                  "modified": "2022-07-24T14:44:45.277018+05:30",
                  "internal_part_no": "PN-INV-0000000169",
                  "part_number": "RND0000044",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "RND0000044 - BLUETOOTH + USB DONGLE",
                  "long_description": "RND0000044 - BLUETOOTH + USB DONGLE",
                  "mrp": 7000,
                  "weight": "0.08",
                  "length": "80.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-24T14:43:01.021123+05:30",
              "modified": "2022-07-24T14:46:42.081422+05:30",
              "quantity": 10,
              "customer_part_no": "RND0000044",
              "price": 7000,
              "warranty": 12,
              "short_description": "RND0000044 - BLUETOOTH + USB DONGLE",
              "invoice": "db38d512-91bc-443e-ab9f-1cbe24eea49c",
              "part": "f509e7e0-48be-4638-b975-e8d0efc1972b"
          }
      ],
      "created": "2022-07-24T14:42:34.153108+05:30",
      "modified": "2023-07-15T09:39:50.148316+05:30",
      "invoice_number": "INV-100000023-0000000003",
      "po_number": "SO-10000010-000011",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "ab27c99c-7043-4e68-ac99-ee894fe9b252",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "6dec571a-c93f-433f-9dee-e1dc1d65843d",
          "so_id": "SO-100000010-000004",
          "ref_po": "1831119007",
          "po_date": "2021-03-01",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "9109ea57-4c34-4bab-99ca-9e8eee6a5a2a",
              "parts_no": {
                  "id": "db40dd77-8d96-4b16-b036-9aee0ff073cc",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": null,
                  "gst_itm": {
                      "id": "b539a670-c92f-4f49-b7be-64d95a26a338",
                      "country_gst": [
                          {
                              "id": "e6c6002b-fda2-4682-b72e-dc7b737d9d23",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85044090",
                      "description": "ELECTRICAL TRANSFORMERS, STATIC CONVERTERS (FOR EXAMPLE, RECTIFIERS) AND INDUCTORS -STATIC CONVERTERS: OTHER"
                  },
                  "created": "2022-07-02T19:34:55.400925+05:30",
                  "modified": "2022-07-02T19:34:55.400939+05:30",
                  "internal_part_no": "PN-INV-0000000160",
                  "part_number": "ST000072",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "long_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "mrp": 350,
                  "weight": "0.03",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-13T17:48:35.304171+05:30",
              "modified": "2022-07-13T17:48:35.304204+05:30",
              "quantity": 50,
              "customer_part_no": "ST000072",
              "price": 350,
              "warranty": 12,
              "short_description": "ST000072 - DA LITE USB CABLE-MINI",
              "invoice": "ab27c99c-7043-4e68-ac99-ee894fe9b252",
              "part": "31ef8bef-4e0d-4ea4-a79a-f5b3e7ab6135"
          }
      ],
      "created": "2022-07-13T11:39:44.424267+05:30",
      "modified": "2023-07-15T09:40:16.161195+05:30",
      "invoice_number": "INV-100000024-0000000001",
      "po_number": "",
      "payment_date": "2022-07-13",
      "delivery_term": "delivered",
      "invoice_date": "2022-04-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": "c258d7b8-e467-4e49-8698-39a961f2d304",
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "80cd87bf-9288-4cbf-a83a-debedd1f4df8",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "63cb8377-f50e-4234-a227-5e5c0932efcd",
          "so_id": "SO-100000010-000005",
          "ref_po": "1831118556",
          "po_date": "2020-12-11",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "7e1ad735-871d-4ad7-b1e9-e3e8de246f9a",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-15T15:58:29.326735+05:30",
              "modified": "2022-07-15T17:06:05.334890+05:30",
              "quantity": 50,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "80cd87bf-9288-4cbf-a83a-debedd1f4df8",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2022-07-15T15:46:08.534907+05:30",
      "modified": "2023-07-15T09:40:31.835943+05:30",
      "invoice_number": "INV-100000024-0000000003",
      "po_number": "",
      "payment_date": "2022-07-15",
      "delivery_term": "delivered",
      "invoice_date": "2022-07-15",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": "e7b21fcb-cf2c-4bc2-91ae-a3d84f745774",
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "ad4edf46-2852-4b3e-a09a-ce0bc9beb77f",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "79a18146-3f5c-45f1-9713-0a1de76ff373",
          "so_id": "SO-100000010-000012",
          "ref_po": "1831119007",
          "po_date": "2022-07-24",
          "contact_to": {
              "id": "7f052cef-e88c-4932-b9e1-62582503e902",
              "email": "nitin.sonmale@autopeepal.com",
              "mobile": "9075281570",
              "first_name": "Nitin",
              "last_name": "Sonmale",
              "created_at": "2021-08-21T15:32:39.379581+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [],
      "created": "2022-07-24T18:35:25.305261+05:30",
      "modified": "2023-07-15T09:41:25.050106+05:30",
      "invoice_number": "INV-100000024-0000000006",
      "po_number": "SO-100000010-000012",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "04b7084f-a729-4c2f-80ce-7094507732b4",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "150acd73-beed-4e38-b410-362173ec5855",
          "so_id": "SO-100000010-000007",
          "ref_po": "1831118556",
          "po_date": "2020-12-11",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "fbd5bbc8-65bb-4d07-b308-0563e7b0a13e",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-24T20:47:39.447272+05:30",
              "modified": "2022-07-24T20:47:39.447296+05:30",
              "quantity": 200,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "04b7084f-a729-4c2f-80ce-7094507732b4",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2022-07-24T20:44:35.355054+05:30",
      "modified": "2023-07-15T09:41:54.394614+05:30",
      "invoice_number": "INV-100000024-0000000007",
      "po_number": "SO-100000010-000007",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-06-28",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "523e6e1a-83f7-4294-bed5-c095caa45fbe",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 5,
          "term": "45 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "150acd73-beed-4e38-b410-362173ec5855",
          "so_id": "SO-100000010-000007",
          "ref_po": "1831118556",
          "po_date": "2020-12-11",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "3aaa7d4a-1658-45f7-8b48-a016425db335",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-24T20:49:26.940697+05:30",
              "modified": "2022-07-24T20:49:26.940726+05:30",
              "quantity": 100,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "523e6e1a-83f7-4294-bed5-c095caa45fbe",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2022-07-24T20:48:58.002555+05:30",
      "modified": "2023-07-15T09:42:11.221294+05:30",
      "invoice_number": "INV-100000024-0000000008",
      "po_number": "SO-100000010-000007",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "45176e92-f7ba-4417-8732-9a6046dba86a",
      "org": {
          "id": "53fb793a-9a0b-4ce8-b88d-c259f8732e97",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-25T17:39:35.507211+05:30",
          "modified": "2023-07-14T18:04:20.673100+05:30",
          "org_code": "100000026",
          "company_type": "pvt_ltd",
          "company_name": "Greaves Cotton Limited",
          "logo": "http://143.244.142.0/media/banner/Greaves.png",
          "address": "Chinchwad",
          "pan_no": "pan",
          "pan_cert": null,
          "pincode": "3fb78074-ca10-4b68-8193-00e486c805f0",
          "contact_person": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "fb457513-7de8-469a-b1e6-5c5666f6f6b8"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "d60734fc-ae92-485c-8e14-d5b3cfb267fd",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "3bb85c6c-b184-41ad-b5cd-5c7b7d457c70",
              "created": "2021-11-19T16:39:25.313739+05:30",
              "modified": "2021-11-19T16:39:25.315252+05:30",
              "pin_code": "431201",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:39:47.641552+05:30",
          "modified": "2021-11-19T16:39:47.641576+05:30",
          "address": "FIVE STAR INDUSTRIAL AREA AUTOMOTIVE DIVISION - SPARES A-1/3, M.I.D.C SHENDRA, AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "d60734fc-ae92-485c-8e14-d5b3cfb267fd",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "3bb85c6c-b184-41ad-b5cd-5c7b7d457c70",
              "created": "2021-11-19T16:39:25.313739+05:30",
              "modified": "2021-11-19T16:39:25.315252+05:30",
              "pin_code": "431201",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:39:47.641552+05:30",
          "modified": "2021-11-19T16:39:47.641576+05:30",
          "address": "FIVE STAR INDUSTRIAL AREA AUTOMOTIVE DIVISION - SPARES A-1/3, M.I.D.C SHENDRA, AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 6,
          "term": "60 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "3c775683-38bd-4ffc-8ce6-bc3545553694",
          "so_id": "SO-100000010-000003",
          "ref_po": "5000128546",
          "po_date": "2022-05-07",
          "contact_to": {
              "id": "778f98bb-d9b7-4a33-9afa-64646a019b03",
              "email": "jerson.vas@greavescotton.com",
              "mobile": "9850839509",
              "first_name": "Jerson",
              "last_name": "Vas",
              "created_at": "2021-10-25T17:42:36.511751+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "96e304c8-8128-438b-8da9-001a92bdbcca",
              "parts_no": {
                  "id": "5a30ff90-2484-48c5-9ef4-ba2f53703e3c",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-02T19:44:21.008331+05:30",
                  "modified": "2022-07-24T22:55:04.673761+05:30",
                  "internal_part_no": "PN-INV-0000000163",
                  "part_number": "52010482",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "52010482 DIAGNOSTIC TOOL",
                  "long_description": "52010482DIAGNOSTIC TOOL",
                  "mrp": 6400,
                  "weight": "0.08",
                  "length": "80.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2022-07-24T23:11:39.229129+05:30",
              "modified": "2022-07-24T23:15:29.797670+05:30",
              "quantity": 125,
              "customer_part_no": "52010482",
              "price": 6400,
              "warranty": 12,
              "short_description": "52010482 DIAGNOSTIC TOOL",
              "invoice": "45176e92-f7ba-4417-8732-9a6046dba86a",
              "part": "a2d01410-1cce-4c3d-a411-71b5af972170"
          }
      ],
      "created": "2022-07-24T23:09:50.409494+05:30",
      "modified": "2023-07-15T09:42:39.387312+05:30",
      "invoice_number": "INV-100000026-0000000001",
      "po_number": "5000128546 /",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "BLE DONGLE",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "8d7c08bf-af4e-47e9-8cf2-387af8adbc73",
      "org": {
          "id": "3299ca59-f535-440e-a766-d9eb747c9e99",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-18T19:06:45.103539+05:30",
          "modified": "2023-08-17T14:44:30.665015+05:30",
          "org_code": "100000244",
          "company_type": "pvt_ltd",
          "company_name": "MLR Auto Limited",
          "logo": null,
          "address": "Sy. No. 354, Muppirreddy Pally, Toopran Mandal, Medak",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
          "contact_person": null,
          "payment_term": 3,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [
              5
          ],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "fb3891bf-9ffd-452d-ad75-79684f005e1a",
          "so_id": "SO-100000194-000019",
          "ref_po": "F.Y. 2023-24/FY_23-24_00005",
          "po_date": "2023-04-11",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [],
      "created": "2023-07-07T20:31:20.054851+05:30",
      "modified": "2023-07-15T09:45:00.110620+05:30",
      "invoice_number": "INV-100000244-0000000001",
      "po_number": "F. Y. 2023-24/FY_23-24_00005",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-05-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "9e7611e7-06cd-431a-8076-deceaf7ca8f7",
      "org": {
          "id": "ff614ddc-3aa2-4a8f-b365-7bb67006a07e",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:33:27.587579+05:30",
          "modified": "2022-08-20T14:33:27.592166+05:30",
          "org_code": "100000457",
          "company_type": "proprietorship",
          "company_name": "Universal",
          "logo": null,
          "address": "Wagholi, PUNE, Maharashtra, India, 412207",
          "pan_no": null,
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "5283ebf4-ae5e-4b23-9c54-ffec74b0895f",
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "26b5beb7-b47a-4803-bb5a-e2696a014508",
          "org": {
              "company_name": "Universal",
              "contact_person": {
                  "id": "5283ebf4-ae5e-4b23-9c54-ffec74b0895f",
                  "first_name": "Universal",
                  "last_name": "User",
                  "mobile": "2573557357",
                  "email": "universaluser@wikitek.in"
              }
          },
          "pincode": {
              "id": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
              "created": "2021-08-12T10:17:36.169402+05:30",
              "modified": "2021-08-23T21:49:01.801948+05:30",
              "pin_code": "412207",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:33:27.595380+05:30",
          "modified": "2022-08-20T14:33:27.596150+05:30",
          "address": "Wagholi, PUNE, Maharashtra, India, 412207",
          "gst_no": null,
          "gst_cert": null,
          "address_type": null
      },
      "shipping_address": {
          "id": "ab1c4e9b-5274-4116-8547-040e4d52c317",
          "org": {
              "company_name": "Universal",
              "contact_person": {
                  "id": "5283ebf4-ae5e-4b23-9c54-ffec74b0895f",
                  "first_name": "Universal",
                  "last_name": "User",
                  "mobile": "2573557357",
                  "email": "universaluser@wikitek.in"
              }
          },
          "pincode": {
              "id": "2632d64b-6f2f-4779-aa2f-686211d51aff",
              "created": "2021-08-23T21:48:59.836491+05:30",
              "modified": "2021-08-23T21:48:59.837646+05:30",
              "pin_code": "423401",
              "state": null,
              "district": "e9e127ed-6830-4d43-9d52-d317f98f49d0"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:33:27.598639+05:30",
          "modified": "2022-08-20T14:33:27.599346+05:30",
          "address": "yeola, Malegaon, Maharashtra, India, 423401",
          "gst_no": null,
          "gst_cert": null,
          "address_type": null
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "5283ebf4-ae5e-4b23-9c54-ffec74b0895f",
          "first_name": "Universal",
          "last_name": "User",
          "mobile": "2573557357",
          "email": "universaluser@wikitek.in",
          "org": {
              "id": "1a61da83-c469-4d8c-98ee-d395c2e20797",
              "company_name": "Wikitek Systems",
              "logo": null,
              "contact_person": {
                  "id": "50f60ee9-70e1-48a7-87ab-ae87f45329f0",
                  "first_name": "Admin",
                  "last_name": "User",
                  "mobile": "9064210665",
                  "email": "admin@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "f0edb162-45b8-44a2-a150-9586dafac8e4",
          "so_id": "SO-100000021-000004",
          "ref_po": null,
          "po_date": "2022-08-20",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "4ddcbf1b-18b2-46af-a50e-6e61d2a54996",
              "parts_no": {
                  "id": "cb2990d2-3fde-448b-a4a9-273573f3135e",
                  "part_type": {
                      "id": 4,
                      "created": "2021-08-10T07:30:19.933528+05:30",
                      "modified": "2021-10-07T15:33:16.539208+05:30",
                      "name": "Subscription"
                  },
                  "uom": {
                      "id": 2,
                      "created": "2022-07-14T18:38:52.532534+05:30",
                      "modified": "2022-07-14T18:38:52.532556+05:30",
                      "name": "pc"
                  },
                  "gst_itm": {
                      "id": "59472392-1080-44e4-8c12-a23774db348a",
                      "country_gst": [
                          {
                              "id": "c8d7eef8-580a-4eed-943b-36d0bc1e0bac",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84781020",
                      "description": "MACHINERY FOR PREPARING OR MAKING UP TOBACCO, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER - MACHINERY: CIGARETTE MAKING MACHINERY"
                  },
                  "created": "2022-07-02T19:15:52.895871+05:30",
                  "modified": "2022-08-01T18:54:55.639766+05:30",
                  "internal_part_no": "PN-INV-0000000158",
                  "part_number": "wkosb001",
                  "customer_part_number": null,
                  "bom": true,
                  "short_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
                  "long_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
                  "mrp": 2,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 months",
                  "packing_charge": 0,
                  "manufacturer": "1a61da83-c469-4d8c-98ee-d395c2e20797",
                  "part_category": 6,
                  "sub_category": 20,
                  "default": 10,
                  "meta_tags": [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6
                  ],
                  "market_place": [
                      "87d905a3-8a3c-4972-a88d-ea58914b208f",
                      "fb14972f-429e-4f30-a991-8215695087ae"
                  ]
              },
              "created": "2022-08-20T14:33:27.652115+05:30",
              "modified": "2022-08-20T14:33:27.659061+05:30",
              "quantity": 1,
              "customer_part_no": "wkosb001",
              "price": 2,
              "warranty": 12,
              "short_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
              "invoice": "9e7611e7-06cd-431a-8076-deceaf7ca8f7",
              "part": "b83f881b-9d33-4b5e-8b72-051b0254d3a8"
          }
      ],
      "created": "2022-08-20T14:33:27.628236+05:30",
      "modified": "2023-07-15T09:45:57.666337+05:30",
      "invoice_number": "INV-100000457-0000000001",
      "po_number": "",
      "payment_date": "2022-08-20",
      "delivery_term": "delivered",
      "invoice_date": "2022-08-20",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "",
      "order_id": "order_K50M2U3SHG2Ivc",
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "53891ac2-0a73-478d-bc3a-d69a9bc89231",
      "org": {
          "id": "73a0bdad-bdc8-4aa8-9f9d-0b68f068abef",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:34:12.203079+05:30",
          "modified": "2022-08-20T14:34:19.516963+05:30",
          "org_code": "100000458",
          "company_type": "proprietorship",
          "company_name": "ujjwal",
          "logo": null,
          "address": "akole dist-ahmednagar maharastra, Ahmed Nagar, Maharashtra, India, 422601",
          "pan_no": null,
          "pan_cert": null,
          "pincode": "6fb4449c-234f-4b3a-8770-6c422be52e7c",
          "contact_person": "51cd4777-1219-4fb0-94f7-b5246f2a4b56",
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "6ea6b95e-a37a-4382-9ac6-9dd5b83c403b",
          "org": {
              "company_name": "ujjwal",
              "contact_person": {
                  "id": "51cd4777-1219-4fb0-94f7-b5246f2a4b56",
                  "first_name": "ujjwal",
                  "last_name": "das",
                  "mobile": "9804444444",
                  "email": "ujjwal@gmail.com"
              }
          },
          "pincode": {
              "id": "6fb4449c-234f-4b3a-8770-6c422be52e7c",
              "created": "2021-08-23T21:49:02.508446+05:30",
              "modified": "2021-08-23T21:49:02.510029+05:30",
              "pin_code": "422601",
              "state": null,
              "district": "38151fb3-2037-46c6-842c-9ef1dd50ab28"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:34:12.213842+05:30",
          "modified": "2022-08-20T14:34:19.526250+05:30",
          "address": "akole dist-ahmednagar maharastra, Ahmed Nagar, Maharashtra, India, 422601",
          "gst_no": null,
          "gst_cert": null,
          "address_type": null
      },
      "shipping_address": {
          "id": "6ea6b95e-a37a-4382-9ac6-9dd5b83c403b",
          "org": {
              "company_name": "ujjwal",
              "contact_person": {
                  "id": "51cd4777-1219-4fb0-94f7-b5246f2a4b56",
                  "first_name": "ujjwal",
                  "last_name": "das",
                  "mobile": "9804444444",
                  "email": "ujjwal@gmail.com"
              }
          },
          "pincode": {
              "id": "6fb4449c-234f-4b3a-8770-6c422be52e7c",
              "created": "2021-08-23T21:49:02.508446+05:30",
              "modified": "2021-08-23T21:49:02.510029+05:30",
              "pin_code": "422601",
              "state": null,
              "district": "38151fb3-2037-46c6-842c-9ef1dd50ab28"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-08-20T14:34:12.213842+05:30",
          "modified": "2022-08-20T14:34:19.526250+05:30",
          "address": "akole dist-ahmednagar maharastra, Ahmed Nagar, Maharashtra, India, 422601",
          "gst_no": null,
          "gst_cert": null,
          "address_type": null
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "51cd4777-1219-4fb0-94f7-b5246f2a4b56",
          "first_name": "ujjwal",
          "last_name": "das",
          "mobile": "9804444444",
          "email": "ujjwal@gmail.com",
          "org": {
              "id": "1a61da83-c469-4d8c-98ee-d395c2e20797",
              "company_name": "Wikitek Systems",
              "logo": null,
              "contact_person": {
                  "id": "50f60ee9-70e1-48a7-87ab-ae87f45329f0",
                  "first_name": "Admin",
                  "last_name": "User",
                  "mobile": "9064210665",
                  "email": "admin@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "053f4c12-f083-4ca9-a85b-2f6623320962",
          "so_id": "SO-100000021-000005",
          "ref_po": null,
          "po_date": "2022-08-20",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "05af8660-f2ea-4dcb-9cd2-230b302ed53f",
              "parts_no": {
                  "id": "cb2990d2-3fde-448b-a4a9-273573f3135e",
                  "part_type": {
                      "id": 4,
                      "created": "2021-08-10T07:30:19.933528+05:30",
                      "modified": "2021-10-07T15:33:16.539208+05:30",
                      "name": "Subscription"
                  },
                  "uom": {
                      "id": 2,
                      "created": "2022-07-14T18:38:52.532534+05:30",
                      "modified": "2022-07-14T18:38:52.532556+05:30",
                      "name": "pc"
                  },
                  "gst_itm": {
                      "id": "59472392-1080-44e4-8c12-a23774db348a",
                      "country_gst": [
                          {
                              "id": "c8d7eef8-580a-4eed-943b-36d0bc1e0bac",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84781020",
                      "description": "MACHINERY FOR PREPARING OR MAKING UP TOBACCO, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER - MACHINERY: CIGARETTE MAKING MACHINERY"
                  },
                  "created": "2022-07-02T19:15:52.895871+05:30",
                  "modified": "2022-08-01T18:54:55.639766+05:30",
                  "internal_part_no": "PN-INV-0000000158",
                  "part_number": "wkosb001",
                  "customer_part_number": null,
                  "bom": true,
                  "short_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
                  "long_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
                  "mrp": 2,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 months",
                  "packing_charge": 0,
                  "manufacturer": "1a61da83-c469-4d8c-98ee-d395c2e20797",
                  "part_category": 6,
                  "sub_category": 20,
                  "default": 10,
                  "meta_tags": [
                      1,
                      2,
                      3,
                      4,
                      5,
                      6
                  ],
                  "market_place": [
                      "87d905a3-8a3c-4972-a88d-ea58914b208f",
                      "fb14972f-429e-4f30-a991-8215695087ae"
                  ]
              },
              "created": "2022-08-20T14:34:12.261403+05:30",
              "modified": "2022-08-20T14:34:19.561377+05:30",
              "quantity": 1,
              "customer_part_no": "wkosb001",
              "price": 2,
              "warranty": 12,
              "short_description": "Vehicle Communication VCI(12V) wikitek1 Android Application",
              "invoice": "53891ac2-0a73-478d-bc3a-d69a9bc89231",
              "part": "b83f881b-9d33-4b5e-8b72-051b0254d3a8"
          }
      ],
      "created": "2022-08-20T14:34:12.246580+05:30",
      "modified": "2023-07-15T09:46:16.015615+05:30",
      "invoice_number": "INV-100000458-0000000001",
      "po_number": "",
      "payment_date": "2022-08-20",
      "delivery_term": "delivered",
      "invoice_date": "2022-08-20",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "",
      "order_id": "order_K7ns1MuAxJ75bD",
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "522b3388-b39c-411a-a18b-e55f7c315fd4",
      "org": {
          "id": "2c15a622-3457-449e-adf4-69188126bf14",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:32:36.708521+05:30",
          "modified": "2023-07-07T16:32:36.711972+05:30",
          "org_code": "100000484",
          "company_type": "proprietorship",
          "company_name": "VR AUTOMOTIVES",
          "logo": null,
          "address": "#CTS NO 3293, BASWANT COMPLEX, NEAR SAI BHAVAN MANGAL KARYALAYA, KHASBAG, BELGAVI-590003.",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "981cec50-9930-40b6-a1c1-04d8b672f340",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "1f0d372d-6a2c-4196-b769-845984f510ca",
          "org": {
              "company_name": "VR AUTOMOTIVES",
              "contact_person": null
          },
          "pincode": {
              "id": "981cec50-9930-40b6-a1c1-04d8b672f340",
              "created": "2021-08-23T21:48:41.479625+05:30",
              "modified": "2021-08-23T21:48:41.480983+05:30",
              "pin_code": "590003",
              "state": null,
              "district": "79e7eee1-ec5c-4b15-a8e6-7497ea143121"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:34:16.126583+05:30",
          "modified": "2023-07-07T16:34:16.126616+05:30",
          "address": "#CTS NO 3293, BASWANT COMPLEX, NEAR SAI BHAVAN MANGAL KARYALAYA, KHASBAG, BELGAVI-590003.",
          "gst_no": "29AGVPR2607M1ZJ",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "1f0d372d-6a2c-4196-b769-845984f510ca",
          "org": {
              "company_name": "VR AUTOMOTIVES",
              "contact_person": null
          },
          "pincode": {
              "id": "981cec50-9930-40b6-a1c1-04d8b672f340",
              "created": "2021-08-23T21:48:41.479625+05:30",
              "modified": "2021-08-23T21:48:41.480983+05:30",
              "pin_code": "590003",
              "state": null,
              "district": "79e7eee1-ec5c-4b15-a8e6-7497ea143121"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T16:34:16.126583+05:30",
          "modified": "2023-07-07T16:34:16.126616+05:30",
          "address": "#CTS NO 3293, BASWANT COMPLEX, NEAR SAI BHAVAN MANGAL KARYALAYA, KHASBAG, BELGAVI-590003.",
          "gst_no": "29AGVPR2607M1ZJ",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "278d7900-8ef5-4dca-b521-2581e60bfa32",
          "so_id": "SO-100000194-000033",
          "ref_po": "Verbal",
          "po_date": "2023-07-07",
          "contact_to": {
              "id": "a94825da-57e0-4d42-a381-b80aeed73885",
              "email": "somraj.deshmukh@autopeepal.com",
              "mobile": "7798553403",
              "first_name": "somraj",
              "last_name": "deshmukh",
              "created_at": "2022-03-05T12:25:15.091792+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "2bdfb460-335a-44a0-8374-a48810dc5bc8",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T17:19:40.386659+05:30",
              "modified": "2023-07-07T17:19:40.386687+05:30",
              "quantity": 1,
              "customer_part_no": "DONGLE REPAIRING CHARGES",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "522b3388-b39c-411a-a18b-e55f7c315fd4",
              "part": null
          }
      ],
      "created": "2023-07-07T17:16:15.968423+05:30",
      "modified": "2023-07-15T09:46:52.880108+05:30",
      "invoice_number": "INV-100000484-0000000001",
      "po_number": "",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-04-10",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "8a05d095-61c4-4bd1-8d9a-efe35ae5c3ff",
      "org": {
          "id": "1f522285-36b0-45ac-a0fc-75fcb0c25f90",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:29:03.372936+05:30",
          "modified": "2023-07-07T21:29:03.376591+05:30",
          "org_code": "100000487",
          "company_type": "proprietorship",
          "company_name": "Jay Bhagwan Auto",
          "logo": null,
          "address": "Near Dudh Sang, Datta Nagar, Opp MRF Tyre, Osmanabad-413501",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "3290d3ab-6b25-4d18-8090-0b426c2b1ec6",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "986676d2-e52a-4d93-8085-3b97bf226991",
          "org": {
              "company_name": "Jay Bhagwan Auto",
              "contact_person": null
          },
          "pincode": {
              "id": "3290d3ab-6b25-4d18-8090-0b426c2b1ec6",
              "created": "2021-08-23T21:48:56.131334+05:30",
              "modified": "2021-08-23T21:48:56.132498+05:30",
              "pin_code": "413501",
              "state": null,
              "district": "b70fe56c-6b11-47d7-8393-c9428c6ce249"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:30:47.289619+05:30",
          "modified": "2023-07-07T21:30:47.289688+05:30",
          "address": "Near Dudh Sang, Datta Nagar, Opp MRF Tyre, Osmanabad-413501.",
          "gst_no": "27AAOFJ8320N1ZR",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "986676d2-e52a-4d93-8085-3b97bf226991",
          "org": {
              "company_name": "Jay Bhagwan Auto",
              "contact_person": null
          },
          "pincode": {
              "id": "3290d3ab-6b25-4d18-8090-0b426c2b1ec6",
              "created": "2021-08-23T21:48:56.131334+05:30",
              "modified": "2021-08-23T21:48:56.132498+05:30",
              "pin_code": "413501",
              "state": null,
              "district": "b70fe56c-6b11-47d7-8393-c9428c6ce249"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:30:47.289619+05:30",
          "modified": "2023-07-07T21:30:47.289688+05:30",
          "address": "Near Dudh Sang, Datta Nagar, Opp MRF Tyre, Osmanabad-413501.",
          "gst_no": "27AAOFJ8320N1ZR",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "b589b853-be84-4c35-853f-c4e7ecfcf32e",
          "so_id": "SO-100000194-000039",
          "ref_po": "Verbal",
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "82ec196b-1bc3-4267-af47-cbe7d0e33cbb",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T21:39:00.238491+05:30",
              "modified": "2023-07-07T21:39:00.238521+05:30",
              "quantity": 1,
              "customer_part_no": "DONGLE REPAIRING CHARGES",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "8a05d095-61c4-4bd1-8d9a-efe35ae5c3ff",
              "part": null
          }
      ],
      "created": "2023-07-07T21:38:32.464183+05:30",
      "modified": "2023-07-07T21:38:32.469628+05:30",
      "invoice_number": "INV-100000487-0000000001",
      "po_number": "VERBAL",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "69051b25-9193-4b0f-b443-df80ec0f6388",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "4b70e3a8-dba7-4364-a47a-04d86a8f5bee",
              "parts_no": {
                  "id": "2aefef30-14bc-4f7f-ab3b-549c2efa426d",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-02T19:40:25.218217+05:30",
                  "modified": "2023-07-10T19:11:22.867246+05:30",
                  "internal_part_no": "PN-INV-0000000162",
                  "part_number": "ST000069",
                  "customer_part_number": "ST000069",
                  "bom": false,
                  "short_description": "ST000069 - DA Lite WIFI Dongle Auto (Blue)",
                  "long_description": "ST000069 - DA Lite WIFI Dongle Auto (Blue)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "80.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "3428dad6-d242-4c7e-a0a0-460f896223d7",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-09T09:52:23.221250+05:30",
              "modified": "2023-07-11T10:20:25.172323+05:30",
              "quantity": 50,
              "customer_part_no": "ST000069",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000069 - DA Lite WIFI Dongle Auto (Blue)",
              "invoice": "69051b25-9193-4b0f-b443-df80ec0f6388",
              "part": "d183bdf5-5766-4d52-911f-9b2aa499fe7f"
          }
      ],
      "created": "2023-07-09T09:51:41.556641+05:30",
      "modified": "2023-07-15T18:37:13.859744+05:30",
      "invoice_number": "INV-100000024-0000000012",
      "po_number": "1831123030",
      "payment_date": "2023-07-09",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-08",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "58a5f410-9e6d-4256-8ed3-5fa8d5401213",
      "org": {
          "id": "baa4915e-8cc1-443b-b82b-0370fca1df22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:40:24.358815+05:30",
          "modified": "2023-07-07T21:40:24.362001+05:30",
          "org_code": "100000488",
          "company_type": "proprietorship",
          "company_name": "Yojana Motors",
          "logo": null,
          "address": "Kollanpady, Irumpanam, P. O. Thripunithura, Ernakulam - 682301.",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "c037fa1c-55e3-435f-b720-0594506550db",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "f686a2de-bdac-40f6-8401-8abc426260b2",
          "org": {
              "company_name": "Yojana Motors",
              "contact_person": null
          },
          "pincode": {
              "id": "c037fa1c-55e3-435f-b720-0594506550db",
              "created": "2021-08-23T21:48:50.011199+05:30",
              "modified": "2021-08-23T21:48:50.012408+05:30",
              "pin_code": "682301",
              "state": null,
              "district": "40d757dd-88ed-4e54-9da0-3fa6cd185379"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:40:59.443483+05:30",
          "modified": "2023-07-07T21:40:59.443518+05:30",
          "address": "Kollanpady, Irumpanam, P. O. Thripunithura, Ernakulam - 682301.",
          "gst_no": "32AACFY0177E1ZH",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "f686a2de-bdac-40f6-8401-8abc426260b2",
          "org": {
              "company_name": "Yojana Motors",
              "contact_person": null
          },
          "pincode": {
              "id": "c037fa1c-55e3-435f-b720-0594506550db",
              "created": "2021-08-23T21:48:50.011199+05:30",
              "modified": "2021-08-23T21:48:50.012408+05:30",
              "pin_code": "682301",
              "state": null,
              "district": "40d757dd-88ed-4e54-9da0-3fa6cd185379"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-07T21:40:59.443483+05:30",
          "modified": "2023-07-07T21:40:59.443518+05:30",
          "address": "Kollanpady, Irumpanam, P. O. Thripunithura, Ernakulam - 682301.",
          "gst_no": "32AACFY0177E1ZH",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "6a691c5d-b6fc-4f69-9bae-e9da527a1b6f",
          "so_id": "SO-100000194-000040",
          "ref_po": "30-06-2023",
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "6c095c8d-879e-44f0-a446-9f159069fbf8",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T21:51:29.187505+05:30",
              "modified": "2023-07-07T21:51:29.187530+05:30",
              "quantity": 1,
              "customer_part_no": "DONGLE REPAIRING CHARGES",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "58a5f410-9e6d-4256-8ed3-5fa8d5401213",
              "part": null
          }
      ],
      "created": "2023-07-07T21:50:51.818774+05:30",
      "modified": "2023-08-17T14:51:30.595259+05:30",
      "invoice_number": "INV-100000488-0000000001",
      "po_number": "VERBAL",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "acdd042d-ac71-4366-8220-8d733e9fd15e",
      "org": {
          "id": "53fb793a-9a0b-4ce8-b88d-c259f8732e97",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-25T17:39:35.507211+05:30",
          "modified": "2023-07-14T18:04:20.673100+05:30",
          "org_code": "100000026",
          "company_type": "pvt_ltd",
          "company_name": "Greaves Cotton Limited",
          "logo": "http://143.244.142.0/media/banner/Greaves.png",
          "address": "Chinchwad",
          "pan_no": "pan",
          "pan_cert": null,
          "pincode": "3fb78074-ca10-4b68-8193-00e486c805f0",
          "contact_person": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "fb457513-7de8-469a-b1e6-5c5666f6f6b8"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "90ddff5b-c859-4a35-ba1a-d9e3ba3a0d5d",
          "so_id": "SO-100000194-000041",
          "ref_po": "5700038295/0",
          "po_date": "2023-07-07",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "22865659-d9af-4a9d-9c96-af474f51d65a",
              "parts_no": {
                  "id": "ba1056fa-526d-4616-8b22-70bf156fa163",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-07-07T21:59:56.021428+05:30",
                  "modified": "2023-07-07T21:59:56.026968+05:30",
                  "internal_part_no": "1000000424",
                  "part_number": "DIAGNOSTIC TOOL DEVELOPMENT(D-TOOL)",
                  "customer_part_number": "DIAGNOSTIC TOOL DEVELOPMENT(D-TOOL)",
                  "bom": false,
                  "short_description": "DIAGNOSTIC TOOL DEVELOPMENT(D-TOOL)",
                  "long_description": "DIAGNOSTIC TOOL DEVELOPMENT(D-TOOL)",
                  "mrp": 300000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-07T22:07:13.194327+05:30",
              "modified": "2023-07-07T22:07:13.194356+05:30",
              "quantity": 1,
              "customer_part_no": "DIAGNOSTIC TOOL CNG OBD II (D-TOOL)",
              "price": 300000,
              "warranty": 12,
              "short_description": "DIAGNOSTIC TOOL DEVELOPMENT(D-TOOL)",
              "invoice": "acdd042d-ac71-4366-8220-8d733e9fd15e",
              "part": null
          }
      ],
      "created": "2023-07-07T22:06:20.446694+05:30",
      "modified": "2023-07-07T22:06:20.450479+05:30",
      "invoice_number": "INV-100000026-0000000002",
      "po_number": "5700038295/0",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "b3bd9fbb-c155-498b-a6f4-9d3d4013314c",
      "org": {
          "id": "9cb89f15-4b32-47b0-b499-c331093ac8ea",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-20T10:33:12.269771+05:30",
          "modified": "2023-07-14T18:29:15.913210+05:30",
          "org_code": "100000025",
          "company_type": "pvt_ltd",
          "company_name": "Bajaj Auto Ltd",
          "logo": "http://143.244.142.0/media/banner/Bajaj.png",
          "address": "Akurdi, Pune - 411035",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "66a48284-f132-4821-a3d6-fd400cdd748f",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 4,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "e612091b-c952-4a56-af62-6581dea91c35",
          "so_id": "SO-100000194-000046",
          "ref_po": "5210043280",
          "po_date": "2023-07-18",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "3a51d2a8-18d2-4971-b0c1-7df4efe40df7",
              "parts_no": {
                  "id": "cf1ddb4a-e0c9-4619-b5b4-cc86f0ddb723",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "2aa82fc0-6621-4cb7-95c4-bc6114bfa903",
                      "country_gst": [
                          {
                              "id": "2538093c-89e2-4cb4-9cd7-8f1540921fb7",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85443000",
                      "description": "INSULATED (INCLUDING ENAMELLED OR ANODISED) WIRE, CABLE (INCLUDING CO-AXIAL CABLE) AND OTHER INSULATED ELECTRIC CONDUCTORS, WHETHER OR NOT FITTED WITH CONNECTORS; OPTICAL FIBRE CABLES, MADE UP OF INDIVIDUALLY SHEATHED FIBRES, WHETHER OR NOT ASSEMBLED WITH ELECTRIC CONDUCTORS OR FITTED WITH CONNECTORS - IGNITION WIRING SETS AND OTHER WIRING SETS OF A KIND USED IN VEHICLES, AIRCRAFT OR SHIPS"
                  },
                  "created": "2023-06-26T15:09:41.812436+05:30",
                  "modified": "2023-07-10T19:33:14.574291+05:30",
                  "internal_part_no": "1000000416",
                  "part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "customer_part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "bom": false,
                  "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "long_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "mrp": 7000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 1,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-17T20:22:11.936252+05:30",
              "modified": "2023-08-17T20:22:11.936289+05:30",
              "quantity": 50,
              "customer_part_no": "36JY0360",
              "price": 7000,
              "warranty": 12,
              "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
              "invoice": "b3bd9fbb-c155-498b-a6f4-9d3d4013314c",
              "part": "ea848dec-0408-450b-bb00-c32dfa45fee5"
          }
      ],
      "created": "2023-08-17T20:19:55.519362+05:30",
      "modified": "2023-08-17T20:19:55.525029+05:30",
      "invoice_number": "INV-100000025-0000000003",
      "po_number": "5210043280",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-19",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "edfb3a24-8cbc-41b0-a737-8e275c70da94",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "357cc1d9-6996-4e7f-9ac7-d02b0e99d1b6",
              "parts_no": {
                  "id": "2aefef30-14bc-4f7f-ab3b-549c2efa426d",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-02T19:40:25.218217+05:30",
                  "modified": "2023-07-10T19:11:22.867246+05:30",
                  "internal_part_no": "PN-INV-0000000162",
                  "part_number": "ST000069",
                  "customer_part_number": "ST000069",
                  "bom": false,
                  "short_description": "ST000069 - DA Lite WIFI Dongle Auto (Blue)",
                  "long_description": "ST000069 - DA Lite WIFI Dongle Auto (Blue)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "80.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "3428dad6-d242-4c7e-a0a0-460f896223d7",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-09T12:17:37.728756+05:30",
              "modified": "2023-07-10T19:27:34.542010+05:30",
              "quantity": 50,
              "customer_part_no": "ST000072",
              "price": 350,
              "warranty": 12,
              "short_description": "ST000072 - DA LITE USB CABLE-MINI",
              "invoice": "edfb3a24-8cbc-41b0-a737-8e275c70da94",
              "part": "31ef8bef-4e0d-4ea4-a79a-f5b3e7ab6135"
          }
      ],
      "created": "2023-07-09T10:27:31.088803+05:30",
      "modified": "2023-07-09T10:27:31.092429+05:30",
      "invoice_number": "INV-100000024-0000000013",
      "po_number": "1831123030",
      "payment_date": "2023-07-09",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-08",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "0e5d76b0-f6ea-4ca7-a64f-df98133c6ce1",
      "org": {
          "id": "101bac09-f9d1-478d-9976-0e7bee017899",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-08-23T08:33:43.510156+05:30",
          "modified": "2022-04-15T15:06:00.889946+05:30",
          "org_code": "100000023",
          "company_type": "pvt_ltd",
          "company_name": "Atul Auto Limited",
          "logo": null,
          "address": "Gujrat",
          "pan_no": "a",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 3,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "88b3247e-b200-4d26-9c44-2980f5d7d333",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "abb2daca-c810-476c-b608-e1d8467e3cd9",
              "created": "2021-08-23T21:48:31.538658+05:30",
              "modified": "2021-08-23T21:48:31.610825+05:30",
              "pin_code": "382220",
              "state": null,
              "district": "4d120598-e86e-422d-a89b-d5e368324a49"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:28:21.193790+05:30",
          "modified": "2023-07-09T12:28:21.193823+05:30",
          "address": "Survey No. 521, 525, 530, 541-542, Near Moghal Mataji Mandir, Ahmedabad-Rajkot Highway, Bhayla, Dist. Ahmedabad - 382220, Gujrat, India.",
          "gst_no": "24AACCA3018M2ZW",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "88b3247e-b200-4d26-9c44-2980f5d7d333",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "abb2daca-c810-476c-b608-e1d8467e3cd9",
              "created": "2021-08-23T21:48:31.538658+05:30",
              "modified": "2021-08-23T21:48:31.610825+05:30",
              "pin_code": "382220",
              "state": null,
              "district": "4d120598-e86e-422d-a89b-d5e368324a49"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:28:21.193790+05:30",
          "modified": "2023-07-09T12:28:21.193823+05:30",
          "address": "Survey No. 521, 525, 530, 541-542, Near Moghal Mataji Mandir, Ahmedabad-Rajkot Highway, Bhayla, Dist. Ahmedabad - 382220, Gujrat, India.",
          "gst_no": "24AACCA3018M2ZW",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "aa1c6769-2e36-40ac-97e7-caa1100300dc",
          "so_id": "SO-100000194-000028",
          "ref_po": "4800019248",
          "po_date": "2023-06-22",
          "contact_to": null
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "8e8add57-ff81-4bce-98b0-c586bf0c5c4c",
              "parts_no": {
                  "id": "5fa89256-06ab-4189-ad01-2e4480f8cb34",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a40ee02f-83d5-4d76-93a7-396949f93ae8",
                      "country_gst": [
                          {
                              "id": "647b10f8-c59f-439e-b58f-d5783fb768fa",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90138010",
                      "description": "LIQUID CRYSTAL DEVICES NOT CONSTITUTING ARTICLES PROVIDED FOR MORE SPECIFICALLY IN OTHER HEADINGS; LASERS, OTHER THAN LASER DIODES; OTHER OPTICAL APPLIANCES AND INSTRUMENTS, NOT SPECIFIED OR INCLUDED ELSE WHERE IN THIS CHAPTER - OTHER DEVICES, APPLIANCES AND INSTRUMENTS: LIQUID CRYSTAL DEVICES (LCD)"
                  },
                  "created": "2023-07-09T12:31:46.760332+05:30",
                  "modified": "2023-07-09T12:31:46.764419+05:30",
                  "internal_part_no": "1000000425",
                  "part_number": "WIFI DONGLE WITH CABLE",
                  "customer_part_number": "WIFI DONGLE WITH CABLE",
                  "bom": false,
                  "short_description": "WIFI DONGLE WITH CABLE",
                  "long_description": "WIFI DONGLE WITH CABLE",
                  "mrp": 10000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T20:05:52.341175+05:30",
              "modified": "2023-09-08T16:28:44.700309+05:30",
              "quantity": 2,
              "customer_part_no": "WIFI DONGLE WITH CABLE",
              "price": 10000,
              "warranty": 12,
              "short_description": "WIFI DONGLE WITH CABLE",
              "invoice": "0e5d76b0-f6ea-4ca7-a64f-df98133c6ce1",
              "part": "81d1cef3-e2d6-44ca-940a-b74a721fafa6"
          }
      ],
      "created": "2023-07-09T12:40:51.767115+05:30",
      "modified": "2023-07-09T12:40:51.770558+05:30",
      "invoice_number": "INV-100000023-0000000004",
      "po_number": "4800019248",
      "payment_date": "2023-07-09",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "72fcce27-aec8-467c-8cba-378e7b827098",
      "org": {
          "id": "3299ca59-f535-440e-a766-d9eb747c9e99",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-18T19:06:45.103539+05:30",
          "modified": "2023-08-17T14:44:30.665015+05:30",
          "org_code": "100000244",
          "company_type": "pvt_ltd",
          "company_name": "MLR Auto Limited",
          "logo": null,
          "address": "Sy. No. 354, Muppirreddy Pally, Toopran Mandal, Medak",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
          "contact_person": null,
          "payment_term": 3,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [
              5
          ],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3ba08ba2-e549-406a-be85-20df97787b77",
          "org": {
              "company_name": "MLR Auto Limited",
              "contact_person": null
          },
          "pincode": {
              "id": "6fcf1e9d-6f3e-4528-90be-dbccb749e010",
              "created": "2021-08-23T21:49:30.778304+05:30",
              "modified": "2021-08-23T21:49:30.779397+05:30",
              "pin_code": "502336",
              "state": null,
              "district": "353d47d1-f08d-41b0-85c5-45975186ef10"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T18:21:46.760814+05:30",
          "modified": "2023-05-11T18:21:46.760841+05:30",
          "address": "Sy.No.354, Automotive Park, Muppireddy Pally, Toopran (M), Medak (D.t) HYDERABAD 502336 TELANGA",
          "gst_no": "36AAGCM1053L1ZF",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "5c9bad00-53ac-462d-a576-9b27b4ec0662",
          "so_id": "SO-100000194-000049",
          "ref_po": "F.Y.2023-24/FY_2023-24_00112",
          "po_date": "2022-07-05",
          "contact_to": {
              "id": "b3c848b9-314c-4cd8-a746-44203383154b",
              "email": "sushil.patil@autopeepal.com",
              "mobile": "97642 17073",
              "first_name": "SUSHIL",
              "last_name": "PATIL",
              "created_at": "2023-02-01T17:48:22.763987+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "c694728a-e9b0-4438-a0fe-821fcad252ce",
              "parts_no": {
                  "id": "361c36ad-6e35-4d34-a4fd-9094ed676578",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "07a8d1c5-ee0f-4e32-a961-987e9390a431",
                      "country_gst": [
                          {
                              "id": "39ee4763-271f-485a-b6fa-ec42ee97c0b7",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84713010",
                      "description": "AUTOMATIC DATA PROCESSING MACHINES AND UNITS THEREOF; MAGNETIC OR OPTICAL READERS, MACHINES FOR TRANSCRIBING DATA ON TO DATA MEDIA IN CODED FORM AND MACHINES FOR PROCESSING SUCH DATA, NOT ELSEWHERE SPECIFIED OR INCLUDED - PORTABLE AUTOMATIC DATA PROCESSING MACHINES, WEIGHING NOT MORE THAN 10 KG, CONSISTING OF AT LEAST A CENTRAL PROCESSING UNIT, A KEYBOARD AND A DISPLAY:PERSONAL COMPUTER"
                  },
                  "created": "2023-08-17T14:22:44.090616+05:30",
                  "modified": "2023-08-17T15:32:13.348207+05:30",
                  "internal_part_no": "1000000442",
                  "part_number": "Lenovo  10.6 Tab M10",
                  "customer_part_number": "Lenovo  10.6 Tab M10",
                  "bom": false,
                  "short_description": "Lenovo  10.6 Tab M10 3rd  Generation wifi 6+1 128",
                  "long_description": "Lenovo  10.6 Tab M10 3rd  Generation wifi 6+1 128",
                  "mrp": 27500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 1,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-17T16:23:44.753004+05:30",
              "modified": "2023-08-17T16:23:44.753033+05:30",
              "quantity": 1,
              "customer_part_no": "Lenovo 10.6 Tab M10",
              "price": 27500,
              "warranty": 12,
              "short_description": "Lenovo  10.6 Tab M10 3rd  Generation wifi 6+1 128",
              "invoice": "72fcce27-aec8-467c-8cba-378e7b827098",
              "part": "84877ff7-2703-4835-b3fa-17efdb5d0b81"
          }
      ],
      "created": "2023-08-17T16:21:58.888697+05:30",
      "modified": "2023-08-17T16:23:04.588933+05:30",
      "invoice_number": "INV-100000244-0000000003",
      "po_number": "F.Y.2023-23-24/FY_2023-24_00112",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-05",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "8a3e34c8-4c0c-4fb5-8aa5-9694558e0bfe",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "d96a42ae-32ce-4cbc-b29c-9535226ef13b",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T19:22:12.658798+05:30",
              "modified": "2023-07-10T19:22:12.658832+05:30",
              "quantity": 50,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "8a3e34c8-4c0c-4fb5-8aa5-9694558e0bfe",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2023-07-10T19:21:38.340941+05:30",
      "modified": "2023-07-10T19:23:55.255055+05:30",
      "invoice_number": "INV-100000024-0000000015",
      "po_number": "1831123030",
      "payment_date": "2023-07-10",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-08",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "066ee0e6-e894-40c8-a0ec-480fa04fba0f",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "293235cd-d0d3-4931-8ecb-874f6b9f1d1d",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:22:22.746473+05:30",
          "modified": "2023-07-09T12:22:22.746501+05:30",
          "address": "Plot No. 52/1, 52/2, Indore Ratlam Highway, Village Baggad, Dist. Dhar, M. P. - 454666.",
          "gst_no": "23AABCE9378F1ZK",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "293235cd-d0d3-4931-8ecb-874f6b9f1d1d",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:22:22.746473+05:30",
          "modified": "2023-07-09T12:22:22.746501+05:30",
          "address": "Plot No. 52/1, 52/2, Indore Ratlam Highway, Village Baggad, Dist. Dhar, M. P. - 454666.",
          "gst_no": "23AABCE9378F1ZK",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "4eb85dfb-c9e5-461f-b1de-eb75079d816b",
          "so_id": "SO-100000194-000042",
          "ref_po": "1621669302",
          "po_date": "2023-06-13",
          "contact_to": null
      },
      "dept": {
          "id": "981c0f4f-59ce-4252-8529-f1da0f5afe99",
          "name": "SLS-KAM-NORTH"
      },
      "parts_invoice": [
          {
              "id": "0b99fcba-7376-421d-a3d8-bbd1de0343b7",
              "parts_no": {
                  "id": "428c6fd0-003f-4402-95ce-e66b23a06aff",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "c4f6dcfe-a9f2-4672-b0a3-c36a375bedee",
                      "country_gst": [
                          {
                              "id": "01aacd4b-1424-439a-8c10-880754871eca",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90138090",
                      "description": "LIQUID CRYSTAL DEVICES NOT CONSTITUTING ARTICLES PROVIDED FOR MORE SPECIFICALLY IN OTHER HEADINGS; LASERS, OTHER THAN LASER DIODES; OTHER OPTICAL APPLIANCES AND INSTRUMENTS, NOT SPECIFIED OR INCLUDED ELSE WHERE IN THIS CHAPTER - OTHER DEVICES, APPLIANCES AND INSTRUMENTS: OTHER"
                  },
                  "created": "2023-07-10T19:40:16.330007+05:30",
                  "modified": "2023-07-10T19:40:16.335688+05:30",
                  "internal_part_no": "1000000427",
                  "part_number": "NLAG0001 - Wi Fi Dongles ( VCI for Bus )",
                  "customer_part_number": "NLAG0001",
                  "bom": false,
                  "short_description": "NLAG0001 - Wi Fi Dongles ( VCI for Bus )",
                  "long_description": "NLAG0001 - Wi Fi Dongles ( VCI for Bus )",
                  "mrp": 8500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 8500,
                  "manufacturer": "3428dad6-d242-4c7e-a0a0-460f896223d7",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T19:55:55.079910+05:30",
              "modified": "2023-07-10T19:58:23.646223+05:30",
              "quantity": 2,
              "customer_part_no": "NLAG001",
              "price": 8500,
              "warranty": 12,
              "short_description": "NLAG0001 - Wi Fi Dongles ( VCI for Bus )",
              "invoice": "066ee0e6-e894-40c8-a0ec-480fa04fba0f",
              "part": "637b9fcd-7f78-4108-ab7f-e1ec5e4eb459"
          }
      ],
      "created": "2023-07-10T19:54:48.946162+05:30",
      "modified": "2023-07-10T19:54:48.950827+05:30",
      "invoice_number": "INV-100000024-0000000016",
      "po_number": "1621669302",
      "payment_date": "2023-07-10",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-13",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "02cc0e68-76c0-43a7-9e2c-e47bb804d71e",
      "org": {
          "id": "9cb89f15-4b32-47b0-b499-c331093ac8ea",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-20T10:33:12.269771+05:30",
          "modified": "2023-07-14T18:29:15.913210+05:30",
          "org_code": "100000025",
          "company_type": "pvt_ltd",
          "company_name": "Bajaj Auto Ltd",
          "logo": "http://143.244.142.0/media/banner/Bajaj.png",
          "address": "Akurdi, Pune - 411035",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "66a48284-f132-4821-a3d6-fd400cdd748f",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 4,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "f5a9ea5a-c203-49b1-b49a-57e7e5b99a79",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "66a48284-f132-4821-a3d6-fd400cdd748f",
              "created": "2021-08-23T21:49:01.292432+05:30",
              "modified": "2021-08-23T21:49:01.293702+05:30",
              "pin_code": "411035",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:42:47.054266+05:30",
          "modified": "2023-07-03T14:42:47.054300+05:30",
          "address": "Corporate Building 51A Mumbai Pune Road Akurdi Maharashtra",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "f5a9ea5a-c203-49b1-b49a-57e7e5b99a79",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "66a48284-f132-4821-a3d6-fd400cdd748f",
              "created": "2021-08-23T21:49:01.292432+05:30",
              "modified": "2021-08-23T21:49:01.293702+05:30",
              "pin_code": "411035",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:42:47.054266+05:30",
          "modified": "2023-07-03T14:42:47.054300+05:30",
          "address": "Corporate Building 51A Mumbai Pune Road Akurdi Maharashtra",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 2
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "0acea27d-895c-4ff0-93b7-f9890311785d",
          "so_id": "SO-100000194-000043",
          "ref_po": "7710015890",
          "po_date": "2023-06-28",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "a2ea2fff-ca01-4372-a9af-d422ba385d1f",
              "parts_no": {
                  "id": "e5540c5e-ca5b-4464-90d0-8a005602ecd8",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a40ee02f-83d5-4d76-93a7-396949f93ae8",
                      "country_gst": [
                          {
                              "id": "647b10f8-c59f-439e-b58f-d5783fb768fa",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90138010",
                      "description": "LIQUID CRYSTAL DEVICES NOT CONSTITUTING ARTICLES PROVIDED FOR MORE SPECIFICALLY IN OTHER HEADINGS; LASERS, OTHER THAN LASER DIODES; OTHER OPTICAL APPLIANCES AND INSTRUMENTS, NOT SPECIFIED OR INCLUDED ELSE WHERE IN THIS CHAPTER - OTHER DEVICES, APPLIANCES AND INSTRUMENTS: LIQUID CRYSTAL DEVICES (LCD)"
                  },
                  "created": "2023-07-10T20:10:56.995397+05:30",
                  "modified": "2023-07-10T20:10:57.000711+05:30",
                  "internal_part_no": "1000000428",
                  "part_number": "62736032 - Vehicle Communication Interface",
                  "customer_part_number": "62736032",
                  "bom": false,
                  "short_description": "62736032 - Vehicle Communication Interface",
                  "long_description": "62736032 - Vehicle Communication Interface",
                  "mrp": 7000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12",
                  "packing_charge": 0,
                  "manufacturer": "3428dad6-d242-4c7e-a0a0-460f896223d7",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T20:23:48.624756+05:30",
              "modified": "2023-07-10T20:23:48.624797+05:30",
              "quantity": 24,
              "customer_part_no": "62736032",
              "price": 7000,
              "warranty": 12,
              "short_description": "62736032 - Vehicle Communication Interface",
              "invoice": "02cc0e68-76c0-43a7-9e2c-e47bb804d71e",
              "part": "c014b587-3e30-4695-a405-dfbdd833bd3a"
          }
      ],
      "created": "2023-07-10T20:23:02.581671+05:30",
      "modified": "2023-07-10T20:23:02.585531+05:30",
      "invoice_number": "INV-100000025-0000000002",
      "po_number": "7710015890",
      "payment_date": "2023-07-10",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-28",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "a0cb9358-aebe-437a-9ec8-6f566a407740",
      "org": {
          "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-08-09T11:10:23.069993+05:30",
          "modified": "2022-04-15T10:24:30.014366+05:30",
          "org_code": "100000010",
          "company_type": "proprietorship",
          "company_name": "Autopeepal Service Solutions",
          "logo": null,
          "address": "H202, Konark Exotica, Kesnand Road, Wagholi",
          "pan_no": "ASZPS4409E",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
          "payment_term": 2,
          "marketplace": null,
          "meta_tags": [],
          "role": []
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "f71a8877-8438-4a1d-b978-7e03de52bc76",
          "org": {
              "company_name": "Autopeepal Technologies Private Limited",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          },
          "pincode": {
              "id": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
              "created": "2021-08-12T10:17:36.169402+05:30",
              "modified": "2021-08-23T21:49:01.801948+05:30",
              "pin_code": "412207",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:53:05.234248+05:30",
          "modified": "2022-06-18T15:53:05.234283+05:30",
          "address": "No 11 & 12, 4th Floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "gst_no": "27AATCA4258N1ZW",
          "gst_cert": "http://143.244.142.0/media/organization/gst/AA270522043653C_RC_24052022_GST.pdf",
          "address_type": 2
      },
      "shipping_address": {
          "id": "f71a8877-8438-4a1d-b978-7e03de52bc76",
          "org": {
              "company_name": "Autopeepal Technologies Private Limited",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          },
          "pincode": {
              "id": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
              "created": "2021-08-12T10:17:36.169402+05:30",
              "modified": "2021-08-23T21:49:01.801948+05:30",
              "pin_code": "412207",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:53:05.234248+05:30",
          "modified": "2022-06-18T15:53:05.234283+05:30",
          "address": "No 11 & 12, 4th Floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "gst_no": "27AATCA4258N1ZW",
          "gst_cert": "http://143.244.142.0/media/organization/gst/AA270522043653C_RC_24052022_GST.pdf",
          "address_type": 2
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "1f433de1-2316-450b-9f43-a7bf86f3c3cb",
          "so_id": "SO-100000194-000044",
          "ref_po": "Verbal",
          "po_date": "2023-06-30",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "64149492-3dc9-4d63-a11a-e05dbeb92eb5",
              "parts_no": {
                  "id": "9ad9c5d5-d52f-4063-9221-270b5109df36",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a40ee02f-83d5-4d76-93a7-396949f93ae8",
                      "country_gst": [
                          {
                              "id": "647b10f8-c59f-439e-b58f-d5783fb768fa",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90138010",
                      "description": "LIQUID CRYSTAL DEVICES NOT CONSTITUTING ARTICLES PROVIDED FOR MORE SPECIFICALLY IN OTHER HEADINGS; LASERS, OTHER THAN LASER DIODES; OTHER OPTICAL APPLIANCES AND INSTRUMENTS, NOT SPECIFIED OR INCLUDED ELSE WHERE IN THIS CHAPTER - OTHER DEVICES, APPLIANCES AND INSTRUMENTS: LIQUID CRYSTAL DEVICES (LCD)"
                  },
                  "created": "2023-07-10T20:32:06.620789+05:30",
                  "modified": "2023-07-10T20:32:06.625697+05:30",
                  "internal_part_no": "1000000429",
                  "part_number": "C15752223RD001 OBD/NCD TOOL DEVELOPMENT COST",
                  "customer_part_number": "C15752223RD001 OBD/NCD TOOL DEVELOPMENT COST",
                  "bom": false,
                  "short_description": "C15752223RD001 OBD/NCD TOOL DEVELOPMENT COST",
                  "long_description": "C15752223RD001 OBD/NCD TOOL DEVELOPMENT COST",
                  "mrp": 1715000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 1715000,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-07-10T20:38:13.969342+05:30",
              "modified": "2023-07-10T20:38:13.969370+05:30",
              "quantity": 1,
              "customer_part_no": "C15752223RD001",
              "price": 1715000,
              "warranty": 12,
              "short_description": "C15752223RD001 OBD/NCD TOOL DEVELOPMENT COST",
              "invoice": "a0cb9358-aebe-437a-9ec8-6f566a407740",
              "part": null
          }
      ],
      "created": "2023-07-10T20:37:35.526024+05:30",
      "modified": "2023-07-10T20:37:35.530284+05:30",
      "invoice_number": "INV-100000010-0000000004",
      "po_number": "VERBAL",
      "payment_date": "2023-07-10",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "7e109569-68b2-4860-adc7-14ca0f638d91",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 3,
          "term": "15 Days"
      },
      "created_by": {
          "id": "7f052cef-e88c-4932-b9e1-62582503e902",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9075281570",
          "email": "nitin.sonmale@autopeepal.com",
          "org": {
              "id": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
              "company_name": "Autopeepal Service Solutions",
              "logo": null,
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "95839da6-16a7-45f2-938c-5b02dc4a6aa3",
          "so_id": "SO-100000010-000006",
          "ref_po": "1831119007",
          "po_date": "2022-07-12",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [],
      "created": "2022-07-24T15:01:38.452564+05:30",
      "modified": "2023-07-15T09:41:00.668823+05:30",
      "invoice_number": "INV-100000024-0000000005",
      "po_number": "SO-1000000-000006",
      "payment_date": "2022-07-24",
      "delivery_term": "delivered",
      "invoice_date": "2022-05-10",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO.",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "f33f6953-07a6-4b29-afe2-1a71c9a141a6",
      "org": {
          "id": "48914c13-8374-45f6-a673-f3d309a31a22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-06T12:28:53.556311+05:30",
          "modified": "2023-07-14T18:31:53.841252+05:30",
          "org_code": "100000189",
          "company_type": "proprietorship",
          "company_name": "Kirloskar Oil Engines Ltd",
          "logo": "http://143.244.142.0/media/banner/Kirloskar.png",
          "address": "laxman rao kirloskar road khadaki",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "d992848a-e686-49c5-9030-1b9bcd4005b5",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "685f917b-9425-4687-8b63-ad54e12adf50",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "d992848a-e686-49c5-9030-1b9bcd4005b5",
              "created": "2021-08-23T21:49:01.320604+05:30",
              "modified": "2021-08-23T21:49:01.339196+05:30",
              "pin_code": "411003",
              "state": null,
              "district": "6e0d941b-e8ce-4e32-bf40-ceeb9e86fc00"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:41:41.490152+05:30",
          "modified": "2023-05-11T17:41:41.490180+05:30",
          "address": "KIRLOSKAR OIL ENGINES LTD. 13 L. K. ROAD, KHADKI, PUNE,Maharashtra INDIA",
          "gst_no": "27AADCK5714H1ZK",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "7a79b2f1-1d10-4510-b99b-f2e9453e7e1e",
          "first_name": "Nitin",
          "last_name": "Sonmale",
          "mobile": "9529279654",
          "email": "nitin.sonmale.atpl@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "23eedb36-ce30-46f8-99ec-91686c7a29a7",
          "so_id": "SO-100000194-000018",
          "ref_po": "7023039567",
          "po_date": "2023-02-21",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "53a22da0-4b55-4e2c-81c3-1099583bb6d7",
              "parts_no": {
                  "id": "04241fa4-904c-4338-ab67-9dc6e9590f85",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "e04bcbc6-0ea6-4b19-8cbc-5a7407bd0e1a",
                      "country_gst": [
                          {
                              "id": "948875f0-6351-447c-8039-bd1c80fefd1a",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84621011",
                      "description": "MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY FORGING, HAMMERING OR DIE-STAMPING; MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY BENDING, FOLDING, STRAIGHTENING, FLATTENING, SHEARING, PUNCHING OR NOTCHING; PRESSES FOR WORKING METAL OR METAL CARBIDES, NOT SPECIFIED ABOVE - FORGING OR DIE-STAMPING MACHINES (INCLUDING PRESSES) AND HAMMERS: HAMMERS: STEAM OR AIR, SINGLE FRAME"
                  },
                  "created": "2023-06-26T14:28:20.324133+05:30",
                  "modified": "2023-07-07T19:45:40.862209+05:30",
                  "internal_part_no": "1000000407",
                  "part_number": "9900050000 Parallel Flashing  Solution - for R810 Lines",
                  "customer_part_number": "9900050000 Parallel Flashing  Solution - for R810 Lines",
                  "bom": false,
                  "short_description": "9900050000 Parallel Flashing  Solution - for R810 Lineso",
                  "long_description": "( Software Licenses , VCL - Ethernet , PC , Scanner, etc.)",
                  "mrp": 921000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-07-07T21:45:00.935841+05:30",
              "modified": "2023-07-07T21:47:02.926194+05:30",
              "quantity": 2,
              "customer_part_no": "4K/6K & SL90 Lines",
              "price": 892000,
              "warranty": 12,
              "short_description": "9900050000 Parallel Flashing  Solution - for 4K/6K & SL90 Lines",
              "invoice": "f33f6953-07a6-4b29-afe2-1a71c9a141a6",
              "part": null
          }
      ],
      "created": "2023-07-07T21:41:59.847215+05:30",
      "modified": "2023-07-15T09:42:57.032131+05:30",
      "invoice_number": "INV-100000189-0000000004",
      "po_number": "702303567",
      "payment_date": "2023-07-07",
      "delivery_term": "delivered",
      "invoice_date": "2023-06-30",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "NO",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "84aa896f-2881-456f-b84f-2320c00eb1db",
      "org": {
          "id": "65260d2d-3f85-42e0-98b0-810b493201c0",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-26T15:36:09.574435+05:30",
          "modified": "2023-07-14T18:32:59.023485+05:30",
          "org_code": "100000029",
          "company_type": "pvt_ltd",
          "company_name": "Piaggio Vehicles Pvt Ltd",
          "logo": "http://143.244.142.0/media/banner/Piaggio.jpeg",
          "address": "SKY ONE’ 8th Floor, S.No.210, Final Plot No. 72, Town Planning Scheme, Yerwada No 1, Kalyani Nagar",
          "pan_no": "pan",
          "pan_cert": null,
          "pincode": "da2c6740-59f7-4def-8c09-b215b62ef21c",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "aee39198-f00a-409a-900c-09eb3a3acbef",
          "org": {
              "company_name": "Piaggio Vehicles Pvt Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "5943ebb7-9284-4be1-ab4c-09bb083db31e",
              "created": "2021-08-23T21:49:01.767842+05:30",
              "modified": "2021-08-23T21:49:01.769133+05:30",
              "pin_code": "413133",
              "state": null,
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:33:35.279376+05:30",
          "modified": "2021-11-19T16:33:35.279404+05:30",
          "address": "E2, MIDC Area, Baramati, Maharashtra",
          "gst_no": "27AABCP1225G1ZT",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "aee39198-f00a-409a-900c-09eb3a3acbef",
          "org": {
              "company_name": "Piaggio Vehicles Pvt Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "5943ebb7-9284-4be1-ab4c-09bb083db31e",
              "created": "2021-08-23T21:49:01.767842+05:30",
              "modified": "2021-08-23T21:49:01.769133+05:30",
              "pin_code": "413133",
              "state": null,
              "district": "6fe108d3-6b10-44e0-8998-2aea7ac2b827"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:33:35.279376+05:30",
          "modified": "2021-11-19T16:33:35.279404+05:30",
          "address": "E2, MIDC Area, Baramati, Maharashtra",
          "gst_no": "27AABCP1225G1ZT",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "19fa28e3-1b2c-497f-aa2b-a19b7466b16e",
          "so_id": "SO-100000194-000048",
          "ref_po": "7000025587",
          "po_date": "2023-07-21",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "58bd2c67-c3f4-4a11-aec6-a192187bd2ec",
              "parts_no": {
                  "id": "34c94bdb-3046-41a8-8ebc-63ecbc72039e",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-07-20T16:07:37.179410+05:30",
                  "modified": "2023-08-17T17:52:46.172474+05:30",
                  "internal_part_no": "1000000431",
                  "part_number": "G435 Addition in PATT",
                  "customer_part_number": "G435 Addition in PATT",
                  "bom": false,
                  "short_description": "G435 Addition in PATT tool & Diagnostics adviser tool",
                  "long_description": "G435 Addition in PATT tool & Diagnostics adviser tool",
                  "mrp": 300000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-17T18:02:41.103815+05:30",
              "modified": "2023-08-17T18:02:41.103850+05:30",
              "quantity": 1,
              "customer_part_no": "G435 Addition in PATT",
              "price": 500000,
              "warranty": 12,
              "short_description": "G435 Addition in PATT tool & Diagnostics adviser tool",
              "invoice": "84aa896f-2881-456f-b84f-2320c00eb1db",
              "part": null
          }
      ],
      "created": "2023-08-17T17:33:51.606318+05:30",
      "modified": "2023-08-17T17:33:51.612309+05:30",
      "invoice_number": "INV-100000029-0000000001",
      "po_number": "7000025587",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-21",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "f69b96e4-8ba0-4aea-9a11-6c5412dc7d44",
      "org": {
          "id": "53fb793a-9a0b-4ce8-b88d-c259f8732e97",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-25T17:39:35.507211+05:30",
          "modified": "2023-07-14T18:04:20.673100+05:30",
          "org_code": "100000026",
          "company_type": "pvt_ltd",
          "company_name": "Greaves Cotton Limited",
          "logo": "http://143.244.142.0/media/banner/Greaves.png",
          "address": "Chinchwad",
          "pan_no": "pan",
          "pan_cert": null,
          "pincode": "3fb78074-ca10-4b68-8193-00e486c805f0",
          "contact_person": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "fb457513-7de8-469a-b1e6-5c5666f6f6b8"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "8af8fd44-912f-4bdf-b836-b2739c3f3b07",
          "so_id": "SO-100000194-000050",
          "ref_po": "5750000730/0",
          "po_date": "2023-07-03",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "e08c20bc-b93d-4651-abe2-0615409058c5",
              "parts_no": {
                  "id": "65e831cc-5152-4663-9b8f-0b7573fadb33",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-08-17T12:23:42.422459+05:30",
                  "modified": "2023-08-17T18:24:07.525305+05:30",
                  "internal_part_no": "1000000434",
                  "part_number": "MSC090002 EOL ECU FLASHING -Application for GCL",
                  "customer_part_number": "MSC090002 EOL ECU FLASHING -Application for GCL",
                  "bom": false,
                  "short_description": "MSC090002 EOL ECU FLASHING -Application for GCL",
                  "long_description": "MSC090002 EOL ECU FLASHING -Application for GCL",
                  "mrp": 285000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-17T18:24:17.178916+05:30",
              "modified": "2023-08-17T18:24:17.178948+05:30",
              "quantity": 1,
              "customer_part_no": "MSC090002",
              "price": 285000,
              "warranty": 12,
              "short_description": "MSC090002 EOL ECU FLASHING -Application for GCL",
              "invoice": "f69b96e4-8ba0-4aea-9a11-6c5412dc7d44",
              "part": null
          }
      ],
      "created": "2023-08-17T18:20:09.994093+05:30",
      "modified": "2023-08-17T18:20:09.999911+05:30",
      "invoice_number": "INV-100000026-0000000003",
      "po_number": "5750000730/0",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-21",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "380c8e52-e503-4054-859f-0bc84a297e51",
      "org": {
          "id": "6c63d4f2-3681-4e2d-8ff8-d33a785d9bb2",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T18:31:43.657695+05:30",
          "modified": "2023-08-17T18:31:43.660728+05:30",
          "org_code": "100000491",
          "company_type": "proprietorship",
          "company_name": "SAI AUTOMOBILE",
          "logo": null,
          "address": "D. No. 26/335-13, Opp - Central Warehouse Godown, Railway Station Road, Nandyal, A. P., India.",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "6d84ac71-e54c-4bde-bb9a-c61ce1828020",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "e2a0c068-a932-482a-90ed-d399c3e23ec3",
          "org": {
              "company_name": "SAI AUTOMOBILE",
              "contact_person": null
          },
          "pincode": {
              "id": "6d84ac71-e54c-4bde-bb9a-c61ce1828020",
              "created": "2021-08-23T21:48:22.128823+05:30",
              "modified": "2021-08-23T21:48:22.130181+05:30",
              "pin_code": "518501",
              "state": null,
              "district": "7deb1001-089a-4662-8c16-5acc34f9b2ef"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T18:39:28.730297+05:30",
          "modified": "2023-08-17T18:39:28.730332+05:30",
          "address": "D. No. 26/335-13, Opp - Central Warehouse Godown, Railway Station Road, Nandyal, A. P., India.",
          "gst_no": "37ADHFS5916P1ZA",
          "gst_cert": null,
          "address_type": 1
      },
      "shipping_address": {
          "id": "e2a0c068-a932-482a-90ed-d399c3e23ec3",
          "org": {
              "company_name": "SAI AUTOMOBILE",
              "contact_person": null
          },
          "pincode": {
              "id": "6d84ac71-e54c-4bde-bb9a-c61ce1828020",
              "created": "2021-08-23T21:48:22.128823+05:30",
              "modified": "2021-08-23T21:48:22.130181+05:30",
              "pin_code": "518501",
              "state": null,
              "district": "7deb1001-089a-4662-8c16-5acc34f9b2ef"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T18:39:28.730297+05:30",
          "modified": "2023-08-17T18:39:28.730332+05:30",
          "address": "D. No. 26/335-13, Opp - Central Warehouse Godown, Railway Station Road, Nandyal, A. P., India.",
          "gst_no": "37ADHFS5916P1ZA",
          "gst_cert": null,
          "address_type": 1
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "55bb2450-9797-426c-95a8-15df49e06111",
          "so_id": "SO-100000194-000051",
          "ref_po": "Verbal",
          "po_date": "2023-07-27",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "6057874e-9a6d-4605-b759-f8624156a025",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-17T18:45:18.245805+05:30",
              "modified": "2023-08-17T18:45:18.245836+05:30",
              "quantity": 1,
              "customer_part_no": "Dongle Repairing",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "380c8e52-e503-4054-859f-0bc84a297e51",
              "part": null
          }
      ],
      "created": "2023-08-17T18:43:36.363135+05:30",
      "modified": "2023-08-17T18:43:36.369209+05:30",
      "invoice_number": "INV-100000491-0000000001",
      "po_number": "Verbal",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-27",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "6e3b84a9-72ab-4cba-aad4-907a3e88418b",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "a784b1cb-91a8-4e19-8bfe-6ba5bad90353",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-17T19:51:03.646924+05:30",
              "modified": "2023-08-17T19:51:03.646953+05:30",
              "quantity": 150,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "6e3b84a9-72ab-4cba-aad4-907a3e88418b",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2023-08-17T19:48:46.969170+05:30",
      "modified": "2023-08-17T19:48:46.974038+05:30",
      "invoice_number": "INV-100000024-0000000017",
      "po_number": "1831123030",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "55bd90aa-527a-404b-98a4-c2550b07976e",
      "org": {
          "id": "48914c13-8374-45f6-a673-f3d309a31a22",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-07-06T12:28:53.556311+05:30",
          "modified": "2023-07-14T18:31:53.841252+05:30",
          "org_code": "100000189",
          "company_type": "proprietorship",
          "company_name": "Kirloskar Oil Engines Ltd",
          "logo": "http://143.244.142.0/media/banner/Kirloskar.png",
          "address": "laxman rao kirloskar road khadaki",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "d992848a-e686-49c5-9030-1b9bcd4005b5",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "41355405-ddd1-47f1-a942-5b1d23091efe",
          "org": {
              "company_name": "Kirloskar Oil Engines Ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "2d19391c-c7b2-499d-b7b8-1f9851190f60",
              "created": "2021-08-23T21:48:57.057787+05:30",
              "modified": "2021-08-23T21:48:57.058863+05:30",
              "pin_code": "416236",
              "state": null,
              "district": "5aa82bde-c7bf-4798-a1a3-62caffae2c14"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-05-11T17:47:51.709150+05:30",
          "modified": "2023-05-11T17:47:51.709185+05:30",
          "address": "D1, 5 Star MIDC Industrial Area Kagal, Talandage, Maharashtra",
          "gst_no": null,
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 3,
          "term": "15 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "2876b6f9-f6d1-492f-b1c0-c55e2adc16b7",
          "so_id": "SO-100000194-000052",
          "ref_po": "7024014932",
          "po_date": "2023-07-29",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "a94e4218-40fb-4672-84bc-c4520a7ef7e2",
              "parts_no": {
                  "id": "cd16e08c-0e5a-4607-9d40-d7126a73103c",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "db5aaa14-6314-4970-a3f2-73d718274908",
                      "country_gst": [
                          {
                              "id": "fb4c8845-5652-4018-9342-07fa916c1d5e",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84621019",
                      "description": "MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY FORGING, HAMMERING OR DIE-STAMPING; MACHINE-TOOLS (INCLUDING PRESSES) FOR WORKING METAL BY BENDING, FOLDING, STRAIGHTENING, FLATTENING, SHEARING, PUNCHING OR NOTCHING; PRESSES FOR WORKING METAL OR METAL CARBIDES, NOT SPECIFIED ABOVE - FORGING OR DIE-STAMPING MACHINES (INCLUDING PRESSES) AND HAMMERS: HAMMERS: OTHER"
                  },
                  "created": "2023-08-17T14:36:24.967726+05:30",
                  "modified": "2023-08-17T19:20:30.969018+05:30",
                  "internal_part_no": "1000000444",
                  "part_number": "99.000.50.0.00 (84621011) VCI Kit",
                  "customer_part_number": "99.000.50.0.00 (84621011) VCI Kit",
                  "bom": false,
                  "short_description": "99.000.50.0.00 (84621011) VCI Kit",
                  "long_description": "99.000.50.0.00 (84621011) VCI Kit",
                  "mrp": 11000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "3428dad6-d242-4c7e-a0a0-460f896223d7",
                  "part_category": 1,
                  "sub_category": 8,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-17T20:13:49.413881+05:30",
              "modified": "2023-08-17T20:16:24.592766+05:30",
              "quantity": 30,
              "customer_part_no": "99.000.50.0.00",
              "price": 11000,
              "warranty": 12,
              "short_description": "99.000.50.0.00 (84621011) VCI Kit",
              "invoice": "55bd90aa-527a-404b-98a4-c2550b07976e",
              "part": "3038bdf9-aee9-4b9f-aecf-5c3c7312e2e4"
          }
      ],
      "created": "2023-08-17T20:12:47.508823+05:30",
      "modified": "2023-08-17T20:12:47.516089+05:30",
      "invoice_number": "INV-100000189-0000000005",
      "po_number": "7024014932",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-31",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "0c2ba27b-167e-4458-8c2d-2344c3664846",
      "org": {
          "id": "9cb89f15-4b32-47b0-b499-c331093ac8ea",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-20T10:33:12.269771+05:30",
          "modified": "2023-07-14T18:29:15.913210+05:30",
          "org_code": "100000025",
          "company_type": "pvt_ltd",
          "company_name": "Bajaj Auto Ltd",
          "logo": "http://143.244.142.0/media/banner/Bajaj.png",
          "address": "Akurdi, Pune - 411035",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "66a48284-f132-4821-a3d6-fd400cdd748f",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 4,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "e612091b-c952-4a56-af62-6581dea91c35",
          "so_id": "SO-100000194-000046",
          "ref_po": "5210043280",
          "po_date": "2023-07-18",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "48dfa373-a13a-4693-b84d-231043815847",
              "parts_no": {
                  "id": "cf1ddb4a-e0c9-4619-b5b4-cc86f0ddb723",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "2aa82fc0-6621-4cb7-95c4-bc6114bfa903",
                      "country_gst": [
                          {
                              "id": "2538093c-89e2-4cb4-9cd7-8f1540921fb7",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85443000",
                      "description": "INSULATED (INCLUDING ENAMELLED OR ANODISED) WIRE, CABLE (INCLUDING CO-AXIAL CABLE) AND OTHER INSULATED ELECTRIC CONDUCTORS, WHETHER OR NOT FITTED WITH CONNECTORS; OPTICAL FIBRE CABLES, MADE UP OF INDIVIDUALLY SHEATHED FIBRES, WHETHER OR NOT ASSEMBLED WITH ELECTRIC CONDUCTORS OR FITTED WITH CONNECTORS - IGNITION WIRING SETS AND OTHER WIRING SETS OF A KIND USED IN VEHICLES, AIRCRAFT OR SHIPS"
                  },
                  "created": "2023-06-26T15:09:41.812436+05:30",
                  "modified": "2023-07-10T19:33:14.574291+05:30",
                  "internal_part_no": "1000000416",
                  "part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "customer_part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "bom": false,
                  "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "long_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "mrp": 7000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 1,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-17T21:31:30.778280+05:30",
              "modified": "2023-08-17T21:31:30.778310+05:30",
              "quantity": 50,
              "customer_part_no": "36JY0360",
              "price": 7000,
              "warranty": 12,
              "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
              "invoice": "0c2ba27b-167e-4458-8c2d-2344c3664846",
              "part": "ea848dec-0408-450b-bb00-c32dfa45fee5"
          }
      ],
      "created": "2023-08-17T21:30:14.157212+05:30",
      "modified": "2023-08-17T21:30:14.162499+05:30",
      "invoice_number": "INV-100000025-0000000004",
      "po_number": "5210043280",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-24",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "c1e52d81-f5d1-4280-ae73-e91252c7d5b9",
      "org": {
          "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:51:26.342889+05:30",
          "modified": "2023-07-14T17:26:20.626211+05:30",
          "org_code": "100000194",
          "company_type": "pvt_ltd",
          "company_name": "Autopeepal Technologies Private Limited",
          "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
          "address": "No 11 & 12, 4th floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "pan_no": "AATCA4258N",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "62c2024a-d35e-45c3-bd6b-65f7c821dff7",
              "e4319fd9-7f91-49cc-b3c7-039a071f995c",
              "8a75ff00-e101-48bc-9a0c-494732bd3fd5",
              "85adef4e-ca07-4535-a26b-558d547d21a3",
              "34ed45a9-477b-4bf6-9fcc-1de3653c1ad3",
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356",
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b",
              "923b302e-c256-4452-a53f-43f20d304654",
              "f8ace281-782b-43b8-985e-5abfbfb60b27",
              "425a04cd-b148-4183-bf4e-b436ad59471a"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "691907da-a45d-4f9a-a9ad-a10d4dacecbf",
          "org": {
              "company_name": "Royal Enfield pvt ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "9b9fd8f5-6231-4955-9d36-8dcf0f1cf457",
              "created": "2021-08-23T21:49:22.545726+05:30",
              "modified": "2021-08-23T21:49:22.546912+05:30",
              "pin_code": "602105",
              "state": null,
              "district": "9bda52ca-296b-4f37-a396-41ef8b8ae9ab"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-06-08T10:48:59.802381+05:30",
          "modified": "2023-06-08T10:48:59.802476+05:30",
          "address": "Royal Enfield, ORG (A unit of Eicher Motors Ltd.) PLOT NO.A-19/1, SIPCOT INDUSTRIAL GROWTH CENTRE, 602105 ORAGADAM-KANCHEEPURAM INDIA",
          "gst_no": "33AAACE3882D1ZZ",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "691907da-a45d-4f9a-a9ad-a10d4dacecbf",
          "org": {
              "company_name": "Royal Enfield pvt ltd",
              "contact_person": null
          },
          "pincode": {
              "id": "9b9fd8f5-6231-4955-9d36-8dcf0f1cf457",
              "created": "2021-08-23T21:49:22.545726+05:30",
              "modified": "2021-08-23T21:49:22.546912+05:30",
              "pin_code": "602105",
              "state": null,
              "district": "9bda52ca-296b-4f37-a396-41ef8b8ae9ab"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-06-08T10:48:59.802381+05:30",
          "modified": "2023-06-08T10:48:59.802476+05:30",
          "address": "Royal Enfield, ORG (A unit of Eicher Motors Ltd.) PLOT NO.A-19/1, SIPCOT INDUSTRIAL GROWTH CENTRE, 602105 ORAGADAM-KANCHEEPURAM INDIA",
          "gst_no": "33AAACE3882D1ZZ",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "469cb75b-6ec5-4dab-bbfc-e8f5ae74925c",
          "so_id": "SO-100000194-000053",
          "ref_po": "4723000742",
          "po_date": "2023-07-31",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "f9c99957-36b7-43b2-ab4b-f0c1ebc8605c",
              "parts_no": {
                  "id": "bdb0b97d-bb78-412f-b8d3-056ebb62384e",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "c143ee4d-1c2e-45b8-9c3e-5840959599ed",
                      "country_gst": [
                          {
                              "id": "633aa641-1fe8-446d-b2a3-8ce4d56b888b",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "84663020",
                      "description": "PARTS AND ACCESSORIES SUITABLE FOR USE SOLELY OR PRINCIPALLY WITH THE MACHINES OF HEADINGS 8456 TO 8465, INCLUDING WORK OR TOOL HOLDERS, SELF-OPENING DIEHEADS, DIVIDING HEADS AND OTHER SPECIAL ATTACHMENTS FOR MACHINE-TOOLS; TOOL HOLDERS FOR ANY TYPE OF TOOL, FOR WORKING IN THE HAND - DIVIDING HEADS AND OTHER SPECIAL ATTACHMENTS FOR MACHINE-TOOLS: JIGS AND FIXTURES"
                  },
                  "created": "2023-07-03T17:34:19.673806+05:30",
                  "modified": "2023-08-17T21:56:35.504137+05:30",
                  "internal_part_no": "1000000421",
                  "part_number": "CIJVA583",
                  "customer_part_number": "CIJVA583",
                  "bom": false,
                  "short_description": "CIJVA583",
                  "long_description": "CIJVA583 -MULTI ECU PARALLEL FLASHING WORKSTATION",
                  "mrp": 800000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": null,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 15,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-17T21:59:06.688317+05:30",
              "modified": "2023-08-17T21:59:06.688361+05:30",
              "quantity": 1,
              "customer_part_no": "CIJVA",
              "price": 800000,
              "warranty": 12,
              "short_description": "CIJVA583",
              "invoice": "c1e52d81-f5d1-4280-ae73-e91252c7d5b9",
              "part": "6decd54f-561c-4c19-b983-2ee07b5e3484"
          }
      ],
      "created": "2023-08-17T21:57:49.215668+05:30",
      "modified": "2023-08-17T21:57:49.218811+05:30",
      "invoice_number": "INV-100000194-0000000002",
      "po_number": "4723000742",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-07-31",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "c2c7bcbe-43c6-464c-9bd6-8d3af0621007",
      "org": {
          "id": "3b8e34c0-be85-40be-8c5b-47aa36a4f9b8",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T22:04:17.887669+05:30",
          "modified": "2023-08-17T22:04:17.891145+05:30",
          "org_code": "100000492",
          "company_type": "proprietorship",
          "company_name": "Bharat Auto Tech",
          "logo": null,
          "address": "D.No.-217, Near Sree Sree Statue, ape circle,Bypass Road,Khammam-507002",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "a4e2eafc-0fa3-4d56-bb31-acb772c6a13e",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "a00ce938-614c-44e6-a619-cc99c80a5d60",
          "org": {
              "company_name": "Bharat Auto Tech",
              "contact_person": null
          },
          "pincode": {
              "id": "a4e2eafc-0fa3-4d56-bb31-acb772c6a13e",
              "created": "2021-08-23T21:49:33.040253+05:30",
              "modified": "2021-08-23T21:49:33.041403+05:30",
              "pin_code": "507002",
              "state": null,
              "district": "1192bcf8-5ae0-402f-aaeb-14b8c420b605"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T22:05:07.995404+05:30",
          "modified": "2023-08-17T22:05:07.995445+05:30",
          "address": "D.No.-217, Near Sree Sree Statue, ape circle,Bypass Road,Khammam-507002",
          "gst_no": "36AAZFB1699K1ZJ",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "a00ce938-614c-44e6-a619-cc99c80a5d60",
          "org": {
              "company_name": "Bharat Auto Tech",
              "contact_person": null
          },
          "pincode": {
              "id": "a4e2eafc-0fa3-4d56-bb31-acb772c6a13e",
              "created": "2021-08-23T21:49:33.040253+05:30",
              "modified": "2021-08-23T21:49:33.041403+05:30",
              "pin_code": "507002",
              "state": null,
              "district": "1192bcf8-5ae0-402f-aaeb-14b8c420b605"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-17T22:05:07.995404+05:30",
          "modified": "2023-08-17T22:05:07.995445+05:30",
          "address": "D.No.-217, Near Sree Sree Statue, ape circle,Bypass Road,Khammam-507002",
          "gst_no": "36AAZFB1699K1ZJ",
          "gst_cert": null,
          "address_type": 2
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "cb8c2780-6720-4514-90fb-ec652ec628b9",
          "so_id": "SO-100000194-000054",
          "ref_po": "Varbal",
          "po_date": "2023-08-09",
          "contact_to": {
              "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
              "email": "jayesh.dalvi@autopeepal.com",
              "mobile": "8208379814",
              "first_name": "Jayesh",
              "last_name": "Dalvi",
              "created_at": "2022-09-17T11:07:18.019560+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "8c9d471c-841b-484e-bba6-7a323f7c8c89",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-17T22:26:51.028316+05:30",
              "modified": "2023-08-17T22:26:51.028352+05:30",
              "quantity": 1,
              "customer_part_no": "Dongle Repairing",
              "price": 3500,
              "warranty": 12,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "c2c7bcbe-43c6-464c-9bd6-8d3af0621007",
              "part": null
          }
      ],
      "created": "2023-08-17T22:25:15.484319+05:30",
      "modified": "2023-08-17T22:25:15.489679+05:30",
      "invoice_number": "INV-100000492-0000000001",
      "po_number": "Verbal",
      "payment_date": "2023-08-17",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-09",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "02e7e24d-63a9-4e42-ac2d-6a3004c6edcd",
      "org": {
          "id": "2ab3e50e-58b2-42b5-8601-7d14c4ce5fed",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-18T12:03:29.088431+05:30",
          "modified": "2023-08-18T12:03:29.104059+05:30",
          "org_code": "100000493",
          "company_type": "proprietorship",
          "company_name": "ANDAL MOTORS",
          "logo": null,
          "address": "73/1, ANDAL MOTORS, NEAR TEACHERS COLONY BUS STOP, PERUNDURAI ROAD, Erode, Tamil Nadu, 638011",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "137f69fb-5f68-47ee-8e39-c22d96550a31",
          "contact_person": null,
          "payment_term": 1,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ab571dd0-8ee9-44cf-8340-7345d8ad5ea9",
          "org": {
              "company_name": "ANDAL MOTORS",
              "contact_person": null
          },
          "pincode": {
              "id": "137f69fb-5f68-47ee-8e39-c22d96550a31",
              "created": "2021-08-23T21:49:27.572647+05:30",
              "modified": "2021-08-23T21:49:27.573947+05:30",
              "pin_code": "638011",
              "state": null,
              "district": "e965194c-cf5a-4f8a-ac60-aa3b2789185a"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-18T12:04:51.844552+05:30",
          "modified": "2023-08-18T12:04:51.844592+05:30",
          "address": "73/1, ANDAL MOTORS, NEAR TEACHERS COLONY BUS STOP, PERUNDURAI ROAD, Erode, Tamil Nadu, 638011",
          "gst_no": "33AOBPP5598R1Z1",
          "gst_cert": null,
          "address_type": 2
      },
      "shipping_address": {
          "id": "ab571dd0-8ee9-44cf-8340-7345d8ad5ea9",
          "org": {
              "company_name": "ANDAL MOTORS",
              "contact_person": null
          },
          "pincode": {
              "id": "137f69fb-5f68-47ee-8e39-c22d96550a31",
              "created": "2021-08-23T21:49:27.572647+05:30",
              "modified": "2021-08-23T21:49:27.573947+05:30",
              "pin_code": "638011",
              "state": null,
              "district": "e965194c-cf5a-4f8a-ac60-aa3b2789185a"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-08-18T12:04:51.844552+05:30",
          "modified": "2023-08-18T12:04:51.844592+05:30",
          "address": "73/1, ANDAL MOTORS, NEAR TEACHERS COLONY BUS STOP, PERUNDURAI ROAD, Erode, Tamil Nadu, 638011",
          "gst_no": "33AOBPP5598R1Z1",
          "gst_cert": null,
          "address_type": 2
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "0ee59b8f-98dc-4a7b-8ddf-7d6d9a8a2778",
          "so_id": "SO-100000194-000055",
          "ref_po": "Verbal",
          "po_date": "2023-08-18",
          "contact_to": null
      },
      "dept": {
          "id": "f50c5c36-3052-4e06-b5a1-ad9687ce2e20",
          "name": "SLS-KAM-SOUTH"
      },
      "parts_invoice": [
          {
              "id": "e9cf979b-4958-41ec-97b5-0789f3a18f92",
              "parts_no": {
                  "id": "8ebdc60b-3546-40bb-b263-4638d6d99611",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "1e7e709e-e17c-475c-a906-b50f790aee35",
                      "country_gst": [
                          {
                              "id": "ef282bab-36e3-46bb-bed4-86d39f12c10c",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "99871900",
                      "description": "repairing and maintance"
                  },
                  "created": "2023-07-07T17:05:15.041144+05:30",
                  "modified": "2023-07-07T17:18:55.191500+05:30",
                  "internal_part_no": "1000000423",
                  "part_number": "DONGLE REPAIRING CHARGES",
                  "customer_part_number": "DONGLE REPAIRING CHARGES",
                  "bom": false,
                  "short_description": "DONGLE REPAIRING CHARGES",
                  "long_description": "DONGLE REPAIRING CHARGES",
                  "mrp": 3500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "NO",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-18T12:23:20.290720+05:30",
              "modified": "2023-08-18T12:23:20.290750+05:30",
              "quantity": 1,
              "customer_part_no": "Dongle Repairing",
              "price": 1,
              "warranty": 0,
              "short_description": "DONGLE REPAIRING CHARGES",
              "invoice": "02e7e24d-63a9-4e42-ac2d-6a3004c6edcd",
              "part": null
          }
      ],
      "created": "2023-08-18T12:20:19.939033+05:30",
      "modified": "2023-08-18T12:20:19.948203+05:30",
      "invoice_number": "INV-100000493-0000000001",
      "po_number": "Verbal",
      "payment_date": "2023-08-18",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-18",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "2649b06c-61e3-4f3c-b040-dfa8226fd3ec",
      "org": {
          "id": "53fb793a-9a0b-4ce8-b88d-c259f8732e97",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-25T17:39:35.507211+05:30",
          "modified": "2023-07-14T18:04:20.673100+05:30",
          "org_code": "100000026",
          "company_type": "pvt_ltd",
          "company_name": "Greaves Cotton Limited",
          "logo": "http://143.244.142.0/media/banner/Greaves.png",
          "address": "Chinchwad",
          "pan_no": "pan",
          "pan_cert": null,
          "pincode": "3fb78074-ca10-4b68-8193-00e486c805f0",
          "contact_person": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "fb457513-7de8-469a-b1e6-5c5666f6f6b8"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "3a70ca31-2e9b-4722-8848-1ca67c882247",
          "org": {
              "company_name": "Greaves Cotton Limited",
              "contact_person": {
                  "id": "3fa0dfac-344b-41b5-8e7e-fb5533018e59",
                  "first_name": "Wikitek",
                  "last_name": "Support",
                  "mobile": "9503340304",
                  "email": "support@wikitek.in"
              }
          },
          "pincode": {
              "id": "6ed9aafc-231f-4a8b-9c6b-29e215ee366d",
              "created": "2021-11-19T16:37:47.982009+05:30",
              "modified": "2021-11-19T16:37:47.984445+05:30",
              "pin_code": "431210",
              "state": "b11873ac-70cb-4973-87e6-6c93df7f6d4a",
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-11-19T16:38:22.316840+05:30",
          "modified": "2021-11-19T16:38:22.316872+05:30",
          "address": "J 2 MIDC INDUSTRIAL AREA,CHIKALTHANA LIGHT ENGINES UNIT I ,AURANGABAD",
          "gst_no": "27AAACG2062M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "2bf1b61b-a5e4-4b0c-ba16-04f88cf47513",
          "so_id": "SO-100000194-000045",
          "ref_po": "5700038610 / 0",
          "po_date": "2023-07-15",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "464914cf-2e66-4a35-a741-0bae4828df13",
              "parts_no": {
                  "id": "31275a42-b421-4478-9e6e-90c052109985",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-08-17T14:11:28.292987+05:30",
                  "modified": "2023-08-17T14:42:41.873598+05:30",
                  "internal_part_no": "1000000440",
                  "part_number": "TRAVEL & TRAINING",
                  "customer_part_number": "TRAVEL & TRAINING",
                  "bom": false,
                  "short_description": "TRAVEL & TRAINING",
                  "long_description": "TRAVEL & TRAINING",
                  "mrp": 750000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 2,
                  "sub_category": 7,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-23T10:10:12.507067+05:30",
              "modified": "2023-08-23T10:10:12.507284+05:30",
              "quantity": 1,
              "customer_part_no": "Travel & Training",
              "price": 750000,
              "warranty": 12,
              "short_description": "TRAVEL & TRAINING",
              "invoice": "2649b06c-61e3-4f3c-b040-dfa8226fd3ec",
              "part": null
          }
      ],
      "created": "2023-08-23T10:08:01.688809+05:30",
      "modified": "2023-08-23T10:08:01.693757+05:30",
      "invoice_number": "INV-100000026-0000000004",
      "po_number": "5700038610",
      "payment_date": "2023-08-23",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-22",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "no",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "ae9aed8a-3980-4bfc-81ea-b4383e9a64f1",
      "org": {
          "id": "9cb89f15-4b32-47b0-b499-c331093ac8ea",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-10-20T10:33:12.269771+05:30",
          "modified": "2023-07-14T18:29:15.913210+05:30",
          "org_code": "100000025",
          "company_type": "pvt_ltd",
          "company_name": "Bajaj Auto Ltd",
          "logo": "http://143.244.142.0/media/banner/Bajaj.png",
          "address": "Akurdi, Pune - 411035",
          "pan_no": "",
          "pan_cert": null,
          "pincode": "66a48284-f132-4821-a3d6-fd400cdd748f",
          "contact_person": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
          "payment_term": 4,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "776540e0-828b-4c20-aa7f-6675e2a2a083",
          "org": {
              "company_name": "Bajaj Auto Ltd",
              "contact_person": {
                  "id": "4834f904-49a0-49b1-b9ba-9e2ab01759d1",
                  "first_name": "Dnyanesh",
                  "last_name": "Pardhi",
                  "mobile": "9822579084",
                  "email": "dnyanesh.pardhi@autopeepal.com"
              }
          },
          "pincode": {
              "id": "52450e46-8a30-4e2c-a401-bdd385e295c6",
              "created": "2021-08-23T21:48:55.171818+05:30",
              "modified": "2021-08-23T21:48:55.172989+05:30",
              "pin_code": "431133",
              "state": null,
              "district": "3e885cb4-94a3-446f-8293-406d1c4afb87"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-03T14:35:08.097701+05:30",
          "modified": "2023-07-03T14:35:08.097732+05:30",
          "address": "Plot No A/1, Nagar Road, Waluj Road, Waluj Aurangabad, Aurangabad-Maharashtra - 431133 (Bajaj Nagar)",
          "gst_no": "27AADCB2923M1ZL",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "95d50ee6-fb1e-46f3-8b5b-e37eb277f749",
          "so_id": "SO-100000194-000056",
          "ref_po": "5210043280",
          "po_date": "2023-08-23",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "1ea26797-5931-402e-b8bf-141b92568758",
              "parts_no": {
                  "id": "cf1ddb4a-e0c9-4619-b5b4-cc86f0ddb723",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "2aa82fc0-6621-4cb7-95c4-bc6114bfa903",
                      "country_gst": [
                          {
                              "id": "2538093c-89e2-4cb4-9cd7-8f1540921fb7",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85443000",
                      "description": "INSULATED (INCLUDING ENAMELLED OR ANODISED) WIRE, CABLE (INCLUDING CO-AXIAL CABLE) AND OTHER INSULATED ELECTRIC CONDUCTORS, WHETHER OR NOT FITTED WITH CONNECTORS; OPTICAL FIBRE CABLES, MADE UP OF INDIVIDUALLY SHEATHED FIBRES, WHETHER OR NOT ASSEMBLED WITH ELECTRIC CONDUCTORS OR FITTED WITH CONNECTORS - IGNITION WIRING SETS AND OTHER WIRING SETS OF A KIND USED IN VEHICLES, AIRCRAFT OR SHIPS"
                  },
                  "created": "2023-06-26T15:09:41.812436+05:30",
                  "modified": "2023-07-10T19:33:14.574291+05:30",
                  "internal_part_no": "1000000416",
                  "part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "customer_part_number": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "bom": false,
                  "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "long_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
                  "mrp": 7000,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 1,
                  "sub_category": 1,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-23T18:53:01.184012+05:30",
              "modified": "2023-08-23T18:53:01.184062+05:30",
              "quantity": 75,
              "customer_part_no": "36JY0360",
              "price": 7000,
              "warranty": 12,
              "short_description": "36JY0360 - SP01 DIAGNOSTIC  TOOL",
              "invoice": "ae9aed8a-3980-4bfc-81ea-b4383e9a64f1",
              "part": "ea848dec-0408-450b-bb00-c32dfa45fee5"
          }
      ],
      "created": "2023-08-23T18:49:36.297595+05:30",
      "modified": "2023-08-23T18:54:16.286095+05:30",
      "invoice_number": "INV-100000025-0000000005",
      "po_number": "5210043280",
      "payment_date": "2023-08-23",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "80f59cd5-7a2b-49c8-8fa9-a90b14ccd673",
      "org": {
          "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2022-06-18T15:51:26.342889+05:30",
          "modified": "2023-07-14T17:26:20.626211+05:30",
          "org_code": "100000194",
          "company_type": "pvt_ltd",
          "company_name": "Autopeepal Technologies Private Limited",
          "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
          "address": "No 11 & 12, 4th floor, Shri Samarth Complex, Kesnand Road, Wagholi, Pune - 412207",
          "pan_no": "AATCA4258N",
          "pan_cert": null,
          "pincode": "fabe9af3-db55-4623-ae01-f7df95bdd05e",
          "contact_person": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
          "payment_term": 1,
          "marketplace": null,
          "meta_tags": [],
          "role": [
              "62c2024a-d35e-45c3-bd6b-65f7c821dff7",
              "e4319fd9-7f91-49cc-b3c7-039a071f995c",
              "8a75ff00-e101-48bc-9a0c-494732bd3fd5",
              "85adef4e-ca07-4535-a26b-558d547d21a3",
              "34ed45a9-477b-4bf6-9fcc-1de3653c1ad3",
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356",
              "8d194e23-6d36-4a5a-9b6c-c48ce826614b",
              "923b302e-c256-4452-a53f-43f20d304654",
              "f8ace281-782b-43b8-985e-5abfbfb60b27",
              "425a04cd-b148-4183-bf4e-b436ad59471a"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "88b3247e-b200-4d26-9c44-2980f5d7d333",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "abb2daca-c810-476c-b608-e1d8467e3cd9",
              "created": "2021-08-23T21:48:31.538658+05:30",
              "modified": "2021-08-23T21:48:31.610825+05:30",
              "pin_code": "382220",
              "state": null,
              "district": "4d120598-e86e-422d-a89b-d5e368324a49"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:28:21.193790+05:30",
          "modified": "2023-07-09T12:28:21.193823+05:30",
          "address": "Survey No. 521, 525, 530, 541-542, Near Moghal Mataji Mandir, Ahmedabad-Rajkot Highway, Bhayla, Dist. Ahmedabad - 382220, Gujrat, India.",
          "gst_no": "24AACCA3018M2ZW",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "88b3247e-b200-4d26-9c44-2980f5d7d333",
          "org": {
              "company_name": "Atul Auto Limited",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "abb2daca-c810-476c-b608-e1d8467e3cd9",
              "created": "2021-08-23T21:48:31.538658+05:30",
              "modified": "2021-08-23T21:48:31.610825+05:30",
              "pin_code": "382220",
              "state": null,
              "district": "4d120598-e86e-422d-a89b-d5e368324a49"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2023-07-09T12:28:21.193790+05:30",
          "modified": "2023-07-09T12:28:21.193823+05:30",
          "address": "Survey No. 521, 525, 530, 541-542, Near Moghal Mataji Mandir, Ahmedabad-Rajkot Highway, Bhayla, Dist. Ahmedabad - 382220, Gujrat, India.",
          "gst_no": "24AACCA3018M2ZW",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 1,
          "term": "100% Advance"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "a0653185-64fb-473d-a57f-232deb8bc193",
          "so_id": "SO-100000194-000057",
          "ref_po": "6700004603",
          "po_date": "2023-08-23",
          "contact_to": null
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "11f80031-87de-4b70-a175-aea0aa87fde8",
              "parts_no": {
                  "id": "d5ba509f-ce53-43a6-b2c2-13a3dd4cff93",
                  "part_type": {
                      "id": 7,
                      "created": "2022-07-23T16:50:21.908947+05:30",
                      "modified": "2022-07-23T16:50:21.908969+05:30",
                      "name": "Services"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "a8cf3724-7ff3-4d57-8ca1-754b6c348f26",
                      "country_gst": [
                          {
                              "id": "8d87ca1d-a0b3-4f4c-a1ad-9a29ce31abd2",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "998314",
                      "description": "Other professional, technical and business services"
                  },
                  "created": "2023-06-26T15:16:27.436867+05:30",
                  "modified": "2023-06-26T15:16:27.440932+05:30",
                  "internal_part_no": "1000000418",
                  "part_number": "Service Charges",
                  "customer_part_number": "Service Charges",
                  "bom": false,
                  "short_description": "Service Charges",
                  "long_description": "Service Charges",
                  "mrp": 1500,
                  "weight": "0.00",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "0a055b26-ae15-40a9-8291-25427b94ebb3",
                  "part_category": 4,
                  "sub_category": 17,
                  "default": null,
                  "meta_tags": [],
                  "market_place": [
                      "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565"
                  ]
              },
              "created": "2023-08-25T19:28:02.163777+05:30",
              "modified": "2023-08-25T19:28:02.163819+05:30",
              "quantity": 1,
              "customer_part_no": "Service Charges",
              "price": 500000,
              "warranty": 12,
              "short_description": "Service Charges",
              "invoice": "80f59cd5-7a2b-49c8-8fa9-a90b14ccd673",
              "part": null
          }
      ],
      "created": "2023-08-25T19:27:17.824392+05:30",
      "modified": "2023-08-25T19:27:17.827694+05:30",
      "invoice_number": "INV-100000194-0000000003",
      "po_number": "6700004603",
      "payment_date": "2023-08-25",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "ac41872d-2829-4913-b884-f4a8f6e176ca",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "5d0497b7-8305-4bde-8e6b-1eede4a2be1f",
              "parts_no": {
                  "id": "db40dd77-8d96-4b16-b036-9aee0ff073cc",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": null,
                  "gst_itm": {
                      "id": "b539a670-c92f-4f49-b7be-64d95a26a338",
                      "country_gst": [
                          {
                              "id": "e6c6002b-fda2-4682-b72e-dc7b737d9d23",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "85044090",
                      "description": "ELECTRICAL TRANSFORMERS, STATIC CONVERTERS (FOR EXAMPLE, RECTIFIERS) AND INDUCTORS -STATIC CONVERTERS: OTHER"
                  },
                  "created": "2022-07-02T19:34:55.400925+05:30",
                  "modified": "2022-07-02T19:34:55.400939+05:30",
                  "internal_part_no": "PN-INV-0000000160",
                  "part_number": "ST000072",
                  "customer_part_number": null,
                  "bom": false,
                  "short_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "long_description": "ST000072 - DA LITE USB CABLE-MINI",
                  "mrp": 350,
                  "weight": "0.03",
                  "length": "0.00",
                  "breadth": "0.00",
                  "height": "0.00",
                  "serialization": false,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 Months",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-26T10:20:43.957234+05:30",
              "modified": "2023-08-26T10:20:43.957267+05:30",
              "quantity": 100,
              "customer_part_no": "ST000072",
              "price": 350,
              "warranty": 0,
              "short_description": "ST000072 - DA LITE USB CABLE-MINI",
              "invoice": "ac41872d-2829-4913-b884-f4a8f6e176ca",
              "part": "31ef8bef-4e0d-4ea4-a79a-f5b3e7ab6135"
          }
      ],
      "created": "2023-08-26T10:19:15.280438+05:30",
      "modified": "2023-08-26T10:19:15.284756+05:30",
      "invoice_number": "INV-100000024-0000000018",
      "po_number": "1831123030",
      "payment_date": "2023-08-26",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  },
  {
      "id": "5fca8ac8-2299-4389-b1f1-3467fa7bddb7",
      "org": {
          "id": "64cdfb09-1b78-4bc6-8d9f-c7cd2b38f50a",
          "banks": [],
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:26:19.330846+05:30",
          "modified": "2023-07-14T18:31:20.188428+05:30",
          "org_code": "100000024",
          "company_type": "pvt_ltd",
          "company_name": "VE COMMERCIAL VEHICLES LIMITED",
          "logo": "http://143.244.142.0/media/banner/Eicher.png",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar, M.P",
          "pan_no": "fillpan",
          "pan_cert": null,
          "pincode": "43053ec3-c94e-4332-a383-01efb350351f",
          "contact_person": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
          "payment_term": 5,
          "marketplace": "ee50ee2b-10e5-40e5-ad63-7bfa4ac39565",
          "meta_tags": [],
          "role": [
              "4d5e5124-f4fd-4c91-981a-cc0074fb1356"
          ]
      },
      "invoice_type": {
          "id": "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          "created": "2021-08-10T07:30:43.125089+05:30",
          "modified": "2021-08-10T07:30:43.125114+05:30",
          "name": "Sale"
      },
      "billing_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "shipping_address": {
          "id": "ece660ac-091e-4bb4-9f3a-e98f565e0083",
          "org": {
              "company_name": "VE COMMERCIAL VEHICLES LIMITED",
              "contact_person": {
                  "id": "44dbaf21-9946-46ae-ad07-17fa3c1995e5",
                  "first_name": "Test",
                  "last_name": "User",
                  "mobile": "6666666666",
                  "email": "testuser@autopeepal.com"
              }
          },
          "pincode": {
              "id": "43053ec3-c94e-4332-a383-01efb350351f",
              "created": "2021-08-23T21:48:53.463522+05:30",
              "modified": "2021-08-23T21:48:53.464651+05:30",
              "pin_code": "454775",
              "state": null,
              "district": "1cfaafeb-5c94-47c1-a5e0-179e633631a6"
          },
          "country": {
              "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
              "created": "2021-08-09T11:15:57.538849+05:30",
              "modified": "2021-08-09T11:15:57.540012+05:30",
              "name": "India",
              "slug": null,
              "region": "Asia",
              "code": "IN",
              "currency_name": "Indian Rupees",
              "postal_code_format": null,
              "postal_code_regex": null,
              "currency": "INR"
          },
          "created": "2021-09-07T21:27:46.795567+05:30",
          "modified": "2021-09-07T21:27:46.795598+05:30",
          "address": "Plot No 102 & 102A, Indl Area No 1, Pithampur Distt Dhar",
          "gst_no": "23AABCE9378F3ZI",
          "gst_cert": null,
          "address_type": 3
      },
      "payment_term": {
          "id": 4,
          "term": "30 Days"
      },
      "created_by": {
          "id": "21d304a5-2585-41a5-94fc-551283a70e4e",
          "first_name": "Jayesh",
          "last_name": "Dalvi",
          "mobile": "8208379814",
          "email": "jayesh.dalvi@autopeepal.com",
          "org": {
              "id": "0a055b26-ae15-40a9-8291-25427b94ebb3",
              "company_name": "Autopeepal Technologies Private Limited",
              "logo": "http://143.244.142.0/media/banner/Autopeepal.png",
              "contact_person": {
                  "id": "ac2e4bd3-5e7a-48e7-b6f9-ba735e148be0",
                  "first_name": "Mukund",
                  "last_name": "Sutrave",
                  "mobile": "9503340304",
                  "email": "mukund.vs@autopeepal.com"
              }
          }
      },
      "sale_order": {
          "id": "ba4755a2-701f-413f-94ba-f322e59fa45a",
          "so_id": "SO-100000194-000025",
          "ref_po": "1831123030",
          "po_date": "2022-09-23",
          "contact_to": {
              "id": "6cedf85f-b137-4726-ab6d-a1b7aa446e0b",
              "email": "kgkrishnan1@vecv.in",
              "mobile": "9755580545",
              "first_name": "Kapil",
              "last_name": "Krishnan",
              "created_at": "2021-09-07T21:35:41.195564+05:30",
              "is_active": true
          }
      },
      "dept": {
          "id": "1c665653-9234-4570-b50b-eefd7b07e343",
          "name": "SLS-KAM-WEST"
      },
      "parts_invoice": [
          {
              "id": "8c6130c0-f32d-4fb7-8402-e4f3fc2d4f31",
              "parts_no": {
                  "id": "55032561-c0bc-40ec-bfeb-ee3f410b0271",
                  "part_type": {
                      "id": 3,
                      "created": "2021-08-10T07:30:09.466454+05:30",
                      "modified": "2021-10-07T15:33:23.967533+05:30",
                      "name": "Product"
                  },
                  "uom": {
                      "id": 10,
                      "created": "2022-07-14T18:42:54.652121+05:30",
                      "modified": "2022-07-14T18:42:54.652141+05:30",
                      "name": "nos"
                  },
                  "gst_itm": {
                      "id": "f80e93a9-1605-4434-a356-f005df6f873d",
                      "country_gst": [
                          {
                              "id": "11804d72-403a-467a-8b94-200655298fa0",
                              "gst_percent": 18,
                              "country_code": {
                                  "id": "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
                                  "name": "India"
                              }
                          }
                      ],
                      "hsn_or_sac": "90318000",
                      "description": "MEASURING OR CHECKING INSTRUMENTS, APPLIANCES AND MACHINES, NOT SPECIFIED OR INCLUDED ELSEWHERE IN THIS CHAPTER; PROFILE PROJECTORS OTHER INSTRUMENTS, APPLIANCES AND MACHINES"
                  },
                  "created": "2022-07-14T18:45:35.828393+05:30",
                  "modified": "2023-07-09T09:49:30.997513+05:30",
                  "internal_part_no": "PN-INV-0000000210",
                  "part_number": "ST000070",
                  "customer_part_number": "ST000070",
                  "bom": false,
                  "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "long_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
                  "mrp": 8500,
                  "weight": "0.08",
                  "length": "100.00",
                  "breadth": "60.00",
                  "height": "30.00",
                  "serialization": true,
                  "is_active": true,
                  "warranty_period": 12,
                  "warranty_terms": "12 MONTH",
                  "packing_charge": 0,
                  "manufacturer": "e9524f74-e70e-4aee-aeb1-56825d8e23ee",
                  "part_category": 5,
                  "sub_category": 13,
                  "default": null,
                  "meta_tags": [],
                  "market_place": []
              },
              "created": "2023-08-26T12:40:28.408968+05:30",
              "modified": "2023-08-26T12:40:28.408995+05:30",
              "quantity": 150,
              "customer_part_no": "ST000070",
              "price": 8500,
              "warranty": 12,
              "short_description": "ST000070 - DA Lite WIFI Dongle Auto (Black)",
              "invoice": "5fca8ac8-2299-4389-b1f1-3467fa7bddb7",
              "part": "249c3d04-5b5e-4eae-978d-33374e895bec"
          }
      ],
      "created": "2023-08-26T12:39:17.480711+05:30",
      "modified": "2023-08-26T12:41:00.187426+05:30",
      "invoice_number": "INV-100000024-0000000019",
      "po_number": "1831123030",
      "payment_date": "2023-08-26",
      "delivery_term": "delivered",
      "invoice_date": "2023-08-23",
      "docket_no": null,
      "approved": false,
      "assigned": false,
      "invoice_comment": "No",
      "order_id": null,
      "total": "0.00",
      "shipment_charges": 0,
      "amount_paid": 0,
      "current_org": "0a055b26-ae15-40a9-8291-25427b94ebb3",
      "sub_org": null,
      "project": null,
      "billing_org": null,
      "po_no": null,
      "user": null,
      "picking_list": null,
      "courier": null,
      "approved_by": null,
      "status": null
  }
]

let results;
  // push age property in every report object
  results = reports?.map((report) => {
    let date = dueDate(report);
    let age = daysLeftForSearchFunc(date);
    return { ...report, age };
  });

const dueIn15Days = results.filter(
  (result) => result.age < 0 && result.age >= -15 &&result.dept.name==="SLS-KAM-NORTH"
);

console.log({ dueIn15Days: dueIn15Days.length });