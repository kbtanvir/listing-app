const functions = require("firebase-functions");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const admin = require("firebase-admin");

admin.initializeApp();

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.SENDINBLUE_API_KEY;

const sendEmail = functions.firestore
  .document("orders/{id}")
  .onCreate((snap, context) => {
    const order = snap.data();
    const customerInfo = order.customerInfo;
    const productInfo = order.productInfo;

    new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        subject: `Customer Order - #${order.id}`,
        sender: {
          email: "cattcharm@gmail.com",
          name: `Customer Order - #${order.id}`,
        },
        // replyTo: { email: "api@sendinblue.com", name: "Sendinblue" },
        to: [{ name: "John Doe", email: "bakalakuwaitbusiness@gmail.com" }],
        htmlContent: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order is placed</title>
  </head>
  <body
    style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #333;
      line-height: 1.5;
      padding: 20px;
      border: 1px solid #ddd;
    "
  >

    <h1>Order ID - #${order.id}</h1>

    <h2>Ordered Items</h2>

    <table
      style="
        max-width: 800px;
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        padding: 8px;
      "
    >
      <thead>
        <tr>
          <th
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            "
          >
            Picture
          </th>
          <th
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            "
          >
            Product
          </th>
          <th
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: end;
            "
          >
            Qty
          </th>
          <th
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: end;
            "
          >
            Price
          </th>
        </tr>
      </thead>

      <tbody>
        <!-- order items -->
        ${productInfo
          .filter(
            (item) => item.cartQty > 0 && item.thumbnail.url !== undefined
          )
          .map(
            (item) => `<tr>  
          <td
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            "
          >   
            <img src="${item.thumbnail.url}" alt="${item.name}" style=" width: 100%; object-fit: contain"/>
          </td>
          <td
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: end;
            "
          > 
            ${item.name}
          </td>
          <td
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: end;
            "
          > 
            ${item.cartQty}
          </td>
          <td
            style="
              max-width: 100px;
              background-color: #f1f1f1;
              border: 1px solid #ddd;
              padding: 8px;
              text-align: end;
            "
          >
            KD ${item.price}
          </td>
        </tr>`
          )
          .join(" ")}
        
      </tbody>
    </table>

    <!-- order total -->

    <h2>
      Order Total :
      <span style="color: rgb(0, 156, 21)"> KD ${order.total.toFixed(3)} </span>
    </h2>

    <!-- order billing details -->

    <h2>Customer Information</h2>
    <div
      style="
        max-width: 800px;
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        padding: 8px;
        font-size: 14px;
      "
    >
      <p style="font-weight:bold; color:color: rgb(0, 156, 21);">Name: </p>
      <p>${customerInfo.name}</p>
      <p style="font-weight:bold; color:color: rgb(0, 156, 21);">Address:</p>
      <p>${customerInfo.address}, ${customerInfo.city}, ${customerInfo.zip} , ${
          customerInfo.state
        }, ${customerInfo.country}</p>
      <p style="font-weight:bold; color:color: rgb(0, 156, 21);">Phone</p>
      <p>${customerInfo.phone}</p>
    </div>
  </body>
</html>

          `,
      })
      .then(
        function (data) {
          console.log(data);
        },
        function (error) {
          console.error(error);
        }
      );
  });

exports.sendEmail = sendEmail;
