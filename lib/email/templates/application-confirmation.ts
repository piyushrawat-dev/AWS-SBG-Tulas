export interface ApplicationEmailData {
  to: string;
  fullName: string;
  year: string;
  course: string;
  branch: string;
  wings: string[];
  rollNumber: string;
}

export function generateApplicationEmailHtml(data: ApplicationEmailData): string {
  const { fullName, year, course, branch, wings, rollNumber } = data;
  const wingsString = wings.join(", ");
  const academicProfile = [year, course, branch && branch !== "N/A" ? branch : ""].filter(Boolean).join(" · ");

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - AWS Student Builders Group</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;color:#1E293B;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F8FAFC;padding:36px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#FFFFFF;border-radius:12px;border:1px solid #E2E8F0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="background-color:#7C3AED;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:28px 32px 20px 32px;border-bottom:1px solid #F1F5F9;">
              <div style="font-size:12px;font-weight:700;color:#7C3AED;letter-spacing:1px;text-transform:uppercase;font-family:-apple-system,sans-serif;">
                AWS Student Builders Group
              </div>
              <div style="font-size:13px;color:#64748B;margin-top:2px;">
                Tula's University, Dehradun
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 12px 0;font-size:20px;font-weight:700;color:#0F172A;">
                Application Received
              </h1>
              <p style="margin:0 0 24px 0;font-size:14px;line-height:1.6;color:#334155;">
                Hi <strong>${fullName}</strong>, thank you for applying to the AWS Student Builders Group for <strong>Cohort 2026</strong>. We have received your details and added your application to our candidate pool.
              </p>

              <!-- Application Summary Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <div style="font-size:11px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;">
                      Application Summary
                    </div>
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:13px;line-height:1.5;">
                      <tr>
                        <td style="padding:4px 0;color:#64748B;width:35%;">Full Name</td>
                        <td style="padding:4px 0;color:#0F172A;font-weight:600;">${fullName}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748B;">Roll No.</td>
                        <td style="padding:4px 0;color:#0F172A;font-weight:600;">${rollNumber}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748B;">Academic Profile</td>
                        <td style="padding:4px 0;color:#0F172A;">${academicProfile}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748B;">Selected Wing(s)</td>
                        <td style="padding:4px 0;color:#7C3AED;font-weight:600;">${wingsString}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Community Next Steps -->
              <div style="margin-bottom:28px;">
                <h2 style="margin:0 0 8px 0;font-size:15px;font-weight:700;color:#0F172A;">
                  Stay Connected
                </h2>
                <p style="margin:0 0 16px 0;font-size:13px;line-height:1.6;color:#475569;">
                  All updates regarding shortlist announcements, interview slots, and upcoming cloud workshops will be shared through our official community platforms:
                </p>

                <!-- Channel 1: Meetup -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #E2E8F0;border-radius:8px;margin-bottom:12px;">
                  <tr>
                    <td style="padding:14px 18px;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <div style="font-size:13px;font-weight:600;color:#0F172A;margin-bottom:2px;">
                              Official Meetup Group
                            </div>
                            <div style="font-size:12px;color:#64748B;">
                              RSVP for offline workshops, hackathons & interview sessions.
                            </div>
                          </td>
                          <td align="right" style="padding-left:12px;white-space:nowrap;">
                            <a href="https://www.meetup.com/tulas-university-dehradun/" target="_blank" style="background-color:#E11D48;color:#FFFFFF;text-decoration:none;font-size:12px;font-weight:600;padding:8px 14px;border-radius:6px;display:inline-block;">
                              Join Meetup
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Channel 2: AWS Builder Center -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #E2E8F0;border-radius:8px;">
                  <tr>
                    <td style="padding:14px 18px;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <div style="font-size:13px;font-weight:600;color:#0F172A;margin-bottom:2px;">
                              AWS Builder Center
                            </div>
                            <div style="font-size:12px;color:#64748B;">
                              Access AWS cloud learning topics, labs & community discussions.
                            </div>
                          </td>
                          <td align="right" style="padding-left:12px;white-space:nowrap;">
                            <a href="https://builder.aws.com/content/3C075iQJeEx03mnzHwmXO9zdgEG/aws-student-builder-groups" target="_blank" style="background-color:#0284C7;color:#FFFFFF;text-decoration:none;font-size:12px;font-weight:600;padding:8px 14px;border-radius:6px;display:inline-block;">
                              Join Space
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Sign-off -->
              <p style="margin:0;font-size:13px;line-height:1.6;color:#475569;">
                Best regards,<br>
                <strong>AWS Student Builders Group Team</strong><br>
                <span style="color:#64748B;">Tula's University, Dehradun</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#F8FAFC;border-top:1px solid #E2E8F0;text-align:center;">
              <p style="margin:0;font-size:11px;color:#94A3B8;line-height:1.5;">
                &copy; 2026 AWS Student Builders Group &middot; Tula's University, Dehradun<br>
                This is an automated confirmation for your application.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateApplicationEmailText(data: ApplicationEmailData): string {
  const { fullName, year, course, branch, wings, rollNumber } = data;
  const wingsString = wings.join(", ");
  const academicProfile = [year, course, branch && branch !== "N/A" ? branch : ""].filter(Boolean).join(" · ");

  return `
AWS Student Builders Group
Tula's University, Dehradun

Hi ${fullName},

Thank you for applying to the AWS Student Builders Group for Cohort 2026. We have received your application details.

--- APPLICATION SUMMARY ---
Full Name: ${fullName}
Roll No.: ${rollNumber}
Academic Profile: ${academicProfile}
Selected Wing(s): ${wingsString}

--- STAY CONNECTED ---
All updates regarding shortlist announcements, interview slots, and upcoming workshops will be shared through our official platforms:

1. Official Meetup Group:
https://www.meetup.com/tulas-university-dehradun/

2. AWS Builder Center:
https://builder.aws.com/content/3C075iQJeEx03mnzHwmXO9zdgEG/aws-student-builder-groups

Best regards,
AWS Student Builders Group Team
Tula's University, Dehradun
  `.trim();
}
