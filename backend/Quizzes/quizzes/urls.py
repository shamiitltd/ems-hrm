from django.urls import path
from .views import QuestionListView, ResultCreateView

urlpatterns = [
    path('questions/', QuestionListView.as_view(), name='question-list'),
    path('submit/', ResultCreateView.as_view(), name='result-create'),
]