		var tasks = [];
		var btn;
		window.idOfButton='';
		
		function reset_local()
		{
			localStorage.clear();
			location.href='main.html';
		}
		
		function reply_click(obj) {
			btn=obj;
			
			if('TEST_1'==obj)
			{
				tasks = [  "аварийное завершение*abend",
				"выборка, доступ, тип доступа*access",
				"система контроля доступа*access control system",
				"имеющий опыт работы в определенной области; продвинутый; 2. усложненный; 3. усиленный; 4. улучшенный; 5. дополнительный новейшая техника, передовая технология*advanced",
				"1. предупреждение; 2. предупреждать*alert",
				"постоянная готовность*alert always",
				"псевдоним*alias",
				"выравнивание*align",
				"группировка, расположение в линию, выравнивание (строк)*alignment",
				"добавлять*append",
				"добавление; приложение*appendix",
				"аплет, приложение; программка, (прикладная) мини-программа, утилита*applet",
				"приложение*application",
				"область*area",
				"массив*array",
				"разрешение, санкционирование, утверждение, предоставление права доступа (в систему) проверка полномочий*authentication"]; 	
						
			}
			else if ('TEST_2'==obj)
			{
				tasks = ["дублировать*back up",
				"фон; фоновый режим работы*background",
				"резервная копия, дубль;*backup",
				"двоичный*binary",
				"битовое (растровое, точечное, матричное) отображение графического объекта*bitmap",
				"1. мерцание (курсора); 2. мигать*blink",
				"жирный (шрифт)*bold",
				"загрузка*boot",
				"ошибка, дефект*bug",
				"запись на CD*burn",
				"шина, канал передачи данных*bus"]; 
				
			}
			else if ('TEST_3'==obj)
			{
				tasks = ["способность, возможность*capability",
				"1. емкость (диска) 2. пропускная способность*capacity",
				"заголовок, подрисуночная подпись, титр, сопроводительная надпись*caption",
				"центральная (телефонная) станция*central office",
				"центральный процессор*central processing",
				"изменить директорию*change directory",
				"символ, знак*character",
				"кнопка-флажок*check box",
				"галочка, метка выбора*check mark",
				"программа контроля*checker",
				"регистрировать(ся);*check-in",
				"коаксиальный кабель*coaxial cable",
				"1. удаление текста под заголовками; 2. сворачивание; 3. сворачивать*collapse",
				"1. объединять; 2. разбирать по копиям*collate",
				"корпорация, ассоциация, объедипепие*company",
				"совместимый*compatible",
				"внешнее устройство для ввода команд, консоль, пульт управления*console",
				"управляющие устройства*control",
				"управляющий символ*control character"]; 
			
			}
			else if ('TEST_4'==obj)
			{
				tasks = ["данные*data",
				"вывод данных*data out",
				"полученные данные*data received",
				"целостность баз данных*database integrity",
				"отлаживать*debug",
				"десятичный*decimal",
				"дешифровать; дешифрировать, декодировать*decode",
				"выделенный, специальный, назначенный*dedicated",
				"по умолчанию, стандартный*default",
				"деинсталлировать, удалять*deinstall",
				"удалять*delete",
				"задержка*delay",
				"1. настольный компьютер; 2. экранная (интерактивная) среда; «рабочий стол»*desktop",
				"назначение, адрес назначения, целевой адрес*destination",
				"каталог, оглавление, директория*directory",
				"отключать блокировать*disable",
				"домен; адрес в Интер¬нете,сервер доменных имен служба именования доменов*domain",
				"точка*dot",
				"скачивать, загружать*download",
				"чертить, рисовать, тянуть*draw"]; 
				
			}
			else if ('TEST_5'==obj)
			{
				tasks = ["эффективность*efficiency",
				"встраивать. перегружать*embed",
				"действовать, выводить, разблокировать*enable",
				"отменять*escape",
				"четный*even",
				"избыток остаток*excess",
				"выполняемый файл; перемещаемая вынолняемая программа*executable",
				"функциональный модуль*execution unit",
				"расширение*extention",
				"ошибка*fault",
				"1. свойство, признак, характерная черта, функция (программы) 2. средство*feature",
				"обратная связь*feedback",
				"межсетевой экран, брандмауэр*firewall",
				"1. мигать, вспыхивать; 2. flash memory*flash",
				"течение, движение*flow",
				"контроль передачи; согласование*flow control",
				"шрифт*font",
				"нижний колонтитул*footer",
				"1. кадр; 2. рамка; 3. оболочка; 4. фрейм, область*frame",
				"бесплатное программное обеспечение*freeware",
				"частота*frequency"]; 
		
			}
			else if ('TEST_6'==obj)
			{
				tasks = ["шлюз*gateway",
				"решетка, сетка*grid",
				"1. рукоятка; 2. маркер; 3. двойной указатель (указатель к указателю); 4. идентификатор;*handle",
				"жесткий, аппаратный жесткий*hard",
				"жесткий диск, винчестер*hard disk",
				"зоголовок, верхний колонтитул*header",
				"ведомый компьютер, предоставляющий своп ресурсы при соединении; хост хост-машпна, узел;*host",
				"услуги по размещению информации на сетевых узлах*hosting",
				"«горячая» (быстрая) клавиша*hotkey",
				"1. зависать; 2. колебаться в незначительных пределах; 3. находиться вблизи*hover"]; 
				
			}
			else if ('TEST_7'==obj)
			{
				tasks = ["идентификатор*identifier",
				"запрещенный недопустимый*illegal",
				"система обработки изображений*imaging system",
				"улучшать*improve",
				"первоночальный исходный*initial",
				"ввод, вывод*input",
				"вставлять*insert",
				"устанавливать*install",
				"целое число*intejer",
				"связь, вид подключения, интерфейс*interface",
				"внутренная сеть*Intranet",
				"неверный*invalid",
				"курсив*italic",
				"1. передавать управление; 2. переходить*jump",
				"1. подтверждать; 2. выключать (строку) выравнивать (абзац)*justify"]; 
				
			}
			else if ('TEST_8'==obj)
			{
				tasks = ["ядро*kernel",
				"ключ*key",
				"клавиатура*keyboard",
				"метка*label",
				"портативный компьютер*laptop",
				"1. пуск; 2. стартовый; 3. запускать (компьютер¬ную программу)*launch",
				"1. максимальное число; 2. ограничение последовательных величин*limit consecutive",
				"ссылка*link",
				"загружать*load",
				"локально вычислительная сеть*local area network",
				"заблокированный, защищаемый*locked",
				"1. регистрациоппый журнал; 2. регистрировать (ся);*log",
				"регистрироваться*log in",
				"записывать(ся) в журнал выходить из системы (сети)*log off",
				"знак фирмы, логотип*logo",
				"петля цикл*loop",
				"режим набора в нижнем регистре*lowercase"];
			
			}
			else if ('TEST_9'==obj)
			{
				tasks = ["создать каталог*make directory",
				"поле, предел*margin",
				"подходить, соответствовать*match",
				"сливать, объединять*merge",
				"сообщение*message",
				"несоответствие*mismatch",
				"взаимное исключение, флаг*mutex",
				"передвигаться, перемещаться*navigate",
				"сетевое программное обеспечение*netware",
				"уведомление, извещение*notification",
				"указатель на пустой объект; нулевой*null",
				"восьмеричный*octal",
				"порядок*order",
				"недостаточно памяти*out of memory",
				"вывод*output",
				"переполнение*overflow",
				"переписывать*overwrite"]; 
			
			}
			else if ('TEST_10'==obj)
			{
				tasks = ["путь, маршрут*path",
				"шаблон, образец*pattern",
				"метка-заполнитель, указатель места заполнения*placeholder",
				"1. точка, пункт; 2. пункт*point",
				"1. распечатка, вывод; 2. шрифт; 3. отпечаток (изображения)*print",
				"подсказка, приглашение*prompt",
				"поставлять, предоставлять, обеспечивать*provide",
				"запрос*query",
				"1. прекращать; 2. выходить*quit",
				"1. цитата, ссылка; 2. цитировать*quote",
				"случайный*random",
				"получать*receive",
				"востанавливать*recover",
				"1. регистр; 2. журнал; 3. регистрировать(ся)*register",
				"ретрансляция; передача*relay",
				"удалять директорию*remove directory",
				"репозиторий; хранилище объектов баз данных*repository",
				"выдача, результат*return",
				"маршрут*rout",
				"маршрутизатор*router",
				"строка, ряд*row"]; 
				
			}
			else if ('TEST_11'==obj)
			{
				tasks = ["образец*sample",
				"просматривать, сканировать*scan",
				"график, программа, расписание, режим, (календарный) план*schedule",
				"1. экран; 2. изображение (на экране); 3. выводить на экран*screen",
				"прокручивать, просматривать*scroll",
				"инструмент поиска*search engine",
				"безопасность, защита (данных)*security",
				"выбор данных*select",
				"(программная)оболочка, среда*shell",
				"подчиненный, ведомый*slave",
				"режим ожидания*sleep mode",
				"гнездо, патрон, розетка*socket",
				"программное обеспечение*soft(ware)",
				"сплошной*solid",
				"1. спецификация; 2. подробное обозначение; 3. перечень технических условий; техническое описапие*specification",
				"запас, фонд*stock",
				"хранилище, хранить*store",
				"строка*string",
				"отправлять на рассмотрение*submit",
				"1. переключатель, коммутатор; 2. перемычка; 3.ключ, который печатают в командной строке; 4.переключать*switch"]; 
				
			}
			else if ('TEST_12'==obj)
			{
				tasks = ["назначение*target",
				"шаблон, образец*template",
				"прекращать,оканчивать*terminate",
				"поток*thread",
				"набор инструментов*toolbar",
				"дорожка, след, отслеживать*track",
				"испытание, пробный*trial",
				"востанавливать*undelete",
				"подчеркивать*underline",
				"1.обновление, модификация, новая версия; 2.исправлять, изменять, корректировать, модернизировать, обновлять*update",
				"1. модернизация, апгрейд; 2. модернизировать*upgrade",
				"1. пересылка файла из клиентского компьютера в другой; пересылка файла из рабочей станции в хост-компьютер; 2. пересылать, выгружать*upload",
				"режим набора текста в верхнем регистре*uppercase",
				"1. контролировать данные; 2. подтверждать,проверять правильность*validate",
				"верификация, контроль, проверка*verification",
				"проверять*verify",
				"1. вид; 2. просмотр; 3. иоле, окно;*view",
				"1. волна, колебание; 2. сигнал*wave",
				"вес, весовой коэффициент;  плотность (напр., символа, изображаемого точками)*weight",
				"писать*write"]; 
				
			}
			else {
				alert("Error!");
			}
							
			//location.href='test.html#'+obj;
			
			if ('TEST_1'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'a'!";
			}
			else if('TEST_2'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'b'!";	
			}
			else if('TEST_3'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'c'!";
			}
			else if('TEST_4'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'd'!";
			}
			else if('TEST_5'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'e' or 'f'!";
			}
			else if('TEST_6'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'g' or 'h'!";
			}
			else if('TEST_7'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'i' or 'j'!";
			}
			else if('TEST_8'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'l'!";	
			}
			else if('TEST_9'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'm' or 'n', 'o'!";
			}
			else if('TEST_10'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 'p' or 'r'!";
			}
			else if('TEST_11'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 's'!";
			}
			else if('TEST_12'==obj){
				document.getElementById('infotmationAboutTest').value=obj + " Hint: the words begin with the letter: 't' or 'u', 'v', 'w'!";	
			}
			else {
				alert("Error!");
			}
		}
		
		
		
		window.countOfAnswer=1;
		window.countOfRightAnswers=0;
		window.procent = 0;
		window.tasksAlreadyHave="";
		window.task = "";
		window.index = 0;
		window.answerOfUser = "";
		window.flagStart = false;  //Флаг для определения была ли нажата в начале теста кнопка Start
		/*var tasks = [  "аварийное завершение*abend",
				"выборка, доступ, тип доступа*access",
				"система контроля доступа*access control system",
				"имеющий опыт работы в определенной области; продвинутый; 2. усложненный; 3. усиленный; 4. улучшенный; 5. дополнительный новейшая техника, передовая технология*advanced",
				"1. предупреждение; 2. предупреждать*alert",
				"постоянная готовность*alert always",
				"псевдоним*alias",
				"выравнивание*align",
				"группировка, расположение в линию, выравнивание (строк)*alignment",
				"добавлять*append",
				"добавление; приложение*appendix",
				"аплет, приложение; программка, (прикладная) мини-программа, утилита*applet",
				"приложение*application",
				"область*area",
				"массив*array",
				"разрешение, санкционирование, утверждение, предоставление права доступа (в систему) проверка полномочий*authentication"]; */
			
	
		
		//Функция для нахождения индекса разделяющего символа
		function findIndexSeparationCharacter ( str){
			for(i=0; i<str.length; i++) 
			{
				if(str[i]=='*')
					return i
			}
		}
				
		//Функция для вывода строки из массива строк
		function getStringFromArray (array){
			return array[Math.floor(Math.random() *array.length)]; 
		}
		
				
		//Функция для получения значения из textarea1
		function getValueTextarea1 (){
			return document.getElementById('textarea1').value; 
		}
	
				
	// Функция обрабoтки нажатия на кнопку START
	function seeTask(obj) {
		reply_click(obj.replace("#",""));
		hideButton('buttonCorrectAnswer');
		document.getElementById('textarea1').style.border = "solid gray 1px";
		document.getElementById('form').style.border = "solid black 1px";
		document.getElementById('form').style.background = "url(white-wallpaper-png-4.jpg)";
		window.tasksAlreadyHave = "";
		//alert("tasksAlreadyHave" + tasksAlreadyHave);
		var msg1 = document.getElementById("taskForm"); 
		var msg2 = document.getElementById("answerFormInfornation");
		var msg3 = document.getElementById("inputEnglishWord"); 
		msg1.innerHTML =  "The definition of the concept in Russian language:";
		msg2.innerHTML =  "Write the meaning of the definition in English (1-3 words): "
		msg3.value =  " ";
		window.countOfAnswer=1;
		window.countOfRightAnswers=0;	
		window.tasksAlreadyHave="";
		
		document.getElementById('inputNumberOfQuestion').value =window.countOfAnswer;
		document.getElementById('inputTotalQuestions').value =tasks.length;
		
		window.task = getStringFromArray(tasks); 
		
		window.index = findIndexSeparationCharacter(task);
		
		document.getElementById('textarea1').value = task.substring(0,1).toUpperCase() + task.substring(1,index);
		
		window.tasksAlreadyHave = task;
		window.flagStart = true;
	    }
		
		
		// Функция обрабтки нажатия на кнопку Answer
		function seeNextTask() {
			if (window.flagStart==false) {
				alert("Start the test with the 'Start' button!");
			}
			else {
			window.answerOfUser = document.getElementById("inputEnglishWord").value; 
			
	
				if(window.answerOfUser.replace(/\s/g, '').toLowerCase()==window.task.substring(window.index+1).replace(/\s/g, '')) //Удаляем возможные пробелы: \s - это регулярное выражение для "пробелов", а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).
				window.countOfRightAnswers++;
				
			document.getElementById("inputEnglishWord").value="";
			if (window.countOfAnswer < tasks.length) 
			{
			window.countOfAnswer++;
			document.getElementById('inputNumberOfQuestion').value = window.countOfAnswer;
			document.getElementById('inputTotalQuestions').value =tasks.length;
			
			window.task = getStringFromArray(tasks);
			while (tasksAlreadyHave.includes(task)) {
				window.task = getStringFromArray(tasks)}
				
				window.index = findIndexSeparationCharacter(task);	
				document.getElementById('textarea1').value = window.task.substring(0,1).toUpperCase() + task.substring(1,window.index);
				window.tasksAlreadyHave += window.task;
			
			}
			else{alert("TEST COMPLETED! YOU WILL BE SHOWN THE TEST RESULTS!")
			displayButton('buttonCorrectAnswer'); //Отображаем кнопку для возможности просмотра правильных ответов
			var msg1 = document.getElementById("taskForm"); 
			var msg2 = document.getElementById("answerFormInfornation");
			var msg3 = document.getElementById("inputEnglishWord"); 
			msg1.innerHTML =  "THE RESULTS OF THE TEST:";
			msg2.innerHTML =  "INFORMATION: "
			
				window.procent = window.countOfRightAnswers/window.countOfAnswer*100;
				window.procent = window.procent.toFixed(2);
							
			if(window.countOfRightAnswers/window.countOfAnswer > 0.6) {	
				msg3.value =  "CONGRATULATIONS!";
				document.getElementById('textarea1').value = "TEST PASSED WITH SUCCESS! \n" + window.countOfRightAnswers + " correct answers from " + window.countOfAnswer + " tasks. \n" + window.procent + " percent of the test execution!";
				document.getElementById('textarea1').style.borderColor = "green"                                             
				document.getElementById('form').style.borderColor = "green";
				document.getElementById('form').style.background ="#8affbd";
			}
			else {
				
				msg3.value =  "YOU NEED TO TRY HARDER!";	
				document.getElementById('textarea1').value = "TEST FAILED! TRY AGAIN! \n" + window.countOfRightAnswers + " correct answers from " + window.countOfAnswer + " tasks. \n" + window.procent + " % (percent) of the test execution!";
				document.getElementById('textarea1').style.border = "solid red 2px";
				document.getElementById('form').style.border = "solid red 2px";
				document.getElementById('form').style.background ="#ffc7c7";
			}
			
			}
			}
		}
		
		// Функция обработки нажатия на кнопку просмотра верных ответов
	function seeCorrectAnswer() {
		var allTrueAnswers="";
		var indexNumber=0;
		for (var i = 0; i <= tasks.length; i++) {
			indexNumber=findIndexSeparationCharacter(tasks[i]);
			allTrueAnswers += " " + parseInt(i+1, 10) + ") " +  tasks[i].substring(0, indexNumber) + ": " + tasks[i].substring(indexNumber + 1) +".\n";
			if(i==tasks.length-1)
			alert(allTrueAnswers);
			//document.getElementById('textarea1').value += " " + parseInt(i+1, 10) + ") " +  tasks[i].substring(0, indexNumber) + ". RIGHT ANSWER: " + tasks[i].substring(indexNumber + 1) +"\n";
			}
		
	}
	    // Функция обработки нажатия на кнопку Finish
	function finish() {		
		tasks.length = 0;
		localStorage.removeItem(btn);
		localStorage.setItem(btn, (window.countOfRightAnswers/window.countOfAnswer*100).toFixed(2).toString());
		location.href='main.html';
		//location.href='main.html#' + btn+'?'+(window.countOfRightAnswers/window.countOfAnswer*100).toString();
	}
		
		
		
	function displayButton(idName) {
		document.getElementById(idName).style.display = 'block';}
	function hideButton(idName) {
		 document.getElementById(idName).style.display = 'none'; 
	}
	
	function openInformation1(){
		location.href='information1.html#';
	}
	
	function openInformation2(){
		location.href='information2.html#';
	}
	
	function openInformation3(){
		location.href='information3.html#';
	}