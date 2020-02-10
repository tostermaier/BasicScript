const tokenizer = {

    createTokensForLines: function(splittedLines){
        let tokensLines = new Map();
        for(var i = 0; i<splittedLines.length; i++){
            if(splittedLines[i]!=null){
                tokensLines.set(i,this.createTokensFromLine(splittedLines[i]));
            }
        }
        return tokensLines;
    },

    createTokensFromLine: function (splittedLine) {
        let currentStackValue = '';
        let stackValues = [];

        let curStackValueIndex = 0;
        for(let i = 0; i<splittedLine.length; i++){
            if(splittedLine[i]!= ' '){

                if(this.parseOperator(splittedLine[i])==true){
                    if(currentStackValue != null){
                        stackValues.push(currentStackValue)
                    }

                    currentStackValue = '';
                    stackValues.push(splittedLine[i])

                }
                else {
                    currentStackValue += splittedLine[i];
                }
            }
            else{

               if(currentStackValue!='') {
                    stackValues.push(currentStackValue)
                    currentStackValue = '';
                }
                if(splittedLine[i] == " "){
                    stackValues.push(" ")
                    currentStackValue = '';
                }
                console.log(currentStackValue)
            }
        }
        stackValues.push(currentStackValue)
        console.log(stackValues)

        return stackValues;
    },

    createTokenGroup: function(tokenLine){
        let tokenLineGroup = [];


        let inGroup = false;

        let tokenGroup =[];
        for(let i = 0; i < tokenLine.length; i++){
           if( tokenLine[i] == "("){
                inGroup = true;
           }

           if(tokenLine[i] == ")"){

           }

        }
    },

    parseOperator:function (op,values){

        let operation = false;
        switch(op){
            case "+":
                operation =true;
                break;
            case "-":
                operation = true;
                break;
            case "*":
                operation = true;
                break;
            case "=":
                operation = true;
                break;
             case "(":
                operation = true;
                break;
            case ")":
                operation = true;
                break;
            case '"':
                operation = true;
                break;
            default :
                operation = false;
                break;
        }

        return operation;
    },
    parseKeyWords : function (word) {
        let keyword = false;
        switch(word){
            case "print":
                keyword = true;
                break;
            case "int":
                keyword = true;
                break;
            case "float":
                keyword = true;
                break;
            case "string":
                keyword = true;
                break;
            case "bool":
                keyword = true;
                break;
            default:
                keyword = false;
                break;
        }
        return keyword;
    }
};