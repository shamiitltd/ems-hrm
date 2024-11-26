from django.db import models

# Model for quiz questions
class Question(models.Model):
    question_text = models.CharField(max_length=255)  # Question content
    correct_answer = models.CharField(max_length=255)  # Correct answer
    choices = models.JSONField()  # List of choices

    def str(self):
        return self.question_text

# Model for quiz results
class Result(models.Model):
    candidate_name = models.CharField(max_length=100)  # Name of the candidate
    score = models.IntegerField()  # Total score

    def str(self):
        return f"{self.candidate_name} - {self.score}"