// Функция для кнопки "эчпочмак"
function showMessage() {
    const message = "Поздравляю ты эчпочмак!";
    document.getElementById("demo").innerHTML = message;
    
    // Добавляем эффект для кнопки
    const btn = Event.target;
    btn.style.backgroundColor = "#27ae60";
    btn.textContent = "Красавчик!";
    
    // Возвращаем кнопку
    setTimeout(() => {
        btn.style.backgroundColor = "#3498db";
        btn.textContent = "Нажми, чтобы стать эчпочмаком";
    }, 2000);
}