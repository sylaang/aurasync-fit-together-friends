from django.urls import path
from . import views

urlpatterns = [
    path('workout-plans/', views.get_all_plans, name='get_all_plans'),
    path('workout-plans/<slug:slug>/', views.get_plan_by_slug, name='get_plan_by_slug'),
    path('workout-plans/<slug:slug>/workouts/<str:workout_id>/', views.get_workout_by_id, name='get_workout_by_id'),

]