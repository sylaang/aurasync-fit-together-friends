from django.http import JsonResponse
from .supabase_connector import get_supabase_client  # Utilise le client déjà préparé

def get_all_plans(request):
    try:
        supabase_client = get_supabase_client()
        response = supabase_client.table('workout_plans').select('*').execute()
        return JsonResponse(response.data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
def get_plan_by_id(request, id):
    try:
        supabase_client = get_supabase_client()
        response = supabase_client.table('workout_plans').select('*').eq('id', id).execute()
        if response.data:
            return JsonResponse(response.data[0], safe=False)
        return JsonResponse({'error': 'Plan not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
def get_workout_by_id(request, id, workout_id):
    try:
        supabase_client = get_supabase_client()

        response = supabase_client.table('workout_plans').select('*').eq('id', id).execute()

        if response.data:
            plan_data = response.data[0]
            weeks = plan_data.get('weeks', [])

            for week in weeks:
                for workout in week.get('workouts', []):
                    if workout['id'] == workout_id:
                        return JsonResponse(workout, safe=False)

            return JsonResponse({'error': 'Workout not found'}, status=404)

        return JsonResponse({'error': 'Plan not found'}, status=404)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)