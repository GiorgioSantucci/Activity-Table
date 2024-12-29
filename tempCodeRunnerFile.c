#include <stdio.h>

// 1) Scrivere un sottoprogramma che riceve in ingresso due numeri interi e restituisce (mediante
// parametri passati per indirizzo) sia il massimo che il minimo tra i due. Scrivere un programma che
// chiede all'utente due numeri e mediante l'utilizzo del sottoprogramma sopra definito, visualizza il
// minimo ed il massimo.

int sottoprogramma(int a, int b){
    if(a < b){
        printf("%d minore di %d\n", a , b);
        printf("%d maggiore di %d\n", b, a);
    }
    else{
        printf("%d maggiore di %d\n", a , b);
        printf("%d minore di %d\n", b ,a);
    }
}

int main(){
    int numero1, numero2;
    printf("Inserire un numero:\n");
    scanf("%d", &numero1);
    printf("Inserire un numero:\n");
    scanf("%d", &numero2);

    sottoprogramma(numero1, numero2);
}