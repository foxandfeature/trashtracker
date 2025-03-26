target_file = open("snapchat/trashcan_oracle/Assets/Locations.ts", "w")
source_file = open("locations.csv", "r")
template_file = open("snapchat/Locations_template.ts", "r")

locations = source_file.read().split("\n")
result = ""

for location in locations:
    content = location.split(",")
    if content[4] == "true":
        result += "['" + content[1] + "','" + content[0] + "'],"

template = template_file.read()
template = template.replace("REPLACE", result[:-1])
target_file.write(template)

target_file.close()
source_file.close()
template_file.close()