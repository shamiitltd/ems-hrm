from rest_framework import generics
from .models import Question, Result
from .serializers import QuestionSerializer, ResultSerializer

# API view to list all questions
class QuestionListView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

# API view to create a new result
class ResultCreateView(generics.CreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer