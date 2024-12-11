from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_email_task(subject, body, sender, recipient):
    try:
        send_mail(subject, body, sender, [recipient])
        # Notify user after successful email
        send_notification(recipient, "Email Sent", f"Your email with subject '{subject}' was sent successfully.")
    except Exception as e:
        send_notification(recipient, "Email Failed", f"Failed to send email with subject '{subject}'. Error: {str(e)}")