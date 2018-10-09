from flask import Flask, render_template,redirect,url_for

app = Flask(__name__, static_folder='../static/dist', template_folder='../static/public')


@app.route('/')
def index():
    return redirect(url_for('news_api'))


@app.route('/news_api')
def news_api():
    return render_template('news_api.html')



if __name__ == '__main__':
    app.run(port= 5589, debug=True)


