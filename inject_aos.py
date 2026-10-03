import os
import glob
from bs4 import BeautifulSoup

def process_file(filepath):
    with open(filepath, 'r') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    head = soup.find('head')
    body = soup.find('body')

    if head and not head.find('link', href=lambda x: x and 'aos.css' in x):
        aos_css = soup.new_tag('link', rel='stylesheet', href='https://unpkg.com/aos@next/dist/aos.css')
        head.append(aos_css)

    if body and not body.find('script', src=lambda x: x and 'aos.js' in x):
        aos_js = soup.new_tag('script', src='https://unpkg.com/aos@next/dist/aos.js')
        aos_init = soup.new_tag('script')
        aos_init.string = "AOS.init({duration: 800, once: true});"
        body.append(aos_js)
        body.append(aos_init)

    with open(filepath, 'w') as f:
        f.write(str(soup))

for file in glob.glob('*/code.html'):
    process_file(file)

print("Done")
