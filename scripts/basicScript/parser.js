const parser = {

    lines : ["10 20*10", "20 "],
    executionLineStack : new Map(),

    parseLines:function (lines){

        let linesMap = [];
        for(let i = 0; i<lines.length; i++){
            var parsedLine = this.parseLine(lines[i]);
            linesMap[parsedLine.lineNumber]= parsedLine.line
        }
        return linesMap;
    },

    parseLine:function (line){
        line = this.splitLine(line);
        let lineNumber = this.parseLineNumber(line);

        return {lineNumber, line}
    },

    splitLine:function (line){
        return line.split("");
    },

    parseLineNumber:function (splittedLines){
        let lineNumber = "";
        let lineNumberCounter = 0;

        for(let i = 0; i< splittedLines.length; i++){
            if(splittedLines[i]!=" "){
                lineNumber+=splittedLines[i];
                lineNumberCounter++;
            }
            else{
                break;
            }
        }

        lineNumber = Number.parseInt(lineNumber)
        splittedLines.splice(0,lineNumberCounter)

        return lineNumber;
    },

    /**
     * checks if line number is a positive integer
     */
    lineNumberValidation:function (lineNumber){
        let number =  Number.parseInt(lineNumber);
        if(Number.isNaN(number)){

        }
    },


}
