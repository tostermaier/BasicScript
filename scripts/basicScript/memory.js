const memory = {

    error : { errorType : null, errorMessage: null },
    variableMemory : new Map(),
    lineMemory : new Map(),
    currentLine : 0,

    registerVariable :function (variable) {
        console.log("register variable",variable)
       if( this.variableMemory.has(variable.name)){
          this.variableRegistrationError();
       } else {
           this.variableMemory.set(variable.name,variable)
       }
    },

    variableRegistrationError :function () {
        errorHandler.throwError({type: "variable define error",message:"error in defining new variable. line: "+ memory.currentLine})
    },

    clearMemory :function () {
        this.variableMemory.clear();
    }
}