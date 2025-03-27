import os, shutil

from PIL import Image

img_source_directory = "photos/"
img_output_directory = "snapchat/trashcan_oracle/Assets/photos"

output_file = open("snapchat/trashcan_oracle/Assets/Locations.ts", "w")
source_file = open("locations.csv", "r")
template_file = open("snapchat/trashcan_oracle/Locations_template.ts", "r")

if not os.path.exists(img_output_directory):
    os.makedirs(img_output_directory)

locations = source_file.read().split("\n")

result = ""

for location in locations:
    content = location.split(",")
    if content[4] == "true":
        result += "['" + content[0] + "','" + content[1] + "'],"
        image = Image.open(os.path.join(img_source_directory, content[0]) + ".jpg")
        image.thumbnail((500,500))
        image.save(os.path.join(img_output_directory, content[0]) + ".jpg")
        image.close()

template = template_file.read()
template = template.replace("REPLACE", result[:-1])
output_file.write(template)

output_file.close()
source_file.close()
template_file.close()
"photos/reden-ihssengasse-süd.jpg"