// // import React, { useState } from "react";
// // import { useForm, Controller } from "react-hook-form";
// // import Select from "react-select";
// // import DatePicker from "react-datepicker";
// // import PhoneInput from "react-phone-input-2";
// // import * as yup from "yup";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import "react-datepicker/dist/react-datepicker.css";
// // import "react-phone-input-2/lib/style.css";

// // const DynamicFormBuilder = () => {
// //   const [fields, setFields] = useState([]);
// //   const [formSections, setFormSections] = useState([]);
// //   const { control, handleSubmit, watch } = useForm({
// //     resolver: yupResolver(
// //       yup.object().shape({
// //         requiredField: yup.string().required("This field is required"),
// //       })
// //     ),
// //   });

// //   const watchFields = watch();

// //   const fieldOptions = [
// //     { value: "text", label: "Text Field" },
// //     { value: "date", label: "Date Picker" },
// //     { value: "phone", label: "Phone Number" },
// //     { value: "dropdown", label: "Dropdown" },
// //     { value: "checkbox", label: "Checkbox" },
// //     { value: "file", label: "File Upload" },
// //   ];

// //   const addField = (type) => {
// //     const newField = {
// //       id: Date.now(),
// //       type,
// //       label: `Field ${fields.length + 1}`,
// //     };
// //     setFields([...fields, newField]);
// //   };

// //   const addSection = () => {
// //     const newSection = {
// //       id: `section-${Date.now()}`,
// //       name: `Section ${formSections.length + 1}`,
// //       fields: [],
// //     };
// //     setFormSections([...formSections, newSection]);
// //   };

// //   const onSubmit = (data) => {
// //     console.log("Form Data:", JSON.stringify(data, null, 2));
// //   };

// //   return (
// //     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
// //       <h1>Dynamic Form Builder</h1>
// //       <div style={{ marginBottom: "20px" }}>
// //         <button onClick={() => addField("text")}>Add Text Field</button>
// //         <button onClick={() => addField("date")}>Add Date Picker</button>
// //         <button onClick={() => addField("phone")}>Add Phone Number</button>
// //         <button onClick={addSection}>Add Section</button>
// //       </div>
// //       <form onSubmit={handleSubmit(onSubmit)} style={{ border: "1px solid #ccc", padding: "20px" }}>
// //         <h2>Form Fields</h2>
// //         {fields.map((field, index) => (
// //           <div key={field.id} style={{ marginBottom: "10px" }}>
// //             <label>{field.label}</label>
// //             {field.type === "text" && (
// //               <Controller
// //                 name={`field-${index}`}
// //                 control={control}
// //                 defaultValue=""
// //                 render={({ field }) => <input type="text" {...field} />}
// //               />
// //             )}
// //             {field.type === "date" && (
// //               <Controller
// //                 name={`field-${index}`}
// //                 control={control}
// //                 defaultValue={null}
// //                 render={({ field }) => (
// //                   <DatePicker
// //                     selected={field.value}
// //                     onChange={(date) => field.onChange(date)}
// //                   />
// //                 )}
// //               />
// //             )}
// //             {field.type === "phone" && (
// //               <Controller
// //                 name={`field-${index}`}
// //                 control={control}
// //                 defaultValue=""
// //                 render={({ field }) => (
// //                   <PhoneInput
// //                     country="us"
// //                     value={field.value}
// //                     onChange={(value) => field.onChange(value)}
// //                   />
// //                 )}
// //               />
// //             )}
// //           </div>
// //         ))}
// //         {formSections.map((section, index) => (
// //           <div key={section.id} style={{ marginBottom: "20px", padding: "10px", border: "1px dashed #ccc" }}>
// //             <h3>{section.name}</h3>
// //             <button
// //               type="button"
// //               onClick={() =>
// //                 setFormSections((prevSections) =>
// //                   prevSections.map((sec) =>
// //                     sec.id === section.id
// //                       ? {
// //                           ...sec,
// //                           fields: [
// //                             ...sec.fields,
// //                             { id: Date.now(), type: "text", label: `Nested Field ${sec.fields.length + 1}` },
// //                           ],
// //                         }
// //                       : sec
// //                   )
// //                 )
// //               }
// //             >
// //               Add Nested Field
// //             </button>
// //             {section.fields.map((nestedField, nestedIndex) => (
// //               <div key={nestedField.id} style={{ marginTop: "10px" }}>
// //                 <label>{nestedField.label}</label>
// //                 <Controller
// //                   name={`section-${index}-field-${nestedIndex}`}
// //                   control={control}
// //                   defaultValue=""
// //                   render={({ field }) => <input type="text" {...field} />}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         ))}
// //         <button type="submit" style={{ marginTop: "20px", padding: "10px", background: "#007BFF", color: "#fff" }}>
// //           Submit
// //         </button>
// //       </form>
// //       <div style={{ marginTop: "20px" }}>
// //         <h2>Real-Time Form Data</h2>
// //         <pre style={{ background: "#f8f8f8", padding: "10px", borderRadius: "5px" }}>
// //           {JSON.stringify(watchFields, null, 2)}
// //         </pre>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DynamicFormBuilder;



// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
// import PhoneInput from "react-phone-input-2";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-phone-input-2/lib/style.css";

// const DynamicFormBuilder = () => {
//   const [fields, setFields] = useState([]);
//   const [formSections, setFormSections] = useState([]);
//   const { control, handleSubmit, watch } = useForm({
//     resolver: yupResolver(
//       yup.object().shape({
//         requiredField: yup.string().required("This field is required"),
//       })
//     ),
//   });

//   const watchFields = watch();

//   const fieldOptions = [
//     { value: "text", label: "Text Field" },
//     { value: "date", label: "Date Picker" },
//     { value: "phone", label: "Phone Number" },
//     { value: "dropdown", label: "Dropdown" },
//     { value: "checkbox", label: "Checkbox" },
//     { value: "file", label: "File Upload" },
//   ];

//   const addField = (type) => {
//     const newField = {
//       id: Date.now(),
//       type,
//       label: `Field ${fields.length + 1}`,
//     };
//     setFields([...fields, newField]);
//   };

//   const addSection = () => {
//     const newSection = {
//       id: `section-${Date.now()}`,
//       name: `Section ${formSections.length + 1}`,
//       fields: [],
//     };
//     setFormSections([...formSections, newSection]);
//   };

//   const onSubmit = (data) => {
//     console.log("Form Data:", JSON.stringify(data, null, 2));
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "'Roboto', sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//       <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
//         <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Dynamic Form Builder</h1>

//         <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
//           <button
//             onClick={() => addField("text")}
//             style={buttonStyle}
//           >
//             Add Text Field
//           </button>
//           <button
//             onClick={() => addField("date")}
//             style={buttonStyle}
//           >
//             Add Date Picker
//           </button>
//           <button
//             onClick={() => addField("phone")}
//             style={buttonStyle}
//           >
//             Add Phone Number
//           </button>
//           <button
//             onClick={addSection}
//             style={buttonStyle}
//           >
//             Add Section
//           </button>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
//           <h2 style={{ color: "#555", marginBottom: "20px" }}>Form Fields</h2>

//           {fields.map((field, index) => (
//             <div key={field.id} style={{ marginBottom: "15px" }}>
//               <label style={labelStyle}>{field.label}</label>
//               {field.type === "text" && (
//                 <Controller
//                   name={`field-${index}`}
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => <input type="text" {...field} style={inputStyle} />}
//                 />
//               )}
//               {field.type === "date" && (
//                 <Controller
//                   name={`field-${index}`}
//                   control={control}
//                   defaultValue={null}
//                   render={({ field }) => (
//                     <DatePicker
//                       selected={field.value}
//                       onChange={(date) => field.onChange(date)}
//                       style={inputStyle}
//                     />
//                   )}
//                 />
//               )}
//               {field.type === "phone" && (
//                 <Controller
//                   name={`field-${index}`}
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <PhoneInput
//                       country="us"
//                       value={field.value}
//                       onChange={(value) => field.onChange(value)}
//                       inputStyle={inputStyle}
//                     />
//                   )}
//                 />
//               )}
//             </div>
//           ))}

//           {formSections.map((section, index) => (
//             <div
//               key={section.id}
//               style={{ marginBottom: "20px", padding: "15px", border: "1px dashed #ccc", borderRadius: "8px" }}
//             >
//               <h3 style={{ color: "#555" }}>{section.name}</h3>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormSections((prevSections) =>
//                     prevSections.map((sec) =>
//                       sec.id === section.id
//                         ? {
//                             ...sec,
//                             fields: [
//                               ...sec.fields,
//                               { id: Date.now(), type: "text", label: `Nested Field ${sec.fields.length + 1}` },
//                             ],
//                           }
//                         : sec
//                     )
//                   )
//                 }
//                 style={buttonStyle}
//               >
//                 Add Nested Field
//               </button>

//               {section.fields.map((nestedField, nestedIndex) => (
//                 <div key={nestedField.id} style={{ marginTop: "10px" }}>
//                   <label style={labelStyle}>{nestedField.label}</label>
//                   <Controller
//                     name={`section-${index}-field-${nestedIndex}`}
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => <input type="text" {...field} style={inputStyle} />}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}

//           <button
//             type="submit"
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               backgroundColor: "#007BFF",
//               color: "#fff",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>

//         <div style={{ marginTop: "20px" }}>
//           <h2 style={{ color: "#555" }}>Real-Time Form Data</h2>
//           <pre style={{ backgroundColor: "#f8f8f8", padding: "15px", borderRadius: "5px" }}>
//             {JSON.stringify(watchFields, null, 2)}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   backgroundColor: "#007BFF",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   margin: "5px",
// };

// const labelStyle = {
//   display: "block",
//   marginBottom: "5px",
//   color: "#333",
//   fontWeight: "bold",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   fontSize: "14px",
// };

// export default DynamicFormBuilder;


import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";

const DynamicFormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [formSections, setFormSections] = useState([]);
  const { control, handleSubmit, watch } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        requiredField: yup.string().required("This field is required"),
      })
    ),
  });

  const watchFields = watch();

  const fieldOptions = [
    { value: "text", label: "Text Field" },
    { value: "dropdown", label: "Dropdown" },
    { value: "radio", label: "Radio Button" },
    { value: "file", label: "File Upload" },
    { value: "checkbox", label: "Checkbox" },
    { value: "country", label: "Country (Phone Format)" },
    { value: "date", label: "Date Picker" },
    { value: "phone", label: "Phone Number" },
  ];

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `Field ${fields.length + 1}`,
      options: type === "dropdown" || type === "radio" ? ["Option 1", "Option 2"] : undefined,
    };
    setFields([...fields, newField]);
  };

  const updateFieldOptions = (id, options) => {
    setFields((prevFields) =>
      prevFields.map((f) =>
        f.id === id ? { ...f, options: options.split(",") } : f
      )
    );
  };

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      name: `Section ${formSections.length + 1}`,
      fields: [],
    };
    setFormSections([...formSections, newSection]);
  };

  const handleConditionalLogic = (value, fieldId) => {
    // Example: Show a specific field/section based on a condition
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId
          ? { ...field, visible: value === "show" }
          : field
      )
    );
  };

  const onSubmit = (data) => {
    console.log("Form Data:", JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Dynamic Form Builder</h1>
      <div style={{ marginBottom: "20px" }}>
        {fieldOptions.map((option) => (
          <button key={option.value} onClick={() => addField(option.value)} style={{ margin: "5px" }}>
            Add {option.label}
          </button>
        ))}
        <button onClick={addSection} style={{ margin: "5px" }}>
          Add Section
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ border: "1px solid #ccc", padding: "20px" }}
      >
        <h2>Form Fields</h2>
        {fields.map((field, index) => (
          <div
            key={field.id}
            style={{
              marginBottom: "10px",
              display: field.visible === false ? "none" : "block",
            }}
          >
            <label>{field.label}</label>
            {field.type === "text" && (
              <Controller
                name={`field-${index}`}
                control={control}
                defaultValue=""
                render={({ field }) => <input type="text" {...field} />}
              />
            )}
            {field.type === "dropdown" && (
            <div>
              <label>{field.label} Options (comma-separated):</label>
              <input
                type="text"
                placeholder="e.g., Option 1, Option 2, Option 3"
                onBlur={(e) => updateFieldOptions(field.id, e.target.value)}
              />
              <Controller
                name={`field-${index}`}
                control={control}
                defaultValue=""
                render={({ field: controllerField }) => (
                  <Select
                    options={field.options.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      controllerField.onChange(selectedOption.value)
                    }
                  />
                )}
                />
              </div>
            )}
            {field.type === "radio" &&
              field.options.map((option, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    id={`field-${index}-option-${idx}`}
                    name={`field-${index}`}
                    value={option}
                    onChange={(e) =>
                      handleConditionalLogic(e.target.value, field.id)
                    }
                  />
                  <label htmlFor={`field-${index}-option-${idx}`}>{option}</label>
                </div>
              ))}
            {field.type === "checkbox" && (
              <Controller
                name={`field-${index}`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    {...field}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
            )}
            {field.type === "date" && (
              <Controller
                name={`field-${index}`}
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                  />
                )}
              />
            )}
            {field.type === "phone" && (
              <Controller
                name={`field-${index}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <PhoneInput
                    country="us"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            )}
            {field.type === "file" && (
              <Controller
                name={`field-${index}`}
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    onChange={(e) => field.onChange(e.target.files[0])}
                  />
                )}
              />
            )}
          </div>
        ))}
        {formSections.map((section, index) => (
          <div
            key={section.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px dashed #ccc",
            }}
          >
            <h3>{section.name}</h3>
            <button
              type="button"
              onClick={() =>
                setFormSections((prevSections) =>
                  prevSections.map((sec) =>
                    sec.id === section.id
                      ? {
                          ...sec,
                          fields: [
                            ...sec.fields,
                            {
                              id: Date.now(),
                              type: "text",
                              label: `Nested Field ${sec.fields.length + 1}`,
                            },
                          ],
                        }
                      : sec
                  )
                )
              }
            >
              Add Nested Field
            </button>
            {section.fields.map((nestedField, nestedIndex) => (
              <div key={nestedField.id} style={{ marginTop: "10px" }}>
                <label>{nestedField.label}</label>
                <Controller
                  name={`section-${index}-field-${nestedIndex}`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => <input type="text" {...field} />}
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#007BFF",
            color: "#fff",
          }}
        >
          Submit
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Real-Time Form Data</h2>
        <pre
          style={{
            background: "#f8f8f8",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {JSON.stringify(watchFields, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;
