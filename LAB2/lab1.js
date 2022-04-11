var htmlString = '<h1 style="text-align: center;">Я, <a href="UFO.html" class="labhref">Астровский Дмитрий Андреевич</a> , изучаю <span style="color: #e1b12c;">HTML и CSS</span> </h1> \
<p style="text-align: center!important;"> \
    <h2>Загадка суши</h2>  \
    <h3>Как я познакомился с суши</h3> \
    <font color="#7f8fa6">Объективно суши является пищей богов, которая снизошла на нас не без помощи пришельцев. Откуда я это знаю? Я знаком с ними лично, и они сами мне \
        это всё рассказали. Самым страным для меня было то, что они отдали нам их безвозмездно. Когда я впервые их попробовал, я понял только то, что вкуснее в жизни ничего не ел. Вкусная и сытная пища. \
    </font> \
    <h3>Почему пришельцы?</h3> \
    <font color = "#7f8fa6"> \
        Потому что при их изготовлении используются внеземные технологии. Дощечка из бамбука которая может скручиваться - однозначно <span style=" color: #e1b12c;">сюрреалистичный инструмент</span>  для каждого из нас. \
    </font> \
    <h3>Кто они?</h3> \
    <font color = "#7f8fa6" >Я долго скрывал это, но ответ прост: <span style="color: #c23616!important;" id="span1">Надя и Сеня</span> </font> \
</p> \
<h2>Виды пришельцев</h2> \
<ul> \
    <li type="1"> \
        Инопрешеленцы обыкновенные: \
        <ul class="firstgrouptable"> \
            <li type="circle">Инопрешеленцы зеленые</li> \
            <li type="circle">Инопрешеленцы красные</li> \
        </ul> \
    </li> \
    <li type="1" class="secondgrouptable"> \
        Инопрешеленцы необыкновенные: \
        <ul> \
            <li type="disc">Инопрешеленцы цветные</li> \
            <li type="disc">Хамелеоны</li> \
        </ul> \
    </li> \
    <li type="1" class="thirdgrouptable"> \
        Инопрешеленцы-шпионы: \
        <ul> \
            <li type="square">Надя</li> \
            <li type="square">Арсений</li> \
        </ul> \
    </li> \
</ul> \
<table border="1"> \
    <tr> \
        <th colspan="2" >ФИО</th> \
        <th colspan="3"><a href="UFO.html" class="labhref">Романовский Арсений %^7@04#2</a></th> \
    </tr> \
    <tr> \
        <td colspan="2" >Интеллект:</td> \
        <td colspan="3">2080TI IQ</td> \
    </tr> \
    <tr> \
        <td colspan="2" rowspan="6" style="padding: 10px;" >1 семестр \
            2021/2022 уч. года</td> \
        <td>Дата</td><td>Предмет</td><td>Оценка</td> \
    </tr> \
    <tr> \
        <td>Вчера</td><td>Физра</td><td>-дыхалка</td> \
    </tr> \
    <tr><td>когда-то</td><td>Физика</td><td>~3</td></tr> \
    <tr><td>когда-то</td><td>ДПЮ</td><td>14</td></tr> \
    <tr><td>когда-то</td><td>Математика</td><td>6</td></tr> \
    <tr><td>когда-то</td><td>Военкомат</td><td>Годен</td></tr> \
</table> \
 <a href="buy_now.html" class="labhref" style="font-size:22px;"> Купить Пришеленца!</a> \
';
var Laba1 = document.getElementById('Laba-1');
Laba1.onclick = function(){
    document.getElementById("MAIN").innerHTML = htmlString;
}