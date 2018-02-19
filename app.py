import os

from flask import Flask

import view

app = Flask(__name__)

app.register_blueprint(view.main.app)
app.register_blueprint(view.api.app)

app.config.from_object("config.config")
if os.environ.get("ENV") == "production":
    app.config.from_object("config.production")
else:
    app.config.from_object("config.development")

if __name__ == "__main__":
    app.run()