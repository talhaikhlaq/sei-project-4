import os
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/pyfin')
secret = os.getenv('SECRET', 'shhh')
