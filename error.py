from flask import Flask, request, jsonify, render_template
import joblib
import nltk
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import string
import numpy as np
from scipy.sparse import hstack, csr_matrix

# Initialize Flask App
app = Flask(__name__)

# Load the trained model and other necessary objects
tfidf = joblib.load('tfidf_vectorizer.pkl')
cnb = joblib.load('cnb_model.pkl')
lb = joblib.load('label_encoder.pkl')
other_features_columns = joblib.load('other_features_columns.pkl')

ps = PorterStemmer(PorterStemmer.ORIGINAL_ALGORITHM)

def transform_tweet(tweet):
    tweet = tweet.lower()
    tweet = nltk.word_tokenize(tweet)
    y = [i for i in tweet if i.isalpha()]
    y = [i for i in y if i not in stopwords.words('english') and i not in string.punctuation]
    y = [ps.stem(i) for i in y]
    return " ".join(y)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/moderate', methods=['POST'])
def moderate():
    data = request.get_json()
    new_tweet = data.get('message', '')
    if not new_tweet:
        return jsonify({'error': 'No message provided'}), 400

    transformed_new_tweet = transform_tweet(new_tweet)
    new_tweet_tfidf = tfidf.transform([transformed_new_tweet])
    other_features_sparse = csr_matrix(np.zeros((1, len(other_features_columns))))
    new_tweet_final = hstack([new_tweet_tfidf, other_features_sparse])

    prediction = cnb.predict(new_tweet_final)
    predicted_sentiment = lb.inverse_transform(prediction)[0]

    moderated_tweet = new_tweet
    if "offensive" in predicted_sentiment:
        moderated_tweet = '#' * len(new_tweet)

    return jsonify({
        'original': new_tweet,
        'sentiment': predicted_sentiment,
        'moderated_text': moderated_tweet
    })

if __name__ == '__main__':
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)
    app.run(debug=True)
# nltk.download('punkt')
# nltk.download('stopwords')