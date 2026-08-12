import requests
# requests库，专门用来发网络请求

resp = requests.get("https://api.ipify.org?format=json")
print(resp.json())
