import imaplib
import email
from email.header import decode_header
import os

class EmailReceiver:
    def __init__(self, server, email_address, password, use_ssl=True):
        self.server = server
        self.email_address = email_address
        self.password = password
        self.use_ssl = use_ssl
        self.mail = None

    def connect(self):
        try:
            if self.use_ssl:
                self.mail = imaplib.IMAP4_SSL(self.server)
            else:
                self.mail = imaplib.IMAP4(self.server)
            self.mail.login(self.email_address, self.password)
            print("Connected to the IMAP server")
        except Exception as e:
            print(f"Error connecting to server: {e}")

    def fetch_emails(self, folder="INBOX"):
        self.mail.select(folder)
        status, messages = self.mail.search(None, "ALL")
        email_ids = messages[0].split()
        for email_id in email_ids[-10:]:  # Fetch last 10 emails
            _, msg_data = self.mail.fetch(email_id, "(RFC822)")
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    from_ = msg.get("From")
                    print(f"Subject: {subject}")
                    print(f"From: {from_}")
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            if content_type == "text/plain":
                                body = part.get_payload(decode=True).decode()
                                print(f"Body: {body}")
                    else:
                        body = msg.get_payload(decode=True).decode()
                        print(f"Body: {body}")
        self.mail.logout()
