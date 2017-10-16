# for more information on how to install requests
# http://docs.python-requests.org/en/master/user/install/#install
import requests
import json

# TODO: replace with your own app_id and app_key
app_id = 'df1b9283'
app_key = '12fb13689df51c7eb5ba4e457f3ef70a'

language = 'en'
word_id = 'Changes'

url = 'https://od-api.oxforddictionaries.com:443/api/v1/inflections/' + language + '/' + word_id.lower()

r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})

print("code {}\n".format(r.status_code))
print("text \n" + r.text)
print("json \n" + json.dumps(r.json()))