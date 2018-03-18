from flask import Flask, render_template

app = Flask(__name__, static_folder='../static/dist', template_folder='../static/public')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/news_api')
def news_api():
    return render_template('news_api.html')


@app.route('/slider')
def slider():
    return render_template('slider.html')



if __name__ == '__main__':
    app.run(port= 5589, debug=True)

