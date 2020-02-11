const interpreter = {

    init: function(){

    },

    interpretLines : function(tokenLines){
        console.log("Tokens and lines",tokenLines)
        tokenLines.forEach((val,key)=>{
            memory.currentLine = key
            this.executeLine(key , this.interpretLine(val))

        });

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

                    obj.createStatment(executionLine.slice(i+1,executionLine.length))
                    executionTree[i] = obj;

                    break;

                case "int":

                        obj = new IntObject();
                        obj.createStatement(executionLine.slice(i+1,executionLine.length));
                        executionTree[i] = obj;
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

    executeLine:function (lineNum,executionLine) {

        //memory.currentLine = lineNum;
        console.log("linenum",  memory.currentLine,executionLine )
        let allExecutionDone = false;

        let orderExDone = false;

        for(let i = 0; i < executionLine.length; i++){
            if(executionLine[i] != null){

                executionLine[i].runOperation()

            } else{

            }
        }

    },


};