//Lekce 3 


 //Očkování
 document.body.innerHTML += "<h2> Očkování </h2>";

//Představte si, že vyrábíte registrační systém na očkování proti COVID-19. 
//U každého registrovaného chceme evidovat jméno a věk.
//Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk.
//Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
const name = prompt("Zadejte jméno.", "Jan Novák")
const age = Number(prompt("Zadejte věk.", "18"))
//Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
//Květoslav Voňavý, věk: 67
document.body.innerHTML += "<p>" + name +", věk:"+age+ "</p>";


//Výplata jako stránka
document.body.innerHTML += "<h2> Výplata jako stránka </h2>";
//Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách 
//a spočítá jeho hrubou mzdu 
let payByHour = Number(prompt("Zadejte hodinovou sazbu."))
let salary = 8*21*payByHour
//za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. 
//Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. 
document.body.innerHTML += "<p> Tady je vaše výplata za 21 dní: " + salary + "</p>";
//Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
//Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. 
//Opět dejte pozor na správnou konverzi.
