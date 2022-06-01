import * as Yup from "yup";

export const messageMe1Validations = Yup.object().shape({
  pain_point: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

  tried_so_far: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

  desired_outcome: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),



    desired_year: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(55, "Name must be less than 50 characters")
    ,
   

    desired_gst: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be less than 50 characters")
    .required("Required"),

    desired_pan: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(10, "Name must be less than 50 characters")
    .required("Required"),
    desired_address: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),
});
