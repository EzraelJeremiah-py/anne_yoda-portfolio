from flask import Flask, jsonify

app = Flask(__name__)

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
