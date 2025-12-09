////string maVariable = MaMethode("tutu");
//int turlututu = FaisLeCalcul(2, 4);

//string a = "ecrie moi un nombre";
//Console.WriteLine(a);
//string aa = Console.ReadLine();
//string b = $"bonjour ,{aa}";
//Console.WriteLine(b);
//Console.WriteLine("ecrit moi un premier nombre");
//string eric = Console.ReadLine();
    
//Console.WriteLine("ecrit moi un dexieme nombre");
//string z = Console.ReadLine();
//bool verif = int.TryParse(eric, out int x);
//bool verif1 = int.TryParse(z, out int x1);
//int resulte = x * x1;
//Console.WriteLine(resulte);


//string MaMethode(string text)
//{
//    return "toto " + text + " titi";
//}

//int FaisLeCalcul(int nb1, int nb2)
//{
//    var total = nb1 + nb2;
//    Console.WriteLine(total);

//    return total;
//}


int[] Numbers = { 15, 56, 8, 20, 45, 10};

//for (int i = 7; i <= 10; i++) ;
//{
//    Console.WriteLine("coucou");
//}
int resultat = 0;
//{
//    Console.WriteLine(number);
//}
for (int i = 0; i < Numbers.Length ; i++)
{
    resultat = resultat + Numbers[i];
}
Console.WriteLine(resultat);
int moy = resultat / Numbers.Count() ;
Console.WriteLine(moy);
