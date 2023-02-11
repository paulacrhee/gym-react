import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "regularMember",

      comment: "",
    },
    onSubmit: function (values) {
      alert(`Thank you for your message, ${values.firstName}`);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters at minimum"),
    }),
  });

  return (
    <section id="contact" className="section-sm lg:pt-[150px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos="zoom"
          data-aos-offset="400"
        >
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-offset="500"
          >
            <h2 className="h2 mb-3 lg:mb-7">Get in Touch With Us</h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with us for any kind of help. We are here to give you
              the best and also here to help you to find your best workout
              courses.
            </p>
          </div>
          <form
            className="flex-1 bg-white shadow-primary border rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="500"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            >
              <input
                id="firstName"
                placeholder="Name"
                name="firstName"
                className="form-control w-full"
                value={formik.values.firstName}
                {...formik.getFieldProps("firstName")}
              />

              <p
                id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                {formik.errors.firstName}
              </p>
            </div>

            <div isInvalid={formik.touched.email && formik.errors.email}>
              <input
                id="email"
                placeholder="Email address"
                name="email"
                className="form-control w-full"
                value={formik.values.email}
                {...formik.getFieldProps("email")}
              />

              <p
                id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                {formik.errors.email}
              </p>
            </div>
            <div isInvalid={formik.touched.type && formik.errors.type}>
              <select
                id="type"
                className="form-control w-full"
                name="type"
                {...formik.getFieldProps("type")}
              >
                <option value="regularMember">Regular Member</option>
                <option value="premiumMember">Premium Member</option>
                <option value="standardMember">Standard Member</option>
                <option value="other">Other</option>
              </select>
              <p
                id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                {formik.errors.type}
              </p>
            </div>
            <div isInvalid={formik.touched.comment && formik.errors.comment}>
              <textarea
                id="comment"
                placeholder="Message"
                name="comment"
                className="form-control w-full  py-5 h-[165px] "
                value={formik.values.comment}
                {...formik.getFieldProps("comment")}
              />

              <p
                id="filled_error_help"
                class="mt-2 text-xs text-red-600 dark:text-red-400"
              >
                {formik.errors.comment}
              </p>
            </div>

            <button className="btn btn-primary self-start" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
