from django.urls import path
from .views import AssignTaskView

urlpatterns = [
    path('assign-task/', AssignTaskView.as_view(), name='assign-task'),
]
