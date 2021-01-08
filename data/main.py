import re

file_path = './german_nouns.txt'
german_die_nouns = []
german_der_nouns = []
german_das_nouns = []
selected_words = []

with open(file_path, 'r', encoding='utf-8') as data:
    for line in data:
        splitlines = re.split("\t+| ' '", line)
        for word in splitlines:
            if word.find('{f}') != -1:
                selected_words.append(word)
            elif word.find('{n}') != -1:
                selected_words.append(word)
            elif word.find('{m}') != -1:
                selected_words.append(word)

i = 0
while i < len(selected_words):
    w = selected_words[i].split(' ')
    for index, j in enumerate(w):
        if j == '{n}' and index % 2 == 0:
            german_das_nouns.append(w[index-1])
        elif j == '{f}' and index % 2 == 0:
            german_die_nouns.append(w[index - 1])
        elif j == '{m}' and index % 2 == 0:
            german_der_nouns.append(w[index - 1])
    i += 1

unique_die_nouns = set(german_die_nouns)
unique_der_nouns = set(german_der_nouns)
unique_das_nouns = set(german_das_nouns)

german_nouns_output = open("german_nouns_output.json", "w")
german_nouns_output.write('[')

for word in unique_die_nouns:
    if re.search("erin\Z", word) or not word.istitle():
        continue
    else:
        german_nouns_output.write('{"germanNoun": "' + str(word) + '", "gender": "die"},')
        german_nouns_output.write('\n')
for word in unique_das_nouns:
    if not word.istitle():
        continue
    else:
        german_nouns_output.write('{"germanNoun": "' + str(word) + '", "gender": "das"},')
        german_nouns_output.write('\n')
for word in unique_der_nouns:
    if not word.istitle():
        continue
    else:
        german_nouns_output.write('{"germanNoun": "' + str(word) + '", "gender": "der"},')
        german_nouns_output.write('\n')
        
german_nouns_output.write(']')
german_nouns_output.close()




