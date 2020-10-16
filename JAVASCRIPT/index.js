var expression = []
var exp=""

var operators = document.getElementsByClassName('operator')
var operands = document.getElementsByClassName('operand')
var execute = document.getElementById('execute')
var screen = document.getElementById('display')
var clear = document.getElementById('clear')
var back = document.getElementById('back')

back.addEventListener('click', function(event){
    expression.pop()
    makeExpression()
    show()
})


clear.addEventListener('click', function(event){
screen.innerText=""
expression=[]
})

for(var i=0;i<operators.length;i++) {
    operators[i].addEventListener('click', function(event){
        var data = this.innerText
        expression.push(data)
        makeExpression()
        show()
    })
}
for(var i=0;i<operands.length;i++) {
    operands[i].addEventListener('click', function(event){
        var data = this.innerText
        expression.push(data)
        makeExpression()
        show()
    })
}

execute.addEventListener('click',function(){
    try{
        var result=eval(exp)
        screen.innerText=""
        screen.innerText=result
        expression=[]
        expression.push(result)
    }catch{
        screen.innerText ="Error"
    }
})

function makeExpression() {
    if (expression.length <=0) return
        exp=expression[0]
        for(var i=1;i<expression.length;i++){
        exp=exp+expression[i]+""
    }
}

function show( ){
    screen.innerText=""
    screen.innerText=exp

}