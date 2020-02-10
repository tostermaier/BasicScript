const interpreter = {

    init: function(){

    },

    interpretLines : function(tokenLines){
        console.log("Tokens and lines",tokenLines)

        for(let i = 0; i<tokenLines.length;i++){
          this.executeLine( this.interpretLine(tokenLines[i]))
        }
    },

    interpretLine : function(tokenLine){
        return this.createExectionLine(tokenLine);
    },
    /**
     * create a array of execution information
     */
    createExectionLine:function (executionLine){

        let executionTree = [];
        let variableStore = [];

        //create operation
        for(let i = 0; i<executionLine.length;i++){
            let obj
            switch(executionLine[i] ){
                case "+":
                    var val1 = variableStore[i-1]==null? new VariableObject(null,"exectuionVar_"+(i-1),executionLine[i-1]) : variableStore[i-1]
                    var val2 = variableStore[i+1]==null? new VariableObject(null,"exectuionVar_"+(i+1),executionLine[i+1]) : variableStore[i+1]
                    obj = new AdditionOperationObject([val1,val2])
                    executionTree[i] = obj
                    break;
                case "-":

                    break;
                case "*":
                    var val1 =executionTree[i-1]==null? new VariableObject(null,"exectuionVar_"+(i-1),executionLine[i-1]) : executionTree[i-1]
                    var val2 = executionTree[i+1]==null? new VariableObject(null,"exectuionVar_"+(i+1),executionLine[i+1]) : executionTree[i+1]
                    obj =new MultiplicationOperationObject([val1,val2])
                    executionTree[i] = obj
                    break;

                case "print":

                    obj =new PrintOperationObject()
                    obj.createStatment(executionLine.slice(i+1,executionLine.length-1))
                    executionTree[i] = obj

                    break;

                default:
                    if(variableStore[i] == null){
                        obj = new VariableObject(null,"exectuionVar_"+i,executionLine[i])
                        variableStore[i] = obj
                    }
                    break;
            }


        }

        return executionTree

    },

    executeLine:function (executionLine) {

        let allExecutionDone = false;

        let orderExDone = false;

        for(let i = 0; i < executionLine.length; i++){

            if(executionLine[i] != null){

                executionLine[i].runOperation()

            } else{

            }
        }

    },

    getInlineStatements: function (statements) {
        let inGroup = false

    }
};