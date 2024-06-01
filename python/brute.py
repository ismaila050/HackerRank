liste=[]
with open("samadico","r") as fichier:
    for line in fichier:
        liste.append(line.strip())

print(liste)

chaine="passer"
trouve=''
for i in liste:
    if i in chaine:
        trouve=i
print("votre mot de passe est : ",trouve)
