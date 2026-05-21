from flask import Flask, jsonify, render_template_string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    # Simple HTML page at root
    return render_template_string("""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Anne Kibonde Portfolio API</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 2rem; background: #f9f9f9; }
            h1 { color: #2c3e50; }
            p { color: #34495e; }
            a { color: #2980b9; text-decoration: none; }
        </style>
    </head>
    <body>
        <h1>Anne Kibonde Portfolio Backend</h1>
        <p>This backend is live on Render 🚀</p>
        <p>Use the API endpoint here: <a href="/api/portfolio">/api/portfolio</a></p>
    </body>
    </html>
    """)

@app.route("/api/portfolio")
def portfolio():
    return jsonify({
        "name": "Anne Kibonde",
        "title": "Data Scientist",
        "skills": [
            "Data Analysis (Excel, R, Python)",
            "Python",
            "HTML",
            "CSS",
            "PHP",
            "JavaScript",
            "Data Entry & Analysis"
        ],
        "qualifications": [
            "BSc in Data Science"
        ],
        "projects": [
            "R-based Data Analysis",
            "Excel Business Analytics"
        ],
        "contact": {
            "email": "annekibonde@gmail.com",
            "phone": "+255619800452 (WhatsApp & Call)"
        }
    })

if __name__ == "__main__":
    app.run(debug=True)
