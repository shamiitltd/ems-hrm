from celery import shared_task

@shared_task
def send_email_task(recipient_email, subject, message):
    print(f"Sending email to {recipient_email}...")
    # Logic for sending email
    return f"Email sent to {recipient_email}!"
