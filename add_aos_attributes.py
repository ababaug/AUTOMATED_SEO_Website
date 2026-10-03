import os
import glob
from bs4 import BeautifulSoup

def process_file(filepath):
    with open(filepath, 'r') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    modified = False

    # Hero/Headline elements
    for i, tag in enumerate(soup.find_all(['h1'])):
        if not tag.has_attr('data-aos'):
            tag['data-aos'] = 'fade-down'
            tag['data-aos-delay'] = str(i * 100)
            modified = True

    # Subheadings
    for i, tag in enumerate(soup.find_all(['h2', 'h3'])):
        if not tag.has_attr('data-aos'):
            tag['data-aos'] = 'fade-up'
            tag['data-aos-delay'] = '100'
            modified = True

    # Paragraphs in hero or main sections
    for i, tag in enumerate(soup.find_all('p')):
        if not tag.has_attr('data-aos'):
            tag['data-aos'] = 'fade-up'
            tag['data-aos-delay'] = '200'
            modified = True

    # Buttons
    for i, tag in enumerate(soup.find_all(['button', 'a'])):
        # Only target anchor tags that look like buttons
        classes = tag.get('class', [])
        if tag.name == 'button' or any('bg-primary' in c or 'rounded' in c for c in classes):
            if not tag.has_attr('data-aos'):
                tag['data-aos'] = 'fade-up'
                tag['data-aos-delay'] = '300'
                modified = True

    # Sections and generic containers (like cards)
    for tag in soup.find_all(['section', 'article', 'div']):
        classes = tag.get('class', [])
        # Targeting sections or divs that look like cards/grids
        if tag.name == 'section' or any('bg-surface-container' in c or 'shadow' in c for c in classes):
            if not tag.has_attr('data-aos'):
                tag['data-aos'] = 'fade-up'
                tag['data-aos-duration'] = '1000'
                modified = True

    # Images
    for tag in soup.find_all('img'):
        if not tag.has_attr('data-aos'):
            tag['data-aos'] = 'zoom-in'
            tag['data-aos-duration'] = '800'
            modified = True

    if modified:
        with open(filepath, 'w') as f:
            f.write(str(soup))
        print(f"Modified {filepath}")

for file in glob.glob('*/code.html'):
    process_file(file)

print("Done")
