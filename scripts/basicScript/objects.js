const executionObjects = {
    "+": (values) =>  new AdditionOperationObject(values),
    "*": (values) => new MultiplicationOperationObject(values),
    "-" : null,
    "print":(values) => new PrintOperationObject(values),
}



class OperationObject{
    values = []
    operationResult = null;
    operationDone  =false;
    constructor(values){
        this.values = values;
    }
    runOperation(){

    }
}

class VariableObject{
    type = null;
    name = null;
    value = null;

    constructor(type,name,value){
        this.type= type;
        this.name = name;
        this.value = value
    }

}

class IntObject extends OperationObject{
    name = null;
    value = 0;
    type = "int";

    createStatement(statements){

        let nameSet = false;
        let value =statements.join('').replace(/[" "]/g,"").split("=");

        let nameCheck, valueCheck;


        nameCheck =this.checkName(value)
        valueCheck =this.checkValue(value)

        if(nameCheck && valueCheck){
            memory.registerVariable(this)
        }

    }

    checkName(value){
        let done = false;
        if(value [0] != null && value [0].match(/\w+/g) != null && !value[0].match(/^([0-9])/g)){
            this.name =value[0].match(/\w+/g).join('')
            done = true;
        }
        else{
            console.log(value [0])
            this.intError();
        }

        return done;
    }

    checkValue(value){
        let val = value[1] != null ? value[1] : 0;
        let done = false;

        if(Number.parseInt(val) == val){
            this.value =Number.parseInt(val)
            done = true;
        }
        else{
            this.intError();
        }
        return done
    }

    intError(){
        errorHandler.throwError({type: "int error",message:"error in parsing int input. line: "+ memory.currentLine})
        this.canRun = false;
    }
}


class AdditionOperationObject extends OperationObject{

    constructor(values){
        super(values);
    }
    runOperation(){
        for(let i = 0; i < this.values.length; i++){
            this.operationResult += Number.parseInt(this.values[i].value);
        }
        this.operationDone = true;
       // console.log(this.operationResult)
    }

}

class MultiplicationOperationObject extends OperationObject{

    constructor(values){
        super(values);
    }
    runOperation(){

        if(this.values[0] != null && this.values[1] != null){
            this.operationResult  = Number.parseInt(this.values[0].value)*Number.parseInt(this.values[1].value);
        }

        this.operationDone = true;
    //    console.log(this.operationResult)
    }

}

class PrintOperationObject extends OperationObject{

    canRun = true;
    runOperation() {
        if(this.canRun == true) {
            basicConsole.writeToConsole(this.values)
        }
    }

    /**
     * TODO TOS improve implementation of print statement
     * @param statements
     */
    createStatment(statements){

        let value =statements.join('');
        let re = /\".*?\"/g;
        let splitted = value.match(re)
        let outLine = value.split(re)

        if(splitted == null){
            errorHandler.throwError({type: "print error",message:"error in parsing print input. line: "+ memory.currentLine})
        }

        if(splitted.length == 1){
            for(var e of outLine){
                if(e.match(/\w+/)  ){
                   this.printError()
                }
            }
            this.values = splitted
        }
        else{
            this.printError()
        }
    }

    printError(){
        errorHandler.throwError({type: "print error",message:"error in parsing print input. line: "+ memory.currentLine})
        this.canRun = false;
    }


}