from app import app
from controllers import auth, salaries, categories

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(salaries.api, url_prefix='/api')
app.register_blueprint(categories.api, url_prefix='/api')
