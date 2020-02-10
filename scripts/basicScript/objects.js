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

class int{
    name = null;
    value = 0;

    setValue(val){
        this.val = Number.isInteger(val) ? val : ()=>{

            return 0;
        }


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
        console.log(this.operationResult)
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
        console.log(this.operationResult)
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
        console.log("outline",splitted)
        if(splitted.length == 1){

            for(var e of outLine){
                console.log(e)
                if(e != "" && e != " "){
                    console.error("error",e, memory.currentLine)
                    errorHandler.throwError({type: "print error",message:"error in parsing print input. line: "+ memory.currentLine})
                    this.canRun = false;
                }
            }
            this.values = splitted
        }
        else{

                console.error("error",e, memory.currentLine)
                errorHandler.throwError({type: "print error",message:"error in parsing print input. line: "+ memory.currentLine})
                this.canRun = false;

        }
    }



}