const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');
const del = document.getElementById('del');

calculatorContainer.addEventListener('click' , (e) =>{
    if(e.target.nodeName === "BUTTON"){
        switch (e.target.textContent){
            case 'C':
                clear();break;
            case del.textContent:
                deleteOneValue();break;
            case '=':
                evaluate();break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
})

function clear(){
    displayArea.textContent = '';
}

function addToDisplayArea(e){
    displayArea.textContent += e;
}

function deleteOneValue(){
    displayArea.textContent = displayArea.textContent.substring(0,displayArea.textContent.length - 1);
}

function evaluate(){
    try{
        let sanitizedExpression = displayArea.textContent
            .replaceAll('x', '*')
            .replaceAll('÷', '/');
        let calc = math.evaluate(sanitizedExpression);
        displayArea.textContent = calc;
    }catch (error){
        displayArea.textContent = 'Invalid Operation';
        console.log(error);
    }
}