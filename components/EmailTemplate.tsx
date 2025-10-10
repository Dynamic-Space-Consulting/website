import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  fullname: string;
  email: string;
  subject: string;
  organization?: string;
  position?: string;
  message: string;
}

export function EmailTemplate({
  fullname,
  email,
  subject,
  organization,
  position,
  message
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>
              New Contact Form Submission
            </Heading>
            <Text style={headerSubtitle}>
              Dynamic Space Consulting
            </Text>
          </Section>

          {/* Subject Section */}
          <Section style={subjectSection}>
            <Heading style={subjectTitle}>
              {subject}
            </Heading>
          </Section>

          {/* Contact Information */}
          <Section style={contactSection}>
            <Heading style={sectionTitle}>
              CONTACT INFORMATION
            </Heading>
            
            <div style={contactGrid}>
              <div style={contactRow}>
                <Text style={contactLabel}>Full Name:</Text>
                <Text style={contactValue}>{fullname}</Text>
              </div>

              <div style={contactRow}>
                <Text style={contactLabel}>Email:</Text>
                <Link href={`mailto:${email}`} style={contactEmail}>
                  {email}
                </Link>
              </div>

              {organization && (
                <div style={contactRow}>
                  <Text style={contactLabel}>Organization:</Text>
                  <Text style={contactValue}>{organization}</Text>
                </div>
              )}

              {position && (
                <div style={contactRow}>
                  <Text style={contactLabel}>Position:</Text>
                  <Text style={contactValue}>{position}</Text>
                </div>
              )}
            </div>
          </Section>

          {/* Message Section */}
          <Section style={messageSection}>
            <Heading style={sectionTitle}>
              MESSAGE
            </Heading>
            <div style={messageBox}>
              <Text style={messageText}>
                {message}
              </Text>
            </div>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the Dynamic Space Consulting contact form.<br />
              Received on {new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  padding: "20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const header = {
  background: "#0A3D62",
  padding: "30px 40px",
  color: "#000000",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  margin: "0",
  fontSize: "24px",
  fontWeight: "600",
  letterSpacing: "0.5px",
};

const headerSubtitle = {
  color: "rgba(255, 255, 255, 0.9)",
  margin: "8px 0 0 0",
  fontSize: "16px",
  fontWeight: "300",
};

const subjectSection = {
  padding: "25px 40px 15px",
  borderBottom: "1px solid #f0f0f0",
};

const subjectTitle = {
  color: "#333333",
  margin: "0",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "1.4",
};

const contactSection = {
  padding: "25px 40px",
  backgroundColor: "#f8f9fa",
};

const sectionTitle = {
  color: "#555555",
  margin: "0 0 20px 0",
  fontSize: "16px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const contactGrid = {
  marginBottom: "20px",
};

const contactRow = {
  marginBottom: "12px",
  display: "flex",
};

const contactLabel = {
  display: "inline-block",
  width: "120px",
  color: "#666666",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const contactValue = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
};

const contactEmail = {
  color: "#667eea",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
};

const messageSection = {
  padding: "25px 40px",
};

const messageBox = {
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "20px",
  lineHeight: "1.6",
};

const messageText = {
  color: "#333333",
  fontSize: "14px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  borderColor: "#e0e0e0",
  margin: "0",
};

const footer = {
  backgroundColor: "#f8f9fa",
  padding: "20px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#888888",
  fontSize: "12px",
  margin: "0",
  lineHeight: "1.5",
};
