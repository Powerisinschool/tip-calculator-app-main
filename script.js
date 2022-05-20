window.onload = () => {
    let tips = document.querySelectorAll('.input-choice');
    let customTip = document.querySelector('input#custom-tip');

    const updateTip = (e) => {
        let bill = document.querySelector('input#bill').value;
        let tipElement = document.querySelector('.input-choice.active');
        let peopleNumber = document.querySelector('input#num-people').value;
        let tip = tipElement ? parseInt(tipElement.textContent) : customTip.value;
        document.querySelector('#person-tip').textContent = (((tip / 100) * bill) / (peopleNumber ? peopleNumber : 1)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.querySelector('#total-tip').textContent = ((tip / 100) * bill).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    updateTip();

    document.addEventListener('keydown', updateTip);

    customTip.addEventListener('change', () => {
        document.querySelector('.input-choice.active') ? document.querySelector('.input-choice.active').classList.remove('active') : null;
    })

    document.querySelectorAll('input').forEach((input) => {
        input.addEventListener('change', updateTip);
    });
    
    tips.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelector('.input-choice.active') ? document.querySelector('.input-choice.active').classList.remove('active') : null;
            element.classList.add('active');
            updateTip();
        });
    });
}