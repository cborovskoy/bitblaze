# Тестовое задание

<p>Сервер принимает POST запрос на <code>/api/v1/request</code>, payload запроса это JSON <code>{wait: &lt;n&gt;, answer: &lt;answ&gt;}</code>, где <code>n</code> — количество секунд ожидания, <code>answer</code> — ответ, который должен вернуть сервер.</p>

<p>Сервер валидирует входные параметры:</p>
<ul>
    <li>Все поля обязательны</li>
    <li><code>wait &gt;= 0</code></li>
    <li><code>len(answer) &gt;= 3</code></li>
</ul>

<p>Ждет <code>&lt;n&gt;</code> секунд</p>

<p>Возвращает json <code>{answer: &lt;answ&gt;}</code> (в зависимости от payload и пункта 1.)</p>

<h2>Условия:</h2>
<ul>
    <li>Запросы от нескольких клиентов не блокируют друг друга</li>
    <li>Использовать NestJS</li>
    <li>Результат выполнения - ссылка на репо в Gitlab/Github</li>
</ul>
