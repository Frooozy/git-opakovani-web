// Počkáme, až se kompletně načte celé HTML stránky
document.addEventListener("DOMContentLoaded", () => {
    
    // Načtení prvků z HTML pomocí jejich ID
    const actionButton = document.getElementById("actionBtn");
    const secretMessage = document.getElementById("jsMessage");

    // Kontrola, zda prvky na stránce opravdu existují
    if (actionButton && secretMessage) {
        
        // Přidání posluchače události (kliknutí) na tlačítko
        actionButton.addEventListener("click", () => {
            
            // 1. Změníme text skrytého odstavce
            secretMessage.innerHTML = "<strong>Gratuluji, hrdino!</strong> Právě jsi absorbovala Source magii. Tvá cesta za božstvím (Godwoken) v Rivellonu oficiálně začíná! JavaScript funguje skvěle.";
            
            // 2. Upravíme styl – zobrazíme text (změníme barvu a odebereme případné skrytí)
            secretMessage.style.display = "block";
            secretMessage.style.color = "#ffb300"; // Božská zlatá barva
            secretMessage.style.marginTop = "15px";
            secretMessage.style.padding = "10px";
            secretMessage.style.border = "1px dashed #e53935"; // Červené lemování
            secretMessage.style.backgroundColor = "#1f1414";

            // 3. Vypíšeme jednoduchou vyskakovací zprávu (splňuje bod ze zadání)
            alert("Source magie aktivována! JavaScript je plně funkční.");
        });
    }
});