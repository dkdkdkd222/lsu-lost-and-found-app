import express from "express";
import cors from "cors";
import { Resend } from "resend";


const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend("");

app.post("/send", async (req, res) => {
  console.log("Recieved request body:", req.body);
  const { to, name, founder, claimie, claimEmail, item, shortMessage } = req.body;
  const recipient = String(to);
  const userName = String(name);
  
  if (!to || !name) return res.status(400).json({ error: "Missing 'to' or 'name'" });

  try {
    const html = `
      <html dir="ltr" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>

  <body style="background-color:#ffffff; margin:0;">
    <!-- Preheader -->
    <div
      style="display:none; overflow:hidden; line-height:1px; opacity:0; max-height:0; max-width:0;"
      data-skip-in-text="true"
    >
      I'm ${claimie} I think you found my Item!
    </div>

    <!-- Body Container -->
    <table
      border="0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      align="center"
    >
      <tbody>
        <tr>
          <td
            style="
              background-color:#ffffff;
              padding:0 0.5rem;
              font-family:ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
            "
          >
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                max-width:465px;
                margin:40px auto;
                border-radius:4px;
                border:1px solid #eaeaea;
                padding:20px;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="margin-top:32px;"
                    >
                      <tbody><tr><td></td></tr></tbody>
                    </table>

                    <h1
                      style="
                        margin:30px 0;
                        text-align:center;
                        font-weight:400;
                        font-size:24px;
                        color:#000000;
                      "
                    >
                      <strong>${founder}</strong> the <strong>${item}</strong> has been claimed
                    </h1>

                    <p
                      style="
                        font-size:14px;
                        line-height:24px;
                        color:#000000;
                        margin:16px 0;
                      "
                    >
                      Hi ${founder}, ${claimie} thinks you found their item because
                    </p>

                    <p
                      style="
                        font-size:14px;
                        line-height:24px;
                        color:#000000;
                        margin:16px 0;
                      "
                    >
                      ${shortMessage}
                    </p>

                    <p
                      style="
                        font-size:14px;
                        line-height:24px;
                        color:#000000;
                        margin:16px 0;
                      "
                    >
                      Contact <strong>Julius</strong> at
                      (<a
                        href="mailto:${claimEmail}"
                        style="color:#155dfc; text-decoration:none;"
                        target="_blank"
                        >${claimEmail}</a
                      >)
                      to talk about the <strong>${item}</strong> more!
                    </p>

                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="margin:32px 0; text-align:center;"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="mailto:${claimEmail}"
                              target="_blank"
                              style="
                                display:inline-block;
                                background-color:#000000;
                                padding:12px 20px;
                                border-radius:4px;
                                font-weight:600;
                                font-size:12px;
                                color:#ffffff;
                                text-decoration:none;
                                line-height:120%;
                              "
                            >
                              Email Them Back!
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <hr
                      style="
                        width:100%;
                        border:none;
                        border-top:1px solid #eaeaea;
                        margin:26px 0;
                      "
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

    `;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [recipient],
      subject: "Lost Item Claimed!",
      html,
    });

if (error) {
      console.error("Resend SDK error:", error);
      return res.status(500).json({ error });
    }

    // Success: send data back to frontend
    console.log("Email sent:", data);
    res.json({ success: true, data }); 

  } catch (err) {
    console.error("Error sending email:", err); 
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
