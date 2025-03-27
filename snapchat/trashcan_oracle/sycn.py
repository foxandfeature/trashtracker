def sycn_locations():
    output_file = open("snapchat/trashcan_oracle/Assets/Locations.ts", "w")
    source_file = open("locations.csv", "r")
    template_file = open("snapchat/trashcan_oracle/Locations_template.ts", "r")

    locations = source_file.read().split("\n")
    result = ""

    for location in locations:
        content = location.split(",")
        if content[4] == "true":
            result += "['" + content[1] + "','" + content[0] + "'],"

    template = template_file.read()
    template = template.replace("REPLACE", result[:-1])
    output_file.write(template)

    output_file.close()
    source_file.close()
    template_file.close()

sycn_locations()

def sycn_photos():
    import os
    from PIL import Image

    source_directory = "photos"
    output_directory = "snapchat/trashcan_oracle/Assets/photos"

    for filename in os.listdir(source_directory):
        with Image.open(os.path.join(source_directory, filename)) as image:
            image.thumbnail((500,500))
            image.save(os.path.join(output_directory, filename))
            image.close()
            
sycn_photos()