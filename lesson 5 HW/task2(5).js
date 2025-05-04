// const averageGrade = 60;
// let markGrade;
// if (averageGrade >= 60 && averageGrade <=70)
//     {markGrade = 'Задовільно'}
// else if (averageGrade >=71 && averageGrade <=80)
// {markGrade ='Добре'}
// else if (averageGrade >=81 && averageGrade <=90)
// {markGrade = 'Дуже добре'} 
// else if (averageGrade >=91 && averageGrade <=100)
// {markGrade = 'Відмінно'}
// else if (averageGrade <60)
// {markGrade = 'Незадовільно'}
// console.log(markGrade);

//switch/case

const averageGrade = 78;
switch (true){
    case averageGrade >= 60 && averageGrade <=70:
        console.log('Задовільно');
        break;
    case averageGrade >=71 && averageGrade <=80:
        console.log('Добре');
        break;
    case averageGrade >=81 && averageGrade <=90:
        console.log('Дуже добре');
        break;
    case averageGrade >=91 && averageGrade <=100:
        console.log('Відмінно');
        break;
        case averageGrade <60:
            console.log ('Незадовільно');
            break;
            

            default:
                console.log(undefined);
}

