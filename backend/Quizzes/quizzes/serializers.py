from rest_framework import serializers
from .models import Question, Result

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = 'all'

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = 'all'