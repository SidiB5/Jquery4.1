$(document).ready(() => {
    var countVictory = 0;
    var countDefeat = 0;
    var totalTry = 0
$('#btnShifumi').click(function(){
    var shifumi = ['Pierre', 'Feuille', 'Ciseaux'];
    var i = Math.floor(Math.random() * 3);
    var machineChoice = shifumi[i];
    var humanChoice = $('select[name = optionShifumi] > option:selected').val();
    console.log(humanChoice);
    if( machineChoice == humanChoice){
        alert('Égalité, veuillez recommencer');
        totalTry++
    }else if( (humanChoice == 'Pierre' && machineChoice == shifumi[2]) || (humanChoice == 'Feuille' && machineChoice == shifumi[0]) || (humanChoice == 'Ciseaux' && machineChoice == shifumi[1]) ){
        alert('Vous avez gagné' + '\n Nombre de victoire: ' + countVictory);
        countVictory++
        totalTry++
    }else{
        alert('L\'intelligence artificielle vous a battu' + '\n Nombre de défaite: ' + countDefeat);
        countDefeat++
        totalTry++
    }
$('#stats').click(function(){
    var percentVictory = Math.round(100 * (countVictory / totalTry));
    alert('Statistique : \n' + 'Victoire : ' + countVictory + '\n Défaite : '+ countDefeat + '\n Pourcentage de victoire : '+ percentVictory+'%');
});
});
});