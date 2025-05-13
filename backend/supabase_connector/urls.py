from django.urls import path
from . import views

urlpatterns = [
    path('workout-plans/', views.get_all_plans, name='get_all_plans'),
    path('workout-plans/<str:id>/', views.get_plan_by_id, name='get_plan_by_id'),
    path('workout-plans/<slug:id>/workouts/<str:workout_id>/', views.get_workout_by_id, name='get_workout_by_id'),

]