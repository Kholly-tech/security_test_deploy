import { send } from "@emailjs/browser";

export const sendEmail = async (formData, position) => {
  // const serviceID = import.meta.env.VITE_Service_ID;
  // const templateID1 = import.meta.env.VITE_Template_ID1;
  // const templateID2 = import.meta.env.VITE_Template_ID2;
  // const publicKey = import.meta.env.VITE_Publick_KEY;

  const serviceID = "service_5tsxqvs";
  const templateID1 = 'template_w6hmoje';
  const templateID2 = 'template_w6hmoje';
  const publicKey = "6OTvpKt76n6fjWrKF";
  
  console.log('position: ', position);
  console.log('result: ', position === 'contact');
  const templateID = position === "contact" ? templateID1 : templateID2;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    service: formData.service,
    message: formData.message,
    to_email: "kolawoleakintayok@gmail.com", // Your email
  };

  await send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      return response;
    })
    .catch((error) => {
      console.error("FAILED...", error);
      throw error;
    });
};

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// emailjs.send("service_5tsxqvs", "template_w6hmoje", {
//   title: "Contact Us",
//   name: "Kolawole Akintayo",
//   email: "kolawolesax@gmail.com",
//   time: "02:18:23 PM ",
//   message: "Testing the email js flow",
// });
