const averageGrade = 93;
let markGrade;
if (averageGrade >= 60 && averageGrade <=70)
    {markGrade = 'Задовільно'}
else if (averageGrade >=71 && averageGrade <=80)
{markGrade ='Добре'}
else if (averageGrade >=81 && averageGrade <=90)
{markGrade = 'Дуже добре'} 
else if (averageGrade >=91 && averageGrade <=100)
{markGrade = 'Відмінно'}
else if (averageGrade <60)
{markGrade = 'Незадовільно'}
else
{markGrade = undefined}
console.log(markGrade);