# CDC Website Scraper

from bs4 import BeautifulSoup
import requests
from urls import urls
import re

def extractData(url_list):

  # first json, month/date as keys and disease counts as values
  disease = ["zika", "ebola"]
  disease_freq = {}

  #second json, month/date as keys and list of dictionaries as values
       #post dictionaries - title and date as keys and post title, summary, content, date as values
  post_dict = {}

  for url in url_list:

    key = url.split("/")[4][:8]
    disease_freq[key] = {"zika":0,"ebola":0}
    post_dict[key] = []

    r  = requests.get(url)
    data = r.text

    website_html = BeautifulSoup(data,'html.parser')

    sections = website_html.find_all("ul",{"class":"list-block"})

    zika_count = 0
    ebola_count = 0

    for posts in sections[:2]:
      # Posts alternate between posts, and empty space
      for post in posts:
        # Ignore posts without list elements (empty posts)
        if post.find("<li>") == -1:
          continue

        # Extract all text into content array, splitting on new line
        # Content array holds in index 1: content; index 2: title; index 3: date; index 4: summary
        # a few arrays have an updated line
        contentArray = post.text.encode('utf-8').splitlines()

        hasBeenUpdated = False

        if 'Updated' in contentArray[2]:
          hasBeenUpdated = True

        content = contentArray[1].lower()

        if disease[0] in content:
          zika_count += 1
        if disease[1] in content:
          ebola_count += 1

        post_info = get_post_content(contentArray,contentArray[1],hasBeenUpdated)
        post_dict[key].append(post_info)

    disease_freq[key]["zika"] = zika_count
    disease_freq[key]["ebola"] = ebola_count
  return disease_freq, post_dict

def get_post_content(contentArray,content,hasBeenUpdated):
  # Content array holds in index 1: content; index 2: title; index 3: date; index 4: summary
  # if hasBeenUpdated is True, then content array holds
  # in index 1: content; index 4: title; index 5: date; index 6:summary

  if hasBeenUpdated:
    title = contentArray[4].strip()
    date = contentArray[5]
    summary = contentArray[6]
  else:
    title = contentArray[2].strip()
    date = contentArray[3]
    summary = contentArray[4]

  post_id = title + " " + date
  return {"id":post_id,"title":title,"summary":summary,"content":content,"date":date}

uls = [urls[-1]]
extractData(uls)
