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
    
def get_workout_by_id(request, plan_id, workout_id):
    print("fonction appelée")
    try:
        supabase_client = get_supabase_client()

        # Récupérer le plan de workout par son ID
        response = supabase_client.table('workout_plans').select('*').eq('id', plan_id).execute()

        if response.data:
            # Extraire le plan et récupérer la liste des semaines
            plan_data = response.data[0]
            weeks = plan_data.get('weeks', [])
            print(plan_data)

            # Parcourir les semaines pour trouver la semaine et le workout correspondant
            for week in weeks:
                for workout in week.get('workouts', []):
                    if workout['id'] == workout_id:
                        # Retourner les données du workout trouvé
                        return JsonResponse(workout, safe=False)

            # Si aucun workout n'est trouvé dans les semaines
            return JsonResponse({'error': 'Workout not foundeeee'}, status=404)

        # Si aucun plan n'est trouvé
        return JsonResponse({'error': 'Plan not found'}, status=404)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)