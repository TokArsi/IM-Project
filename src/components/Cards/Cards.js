import {eventWrapper} from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";
import './cards.scss';
const cards = [
{
    title: "Пресс-секретарь",
    task: "Задача пресс-секретаря",
    task_description: "пресс-секретарь освещает значимые события,\
     происходящие в компании или организации. Также может сопровождать \
     информационную активность политика, медийной персоны, музыкального \
     коллектива, артиста. Пресс-секретарь взаимодействует со СМИ и поддерживает \
     имидж работодателя, отслеживает информационный тон в медиапространстве, даёт официальные ответы от имени работодателя.",
    salary_value: "50-70 тыс. руб",
    count_vacancies: "77 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Копирайтер",
    task: "Задача копирайтера",
    task_description: "копирайтер - это автор профессиональных текстов. Главное, что нужно знать\
     о работе копирайтера - он пишет тексты для разных площадок, форматов и задач: от постов в соцсетях\
      и текстов для сайта до сценариев видеороликов, подкастов или радиорекламы. Вместе с арт-директором \
      образует креативную пару, ответственную за творческое наполнение рекламных кампаний.",
    salary_value: "50 тыс. руб",
    count_vacancies: "1076 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

 {
    title: "Креатор",
    task: "Задача креатора",
    task_description: "креатор в рекламном агентстве придумывает нестандартные творческие идеи, которые помогут\
     привлечь внимание целевой аудитории к бренду или его продукту. Ему надо хорошо знать продукт и понимать\
      аудиторию, её интересы, страхи и чувства. В этом ему помогает рекламный стратег. Также креатор отвечает\
       за реализацию идеи: съёмку ролика, дизайн постеров, проведение фотосессии.",
    salary_value: "60-80 тыс. руб",
    count_vacancies: "109 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "PR-менеджер",
    task: "Задача PR-менеджера",
    task_description: "PR-менеджер создаёт, продвигает и поддерживает хороший имидж компании или персоны.\
     Такой специалист может работать с брендами, селебрити и даже отдельными проектами. Он планирует имиджевые\
      кампании, общается со СМИ и ищет эффективные способы продвижения.",
    salary_value: "60 тыс. руб",
    count_vacancies: "458 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Рекламный стратег",
    task: "Задача рекламного стратега",
    task_description: "стратег отвечает за смысловую часть рекламной кампании. Следит, чтобы все рекламные активации\
     соответствовали целям клиента, ценностям бренда и заданной целевой аудитории. Он активно сотрудничает с\
      маркетинговыми отделами и сам при необходимости исследует рынок и потребителей, проводя интервью, фокус-группы и опросы.",
    salary_value: "55-80 тыс. руб",
    count_vacancies: "2246 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Менеджер по рекламе",
    task: "Задача менеджера по рекламе",
    task_description: "менеджер по рекламе – специалист, который отвечает за рекламную деятельность компании.\
     Для этого он должен понимать маркетинговые и бизнес-цели компании, хорошо знать продукт и его целевую аудиторию.\
      Он отвечает за продвижение продукта, планирует рекламные кампании и оценивает их эффективность.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "3617 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Контент-маркетолог",
    task: "Задача контент-маркетолога",
    task_description: "контент-маркетолог продюсирует интересный и востребованный информационный контент от имени бренда.\
     Такой контент формирует положительный экспертый имидж компании. В зависимости от площадки контент-маркетолог\
      работает над разными форматами: пишет тексты, продюсирует подкасты, снимает и монтирует видео, проводит опросы,\
       делает и редактирует фото, составляет инфографику, чеклисты, оформляет кейс-стади и создает спецпроекты в диджитал.",
    salary_value: "45-80 тыс. руб",
    count_vacancies: "119 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Руководитель пресс-службы",
    task: "Задача главы пресс-службы",
    task_description: "глава пресс-службы является руководителем подразделения, отвечающего за взаимодействие компании со СМИ.\
     Этот человек несет ответственность за результат своих подчиненных и всего отдела. В отличие от PR-менеджера,\
      руководитель пресс-службы фокусирует своё внимание не только на работу со СМИ, но также на коллектив\
       подчинённых: ставит задачи, контролирует их исполнение.",
    salary_value: "75-95 тыс. руб",
    count_vacancies: "59 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Контент-менеджер",
    task: "Задача контент-менеджера",
    task_description: "контент-менеджер отвечает за размещение и актуализацию информацию, публикуемую на различных\
     ресурсах от имени бренда: социальные сети, сайт, паблики, каталоги, карочки продукта в интернет-магазине.\
      Его задача - модерировать контент, который соответствовал бы целям бизнеса, поэтому он часто работает\
       с контент-маркетологом. Также такой человек работает в связке с копирайтерами, дизайнерами и SMM-специалистами.\
        Если компания небольшая, обязанности некоторых специалистов перекладываются на плечи контент-менеджера.",
    salary_value: "55-90 тыс. руб",
    count_vacancies: "947 вакансий",
    direction: "«Реклама и связи с общественностью в бизнесе»",
    link: "https://imguu.ru/adinbusiness",
},

{
    title: "Менеджер по маркетингу",
    task: "Задача менеджера по маркетингу",
    task_description: "менеджер по маркетингу (он же маркетолог) — это человек, который знает, как сбалансировать\
     возможности и ресурсы компании и предпочтения и потребности аудитории. Маркетолог определяет конкурентоспособность\
      компании и помогает сделать потребителей счастливее прибыльным для компании способом. Обычно он курирует общение\
       между компанией и ее клиентской базой и вызывает у покупателей интерес к продуктам и услугам на разных медиа-каналах.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "3684 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Продакт-менеджер",
    task: "Задача менеджера по продукту",
    task_description: "продакт-менеджер (или, коротко, продакт) отвечает за продукт или его часть. Продуктом может\
     быть как видеоигра или сайт газеты, так и приложение для доставки еды и даже умный пылесос. Продакт-менеджер\
      отвечает за создание, вывод на рынок и дальнейшую поддержку нового продукта, при этом он должен предложить\
       рынку решение, которого нет у конкурентов и тем самым помочь компании стать успешнее и заработать больше денег.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "2000 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Руководитель отдела маркетинга",
    task: "Задача руководителя отдела маркетинга",
    task_description: "в его подчинении – команда специалистов по маркетингу. Если таких команд в организации\
     несколько, директор анализирует и координирует их деятельность через руководителей смежных отделов маркетингового профиля",
    salary_value: "100-250 тыс. руб",
    count_vacancies: "432 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Менеджер по дистрибуции и продажам",
    task: "Задача менеджера по дистрибуции и продажам",
    task_description: "менеджеры по дистрибуции и продажам контролируют цепочки поставок своего работодателя,\
     которая доставляет продукты и услуги компании и отправляет их клиентам.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "1289 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Performance - маркетолог",
    task: "Задача Performance - маркетолога",
    task_description: "специалист, который отвечает за измеримые результаты продвижения продукта.\
     Для достижения целей он использует разные рекламные инструменты: контекст, таргет, SMM, email-рассылки,\
      SEO-оптимизацию, медийную рекламу и ретаргетинг.",
    salary_value: "60-80 тыс. руб",
    count_vacancies: "155 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Маркетинговый аналитик",
    task: "Задача маркетингового аналитика",
    task_description: "маркетолог-аналитик — это специалист, который анализирует и корректирует маркетинговую стратегию\
     на основе данных. В задачи маркетолога-аналитика входит: настройка системы сбора данных. Маркетолог должен\
      понимать, какие именно данные о пользователях и компании нужны для качественной аналитики и настройки промокампании.",
    salary_value: "70-100 тыс. руб",
    count_vacancies: "298 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Директор по маркетингу",
    task: "Задача директора по маркетингу",
    task_description: "директор по маркетингу – лицо, которое  во многом определяет конкурентоспособность организации.\
     Директор по маркетингу отвечает за успешность всех бизнес-единиц и ассортимента продуктов. Директор по маркетингу\
      контролирует работу коллектива по управлению продуктом, ценообразованием, сбытом и продвижением.",
    salary_value: "150-350 тыс. руб",
    count_vacancies: "4690 вакансий",
   direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Специалист по маркетинговым исследованиям",
    task: "Задача специалиста по маркетинговым исследованиям",
    task_description: "занимается планированием, организацией и проведением маркетинговых исследований,\
     в том числе: исследованием новых ниш для развития бизнеса компании, исследованием поведения потребителей,\
      оценкой емкости рынка и прогнозированием спроса, анализом деятельности конкурентов, сбором данных о работе\
       ритейла методом тайного покупателя. Эта профессия обеспечивает топ-менеджеров достоверными данными,\
        необходимыми для принятия решений.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "3684 вакансий",
   direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Специалист по ценообразованию",
    task: "Задача специалиста по ценообразованию",
    task_description: "специалист по ценообразованию является финансово-экономическим аналитиком с административными\
     функциями. Он ведет системную работу по контролю текущих цен на товары и услуги, производит расчеты по\
      обоснованному лимиту цен, контролирует состояние рынка.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "806 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "BTL-менеджер",
    task: "Задача BTL-менеджера",
    task_description: "BTL-менеджер (от англ. below the line – под чертой) – специалист, который организовывает\
     продвижение торговой марки в местах продаж: супермаркеты, корнеры, торговые центры, выставки и др. Это необходимо\
      для дополнительного информирования уже существующей потребительской аудитории, либо для привлечения новых покупателей.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "240 вакансий",
    direction: "«Маркетинг»",
    link: "https://imguu.ru/marketing",
},

{
    title: "Контент-продюсер",
    task: "Задача контент-продюсера",
    task_description: "отвечает за все этапы создания контента до взаимодействия с площадками, на которых он будет\
     опубликован. Контент-продюсер отвечает за создание, редактирование и размещение текста, видео, аудио, изображений\
      и других материалов на сайте, в социальных сетях. Владеет навыками фото- и видеосъемки,\
       графического дизайна, верстки, копирайтинга, видеомонтажа, звукозаписи и пр.",
    salary_value: "50-70 тыс. руб",
    count_vacancies: "53 вакансий",
    direction: "«Цифровые маркетинговые коммуникации»",
    link: "https://imguu.ru/dmc",
},

{
    title: "Таргетолог",
    task: "Задача таргетолога",
    task_description: "таргетолог настраивает и запускает рекламу в социальных сетях. Его задача настроить рекламу так,\
     чтобы она максимально соответствовала нужной аудитории, для этого он использует многочисленные параметры таргетинга,\
      настраивает цели рекламной кампании в соцсетях и поисковых системах, назначает ставки для показов рекламных объявлений.",
    salary_value: "50-70 тыс. руб",
    count_vacancies: "317 вакансий",
    direction: "«Цифровые маркетинговые коммуникации»",
    link: "https://imguu.ru/dmc",
},

{
    title: "Спичрайтер",
    task: "Задача спичрайтера",
    task_description: "спичрайтер профессионально составляет тексты речей, выступлений официальных лиц, общественных деятелей\
     и предпринимателей. Такому специалисту необходимы совершенные знания в области русского языка, стилистики речи,\
      а также способность готовить тексты в соотвестие с повесткой и задачей выступления.",
    salary_value: "70-120 тыс. руб",
    count_vacancies: "19 вакансий",
   direction: "«Цифровые маркетинговые коммуникации»",
    link: "https://imguu.ru/dmc",
},

{
    title: "SMM-менеджер",
    task: "Задача SMM-менеджера",
    task_description: "SMM-менеджер отвечает за продвижение бизнеса в социальных сетях. В его обязанности входит управление\
     страницами бренда в социальных сетях, общение с подписчиками, настройка таргетированной рекламы.\
      Также он зачастую самостоятельно пишет тексты для публикаций и создает визуальный контент или может ставить\
       такие задачи копирайтеру, дизайнеру и фотографу.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "1536 вакансий",
    direction: "«Цифровые маркетинговые коммуникации»",
    link: "https://imguu.ru/dmc",
},
{
    title: "Бренд-стратег",
    task: "Задача бренд-стратега",
    task_description: "бренд-стратег — это человек, который отвечает за создание и развитие бренда с помощью различных\
     инструментов. Он чувствует рынок, понимает мотивы поведения людей, знает, как работают различные инструменты\
      продвижения — на основе этого предлагает эффективные стратегические решения для проекта.\ Стратег выявляет проблему\
       клиента, определяет задачи команды исполнителей, отслеживает динамику и результативность работы, корректирует план",
    salary_value: "60-80 тыс. руб",
    count_vacancies: "863 вакансий",
    direction: "«Бренд-менеджмент»",
    link: "https://imguu.ru/brandmanagement",
},

{
    title: "Бренд-менеджер",
    task: "Задача бренд-менеджера",
    task_description: "бренд-менеджер — это специалист, который отвечает за узнаваемость бренда. Он разрабатывает стратегии\
     донесения ценности и значимости продукта до покупателя, ищет нетривиальные решения и каналы для продвижения.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "1002 вакансий",
    direction: "«Бренд-менеджмент»",
    link: "https://imguu.ru/brandmanagement",
},

{
    title: "Influence-маркетолог",
    task: "Задача Influence-маркетолога",
    task_description: "Influence-маркетологи – это специалисты, которые находят таких публичных людей и привлекают их к\
     работе с конкретным брендом",
    salary_value: "60-80 тыс. руб",
    count_vacancies: "72 вакансий",
    direction: "«Бренд-менеджмент»",
    link: "https://imguu.ru/brandmanagement",
},

{
    title: "Event-менеджер",
    task: "Задача Event-менеджера",
    task_description: "ивент-менеджер – это человек, который занимается организацией различных праздничных мероприятий,\
     вечеринок для частных лиц или событий, деловых или корпоративных мероприятий, презентаций для организаций.\
      Любое событие имеет под собой какую-либо цель: усиление сплоченности коллектива, праздник или знаменательное событие,\
       улучшение имиджа компании или продукта.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "256 вакансий",
    direction: "«Бренд-менеджмент»",
    link: "https://imguu.ru/brandmanagement",
},

{
    title: "Специалист по управлению репутацией бренда",
    task: "Задача специалиста по управлению репутацией бренда",
    task_description: "специалист по управлению репутацией (менеджер по репутационному маркетингу) занимается созданием\
     и контролем репутации компаний и персон в Интернете. Он регулярно анализирует репутацию бренда и выстраивает\
      стратегию работы с ней, отслеживая изменения. Репутация существенно влияет на успех компаний гостиничного бизнеса\
       и туристического сектора, банков и многих других компаний.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "115 вакансий",
    direction: "«Бренд-менеджмент»",
    link: "https://imguu.ru/brandmanagement",
},

{
    title: "Категорийный менеджер",
    task: "Задача категорийного менеджера",
    task_description: "категорий менеджер зачастую отвечает за сбыт определенного сегмента продуктов из ассортимента\
     производителя. Он налаживает контакты с поставщиками, контролирует ассортимент, определяет ценовую политику,\
      участвует в разработке планов выкладки и продвижения товаров.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "908 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},

{
    title: "GR-менеджер",
    task: "Задача GR-менеджера",
    task_description: "GR-менеджер (от англ. government relations - взаимодействие с государством) ответственнен за налаживание\
     успешных и плодотворных связей коммерческих компании с органами государственной власти. Путем создания взаимовыгодного\
      партнерства с органами государственной власти и представителями общественных организаций GR-менеджеры способствуют\
       процветанию предприятия и его устойчивому развитию.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "95 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},

{
    title: "Медиапланер",
    task: "Задача медиапланера",
    task_description: "медиапланер – это специалист, составляющий оптимальные планы по размещению рекламы на разных медийных\
     площадках в соответсвии с целями рекламной кампании. Медиа-планер осуществляет планирование, оценку рекламной эффективности\
      различных рекламодателей и рекламных носителей, распределяет рекламный бюджет.",
    salary_value: "50-70  тыс. руб",
    count_vacancies: "37 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},

{
    title: "Аккаунт-менеджер",
    task: "Задача аккаунт-менеджера",
    task_description: "управляет процессом взаимодействия рекламного агентства и клиента. Зачастую руководит организационной\
     частью проекта со стороны агентства. Аккаунт-менеджер контактирует с заказчиком, составляет клиентский бриф, организует\
      встречи, ведет деловую переписку, выступает контактным лицом от имени коммуникационного агентства.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "1289 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},

{
    title: "Проджект-менеджер",
    task: "Задача проджект-менеджера",
    task_description: "проджект-менеджер, или менеджер проектов, отвечает за реализацию любых проектов, которые люди делают\
     сообща. Например, без проджекта в IT не запустить сайт, приложение или сервис. А в строительстве — не построить дом.\
      Если коротко: превращает хаос в порядок. Именно менеджер отвечает за весь проект — от встречи с клиентом и формулировки\
       задачи до сдачи и запуска.",
    salary_value: "60-95 тыс. руб",
    count_vacancies: "6498 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},
    {
    title: "Бизнес-девелопер",
    task: "Задача бизнес-девелопера ",
    task_description: "состоит в исследовании потенциала и перспектив целевого рынка: необходимо изучить бизнес-климат,\
     проанализировать тренды поведения потребителей, определить потенциал партнеров и поставщиков, емкость рынка, барьеры\
      входа в отрасль.",
    salary_value: "60-90 тыс. руб",
    count_vacancies: "908 вакансий",
    direction: "«Продвижение нового бизнеса»",
    link: "https://imguu.ru/newbusiness",
},
]
const Card = ({name, setStarName}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isNavigated, setIsNavigated] = useState(false);
    let object;
    cards.map(card => {
        if(card.title === name)
        {
            object = card;
        }
    })
    return (
        <div className="card-wrapper">
            <div className="card-contanier">
                <div className="card-close-button" onClick={() => setStarName(null)}>
                    <img src="/images/close.png" alt=""/>
                </div>
                <div className="content">
                    <div className="card-title">{object.title}</div>
                    <div className="card-task">{object.task}</div>
                    <div className="card-description">{object.task_description}</div>
                    <div className="card-salary-title">Средняя зарплата выпускника в Москве и МО</div>
                    <div className="card-salary">{object.salary_value}</div>
                    <div className="card-version">*по версии JobFilter.ru на 2022 год</div>
                    <div className="card-demand-title">Востребованность в Москве и МО:</div>
                    <div className="card-job-vacancy">{object.count_vacancies}</div>
                    <div className="card-version">*по версии hh.ru на апрель 2023 года</div>
                    <div className="card-programs">{`Подробнее о программах обучения профессии ${object.title}`}</div>
                    <div
                        className={`card-link ${isClicked ? 'clicked' : isNavigated ? 'navigated' : ''}`}
                        onMouseEnter={() => setIsNavigated(true)}
                        onMouseLeave={() => setIsNavigated(false)}
                    >
                        <div className="direction-link">
                            <a href={object.link} target={"_blank"}
                               onClick={() => setIsClicked(true)}>{object.direction}</a>
                            <img src="/images/contacts/arrow.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;

