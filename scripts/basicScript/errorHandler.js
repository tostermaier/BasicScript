const errorHandler = {

    errors : [],

    throwError : function (err) {
        this.errors.push(err);
        basicConsole.writeToConsole(err.message,"red")

    }
};