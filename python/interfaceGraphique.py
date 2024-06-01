from tkinter import *
fenetreRacine = Tk()
fenetreRacine.title("Titre de la racine ")
accueil = Label(fenetreRacine,text="Bonjour cher client")
accueil.pack()
inviterSaisir = Label(fenetreRacine,text="veuillez saisir un nombre au hasarz svp :")
inviterSaisir.pack()
conteneur = StringVar()
champDeSaisie = Entry(fenetreRacine,textvariable=conteneur,width=50)
champDeSaisie.pack()
bouttonExit = Button(fenetreRacine,text="Exit",command=fenetreRacine.quit)
bouttonExit.pack()

###case cochable
var_case = IntVar()
case = Checkbutton(fenetreRacine,text="ne plus poser cette question ",variable=var_case)
case.pack()
var_case.get()


choix = StringVar()
choisirRouge = Radiobutton(fenetreRacine,text="Rouge",variable=choix,value="rouge")
choisirRouge.pack()
fenetreRacine.mainloop()