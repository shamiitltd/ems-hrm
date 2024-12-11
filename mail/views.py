from django.core.mail import send_mail
from django.http import JsonResponse
from .models import Email
from .tasks import send_email_task  # Celery task
from .imap_handler import EmailReceiver
from notifications.utils import send_notification

def send_email(request):
    subject = "Test Email"
    body = "This is a test email."
    sender = "noreply@example.com"
    recipient = "user@example.com"
    
    # Create an email object and queue it for sending
    email = Email.objects.create(
        subject=subject,
        body=body,
        sender=sender,
        recipient=recipient,
        status="pending"
    )
    
    send_email_task.delay(subject, body, sender, recipient)  # Trigger Celery task
    return JsonResponse({"message": "Email task queued successfully!"}, status=200)


def fetch_emails(request):
    email_receiver = EmailReceiver(
        server="imap.example.com",
        email_address="your_email@example.com",
        password="your_password"
    )
    email_receiver.connect()
    emails = email_receiver.fetch_emails()
    
    for email in emails:  # Assuming `fetch_emails` returns a list of email dicts
        send_notification(
            user_email=request.user.email,
            title=f"New Email from {email['from']}",
            message=f"Subject: {email['subject']}\nBody: {email['body'][:50]}..."
        )
    
    return JsonResponse({"message": "Emails fetched and notifications sent!"}, status=200)