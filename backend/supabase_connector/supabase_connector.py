# supabase_connector.py
from django.conf import settings
from supabase import create_client, Client

def get_supabase_client() -> Client:
    """
    Fonction pour initialiser et retourner le client Supabase.
    """
    # Récupérer l'URL et la clé depuis settings.py (qui charge les variables .env)
    SUPABASE_URL = settings.SUPABASE_URL
    SUPABASE_KEY = settings.SUPABASE_KEY

    # Retourner le client Supabase en utilisant les variables récupérées
    return create_client(SUPABASE_URL, SUPABASE_KEY)
