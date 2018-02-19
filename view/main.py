from flask import Blueprint, render_template

app = Blueprint("main", __name__, url_prefix="/")


@app.route("/", defaults={"path": ""})
@app.route("<path:path>")
def main(path):
    return render_template("index.html")
