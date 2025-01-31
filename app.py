from flask import Flask, render_template, request,url_for
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key="AIzaSyDrQGbGE_abFZ0TTwF_Z7819-CCF6ovaow")
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route("/", methods=["GET", "POST"])
def chat():
    bot_response = ""
    if request.method == "POST":
        user_input = request.form["user_input"]
        if user_input.lower() != "bye":
            modified_input = f"Give me only a proper prompt for {user_input}"
            response = model.generate_content(modified_input)
            bot_response = response.text
    return render_template("index.html", bot_response=bot_response)

if __name__ == "__main__":
    app.run(debug=True)
