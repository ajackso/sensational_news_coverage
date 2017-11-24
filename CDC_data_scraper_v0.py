# CDC Website Scraper

from bs4 import BeautifulSoup
import requests
from urls import urls
import re

def extractData(url_list):

  disease = ["zika", "ebola"]
  disease_freq = {}

  for url in url_list:

    print(url)

    key = url.split("/")[4][:8]
    disease_freq[key] = {"zika":0,"ebola":0}

    r  = requests.get(url)
    data = r.text

    website_html = BeautifulSoup(data,'html.parser')

    sections = website_html.find_all("ul",{"class":"list-block"})

    zika_count = 0
    ebola_count = 0

    print(type(sections))
    for posts in sections[:2]:
      print(posts)
      print("******************************************************")
      #for post in posts:
        # print(type(post))
        # print(post)
        # print("\n")
        #post_li = post.find_all("li")
        #content = post.find(string=re.compile("/"))
        # if disease[0] in content:
        #   zika_count += 1
        #   save_post(post_li,disease[0])
        # if disease[1] in content:
        #   ebola_count += 1
        #   save_post(post_li,disease[1])

    disease_freq[key]["zika"] = zika_count
    disease_freq[key]["ebola"] = ebola_count

def save_post(post_li, disease_name):
  date = post_li.find("span",{"class":"date"}).text
  summary = post_li.find("span",{"class":"summary"}).text

  try:
    title = post_li.find_all("a")[1].text
  except KeyError:
    print("Key error: there is only one item in the list of a tags")

  # save in a data structure
  print("date: " + date)
  print("title: " + title)
  print("summary: " + summary)
  print("\n")

  return

uls = [urls[-1]]

extractData(uls)
