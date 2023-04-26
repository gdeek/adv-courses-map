import csv
import json

csv_file_path = 'data.csv'
data = {}

area_tags=''
with open(csv_file_path, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        id_value = row['ID']
        data[id_value] = row

        area_tag = f'<area href="#" data-courseId="{row["ID"]}" coords="{row["Coords"]}" shape="rect">'
        area_tags += area_tag + '\n'

json_data = json.dumps(data, indent=2)
with open('data.json', 'w') as outfile:
    json.dump(data, outfile, indent=2)

with open('area_tags.txt','w') as outfile:
    outfile.write(area_tags)